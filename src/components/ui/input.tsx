import cn from "classnames";
import React, { InputHTMLAttributes } from "react";
import { useTranslation } from "next-i18next";

// Thay vì Props & thì ta extends luôn
export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inputClassName?: string;
    labelKey?: string;
    placeholderKey?: string;
    name: string;
    errorKey?: string;
    type?: string;
    labelClass?: string;
    shadow?: boolean;
    variant?: InputVariants;
    hasIcon?: boolean;
}

const tuple = <T extends string[]>(...args: T) => args;
const inputTuple = tuple("normal", "solid", "outline", "jl");
export type InputVariants = typeof inputTuple[number];

const classes = {
    root: "py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out",
    normal: "bg-gray-100 border-gray-300 focus:shadow focus:bg-white focus:border-primary",
    solid: "bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12",
    outline: "border-gray-300 focus:border-primary",
    jlInput: "step-form-input border-black w-full",
    shadow: "focus:shadow",
};

export const Input = React.forwardRef<HTMLInputElement, Props>(
    (
        {
            className = "block",
            labelKey,
            name,
            errorKey,
            placeholderKey,
            variant = "normal",
            shadow = false,
            type = "text",
            inputClassName,
            labelClass = "mb-3",
            hasIcon = false,
            ...rest
        },
        ref,
    ) => {
        const rootClassName = cn(
            {
                [classes.root]: variant !== "jl",
            },
            {
                [classes.normal]: variant === "normal",
                [classes.solid]: variant === "solid",
                [classes.outline]: variant === "outline",
                [classes.jlInput]: variant === "jl",
            },
            {
                [classes.shadow]: shadow,
            },
            inputClassName,
        );
        const { t } = useTranslation();
        return (
            <div className={className}>
                {labelKey && (
                    <label
                        htmlFor={name}
                        className={`block text-gray-600 font-semibold text-sm leading-none cursor-pointer ${labelClass}`}
                    >
                        {t(labelKey)}
                    </label>
                )}
                <input
                    id={name}
                    name={name}
                    type={type}
                    ref={ref}
                    // @ts-ignore
                    placeholder={t(placeholderKey)}
                    className={rootClassName}
                    autoComplete="off"
                    spellCheck="false"
                    aria-invalid={errorKey ? "true" : "false"}
                    {...rest}
                />
                {errorKey && (
                    <p className="my-2 text-xs text-red-500">{t(errorKey)}</p>
                )}
                {hasIcon && (
                    <div className="absolute top-0 left-0 h-full flex items-center px-2">
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
                                    d="M21.4073 19.7527L16.9969 15.3422C18.0587 13.9286 18.6319 12.208 18.63 10.44C18.63 5.92406 14.9559 2.25 10.44 2.25C5.92406 2.25 2.25 5.92406 2.25 10.44C2.25 14.9559 5.92406 18.63 10.44 18.63C12.208 18.6319 13.9286 18.0587 15.3422 16.9969L19.7527 21.4073C19.9759 21.6069 20.2671 21.7135 20.5664 21.7051C20.8658 21.6967 21.1506 21.574 21.3623 21.3623C21.574 21.1506 21.6967 20.8658 21.7051 20.5664C21.7135 20.2671 21.6069 19.9759 21.4073 19.7527ZM4.59 10.44C4.59 9.28298 4.9331 8.15194 5.5759 7.18991C6.21871 6.22789 7.13235 5.47808 8.2013 5.03531C9.27025 4.59253 10.4465 4.47668 11.5813 4.70241C12.7161 4.92813 13.7584 5.48529 14.5766 6.30343C15.3947 7.12156 15.9519 8.16393 16.1776 9.29872C16.4033 10.4335 16.2875 11.6098 15.8447 12.6787C15.4019 13.7476 14.6521 14.6613 13.6901 15.3041C12.7281 15.9469 11.597 16.29 10.44 16.29C8.88906 16.2881 7.40217 15.6712 6.30548 14.5745C5.2088 13.4778 4.59186 11.9909 4.59 10.44Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </span>
                    </div>
                )}
            </div>
        );
    },
);
