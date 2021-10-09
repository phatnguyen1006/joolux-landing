import React, { FC } from "react";

const ProductShipping: FC = () => {
    return (
        <div className="pt-2 pb-4">
            <h6 className="typo-h6 text-[15px] mb-2 font-normal leading-[1.55]">
                Được vận chuyển từ TPHCM hoặc Hà Nội
            </h6>
            <h6 className="typo-h6 text-[15px] font-bold mb-1 leading-[1.55]">
                Thời gian giao hàng:
            </h6>
            <h6 className="typo-h6 text-[15px] font-normal leading-[1.55]">
                Nội thành TP.HCM, Hà Nội:{" "}
                <b className="font-semibold">36 giờ làm việc</b>
            </h6>
            <h6 className="typo-h6 text-[15px] font-normal leading-[1.55]">
                Ngoại thành:{" "}
                <b className="font-semibold">3 - 7 ngày làm việc</b>
            </h6>
        </div>
    );
};

export default ProductShipping;
