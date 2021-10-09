import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

type ArticleList = {
    data: any;
};

export const fetchArticles = async () => {
    const { data } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.ARTICLES}/all`,
    );
    return { data };
};
export const useGetArticlesQuery = () => {
    return useQuery<ArticleList, Error>(
        [API_ENDPOINTS.ARTICLES],
        () => fetchArticles(),
        {
            keepPreviousData: true,
        },
    );
};
