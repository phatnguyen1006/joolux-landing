import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
// import Router from "next/router";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "react-query";
import { useFavoriteProductMutation } from "@framework/product/use-favorite-product";

export interface LoginInputType {
    email: string;
    password: string;
    remember_me: boolean;
}
export interface LoginResponseType {
    accessToken?: string;
    refreshToken?: string;
}
async function login(input: LoginInputType): Promise<LoginResponseType> {
    const {
        data: { accessToken, refreshToken },
    } = await http.post(
        `https://api.joolux-client.ml${API_ENDPOINTS.LOGIN}`,
        input,
    );
    return {
        // token: `${input.email}.${input.remember_me}`
        //     .split("")
        //     .reverse()
        //     .join(""),
        // accessToken: "",
        // refreshToken: "",
        accessToken,
        refreshToken,
    };
}
export const useLoginMutation = () => {
    const { mutate: favoriteProduct } = useFavoriteProductMutation();
    const { authorize, closeModal, favoriteData, setFavoriteData } = useUI();
    const queryClient = useQueryClient();
    // return useMutation<any, Error, LoginInputType>(
    return useMutation<LoginResponseType, Error, LoginInputType>(
        async (input: LoginInputType) => login(input),
        {
            onSuccess: async (data: LoginResponseType) => {
                toast("Đăng nhập thành công", {
                    type: "dark",
                    progressClassName: "fancy-progress-bar",
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                Cookies.set("access_token", data.accessToken);
                Cookies.set("refresh_token", data.refreshToken);
                await queryClient.resetQueries({
                    active: true,
                });
                authorize();
                closeModal();
                if (favoriteData) {
                    favoriteProduct({ product: favoriteData });
                    setFavoriteData("");
                }
            },
            onError: (error: Error) => {
                console.log(error.message, "Sign In error");
                toast("Có lỗi đăng nhập", {
                    type: "dark",
                    progressClassName: "fancy-progress-bar",
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            },
        },
    );
};
