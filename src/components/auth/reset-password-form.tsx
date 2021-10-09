import { useRef } from "react";
import PasswordInput from "@components/ui/password-input";
import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeInTop } from "@utils/motion/fade-in-top";
import {
    useResetPasswordMutation,
    ResetPasswordInputType,
} from "@framework/user/use-reset-password";
import { useTranslation } from "next-i18next";

const defaultValues = {
    newPassword: "",
};
const ChangePassword: React.FC = () => {
    const { mutate: changePassword, isLoading } = useResetPasswordMutation();
    const newPassword = useRef({});

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<ResetPasswordInputType>({
        defaultValues,
    });
    newPassword.current = watch("newPassword", "");

    function onSubmit(input: ResetPasswordInputType) {
        changePassword(input);
    }
    const { t } = useTranslation();
    return (
        <>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                {t("common:text-change-password")}
            </h2>
            <motion.div
                layout
                initial="from"
                animate="to"
                exit="from"
                //@ts-ignore
                variants={fadeInTop(0.35)}
                className={`w-full flex  h-full lg:w-8/12 flex-col`}
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full mx-auto flex flex-col justify-center "
                >
                    <div className="flex flex-col space-y-3">
                        <PasswordInput
                            labelKey="Mật khẩu mới"
                            variant="jl"
                            errorKey={errors.newPassword?.message}
                            {...register("newPassword", {
                                required: "Thông tin bắt buộc",
                                minLength: {
                                    value: 8,
                                    message:
                                        "Mật khẩu mới phải có ít nhất 8 kí tự",
                                },
                            })}
                            className="mb-4"
                        />
                        <PasswordInput
                            labelKey="Xác nhận mật khẩu mới"
                            variant="jl"
                            errorKey={errors.confirmNewpassword?.message}
                            {...register("confirmNewpassword", {
                                required: "Thông tin bắt buộc",
                                validate: (value) =>
                                    value === newPassword.current ||
                                    "Mật khẩu mới chưa giống",
                            })}
                            className="mb-4"
                        />

                        <div className="relative">
                            <Button
                                type="submit"
                                variant="jl"
                                loading={isLoading}
                                disabled={isLoading}
                                className="h-13 mt-3"
                            >
                                {t("Đặt lại mật khẩu")}
                            </Button>
                        </div>
                    </div>
                </form>
            </motion.div>
        </>
    );
};

export default ChangePassword;
