import React, { FC } from "react";

enum StatusDescription {
    Excellent = "Không có dấu hiệu hư tổn hoặc có dấu hiệu hư tổn không thấy rõ",
    Good = "Có dấu hiệu hư tổn thấy rõ do quá trình sử dụng",
    Pending = "Đang xét duyệt tình trạng",
    Perfect = "Chưa qua sử dụng, full box",
    Verygood = "Có dấu hiệu hư tổn không đáng kể do quá trình sử dụng",
}
const ProductStatus: FC<{ status: string }> = ({ status }) => {
    return (
        <div className="pt-2 pb-4">
            <div className="text-lg font-semibold leading-[1.333]">
                {status}
            </div>
            <h6 className="typo-h6 leading-[1.5] text-[#101010] text-sm font-normal">
                {StatusDescription[status?.replace(" ", "")]}
            </h6>
        </div>
    );
};

export default ProductStatus;
