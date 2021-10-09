import React, { FC } from "react";
import Image from "next/image";
import { toBase64 } from "@utils/toBase64";
import { shimmer } from "@utils/shimmer";
import { useUI } from "@contexts/ui.context";

const SectionFour: FC = () => {
    const { setModalView, setImageView, openModal } = useUI();
    const openModalView = (url) => {
        console.log(url);
        setImageView(url);
        setModalView("IMAGE_VIEW");
        openModal();
    };
    return (
        <div>
            <div
                data-aos="fade-right"
                data-aos-delay="700"
                className="mx-auto max-w-[1400px] text-center pt-8 pb-4 px-2 md:px-8 overflow-hidden"
            >
                <h2 className="font-brand text-black uppercase text-lg md:text-3xl mb-6">
                    Sản phẩm đấu giá
                </h2>
                <img className="mx-auto" src="/assets/images/divider.jpg" />
                {/* <div className="flex justify-between md:flex-row flex-col mt-10 items-center md:items-stretch"> */}
                <div className="grid grid-cols-2 md:grid-cols-3 mt-10 justify-items-center sm:items-center md:items-stretch auction-grid">
                    <div
                        onClick={() => {
                            openModalView("/assets/images/popup1.png");
                        }}
                        className="w-full max-w-[400px] p-1 px-3 mb-10 text-left auction-item cursor-pointer"
                    >
                        <Image
                            src="/assets/images/sp-1.jpg"
                            width={350}
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                shimmer(565, 275),
                            )}`}
                            height={450}
                            quality={100}
                        />
                        <p className="font-bold text-[14px] text-gray-400 uppercase mt-6 mb-2">
                            Sông Thương
                        </p>
                        <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                            Cặp đá quý Natural swiss topaz & peridot
                        </p>
                        <p className="text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0">
                            Giá khởi điểm:{" "}
                            <span className="text-[20px] smJl:text-[26px]">
                                {" "}
                                3.000.000đ
                            </span>
                        </p>
                        <span className="w-[400px] lg:w-[500px]] h-[500px] bg-[#fcf9f3] overflow-hidden rounded-md auction-item-hover">
                            <div className="items-center">
                                <div className="flex-shrink-0 items-center justify-center bg-gray-200 flex lg:w-[520px] xl:w-auto">
                                    <Image
                                        src="/assets/images/popup1.png"
                                        alt="Thumbnail"
                                        width={755}
                                        height={655}
                                        quality={100}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </span>
                    </div>
                    <div
                        onClick={() => {
                            openModalView("/assets/images/popup3.png");
                        }}
                        className="w-full max-w-[400px] p-1 px-3 mb-10 text-left auction-item cursor-pointer"
                    >
                        <Image
                            src="/assets/images/sp-2.jpg"
                            width={350}
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                shimmer(565, 275),
                            )}`}
                            height={450}
                            quality={100}
                        />
                        <p className="font-bold text-[14px] text-gray-400 uppercase mt-6 mb-2">
                            The Greenery Art
                        </p>
                        <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                            Tác phẩm tranh sơn dầu Đồng Bằng (năm 2018)
                        </p>
                        <p className="text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0">
                            Giá khởi điểm:{" "}
                            <span className="text-[20px] smJl:text-[26px]">
                                {" "}
                                2.000.000đ
                            </span>
                        </p>
                        <span className="w-[400px] lg:w-[500px]] h-[500px] bg-[#fcf9f3] overflow-hidden rounded-md auction-item-hover">
                            <div className="items-center">
                                <div className="flex-shrink-0 items-center justify-center bg-gray-200 flex lg:w-[520px] xl:w-auto">
                                    <Image
                                        src="/assets/images/popup3.png"
                                        alt="Thumbnail"
                                        width={755}
                                        height={655}
                                        quality={100}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </span>
                    </div>
                    <div
                        onClick={() => {
                            openModalView("/assets/images/popup2.png");
                        }}
                        className="w-full max-w-[400px] p-1 items-start px-3 mb-10 text-left auction-item cursor-pointer"
                    >
                        <Image
                            src="/assets/images/sp-10.png"
                            width={350}
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                shimmer(565, 275),
                            )}`}
                            height={450}
                            quality={100}
                        />
                        <p className="font-bold text-[14px] text-gray-400 uppercase mt-6 mb-2">
                            Sông Thương
                        </p>
                        <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                            Khuyên tai vàng 14K
                        </p>
                        <p className="text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0">
                            Giá khởi điểm:{" "}
                            <span className="text-[20px] smJl:text-[26px]">
                                {" "}
                                6.500.000đ
                            </span>
                        </p>
                        <span className="w-[400px] lg:w-[500px]] h-[500px] bg-[#fcf9f3] overflow-hidden rounded-md auction-item-hover-right">
                            <div className="items-center">
                                <div className="flex-shrink-0 items-center justify-center bg-gray-200 flex lg:w-[520px] xl:w-auto">
                                    <Image
                                        src="/assets/images/popup2.png"
                                        alt="Thumbnail"
                                        width={755}
                                        height={655}
                                        quality={100}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </span>
                    </div>
                    {/* </div>
                <div className="flex justify-between md:flex-row flex-col mt-10 items-center md:items-stretch"> */}
                    <div className="w-full max-w-[400px] p-1  items-start px-3 mb-10 text-left">
                        <Image
                            src="/assets/images/sp-13.png"
                            width={350}
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                shimmer(565, 275),
                            )}`}
                            height={450}
                            quality={100}
                        />
                        <p className="font-bold text-[14px] text-gray-400 uppercase mt-6 mb-2">
                            Brand
                        </p>
                        <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                            Sản phẩm đặc biệt
                        </p>
                        <p className="text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0">
                            Giá khởi điểm: công bố vào 09.10.2021
                            {/* <span className="text-[20px] smJl:text-[26px]">
                                {" "}
                                công bố vào 09.10.2020
                            </span> */}
                        </p>
                    </div>
                    <div className="w-full max-w-[400px] p-1  items-start px-3 mb-10 text-left">
                        <Image
                            src="/assets/images/sp-13.png"
                            width={350}
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                shimmer(565, 275),
                            )}`}
                            height={450}
                            quality={100}
                        />
                        <p className="font-bold text-[14px] text-gray-400 uppercase mt-6 mb-2">
                            Brand
                        </p>
                        <p className="text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0">
                            Sản phẩm đặc biệt
                        </p>
                        <p className="text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0">
                            Giá khởi điểm: công bố vào 09.10.2021
                            {/* <span className="text-[20px] smJl:text-[26px]">
                                {" "}
                                1.945.000đ
                            </span> */}
                        </p>
                    </div>
                    <div className="w-full smJl:w-1/3 max-w-[400px] p-1  items-start px-3 mb-10 text-left"></div>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;
