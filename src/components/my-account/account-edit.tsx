/* eslint-disable no-useless-escape */
import { useState } from "react";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeInTop } from "@utils/motion/fade-in-top";
import { useUpdateUserMutation } from "@framework/user/use-update-user";
import { city, districts } from "@public/api/geo-city-vn";
import { RadioBox } from "@components/ui/radiobox";
import { useTranslation } from "next-i18next";
import { UserProfile } from "@framework/types";
const AccountEdit: React.FC<{ setPage: any; details: UserProfile }> = ({
    setPage,
    details,
}) => {
    const { mutate: updateUser, isLoading, isError } = useUpdateUserMutation();
    const defaultDistrcitIndex = city.findIndex(
        (index) => index === details.city,
    );
    const [districtIndex, setDistrictIndex] = useState(
        defaultDistrcitIndex === -1 ? null : defaultDistrcitIndex,
    );
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm<UserProfile>({
        defaultValues: details,
    });
    function onSubmit(input: UserProfile) {
        if (isDirty) {
            updateUser(input);
            if (!isLoading && !isError) {
                setPage(1);
                window.scrollTo({ top: 0 });
            }
        } else {
            setPage(1);
            window.scrollTo({ top: 0 });
        }
    }
    const handleOnChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDistrictIndex(e.target.selectedIndex - 1);
    };
    return (
        <motion.div
            layout
            initial="from"
            animate="to"
            exit="from"
            //@ts-ignore
            variants={fadeInTop(0.35)}
            className={`w-full flex flex-col`}
        >
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                {t("common:text-account-details")}
            </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full mx-auto flex flex-col justify-center "
                noValidate
            >
                <div className="flex flex-col space-y-4 sm:space-y-5">
                    <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                        <Input
                            labelClass="border-solid border-b border-[#101010] pb-2 mb-5"
                            labelKey="forms:label-first-name"
                            {...register("firstname")}
                            variant="jl"
                            className="w-full sm:w-1/2 pr-2"
                            errorKey={errors.firstname?.message}
                        />
                        <Input
                            labelClass="border-solid border-b border-[#101010] pb-2 mb-5"
                            labelKey="forms:label-last-name"
                            {...register("lastname")}
                            variant="jl"
                            className="w-full sm:w-1/2 pl-3"
                            errorKey={errors.lastname?.message}
                        />
                    </div>
                    <Input
                        labelClass="border-solid border-b border-[#101010] pb-2 mb-5"
                        labelKey="Địa chỉ"
                        {...register("address")}
                        variant="jl"
                        errorKey={errors.address?.message}
                    />
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full sm:w-1/2 px-4 mb-3">
                            <label className="step-form-element">
                                <div
                                    className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer border-solid border-b border-[#101010] pb-2 mb-3`}
                                >
                                    {" "}
                                    Thành phố{/* */} *
                                </div>
                                <div className="step-form-select-container">
                                    <select
                                        name="city"
                                        defaultValue=""
                                        autoComplete="nope"
                                        className={`step-form-select-box w-full border-solid border-b border-[#101010] ${
                                            errors.city?.message &&
                                            "border-red-600"
                                        }`}
                                        {...register("city")}
                                        onChange={(e) => {
                                            handleOnChangeSelect(e);
                                        }}
                                    >
                                        <option value="" disabled hidden>
                                            Chọn thành phố
                                        </option>
                                        {city.map((i) => {
                                            return (
                                                <option key={i} value={i}>
                                                    {i}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <div className="step-form-select-icon-wrapper">
                                        <span className="createIconSvgWrapper">
                                            <svg
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                strokeLinejoin="round"
                                                strokeMiterlimit="1.414"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMid meet"
                                                className="createIconSvg"
                                            >
                                                <path
                                                    d="M7.96889 10H16.0314C16.3022 10 16.4897 10.1354 16.5939 10.4062C16.6981 10.6562 16.6564 10.875 16.4689 11.0625L12.4376 15.0938C12.3126 15.2188 12.1668 15.2812 12.0001 15.2812C11.8335 15.2812 11.6876 15.2188 11.5626 15.0938L7.53139 11.0625C7.34389 10.875 7.30222 10.6562 7.40639 10.4062C7.51056 10.1354 7.69806 10 7.96889 10Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                {errors.city?.message && (
                                    <p className="step-form-input-error">
                                        {errors.city?.message}
                                    </p>
                                )}
                            </label>
                        </div>
                        <div className="w-full sm:w-1/2 px-4 mb-3">
                            <label className="step-form-element">
                                <div
                                    className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer border-solid border-b border-[#101010] pb-2 mb-3`}
                                >
                                    Quận/Huyện{/* */} *
                                </div>
                                <div className="step-form-select-container">
                                    <select
                                        name="district"
                                        className={`step-form-select-box w-full border-solid border-b border-[#101010] ${
                                            errors.district?.message &&
                                            "border-red-600"
                                        }`}
                                        disabled={!districtIndex}
                                        defaultValue=""
                                        {...register("district")}
                                    >
                                        <option value="" disabled hidden>
                                            Chọn quận/huyện
                                        </option>
                                        {districts[districtIndex]?.map((i) => {
                                            return (
                                                <option key={i} value={i}>
                                                    {i}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <div className="step-form-select-icon-wrapper">
                                        <span className="createIconSvgWrapper">
                                            <svg
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                strokeLinejoin="round"
                                                strokeMiterlimit="1.414"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMid meet"
                                                className="createIconSvg"
                                            >
                                                <path
                                                    d="M7.96889 10H16.0314C16.3022 10 16.4897 10.1354 16.5939 10.4062C16.6981 10.6562 16.6564 10.875 16.4689 11.0625L12.4376 15.0938C12.3126 15.2188 12.1668 15.2812 12.0001 15.2812C11.8335 15.2812 11.6876 15.2188 11.5626 15.0938L7.53139 11.0625C7.34389 10.875 7.30222 10.6562 7.40639 10.4062C7.51056 10.1354 7.69806 10 7.96889 10Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                {errors.district?.message && (
                                    <p className="step-form-input-error">
                                        {errors.district?.message}
                                    </p>
                                )}
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
                        <Input
                            labelClass="border-solid border-b border-[#101010] pb-2 mb-5"
                            type="tel"
                            labelKey="forms:label-phone"
                            {...register("phone")}
                            variant="jl"
                            className="w-full sm:w-1/2 pr-3"
                            errorKey={errors.phone?.message}
                        />
                        <Input
                            labelClass="border-solid border-b border-[#101010] pb-2 mb-5"
                            type="email"
                            labelKey="forms:label-email-star"
                            {...register("email", {
                                pattern: {
                                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "forms:email-error",
                                },
                            })}
                            variant="jl"
                            className="w-full sm:w-1/2 pl-3"
                            errorKey={errors.email?.message}
                        />
                    </div>
                    <div className="relative flex flex-col">
                        <span className="mt-2 text-sm text-heading font-semibold block pb-1">
                            {t("common:text-gender")}
                        </span>
                        <div className="mt-2 flex items-center space-s-6">
                            <RadioBox
                                labelKey="forms:label-male"
                                {...register("gender")}
                                value="Nam"
                            />
                            <RadioBox
                                labelKey="forms:label-female"
                                {...register("gender")}
                                value="Nữ"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <Button
                            type="submit"
                            loading={isLoading}
                            disabled={isLoading}
                            variant="jl"
                            className="h-12 mt-3 w-full sm:w-40 mr-3"
                        >
                            Lưu thông tin
                        </Button>
                        <Button
                            type="button"
                            variant="jl"
                            className="h-12 mt-3 w-full sm:w-40 step-form-button-back"
                            onClick={() => {
                                setPage(1);
                                window.scrollTo({ top: 0 });
                            }}
                        >
                            Hủy
                        </Button>
                    </div>
                </div>
            </form>
        </motion.div>
    );
};

export default AccountEdit;
