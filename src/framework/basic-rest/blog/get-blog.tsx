import { Blog } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

type PaginatedBlogs = {
    currentBlog: Blog;
    nextBlog: Blog;
    prevBlog: Blog;
    seo?: {
        name: string;
        slug: string;
        description: string;
        image: string;
    };
};

export const fetchBlog = async (_id: string) => {
    const {
        data: { currentBlog, nextBlog, prevBlog, seo },
    } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.BLOG}?slug=${_id}&seo=true`,
    );
    return { currentBlog, nextBlog, prevBlog, seo };
};
export const useBlogQuery = (id: string) => {
    return useQuery<PaginatedBlogs, Error>([API_ENDPOINTS.BLOG, id], () =>
        fetchBlog(id),
    );
};
