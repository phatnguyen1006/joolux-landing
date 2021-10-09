import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
import { Article } from "@framework/types";

type ArticleDetails = {
    data: Article;
};

export const fetchArticleDetails = async (slug) => {
    const { data } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.ARTICLES}?slug=${slug}`,
    );
    return { data };
};
export const useFetchArticleDetailsQuery = (slug) => {
    return useQuery<ArticleDetails, Error>(
        [API_ENDPOINTS.ARTICLES, slug],
        () => fetchArticleDetails(slug),
        {
            keepPreviousData: true,
        },
    );
};
