// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";
import { useMutation } from "react-query";

export interface ResetPasswordInputType {
    newPassword: string;
    confirmNewpassword: string;
}
async function changePassword(input: ResetPasswordInputType) {
    // return http.post(API_ENDPOINTS.ChangePassword, input);
    return input;
}
export const useResetPasswordMutation = () => {
    return useMutation(
        (input: ResetPasswordInputType) => changePassword(input),
        {
            onSuccess: (data) => {
                console.log(data, "ResetPassword success response");
            },
            onError: (data) => {
                console.log(data, "ResetPassword error response");
            },
        },
    );
};
