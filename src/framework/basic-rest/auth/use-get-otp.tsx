import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { AxiosError } from "axios";

export interface GetOtpInputType {
    recaptcha?: string;
    phone?: string;
}
export interface GetOtpResponseType {
    sessionInfo?: string;
}
async function getOtp(input: GetOtpInputType): Promise<GetOtpResponseType> {
    const {
        data: { sessionInfo },
    } = await http.post(
        `https://api.joolux-client.ml${API_ENDPOINTS.GET_OTP}`,
        input,
    );
    return {
        // token: `${input.email}.${input.remember_me}`
        //     .split("")
        //     .reverse()
        //     .join(""),
        // accessToken: "",
        // refreshToken: "",
        sessionInfo,
    };
}
export const useGetOtpMutation = () => {
    // return useMutation<any, Error, LoginInputType>(
    return useMutation<GetOtpResponseType, AxiosError, GetOtpInputType>(
        async (input: GetOtpInputType) => getOtp(input),
        {
            onSuccess: (data: GetOtpResponseType) => {
                console.log(data, "GET otp success data");
                localStorage.setItem("session_otp", data.sessionInfo);
            },
            onError: (error: AxiosError) => {
                console.log(
                    error.response.data.message[0].message,
                    "GET OTP error",
                );
                if (
                    error.response.data.message[0].message ===
                    "INVALID_PHONE_NUMBER : Invalid format."
                ) {
                    toast("Số diện thoại không hợp lệ", {
                        type: "dark",
                        progressClassName: "fancy-progress-bar",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                } else {
                    toast("Có lỗi khi lấy mã OTP", {
                        type: "dark",
                        progressClassName: "fancy-progress-bar",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                    });
                }
            },
        },
    );
};
