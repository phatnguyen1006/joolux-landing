import React from "react";
import { useTranslation } from "next-i18next";

interface ICheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelKey?: string | React.ReactElement;
    label?: string | any;
    variant?: "jl" | "default";
}

export const CheckBox = React.forwardRef<HTMLInputElement, ICheckBoxProps>(
    ({ labelKey, label, variant, ...rest }, ref) => {
        const { t } = useTranslation("common");
        return variant !== "jl" ? (
            <label className="group flex items-center text-heading text-sm cursor-pointer">
                <input
                    type="checkbox"
                    className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                    ref={ref}
                    {...rest}
                />
                <span className="ms-4 -mt-0.5">
                    {labelKey ? t(`${labelKey}`) : label}
                </span>
            </label>
        ) : (
            <label role="checkbox" className="joolux-checkbox-label">
                <input type="checkbox" className="hidden" ref={ref} {...rest} />
                <div className="joolux-checkbox-group">
                    <span
                        className={`createIconSvgCheckbox joolux-checkbox-icon ${
                            rest.checked &&
                            `opacity-100 bg-black text-white border-transparent`
                        }`}
                    >
                        {rest.checked && (
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
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.9939 5.43556C20.3056 5.70832 20.3372 6.18215 20.0644 6.49387L9.56443 18.4939C9.42774 18.6501 9.23242 18.7427 9.02496 18.7496C8.8175 18.7565 8.61645 18.6771 8.46967 18.5303L3.96967 14.0303C3.67678 13.7374 3.67678 13.2626 3.96967 12.9697C4.26256 12.6768 4.73744 12.6768 5.03033 12.9697L8.96347 16.9028L18.9356 5.50612C19.2083 5.19439 19.6821 5.1628 19.9939 5.43556Z"
                                    fill="currentColor"
                                />
                            </svg>
                        )}
                    </span>
                </div>
                <div className="ml-[0.3rem]">
                    <div className="checkbox-text text-xs text-gray-700">
                        <span className="text-sm">
                            {labelKey ? t(`${labelKey}`) : label}
                        </span>
                    </div>
                </div>
            </label>
        );
    },
);
