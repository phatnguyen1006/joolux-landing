import { useState } from "react";
import { Text } from "@components/ui/text";
import cn from "classnames";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { IoClose } from "react-icons/io5";

const data = {
    title: "common:text-subscribe-heading",
    // description: "common:text-subscribe-description",
    description:
        "Cập nhật những thông tin mới nhất về xu hướng thời trang với Joolux. Đăng ký nhận thông tin bằng cách nhập email của bạn.",
    buttonText: "common:button-subscribe",
};

interface Props {
    className?: string;
    hasTitle?: boolean;
}

type FormValues = {
    subscription_email: string;
};

const defaultValues = {
    subscription_email: "",
};

export const Subscription: React.FC<Props> = ({
    className = "px-5 sm:px-8 md:px-16 2xl:px-24",
    hasTitle = false,
}) => {
    const [show, setShow] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ defaultValues });
    const { t } = useTranslation();
    const { title, description, buttonText } = data;
    async function onSubmit(input: FormValues) {}
    const closeBtnClasses = {
        center: "top-1 end-1",
        bottom: "top-1/4 start-1/2 transform -translate-y-1/2 -translate-x-1/2",
    };

    return (
        show && (
            <div
                className={`${className} flex flex-col md:flex-row justify-center md:justify-between items-center bg-[#e7e7e7] py-5 md:py-8 lg:py-8 relative lg:max-h-[128px]`}
            >
                <button
                    onClick={() => {
                        setShow(false);
                    }}
                    aria-label="Close panel"
                    className={cn(
                        "absolute  z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-transparent shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md",
                        closeBtnClasses["center"],
                    )}
                >
                    <IoClose className="text-xl" />
                </button>
                <div className="-mt-1.5 lg:-mt-2 xl:-mt-0.5 text-start mb-7 md:mb-4 lg:mb-5 xl:mb-0 lg:w-1/2">
                    {hasTitle && (
                        <Text
                            variant="jl"
                            className="mb-2 md:mb-2.5 lg:mb-3 xl:mb-3.5"
                        >
                            {t(`${title}`)}
                        </Text>
                    )}
                    <h6 className="text-body text-xs font-normal md:text-sm leadin-5 typo-h6">
                        {t(`${description}`)}
                    </h6>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex-shrink-0 md:ml-4 w-full sm:w-[26rem] md:w-[475px]"
                    noValidate
                >
                    <div className="flex flex-col sm:flex-row items-start justify-end">
                        <Input
                            placeholderKey="forms:placeholder-email-subscribe"
                            type="email"
                            variant="jl"
                            className="w-full"
                            inputClassName="px-4 lg:px-7 h-10 lg:h-12 text-center sm:text-start bg-white max-w-[400px]"
                            {...register("subscription_email", {
                                required: "forms:email-required",
                                pattern: {
                                    // eslint-disable-next-line no-useless-escape
                                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "forms:email-error",
                                },
                            })}
                            errorKey={errors.subscription_email?.message}
                        />
                        <Button
                            variant="jl"
                            className="mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 h-10 lg:h-12 flex-shrink-0"
                        >
                            <span className="lg:py-0.5">
                                {t(`${buttonText}`)}
                            </span>
                        </Button>
                    </div>
                </form>
            </div>
        )
    );
};
