import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { useWindowSize } from "@utils/use-window-size";
import { UserProfile } from "@framework/types";

async function updateUser(input: UserProfile) {
    return http.put(
        `https://api.joolux-client.ml${API_ENDPOINTS.UPDATE_USER_PROFILE}`,
        input,
    );
}

export const useUpdateUserMutation = () => {
    const { width } = useWindowSize();
    const queryClient = useQueryClient();
    return useMutation((input: UserProfile) => updateUser(input), {
        onSuccess: async () => {
            toast("Cập nhật thông tin thành công", {
                type: "dark",
                progressClassName: "fancy-progress-bar",
                position: width > 768 ? "bottom-right" : "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            await queryClient.resetQueries({ active: true });
        },
        onError: () => {
            toast("Cập nhật thông tin không thành công", {
                type: "dark",
                progressClassName: "fancy-progress-bar",
                position: width > 768 ? "bottom-right" : "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        },
    });
};
