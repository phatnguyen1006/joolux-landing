import { fetchNewestBlogs } from "@framework/blog/get-newest-blogs";
import {
    Blog,
    CollectionBanner,
    HomepageBanner,
    PopupBanner,
    Product,
} from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useQuery } from "react-query";

type NewestProducts = {
    newestProducts: Product[];
    homepageBanner: HomepageBanner[];
    collectionBanner: CollectionBanner[];
    popupBanner: PopupBanner;
    blogs: Blog[];
};

const fetchNewestProducts = async () => {
    const { data: newestProducts } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS}`,
    );
    const { data: homepageBanner } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.HOMEPAGE_BANNER}`,
    );
    const { data: collectionBanner } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.COLLECTION_BANNER}`,
    );
    const { data: popupBanner } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.POPUP_BANNER}`,
    );
    const data = await fetchNewestBlogs();
    return {
        newestProducts,
        homepageBanner,
        collectionBanner,
        popupBanner,
        blogs: data?.data,
    };
};

const useFetchNewestProductsQuery = () => {
    return useQuery<NewestProducts, Error>(
        [API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS],
        fetchNewestProducts,
    );
};

export { useFetchNewestProductsQuery, fetchNewestProducts };
