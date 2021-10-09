import { Blog } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

type PaginatedBlogs = {
    blogs: Blog[];
    pagination: {
        hasNextPage: number;
        hasPreviousPage: number;
        total: number;
        totalPage: number;
    };
    seo?: { name: string; slug: string; description: string; image: string };
};

export const fetchBlogs = async (options) => {
    const {
        data: { blogs, pagination, seo },
    } = await http.get(`https://api.joolux-client.ml${API_ENDPOINTS.BLOG}`, {
        params: {
            page: options?.page || "1",
            category: options?.blogCategory,
            seo: true,
        },
    });
    return { blogs, pagination, seo: seo || {} };
};
export const useGetBlogsQuery = (options) => {
    return useQuery<PaginatedBlogs, Error>(
        [API_ENDPOINTS.BLOG, options],
        () => fetchBlogs(options),
        { keepPreviousData: true },
    );
};
