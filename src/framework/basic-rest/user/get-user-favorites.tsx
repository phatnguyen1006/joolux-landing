import { ProductsQueryOptionsType, Product, Filter } from "@framework/types";
import http from "@framework/utils/http";
// import shuffle from "lodash/shuffle";
import { useQuery } from "react-query";
import _ from "lodash";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
type PaginatedProducts = {
    wishList: Product[];
    pagination: {
        hasNextPage: number;
        hasPreviousPage: number;
        total: number;
        totalPage: number;
    };
};

const fetchUserFavorites = async (options: ProductsQueryOptionsType) => {
    const allParams = _.omitBy(options, _.isNil);
    const {
        data: { wishList, pagination },
    } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.GET_USER_FAVORITES}`,
        {
            params: {
                page: options?.page || "1",
                ...allParams,
            },
        },
    );
    return {
        wishList,
        pagination,
    };
};

const useGetUserFavorites = (
    options: ProductsQueryOptionsType,
    key: string,
) => {
    return useQuery<PaginatedProducts, Error>(
        [API_ENDPOINTS.GET_USER_FAVORITES, key],
        () => fetchUserFavorites(options),
        { keepPreviousData: true },
    );
};

export { useGetUserFavorites, fetchUserFavorites };
