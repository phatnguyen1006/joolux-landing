import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "react-query";
import { useFavoriteProductMutation } from "@framework/product/use-favorite-product";

export interface GoogleAuthInputType {
    tokenId: string;
}
export interface LoginResponseType {
    accessToken?: string;
    refreshToken?: string;
}
async function googleAuth(
    input: GoogleAuthInputType,
): Promise<LoginResponseType> {
    const {
        data: { accessToken, refreshToken },
    } = await http.post(
        `https://api.joolux-client.ml${API_ENDPOINTS.GOOGLE_AUTH}`,
        input,
    );
    return {
        accessToken,
        refreshToken,
    };
}
export const useGoogleAuthMutation = () => {
    const { authorize, closeModal, favoriteData, setFavoriteData } = useUI();
    const { mutate: favoriteProduct } = useFavoriteProductMutation();
    const queryClient = useQueryClient();
    return useMutation<LoginResponseType, Error, GoogleAuthInputType>(
        async (input: GoogleAuthInputType) => googleAuth(input),
        {
            onSuccess: async (data: LoginResponseType) => {
                toast("Đăng nhập Google thành công", {
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
                toast("Có lỗi đăng nhập với Google", {
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
