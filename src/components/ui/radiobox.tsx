import React from "react";
import { useTranslation } from "next-i18next";
interface RadioBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelKey: string | React.ReactElement;
    variant?: "jl" | "default";
}
export const RadioBox = React.forwardRef<HTMLInputElement, RadioBoxProps>(
    ({ labelKey, variant = "default", ...rest }, ref) => {
        const { t } = useTranslation("forms");
        return variant !== "jl" ? (
            <label className="group flex items-center text-heading text-sm cursor-pointer">
                <input
                    type="radio"
                    className="form-radio w-5 h-5 border border-gray-300 text-heading rounded-full cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                    ref={ref}
                    {...rest}
                />
                <span className="ms-2 text-sm text-heading relative">
                    {t(`${labelKey}`)}
                </span>
            </label>
        ) : (
            <label
                role="radio"
                // aria-checked={initialCheck}
                // tabIndex={-1}
                className="step-form-radio-label"
            >
                <input type="radio" className="hidden" ref={ref} {...rest} />
                <div
                    className={`step-form-radio-box ${
                        !rest.checked && "before:opacity-0"
                    }`}
                />
                <span className="step-form-radio-text">{t(`${labelKey}`)}</span>
            </label>
        );
    },
);
