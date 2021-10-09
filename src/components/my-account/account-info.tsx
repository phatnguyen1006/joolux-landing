/* eslint-disable no-useless-escape */
import { useEffect } from "react";
import { Button } from "@components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useUserProfileQuery } from "@framework/user/get-user-profile";
import SearchResultLoader from "@components/ui/loaders/search-result-loader";
const AccountInfo: React.FC<{ setPage: any; setDetails: any }> = ({
    setPage,
    setDetails,
}) => {
    const { t } = useTranslation();
    const { data, error, isLoading } = useUserProfileQuery();
    useEffect(() => {
        if (!isLoading) setDetails(data?.userProfile);
    }, [isLoading]);
    return (
        <motion.div
            layout
            initial="from"
            animate="to"
            exit="from"
            //@ts-ignore
            // variants={fadeInTop(0.35)}
            className={`w-full flex flex-col`}
        >
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                {t("common:text-account-details")}
            </h2>
            {error && <p>{error.message}</p>}

            <div className="w-full mx-auto flex flex-col justify-center ">
                <div className="flex flex-col space-y-4 sm:space-y-5">
                    {isLoading ? (
                        <SearchResultLoader />
                    ) : (
                        <>
                            <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                                <div className="w-full sm:w-1/2 mr-3">
                                    <div
                                        className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer border-solid border-b border-[#101010] pb-2 mb-3`}
                                    >
                                        {t("forms:label-first-name")}
                                    </div>
                                    <p>{data?.userProfile?.firstname}</p>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div
                                        className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer border-solid border-b border-[#101010] pb-2 mb-3`}
                                    >
                                        {t("forms:label-last-name")}
                                    </div>
                                    <p>{data?.userProfile?.lastname}</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                                <div className="w-full sm:w-1/2 mr-3">
                                    <div
                                        className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer border-solid border-b border-[#101010] pb-2 mb-3`}
                                    >
                                        {t("forms:label-phone")}
                                    </div>
                                    <p>{data?.userProfile?.phone}</p>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div
                                        className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer border-solid border-b border-[#101010] pb-2 mb-3`}
                                    >
                                        {t("Địa chỉ")}
                                    </div>
                                    <p>{`${
                                        data?.userProfile?.address
                                            ? data.userProfile?.address + " "
                                            : ""
                                    }${
                                        data?.userProfile?.district
                                            ? data.userProfile?.district + " "
                                            : ""
                                    }${
                                        data?.userProfile?.city
                                            ? data.userProfile.city + " "
                                            : ""
                                    }`}</p>
                                </div>
                            </div>
                            {/* <div className="relative flex flex-col"> */}
                            <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                                <div className="w-full sm:w-1/2 mr-3">
                                    <div
                                        className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer border-solid border-b border-[#101010] pb-2 mb-3`}
                                    >
                                        {t("common:text-gender")}
                                    </div>
                                    <p>{data?.userProfile?.gender}</p>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div
                                        className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer border-solid border-b border-[#101010] pb-2 mb-3`}
                                    >
                                        {t("forms:label-email-star")}
                                    </div>
                                    <p>{data?.userProfile?.email}</p>
                                </div>
                            </div>
                            <div className="relative">
                                <Button
                                    type="button"
                                    onClick={() => {
                                        setPage(2);
                                    }}
                                    variant="jl"
                                    className="h-12 mt-3 w-full sm:w-40 mr-3"
                                >
                                    Sửa thông tin
                                </Button>
                                {data?.userProfile.provider === "normal" && (
                                    <Button
                                        type="button"
                                        onClick={() => {
                                            setPage(3);
                                        }}
                                        variant="jl"
                                        className="h-12 mt-3 w-full sm:w-40"
                                    >
                                        Đổi mật khẩu
                                    </Button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default AccountInfo;
