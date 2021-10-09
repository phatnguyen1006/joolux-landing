/* eslint-disable no-useless-escape */
import { useRef } from "react";
import { Input } from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import { Logo } from "@components/ui/logo";
import { useUI } from "@contexts/ui.context";
import { useSignUpMutation, SignUpInputType } from "@framework/auth/use-signup";
import Link from "@components/ui/link";
import cn from "classnames";
import { IoClose } from "react-icons/io5";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import FacebookAuth from "./facebook-auth";
import GoogleAuth from "./google-auth";

const SignUpForm: React.FC = () => {
    const { t } = useTranslation();
    const { mutate: signUp, isLoading } = useSignUpMutation();
    const { setModalView, openModal, closeModal } = useUI();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<SignUpInputType>({
        mode: "all",
    });
    const newPassword = useRef({});
    newPassword.current = watch("password", "");
    function handleSignIn() {
        setModalView("LOGIN_VIEW");
        return openModal();
    }

    function onSubmit({
        name,
        email,
        password,
        confirmPassword,
        phone,
        otp,
        captcha,
    }: SignUpInputType) {
        signUp({
            name,
            email,
            password,
            confirmPassword,
            phone,
            otp,
            captcha,
            sessionInfo: localStorage.getItem("session_otp"),
        });
    }
    return (
        <div className="overflow-hidden pt-5 px-5 sm:px-8 bg-white mx-auto w-full sm:w-96 md:w-450px border border-gray-300 relative">
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
                    {t("common:registration-helper")}{" "}
                </p>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col justify-center"
                noValidate
            >
                <div className="flex flex-col space-y-4">
                    <Input
                        placeholderKey="forms:label-email"
                        type="email"
                        variant="jl"
                        {...register("email", {
                            required: `${t("Thông tin bắt buộc")}`,
                            pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: t("forms:email-error"),
                            },
                        })}
                        errorKey={errors.email?.message}
                    />
                    <>
                        {" "}
                        <PasswordInput
                            placeholderKey="Mật khẩu"
                            variant="jl"
                            errorKey={errors.password?.message}
                            {...register("password", {
                                required: `${t("Thông tin bắt buộc")}`,
                                minLength: {
                                    value: 8,
                                    message: "Mật khẩu phải có ít nhất 8 kí tự",
                                },
                            })}
                        />
                        <PasswordInput
                            placeholderKey="Xác nhận mật khẩu"
                            variant="jl"
                            errorKey={errors.confirmPassword?.message}
                            {...register("confirmPassword", {
                                required: `${t("Thông tin bắt buộc")}`,
                                validate: (value) =>
                                    value === newPassword.current ||
                                    "Mật khẩu xác nhận chưa giống",
                            })}
                        />
                    </>
                    <Button
                        type="submit"
                        loading={isLoading}
                        variant="jl"
                        disabled={isLoading}
                        className="h-11 md:h-12 w-full mt-1.5"
                    >
                        {t("common:text-register")}
                    </Button>
                </div>
            </form>
            <>
                <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
                    <hr className="w-full border-gray-300" />
                    <span className="absolute -top-2.5 px-2 bg-white">
                        {t("common:text-or")}
                    </span>
                </div>
                <FacebookAuth />
                <GoogleAuth />
            </>
            <p className="text-[9.8px] md:text-[9px] text-body mt-2 mb-8 sm:mb-10 text-center">
                By joining into Joolux, you agree to the{" "}
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
                and to receive promotional emails.
            </p>
            <div className="bg-[#eee] mt-2 -mx-5 sm:-mx-8">
                <div className="inline-block text-xs text-body text-center my-2 w-1/2 border-solid border-r-[1px] border-[#333]">
                    <button
                        type="button"
                        className="text-xs text-heading underline font-extralight hover:no-underline focus:outline-none"
                        onClick={handleSignIn}
                    >
                        Member sign in
                    </button>
                </div>
                <div className="inline-block text-xs text-body text-center my-2 w-1/2">
                    <button
                        type="button"
                        className="text-xs text-heading underline font-extralight hover:no-underline focus:outline-none"
                        onClick={handleSignIn}
                    >
                        Sell with us
                    </button>
                </div>
            </div>{" "}
        </div>
    );
};
export default SignUpForm;
