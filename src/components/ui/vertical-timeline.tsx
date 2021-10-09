import React, { FC } from "react";

const VerticalTimeline: FC = () => {
    return (
        <div>
            <div className="container mx-auto w-full h-1/2">
                <div className="relative wrap overflow-hidden p-10 h-1/2 vertical-timeline-wrapper ">
                    <div
                        className="absolute h-[58%] vertical-timeline-line left-[32%] sm:left-[32.5%] smJl:left-[33%]"
                        style={{ top: "20%" }}
                    />
                    {/* right timeline */}
                    <div
                        className="mb-1 flex justify-end items-center w-full right-timeline"
                        data-aos="fade-right"
                        data-aos-delay="800"
                    >
                        <div className="z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full vertical-timeline-date"></div>
                        <div className="order-1  rounded-lg shadow-xl w-8/12 pl-3 py-4 text-center vertical-timeline-text ">
                            <h3 className="!text-[#E5C289] text-sm sm:!text-[22px]">
                                07/10
                            </h3>
                            <p className="text-xs leading-snug tracking-wide text-gray-900 text-opacity-100">
                                Những thương hiệu góp mặt tại chương trình
                            </p>
                        </div>
                    </div>
                    <div
                        className="mb-1 flex justify-end items-center w-full right-timeline"
                        data-aos="fade-right"
                        data-aos-delay="900"
                    >
                        <div className="z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full vertical-timeline-date"></div>
                        <div className="order-1  rounded-lg shadow-xl w-8/12 pl-3 py-4  text-center vertical-timeline-text ">
                            <h3 className="!text-[#E5C289] text-sm sm:!text-[22px]">
                                09/10
                            </h3>
                            <p className="text-xs leading-snug tracking-wide text-gray-900 text-opacity-100">
                                Livestream đấu giá và mở bán chính thức - Lần 1
                            </p>
                        </div>
                    </div>
                    {/* left timeline */}
                    {/* <div
                        className="mb-8 flex justify-end flex-row-reverse items-center w-full left-timeline"
                        data-aos="fade-left"
                        data-aos-delay="1400"
                    >
                        <div className="z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full vertical-timeline-date"></div>
                        <div className="order-1 rounded-lg shadow-xl w-8/12 pl-3 py-4">
                            <h3 className="!text-[#E5C289] text-sm sm:!text-[22px]">
                                09/10
                            </h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-black text-opacity-100">
                                Livestream đấu giá và mở bán chính thức - Lần 1
                            </p>
                        </div>
                    </div> */}
                    {/* right timeline */}
                    <div
                        className="mb-1 flex justify-end items-center w-full right-timeline"
                        data-aos="fade-right"
                        data-aos-delay="1000"
                    >
                        <div className="z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full vertical-timeline-date"></div>
                        <div className="order-1  rounded-lg shadow-xl w-8/12 pl-3 py-4  text-center vertical-timeline-text ">
                            <h3 className="!text-[#E5C289] text-sm sm:!text-[22px]">
                                30/10
                            </h3>
                            <p className="text-xs leading-snug tracking-wide text-gray-900 text-opacity-100">
                                Livestream đấu giá và mở bán chính thức - Lần 2
                            </p>
                        </div>
                    </div>
                    {/* left timeline */}
                </div>
            </div>
        </div>
    );
};

export default VerticalTimeline;
