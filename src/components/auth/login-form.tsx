/* eslint-disable no-useless-escape */
import { Input } from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import { useLoginMutation, LoginInputType } from "@framework/auth/use-login";
import Link from "@components/ui/link";
import { ROUTES } from "@utils/routes";
import { useUI } from "@contexts/ui.context";
import { Logo } from "@components/ui/logo";
import cn from "classnames";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "next-i18next";
import FacebookAuth from "./facebook-auth";
import GoogleAuth from "./google-auth";
const LoginForm: React.FC = () => {
    const { t } = useTranslation();
    const { setModalView, openModal, closeModal } = useUI();
    const { mutate: login, isLoading } = useLoginMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInputType>();
    // register các ô value vào param của onsubmit
    // khi handleSubmit sẽ truyền toàn bộ các ô input đã register
    function onSubmit({ email, password, remember_me }: LoginInputType) {
        login({
            email,
            password,
            remember_me,
        });
    }

    function handleSignUp() {
        setModalView("SIGN_UP_VIEW");
        return openModal();
    }
    function handleForgetPassword() {
        setModalView("FORGET_PASSWORD");
        return openModal();
    }

    return (
        <div className="overflow-hidden bg-white mx-auto w-full sm:w-96 md:w-450px border border-gray-300 pt-5 px-5 sm:px-8 relative">
            <button
                onClick={closeModal}
                aria-label="Close panel"
                className={cn(
                    "fixed z-50 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md",
                    "top-4 end-4",
                )}
            >
                <IoClose className="text-xl" />
            </button>
            <div className="text-center mb-6 pt-2.5">
                <div onClick={closeModal}>
                    <Logo />
                </div>
                <div className="p-2 mb-[10px] text-xs text-black bg-[#f5f5f5] -mx-5 sm:-mx-8">
                    Authenticated Luxury Consignment
                </div>
                <p className="text-lg md:text-base text-black font-bold uppercase mt-2 mb-8 sm:mb-10">
                    {t("common:login-helper")}
                </p>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center"
                noValidate
            >
                <div className="flex flex-col space-y-3.5">
                    <Input
                        placeholderKey="forms:label-email"
                        type="email"
                        variant="jl"
                        {...register("email", {
                            required: `${t("forms:email-required")}`,
                            pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: t("forms:email-error"),
                            },
                        })}
                        errorKey={errors.email?.message}
                    />
                    <PasswordInput
                        placeholderKey="forms:label-password"
                        errorKey={errors.password?.message}
                        variant="jl"
                        {...register("password", {
                            required: `${t("forms:password-required")}`,
                        })}
                    />
                    <div className="flex items-center justify-center">
                        <div className="flex items-center flex-shrink-0">
                            <label className="switch relative inline-block w-10 cursor-pointer">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="opacity-0 w-0 h-0"
                                    {...register("remember_me")}
                                />
                                <span className="bg-gray-500 absolute inset-0 transition-all duration-300 ease-in slider round"></span>
                            </label>
                            <label
                                htmlFor="remember"
                                className="flex-shrink-0 text-sm text-heading ps-3 cursor-pointer"
                            >
                                {t("forms:label-remember-me")}
                            </label>
                        </div>
                        <div className="flex ms-auto">
                            <button
                                type="button"
                                onClick={handleForgetPassword}
                                className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
                            >
                                {t("common:text-forgot-password")}
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <Button
                            type="submit"
                            loading={isLoading}
                            variant="jl"
                            disabled={isLoading}
                            className="h-11 md:h-12 w-full mt-1.5"
                        >
                            {t("common:text-login")}
                        </Button>
                    </div>
                </div>
            </form>
            <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
                <hr className="w-full border-gray-300" />
                <span className="absolute -top-2.5 px-2 bg-white">
                    {t("common:text-or")}
                </span>
            </div>
            <FacebookAuth />
            <GoogleAuth />
            <p className="text-[9.8px] md:text-[9px] text-body mt-2 mb-8 sm:mb-10 text-center">
                By logging into Joolux, you agree to the{" "}
                <Link
                    href={ROUTES.TERMS}
                    className="text-heading underline hover:no-underline focus:outline-none"
                >
                    {t("common:text-terms")}
                </Link>{" "}
                &amp;{" "}
                <Link
                    href={ROUTES.POLICY}
                    className="text-heading underline hover:no-underline focus:outline-none"
                >
                    {t("common:text-policy")}
                </Link>{" "}
            </p>
            <div className="bg-[#eee] mt-2 -mx-5 sm:-mx-8">
                <div className="inline-block text-xs text-body text-center my-2 w-1/2 border-solid border-r-[1px] border-[#333]">
                    <button
                        type="button"
                        className="text-xs text-heading underline font-extralight hover:no-underline focus:outline-none"
                        onClick={handleSignUp}
                    >
                        Member sign up
                    </button>
                </div>
                <div className="inline-block text-xs text-body text-center my-2 w-1/2">
                    <button
                        type="button"
                        className="text-xs text-heading underline font-extralight hover:no-underline focus:outline-none"
                        onClick={handleSignUp}
                    >
                        Sell with us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
