import { QueryOptionsType, Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useQuery } from "react-query";

export const fetchSearchedProducts = async (text) => {
    const { data } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.SEARCH}?search=${text}`,
    );
    return data;
};
export const useSearchQuery = (options: QueryOptionsType) => {
    return useQuery<Product[], Error>(
        [API_ENDPOINTS.SEARCH, options.text],
        () => fetchSearchedProducts(options.text),
        {
            enabled: !!options.text,
        },
    );
};
