import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

type MenuBanners = {
    data: {
        id: number;
        title: string;
        slug: string;
        image: {
            mobile: {
                url: string;
                width: number;
                height: number;
            };
            desktop: {
                url: string;
                width: number;
                height: number;
            };
        };
    }[];
};

export const fetchMenuBanners = async () => {
    const { data } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.HOMEPAGE_BANNER}?type=menu`,
    );
    return { data };
};
export const useGetMenuBanners = () => {
    return useQuery<MenuBanners, Error>(
        [API_ENDPOINTS.HOMEPAGE_BANNER],
        () => fetchMenuBanners(),
        {
            keepPreviousData: true,
        },
    );
};
