import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

type Brands = {
    data: {
        id: number;
        letters: string;
        brands: string[];
    }[];
};

export const fetchBrands = async () => {
    const { data } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.BRANDS}`,
    );
    return { data };
};
export const useGetBrandsQuery = () => {
    return useQuery<Brands, Error>([API_ENDPOINTS.BLOG], () => fetchBrands(), {
        keepPreviousData: true,
    });
};
