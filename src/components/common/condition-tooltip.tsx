import React from "react";

function ContionTooltip({ mobile }) {
    return !mobile ? (
        <div
            className="bg-white min-w-[31.25rem] ml-5 z-50"
            style={{
                boxShadow: "rgb(61 61 61 / 25%) 0px 4px 16px",
            }}
        >
            <div className="m-auto p-5 relative">
                <div className="text-sm">
                    <div className="flex py-1">
                        <div className="font-bold mr-1 min-w-[110px]">
                            Perfect:
                        </div>
                        Chưa qua sử dụng, full box
                    </div>
                    <div className="flex py-1">
                        <div className="font-bold mr-1 min-w-[110px]">
                            Excellent:
                        </div>
                        Không có dấu hiệu hư tổn hoặc có dấu hiệu hư tổn không
                        thấy rõ
                    </div>
                    <div className="flex py-1">
                        <div className="font-bold mr-1 min-w-[110px]">
                            Very good:
                        </div>
                        Có dấu hiệu hư tổn không đáng kể do quá trình sử dụng
                    </div>
                    <div className="flex py-1">
                        <div className="font-bold mr-1 min-w-[110px]">
                            Good:
                        </div>
                        Có dấu hiệu hư tổn thấy rõ do quá trình sử dụng
                    </div>
                    <div className="flex py-1">
                        <div className="font-bold mr-1 min-w-[110px]">
                            Pending:
                        </div>
                        Đang xét duyệt tình trạng
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="m-auto p-5 relative">
            <div className="text-sm">
                <div className="flex py-1">
                    <div className="font-bold mr-1 min-w-[110px]">Perfect:</div>
                    Chưa qua sử dụng, full box
                </div>
                <div className="flex py-1">
                    <div className="font-bold mr-1 min-w-[110px]">
                        Excellent:
                    </div>
                    Không có dấu hiệu hư tổn hoặc có dấu hiệu hư tổn không thấy
                    rõ
                </div>
                <div className="flex py-1">
                    <div className="font-bold mr-1 min-w-[110px]">
                        Very good:
                    </div>
                    Có dấu hiệu hư tổn không đáng kể do quá trình sử dụng
                </div>
                <div className="flex py-1">
                    <div className="font-bold mr-1 min-w-[110px]">Good:</div>
                    Có dấu hiệu hư tổn thấy rõ do quá trình sử dụng
                </div>
                <div className="flex py-1">
                    <div className="font-bold mr-1 min-w-[110px]">Pending:</div>
                    Đang xét duyệt tình trạng
                </div>
            </div>
        </div>
    );
}

export default ContionTooltip;
