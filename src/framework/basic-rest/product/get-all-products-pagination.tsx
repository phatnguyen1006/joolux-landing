import { ProductsQueryOptionsType, Product, Filter } from "@framework/types";
import http from "@framework/utils/http";
// import shuffle from "lodash/shuffle";
import { useQuery } from "react-query";
import _ from "lodash";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
type PaginatedProducts = {
    products: Product[];
    pagination: {
        hasNextPage: number;
        hasPreviousPage: number;
        total: number;
        totalPage: number;
    };
    filter: Filter;
    favorites?: string[];
};

const fetchProducts = async (options: ProductsQueryOptionsType) => {
    const allParams = _.omitBy(options, _.isNil);
    const {
        data: { products, pagination, favorites },
    } = await http.get(
        `https://api.joolux-client.ml/client/products/get-overview`,
        {
            params: {
                page: options?.page || "1",
                ...allParams,
            },
        },
    );
    const { data: filter } = await http.get(
        `https://api.joolux-client.ml/client/products/get-new-filter`,
        {
            params: allParams,
        },
    );
    return {
        products,
        pagination,
        filter,
        favorites: favorites || [],
    };
};

const useProductsPaginationQuery = (
    options: ProductsQueryOptionsType,
    key: string,
) => {
    return useQuery<PaginatedProducts, Error>(
        [API_ENDPOINTS.PRODUCTS, key],
        () => fetchProducts(options),
        { keepPreviousData: true },
    );
};

export { useProductsPaginationQuery, fetchProducts };
