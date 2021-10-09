import React from "react";
import { useTranslation } from "next-i18next";
import { IoCheckmarkCircle } from "react-icons/io5";

function CheckOutFormSuccessStep() {
    const { t } = useTranslation("common");
    return (
        <div className="border border-gray-300 bg-gray-50 px-4 lg:px-5 py-4 rounded-md flex items-center justify-start text-heading text-sm md:text-base mb-6 lg:mb-8">
            <span className="w-10 h-10 me-3 lg:me-4 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                <IoCheckmarkCircle className="w-5 h-5 text-green-600" />
            </span>
            {t("text-order-received")}{" "}
            {
                "Chúng tôi sẽ liên lạc với bạn sớm nhất có thể. Vui lòng kiểm tra email bạn đã sử dụng khi đặt hàng để theo dõi tình trạng đơn hàng"
            }
        </div>
    );
}

export default CheckOutFormSuccessStep;
