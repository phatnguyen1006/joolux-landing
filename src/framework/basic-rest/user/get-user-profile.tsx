import { UserProfile } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
// import shuffle from "lodash/shuffle";
import { useQuery } from "react-query";

const fetchUserProfile = async () => {
    // const { data } = await http.get(API_ENDPOINTS.PRODUCTS);
    const { data } = await http.get(
        `https://api.joolux-client.ml${API_ENDPOINTS.GET_USER_PROFILE}`,
    );
    return {
        userProfile: data as UserProfile,
    };
};

const useUserProfileQuery = () => {
    return useQuery<{ userProfile: UserProfile }, Error>(
        [API_ENDPOINTS.GET_USER_PROFILE],
        fetchUserProfile,
    );
};

export { useUserProfileQuery, fetchUserProfile };
