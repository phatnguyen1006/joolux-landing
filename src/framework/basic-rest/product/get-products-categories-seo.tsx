import {
    ProductsQueryOptionsType,
    Product,
    Filter,
    CollectionBanner,
} from "@framework/types";
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
    seo?: CollectionBanner;
    filter: Filter;
    favorites?: string[];
};

const fetchProductsCategories = async (options: ProductsQueryOptionsType) => {
    const { category, ...restOptions } = options;
    const allParams = _.omitBy(restOptions, _.isNil);
    // const categoryMapping = category.replace(/[-]/g, "_");
    const {
        data: { products, pagination, favorites, seo },
    } = await http.get(
        `https://api.joolux-client.ml/client/products/get-overview?category=${category}&seo=true`,
        {
            params: {
                page: restOptions?.page || "1",
                ...allParams,
            },
        },
    );
    const { data: filter } = await http.get(
        `https://api.joolux-client.ml/client/products/get-new-filter?category=${category}`,
        {
            params: allParams,
        },
    );
    return {
        products,
        pagination,
        filter,
        seo: seo || {},
        favorites: favorites || [],
    };
};

const useProductsCategoriesPaginationQuery = (
    options: ProductsQueryOptionsType,
    key: string,
) => {
    return useQuery<PaginatedProducts, Error>(
        [API_ENDPOINTS.PRODUCTS, key],
        () => fetchProductsCategories(options),
        { keepPreviousData: true },
    );
};

export { useProductsCategoriesPaginationQuery, fetchProductsCategories };
