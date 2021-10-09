import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
// import shuffle from "lodash/shuffle";
import Cookies from "js-cookie";
import { useQuery } from "react-query";

type PaginatedTotalPages = {
    totalPages: {
        totalPage: number;
    };
};

const fetchTotalPages = async () => {
    // const { data } = await http.get(API_ENDPOINTS.PRODUCTS);
    const { data: totalPages } = await http.get(
        "https://api.joolux-client.ml/client/products/pages",
    );
    Cookies.set("temp_total", totalPages?.totalPage, { secure: true });
    return {
        // mock: data2,
        totalPages,
    };
};

const useProductsTotalPages = () => {
    return useQuery<PaginatedTotalPages, Error>(
        [API_ENDPOINTS.PRODUCTS + "TOTAL_PAGES"],
        () => fetchTotalPages(),
        // { keepPreviousData: true, staleTime: 5000 },
    );
};

export { useProductsTotalPages, fetchTotalPages };
