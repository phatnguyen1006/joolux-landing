// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";
import { useMutation } from "react-query";

export interface IReviewFormValues {
    name: string;
    email: string;
    cookie: string;
    message: string;
    rating: number;
}
async function reviewProduct(input: IReviewFormValues) {
    // return http.post(API_ENDPOINTS.ChangeEmail, input);
    return input;
}

export const useReviewProductMutation = () => {
    return useMutation((input: IReviewFormValues) => reviewProduct(input), {
        onSuccess: (data) => {
            console.log(data, "ReviewProduct success response");
        },
        onError: (data) => {
            console.log(data, "ReviewProduct error response");
        },
    });
};
