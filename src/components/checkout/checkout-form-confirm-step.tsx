import { FC } from "react";
import { IConfirmStepProps } from "./types";

const CheckoutFormConfirmStep: FC<IConfirmStepProps> = ({
    handleSubmit,
    prevStep,
    step,
    formStep,
    values,
    isLoading,
}) => {
    return (
        step === formStep && (
            <div>
                <h6 className="typo-h6 mb-1">Địa chỉ nhận hàng</h6>
                <h6 className="typo-paragraph  mb-4 leading-relaxed">
                    {values.customerName}
                    <br />
                    {`${values.customerAddress}, ${
                        values.customerDistrict.split(" - ")[1]
                    }, ${values.customerProvince.split(" - ")[1]}`}
                    <br />
                    <b>Điện thoại:</b> {values.customerPhone}
                    <br />
                    <b>Email:</b> {values.customerEmail}
                </h6>
                <h6 className="typo-h6 mb-1">Phương thức thanh toán</h6>
                <h6 className="typo-paragraph ">Chuyển khoản ngân hàng</h6>
                <h6 className="typo-paragraph italic mt-4">
                    Đơn đặt hàng sẽ được xác nhận bởi nhân viên chăm sóc khách
                    hàng của Joolux.
                    <br />
                    <b>Thời giao giao hàng:</b>
                    <br />
                    Joolux hỗ trợ giao hàng từ thứ 2 đến đến thứ 6 hàng tuần,
                    trừ thứ 7, chủ nhật và các ngày lễ.
                    <br />
                    <b>Khung giờ giao hàng:</b>
                    <br />
                    Khung giờ giao hàng của các đơn vị vận chuyển sẽ bắt đầu từ
                    08:00 đến 17:00 (giờ hành chính).
                </h6>
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
                        disabled={isLoading}
                    >
                        Xác nhận đặt hàng
                    </button>
                </div>
            </div>
        )
    );
};
export default CheckoutFormConfirmStep;
