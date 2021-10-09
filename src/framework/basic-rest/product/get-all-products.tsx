import { ProductsQueryOptionsType, Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
// import shuffle from "lodash/shuffle";
import { useInfiniteQuery } from "react-query";

type PaginatedProducts = {
    data: Product[];
    paginatorInfo: any;
};

const fetchProducts = async ({ queryKey }: any) => {
    const [_key, _params] = queryKey;
    const { data } = await http.get(API_ENDPOINTS.PRODUCTS);
    return {
        data,
        paginatorInfo: {
            nextPageUrl: "",
        },
    };
};

const useProductsQuery = (options: ProductsQueryOptionsType) => {
    return useInfiniteQuery<PaginatedProducts, Error>(
        [API_ENDPOINTS.PRODUCTS, options],
        fetchProducts,
        {
            getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
        },
    );
};

export { useProductsQuery, fetchProducts };
