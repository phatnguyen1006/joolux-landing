// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useUI } from "@contexts/ui.context";
import http from "@framework/utils/http";
import { useMutation, useQueryClient } from "react-query";

export interface IFavoriteForm {
    product: string;
}
async function favoriteProduct(input: IFavoriteForm) {
    return await http.post(
        `https://api.joolux-client.ml${API_ENDPOINTS.FAVORITE}`,
        input,
    );
}

export const useFavoriteProductMutation = () => {
    const { favoriteData } = useUI();
    const queryClient = useQueryClient();
    return useMutation(
        async (input: IFavoriteForm) => await favoriteProduct(input),
        {
            onSuccess: async (data) => {
                if (favoriteData)
                    await queryClient.resetQueries({
                        active: true,
                    });
            },
            onError: (data) => {
                console.log(data, "FavoriteProduct error response");
            },
        },
    );
};
