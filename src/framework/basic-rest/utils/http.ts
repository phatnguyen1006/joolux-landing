import axios from "axios";
import { getAccessToken, getRefreshToken } from "./get-token";
import Cookies from "js-cookie";
import Router from "next/router";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";

const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
    timeout: 30000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

// Change request data/error here
http.interceptors.request.use(
    (config) => {
        const accessToken = getAccessToken();
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${accessToken ? accessToken : ""}`,
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);
const createAxiosResponseInterceptor = () => {
    const refreshInterceptor = http.interceptors.response.use(
        (res) => {
            return res;
        },
        async (err) => {
            const originalConfig = err.config;

            if (
                originalConfig.url ===
                    `https://api.joolux-client.ml${API_ENDPOINTS.GET_ACCESS_TOKEN}` &&
                err.response.status === 401
            ) {
                return Promise.reject(err).catch(() => {
                    Router.replace("/?logoutExpired=true");
                    Cookies.remove("refresh_token");
                    Cookies.remove("access_token");
                });
            }
            // Access Token was expired
            if (err.response.status === 401) {
                try {
                    axios.interceptors.response.eject(refreshInterceptor);
                    const refreshToken = getRefreshToken();
                    const rs = await axios.get(
                        `https://api.joolux-client.ml${API_ENDPOINTS.GET_ACCESS_TOKEN}`,
                        {
                            headers: {
                                Authorization: `Bearer ${
                                    refreshToken ? refreshToken : ""
                                }`,
                            },
                            //   refreshToken: http.getLocalRefreshToken(),
                        },
                    );
                    const { token: accessToken } = rs.data;
                    Cookies.set("access_token", accessToken);
                    return http(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }

            return Promise.reject(err);
        },
    );
};

createAxiosResponseInterceptor();
export default http;
