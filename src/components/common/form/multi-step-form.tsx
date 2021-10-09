import React, { FC } from "react";

const MultiStepForm: FC<{ stepData: any[]; step: number }> = ({
    stepData,
    step,
}) => {
    const lastIndex = stepData.length - 1;
    const renderFormStep = () => {
        return (
            stepData &&
            stepData.map((i, index) => {
                return (
                    <div key={index} className="flex">
                        <div
                            className={`step-tree-rel ${
                                i.id < step && "after:bg-black"
                            } ${index === lastIndex && "after:bg-white"}`}
                        >
                            <div
                                className={`step-tree-circle ${
                                    i.id > step ? "bg-white text-black" : ""
                                }`}
                            >
                                {i.id >= step ? (
                                    <span>{i.id}</span>
                                ) : (
                                    <span className="createIcon text-secondary w-7 h-7">
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
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="step-tree-body">
                            <h4 className="step-header mb-6">{i.stepHeader}</h4>
                            {i.stepBody}
                        </div>
                    </div>
                );
            })
        );
    };
    return (
        <>
            <h6 className="text-gray-900 text-sm mb-10">
                Bạn đang tiến hành thanh toán không cần tài khoản đăng nhập
            </h6>
            {renderFormStep()}
        </>
    );
};

export default MultiStepForm;
