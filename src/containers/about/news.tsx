import React, { FC } from "react";
import { useWindowSize } from "@utils/use-window-size";
import Carousel from "@components/ui/carousel/carousel";
import Image from "next/image";
import { toBase64 } from "@utils/toBase64";
import { shimmer } from "@utils/shimmer";
import { SwiperSlide } from "swiper/react";
// import { newsCarousel } from "@framework/static/news";
const breakpoints = {
    "1500": {
        slidesPerView: 4,
    },
    "640": {
        slidesPerView: 4,
    },
    "0": {
        slidesPerView: 4,
    },
};
function getImage(deviceWidth: number, imgObj: any) {
    return deviceWidth < 640
        ? { url: imgObj.mobile.url, width: 145, height: 60 }
        : { url: imgObj.desktop.url, width: 205, height: 95 };
}

const News: FC<{
    news: {
        id: number;
        title: string;
        slug: string;
        image: {
            mobile: {
                url: string;
                width: number;
                height: number;
            };
            desktop: {
                url: string;
                width: number;
                height: number;
            };
        };
    }[];
}> = ({ news }) => {
    const { width } = useWindowSize();
    return (
        <div className="border-t border-[#cfcfcf] ">
            <div className="mx-auto max-w-[1234px] py-10 sm:py-16 font-body overflow-hidden px-5">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3 lg:w-1/4 md:pr-6 lg:pr-14">
                        <h5
                            style={{ fontSize: 32 }}
                            className="font-brand mb-8 text-[#101010]"
                        >
                            Truyền thông viết về chúng tôi
                        </h5>
                    </div>
                    <div className="w-full md:w-2/3 lg:w-3/4 news-carousel relative">
                        <Carousel
                            breakpoints={breakpoints}
                            centeredSlides={false}
                            spaceBetween={20}
                            autoplay={{ delay: 3000 }}
                            loopedSlides={4}
                            slidesPerGroup={4}
                            autoHeight={false}
                            buttonClassName="hidden"
                            pagination={{
                                clickable: true,
                            }}
                        >
                            {news?.map((news) => {
                                const selectedImage = getImage(
                                    width,
                                    news.image,
                                );
                                return (
                                    <SwiperSlide
                                        className="carouselItem px-0 2xl:px-3.5 smJl:h-[104px] smJl:w-[226px] w-[105px] h-[60px]"
                                        key={`banner--key-${news?.id}`}
                                    >
                                        <div>
                                            <a
                                                href={news.slug}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="bg-gray-100 py-2 px-4 xl:py-5 xl:px-8 "
                                                tabIndex={-1}
                                                style={{
                                                    width: "100%",
                                                    display: "inline-block",
                                                }}
                                            >
                                                <div className="flex h-full">
                                                    <Image
                                                        width={
                                                            selectedImage.width
                                                        }
                                                        height={
                                                            selectedImage.height
                                                        }
                                                        placeholder="blur"
                                                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                                            shimmer(
                                                                selectedImage.width,
                                                                selectedImage.height,
                                                            ),
                                                        )}`}
                                                        src={
                                                            selectedImage?.url ||
                                                            "/assets/images/hero/banner-2-jl.jpg"
                                                        }
                                                        className="m-auto"
                                                        alt={news.title}
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default News;
