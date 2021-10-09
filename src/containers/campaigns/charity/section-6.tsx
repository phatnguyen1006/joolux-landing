import React, { FC } from "react";
import Image from "next/image";
import { useWindowSize } from "@utils/use-window-size";
// import { toBase64 } from "@utils/toBase64";
// import { Button } from "@components/ui/button";
// import { shimmer } from "@utils/shimmer";

interface IFunderImg {
    id: number;
    image: {
        mobile: {
            width: number;
            height: number;
        };
        desktop: {
            width: number;
            height: number;
        };
    };
}

const fundersImg: IFunderImg[] = [
    {
        id: 1,
        image: {
            mobile: {
                width: 84.83,
                height: 84.83,
            },
            desktop: {
                width: 139,
                height: 139,
            },
        },
    },
    {
        id: 2,
        image: {
            mobile: {
                width: 185.88,
                height: 41.5,
            },
            desktop: {
                width: 339,
                height: 68,
            },
        },
    },
    {
        id: 3,
        image: {
            mobile: {
                width: 97,
                height: 39,
            },
            desktop: {
                width: 160,
                height: 64,
            },
        },
    },
    {
        id: 4,
        image: {
            mobile: {
                width: 80,
                height: 39,
            },
            desktop: {
                width: 132,
                height: 65,
            },
        },
    },
    {
        id: 5,
        image: {
            mobile: {
                width: 83,
                height: 38,
            },
            desktop: {
                width: 137,
                height: 63,
            },
        },
    },
    {
        id: 6,
        image: {
            mobile: {
                width: 73,
                height: 84,
            },
            desktop: {
                width: 121,
                height: 121,
            },
        },
    },
    {
        id: 7,
        image: {
            mobile: {
                width: 133.65,
                height: 86.66,
            },
            desktop: {
                width: 219,
                height: 142,
            },
        },
    },
    {
        id: 8,
        image: {
            mobile: {
                width: 68.35,
                height: 34.78,
            },
            desktop: {
                width: 112,
                height: 57,
            },
        },
    },
    {
        id: 9,
        image: {
            mobile: {
                width: 172,
                height: 178,
            },
            desktop: {
                width: 172,
                height: 178,
            },
        },
    },
    {
        id: 10,
        image: {
            mobile: {
                width: 107.41,
                height: 68.96,
            },
            desktop: {
                width: 250,
                height: 200,
            },
        },
    },
    {
        id: 11,
        image: {
            mobile: {
                width: 84.83,
                height: 10.98,
            },
            desktop: {
                width: 139,
                height: 18,
            },
        },
    },
    {
        id: 12,
        image: {
            mobile: {
                width: 89.1,
                height: 17.09,
            },
            desktop: {
                width: 146,
                height: 28,
            },
        },
    },
    {
        id: 13,
        image: {
            mobile: {
                width: 57.97,
                height: 37.84,
            },
            desktop: {
                width: 145,
                height: 67,
            },
        },
    },
    {
        id: 14,
        image: {
            mobile: {
                width: 77.5,
                height: 38.45,
            },
            desktop: {
                width: 127,
                height: 63,
            },
        },
    },
    {
        id: 15,
        image: {
            mobile: {
                width: 101.91,
                height: 10.37,
            },
            desktop: {
                width: 167,
                height: 17,
            },
        },
    },
    {
        id: 16,
        image: {
            mobile: {
                width: 127,
                height: 63,
            },
            desktop: {
                width: 55,
                height: 55,
            },
        },
    },
    {
        id: 17,
        image: {
            mobile: {
                width: 84.83,
                height: 26.85,
            },
            desktop: {
                width: 139,
                height: 44,
            },
        },
    },
];

function getImage(deviceWidth: number, imgIndex: number) {
    const imgObj: IFunderImg = fundersImg.filter(
        (img) => img.id == imgIndex,
    )[0];
    if (imgIndex === 2) {
        return deviceWidth < 942
            ? {
                  width: imgObj.image.mobile.width,
                  height: imgObj.image.mobile.height,
              }
            : {
                  width: imgObj.image.desktop.width,
                  height: imgObj.image.desktop.height,
              };
    }
    return deviceWidth < 640
        ? {
              width: imgObj.image.desktop.width,
              height: imgObj.image.desktop.height,
          }
        : {
              width: imgObj.image.desktop.width,
              height: imgObj.image.desktop.height,
          };
}

