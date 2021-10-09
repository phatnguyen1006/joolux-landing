import React, { FC } from "react";
import Image from "next/image";
// import { toBase64 } from "@utils/toBase64";
// import { Button } from "@components/ui/button";
// import { shimmer } from "@utils/shimmer";
const SectionSeven: FC = () => {
    function handleClick(url: string) {
        window.open(url, "_blank");
    }

    return (
        <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="mx-auto max-w-[1400px] text-center pt-2 lg:pb-6 pb-4 px-8 overflow-hidden"
        >
            <div className="flex justify-between md:flex-row flex-col mt-6 items-center md:items-stretch">
                <div className="w-full lg:w-1/2 max-w-full p-4 flex flex-col items-center px-4 text-left">
                    <Image
                        className="mx-auto bg-white"
                        src="/assets/images/funder-v2/f1.png"
                        width={156}
                        height={150}
                        quality={100}
                    />
                    <p className="w-full text-center text-[#231f20] font-normal text-[16px] tracking-wider px-0">
                        Sàn giao dịch hàng hiệu
                        <br />
                        chính hãng đã qua sử dụng
                    </p>
                </div>
                <div className="w-full lg:w-1/2 max-w-full flex justify-center pb-4 px-4 mb-10">
                    <div className="h-full flex flex-col justify-between items-start">
                        <div
                            className="flex flex-row items-center justify-between mt-6 cursor-pointer"
                            onClick={() =>
                                handleClick("https://www.facebook.com/jooluxvn")
                            }
                        >
                            <Image
                                className="bg-white"
                                src="/assets/images/contact/g1.png"
                                width={40.45}
                                height={37.58}
                                quality={100}
                            />
                            <p className="w-full text-center text-[body] text-[#231f20] font-normal text-[13px] tracking-wider px-4">
                                fb.com/joolux
                            </p>
                        </div>
                        <div
                            className="flex flex-row items-center justify-between mt-6 cursor-pointer"
                            onClick={() => handleClick("https://joolux.com")}
                        >
                            <Image
                                className="bg-white"
                                src="/assets/images/contact/g2.png"
                                width={40.45}
                                height={37.58}
                                quality={100}
                            />
                            <p className="w-full text-center text-[#231f20] font-normal text-[13px] tracking-wider px-4">
                                www.joolux.com
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-6">
                            <Image
                                className="bg-white"
                                src="/assets/images/contact/g3.png"
                                width={40.45}
                                height={37.58}
                                quality={100}
                            />
                            <p className="w-full text-center text-[body] text-[#231f20] font-normal text-[13px] tracking-wider px-4">
                                1900 292984
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-between mt-6">
                            <Image
                                className="bg-white"
                                src="/assets/images/contact/g4.png"
                                width={40.45}
                                height={37.58}
                                quality={100}
                            />
                            <p className="w-full text-center text-[body] text-[#231f20] font-normal text-[13px] tracking-wider px-4">
                                info@joolux.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionSeven;
