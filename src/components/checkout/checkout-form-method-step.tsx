import { FC, useState } from "react";
import CheckoutRadioBox from "./checkout-radio-box";
import { IMethodStepProps } from "./types";

const radioList = [
    {
        id: 1,
        labelText: "Chuyển khoản ngân hàng",
        value: "Transfer",
    },
    {
        id: 2,
        labelText: "Thanh toán bằng MOMO",
        value: "Momo",
    },
];
const CheckoutFormMethodStep: FC<IMethodStepProps> = ({
    prevStep,
    handleSubmit,
    step,
    formStep,
    register,
}) => {
    const [radioItem, setRadioItem] = useState(1);

    return (
        step === formStep && (
            <>
                <div className="py-2" />
                <form action="#">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <label className="step-form-element">
                                <div
                                    className="step-form-radio-group"
                                    role="radiogroup"
                                >
                                    {radioList.map((i) => {
                                        return (
                                            <CheckoutRadioBox
                                                key={i.id}
                                                id={i.id}
                                                initialCheck={
                                                    radioItem === i.id
                                                }
                                                register={register}
                                                name="paymentMethod"
                                                labelText={i.labelText}
                                                setRadioItem={setRadioItem}
                                                value={i.value}
                                            />
                                        );
                                    })}
                                </div>
                            </label>
                            <div className="text-15px mt-5">
                                <div className="font-semibold">
                                    Chủ tài khoản: Công ty CP Coziland
                                </div>
                                <div className="mt-3 flex flex-wrap">
                                    <div className="w-full sm:w-1/3 lg:w-1/2">
                                        <div className="step-form-payment-bank-wrapper">
                                            <img
                                                src="https://joolux.com/img/banks/vietcombank.png"
                                                height={80}
                                                alt="vcb"
                                            />
                                            <div className="text-gray-400">
                                                CN:{" "}
                                                <span className="text-black">
                                                    Thành Công, Hà Nội
                                                </span>
                                            </div>
                                            <div className="text-gray-400">
                                                STK:{" "}
                                                <span className="text-black">
                                                    0451000355859
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-1/3 lg:w-1/2">
                                        <div className="step-form-payment-bank-wrapper">
                                            <img
                                                src="https://joolux.com/img/banks/techcombank.png"
                                                height={80}
                                                alt="techcombank"
                                            />
                                            <div className="text-gray-400">
                                                CN:{" "}
                                                <span className="text-black">
                                                    Gia Định, Tp. HCM
                                                </span>
                                            </div>
                                            <div className="text-gray-400">
                                                STK:{" "}
                                                <span className="text-black">
                                                    19036996821019
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex items-center">
                        <button
                            type="button"
                            className="step-form-button-back mr-6"
                            data-testid="checkout-stepone-back-button"
                            onClick={prevStep}
                        >
                            Quay Lại
                        </button>
                        <button
                            type="submit"
                            data-testid="checkout-payment-method-confirm-button"
                            className="step-form-button-submit"
                            onClick={handleSubmit}
                        >
                            Tiếp Tục
                        </button>
                    </div>
                </form>
            </>
        )
    );
};
export default CheckoutFormMethodStep;
