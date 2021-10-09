import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

type AllBlogCategories = {
    data: {
        id: string;
        name: string;
        total: number;
        slug: string;
    }[];
};

export const fetchBlogCategories = async () => {
    const { data } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.BLOG_CATEGORIES}`,
    );
    return { data };
};
export const useGetAllBlogCategoriesQuery = () => {
    return useQuery<AllBlogCategories, Error>(
        [API_ENDPOINTS.BLOG_CATEGORIES],
        () => fetchBlogCategories(),
        { keepPreviousData: true },
    );
};
