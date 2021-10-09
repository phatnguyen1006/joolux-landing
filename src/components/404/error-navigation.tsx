import React from "react";
import Link from "@components/ui/link";

function ErrorNavigation() {
    return (
        <div className="flex flex-wrap -mx-4">
            <div className="w-full smJl:w-1/2 px-4 smJl:mb-12 mb-8">
                <Link
                    className="bg-white border border-gray-300 block"
                    href="/hang-moi-ve"
                >
                    <div>
                        <div>
                            <img
                                src="https://joolux.com/img/common/hangmoive.jpg"
                                alt="error hàng mới về"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <h5 className="font-htmlJl font-semibold leading-[1.333] text-xl mb-2px">
                            Hàng Mới Về
                        </h5>
                        <p className="text-sm text-gray-700">Mua Ngay</p>
                    </div>
                </Link>
            </div>
            <div className="w-full smJl:w-1/2 px-4 smJl:mb-12 mb-8">
                <Link
                    className="bg-white border border-gray-300 block"
                    href="/dich-vu"
                >
                    <div>
                        <div>
                            <img
                                src="https://joolux.com/img/common/cacdichvu.jpg"
                                alt="error các dịch vụ"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <h5 className="font-htmlJl font-semibold leading-[1.333] text-xl mb-2px">
                            Dịch Vụ Của Chúng Tôi
                        </h5>
                        <p className="text-sm text-gray-700">Tìm Hiểu Ngay</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ErrorNavigation;
