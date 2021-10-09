import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import ImageMagnifier from "@components/ui/magnifier-image";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default function VerticalCarousel({ gallery }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <div className="gallery-container col-span-2">
                <div className="gallery-thumbs-col">
                    <div className="swiper-button-prev-jl">
                        <span
                            className="createIconSvgWrapper w-7 h-7 max-w-[30px] max-h-[30px]"
                            style={{
                                flex: "0 0 30px",
                            }}
                        >
                            <svg
                                fillRule="evenodd"
                                clipRule="evenodd"
                                strokeLinejoin="round"
                                strokeMiterlimit="1.414"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                                className="createIconSvg"
                            >
                                <g fill="none">
                                    <path
                                        d="M5.25 15.375L12 8.625L18.75 15.375"
                                        stroke="currentColor"
                                        strokeWidth="2.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </span>
                    </div>
                    <Swiper
                        centeredSlidesBounds
                        key="swiper-thumbs"
                        slidesPerView={4}
                        watchOverflow
                        height={460}
                        spaceBetween={10}
                        direction="vertical"
                        onSwiper={setThumbsSwiper}
                        navigation={{
                            nextEl: ".swiper-button-next-jl",
                            prevEl: ".swiper-button-prev-jl",
                        }}
                        className="gallery-thumbs"
                    >
                        <div className="swiper-wrapper">
                            {gallery?.map((item, index: number) => (
                                <SwiperSlide
                                    key={`product-gallery-thumb-key-${index}`}
                                >
                                    <img
                                        key={`product-gallery-thumb-image-${index}`}
                                        src={
                                            `${process.env.NEXT_PUBLIC_BASE_IMAGE}${item}` ||
                                            "/assets/placeholder/products/product-gallery.svg"
                                        }
                                        className="col-span-1 transition duration-150 ease-in hover:opacity-90"
                                        alt={`${index}`}
                                    />
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                    <div className="swiper-button-next-jl">
                        <span
                            className="createIconSvgWrapper w-7 h-7 max-w-[30px] max-h-[30px]"
                            style={{
                                flex: "0 0 30px",
                            }}
                        >
                            <svg
                                fillRule="evenodd"
                                clipRule="evenodd"
                                strokeLinejoin="round"
                                strokeMiterlimit="1.414"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                preserveAspectRatio="xMidYMid meet"
                                className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU"
                            >
                                <g fill="none">
                                    <path
                                        d="M5.25 8.625L12 15.375L18.75 8.625"
                                        stroke="currentColor"
                                        strokeWidth="2.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </span>
                    </div>
                </div>
                <Swiper
                    watchOverflow
                    key="swiper-banner"
                    watchSlidesVisibility
                    watchSlidesProgress
                    preventInteractionOnTransition
                    effect={"fade"}
                    thumbs={{ swiper: thumbsSwiper }}
                    fadeEffect={{ crossFade: true }}
                    className="gallery-main"
                    // navigation
                >
                    <div className="swiper-wrapper">
                        {gallery?.map((item, index: number) => (
                            <SwiperSlide key={`product-gallery-key-${index}`}>
                                <ImageMagnifier
                                    key={`product-gallery-magnifier-${index}`}
                                    src={
                                        `${process.env.NEXT_PUBLIC_BASE_IMAGE}${item}` ||
                                        "/assets/placeholder/products/product-gallery.svg"
                                    }
                                    className="col-span-1 transition duration-150 ease-in hover:opacity-90"
                                    alt={`${index}`}
                                />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </>
    );
}
