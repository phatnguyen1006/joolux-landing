import { Blog } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

type NewestBlogs = {
    data: Blog[];
};

export const fetchNewestBlogs = async () => {
    const { data } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.BLOG_NEWEST_BLOGS}`,
    );
    return { data: data as unknown as Blog[] };
};
export const useFetchNewestBlogsQuery = () => {
    return useQuery<NewestBlogs, Error>(
        [API_ENDPOINTS.BLOG_NEWEST_BLOGS],
        () => fetchNewestBlogs(),
        { keepPreviousData: true },
    );
};