const SectionSix: FC = () => {
    const { width } = useWindowSize();
    return (
        <div className="section-1">
            <div
                data-aos="fade-up"
                data-aos-delay="700"
                className="mx-auto max-w-[1400px] text-center pt-2 lg:pb-8 pb-6 px-2 md:px-12 overflow-hidden"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 mt-6 items-center md:auto-cols-[170px] md:items-stretch">
                    {/* x0 y0 */}
                    <div className="w-full p-4 flex flex-col items-start px-4">
                        <p className="text-[#231f20] font-medium smJl:font-normal smJl:text-[16px] lg:text-[28px] pt-0 pb-4 px-0">
                            Đơn vị tổ chức
                        </p>
                        <div className="grid grid-cols-3 justify-items-between lg:justify-items-start gap-4 w-full overflow-hidden">
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f1.png"
                                    width={getImage(width, 1).width}
                                    height={getImage(width, 1).height}
                                    quality={100}
                                />
                            </div>
                            <div className="col-span-2 flex sm:justify-center items-center w-[255px] h-[102px] px-1 lg:h-[170px] lg:w-[380px] bg-white rounded-lg">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f2.png"
                                    width={getImage(width, 2).width}
                                    height={getImage(width, 2).height}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                    {/* x0 y1 */}
                    <div className="w-full p-4 flex flex-col items-start px-4 py-4 text-left">
                        <p className="text-[#231f20] font-medium smJl:font-normal smJl:text-[16px] lg:text-[28px] pt-0 pb-4 px-0">
                            Bảo trợ truyền thông
                        </p>
                        <div className="grid grid-cols-3 justify-items-start gap-4 w-full">
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f3.png"
                                    width={getImage(width, 3).width}
                                    height={getImage(width, 3).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f4.png"
                                    width={getImage(width, 4).width}
                                    height={getImage(width, 4).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f5.png"
                                    width={getImage(width, 5).width}
                                    height={getImage(width, 5).height}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Row 2 */}
                    {/* <div className="flex justify-between md:flex-row flex-col mt-0 items-center md:items-stretch"> */}
                    {/* x1 y0 */}
                    <div className="w-full p-4 flex flex-col items-start px-4 text-left">
                        <p className="text-[#231f20] font-medium smJl:font-normal smJl:text-[16px] lg:text-[28px] pt-0 pb-4 px-0">
                            Đơn vị tài trợ
                        </p>
                        <div className="grid grid-cols-3 justify-items-start gap-4 lg:gap-y-8 w-full">
                            {/* Grid 6 items: Row 1 */}
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f6.png"
                                    width={getImage(width, 6).width}
                                    height={getImage(width, 6).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f7.png"
                                    width={getImage(width, 7).width}
                                    height={getImage(width, 7).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f8.jpg"
                                    width={getImage(width, 8).width}
                                    height={getImage(width, 8).height}
                                    quality={100}
                                />
                            </div>
                            {/* Grid5 items: Row 2 */}
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f9.jpg"
                                    width={getImage(width, 9).width}
                                    height={getImage(width, 9).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center pl-5 h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f10.png"
                                    width={getImage(width, 10).width}
                                    height={getImage(width, 10).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f11.jpg"
                                    width={getImage(width, 11).width}
                                    height={getImage(width, 11).height}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-4 flex flex-col items-start px-4 text-left">
                        <p className="text-[#231f20] font-medium smJl:font-normal smJl:text-[16px] lg:text-[28px] pt-0 pb-4 px-0">
                            Đơn vị đồng hành
                        </p>
                        <div className="grid grid-cols-3 justify-items-start gap-4 lg:gap-x-0 lg:gap-y-8 w-full">
                            {/* Grid 6 items: Row 1 */}
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f12.png"
                                    width={getImage(width, 12).width}
                                    height={getImage(width, 12).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f13.png"
                                    width={getImage(width, 13).width}
                                    height={getImage(width, 13).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f14.jpg"
                                    width={getImage(width, 14).width}
                                    height={getImage(width, 14).height}
                                    quality={100}
                                />
                            </div>
                            {/* Grid5 items: Row 2 */}
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f15.svg"
                                    width={getImage(width, 15).width}
                                    height={getImage(width, 15).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f16.png"
                                    width={getImage(width, 16).width}
                                    height={getImage(width, 16).height}
                                    quality={100}
                                />
                            </div>
                            <div className="flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden">
                                <Image
                                    className=""
                                    src="/assets/images/funder-v2/f17.jpeg"
                                    width={getImage(width, 17).width}
                                    height={getImage(width, 17).height}
                                    quality={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionSix;
