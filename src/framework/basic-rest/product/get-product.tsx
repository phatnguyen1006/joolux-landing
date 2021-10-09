import { Product } from "@framework/types";
import http from "@framework/utils/http";
// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
interface IProductDetails {
    product: Product;
    isFavorite: boolean;
}
export const fetchProduct = async (id: string) => {
    // const { data } = await http.get(`${API_ENDPOINTS.PRODUCT}`);
    const {
        data: { product, isFavorite },
    } = await http.get(
        `https://api.joolux-client.ml/client/products/information?id=${id}`,
    );
    return {
        product,
        isFavorite,
    };
};

export const useProductQuery = (slug: string) => {
    return useQuery<IProductDetails, Error>([slug], () => fetchProduct(slug), {
        keepPreviousData: true,
        // staleTime: 1000,
        // refetchOnMount: "always",
    });
};
