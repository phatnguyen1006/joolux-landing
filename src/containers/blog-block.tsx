import Link from "@components/ui/link";
import React, { FC } from "react";
import Image from "next/image";
import { Blog } from "@framework/types";
import { DateTime } from "luxon";
import { ROUTES } from "@utils/routes";
import { toBase64 } from "@utils/toBase64";
import { shimmer } from "@utils/shimmer";
const placeholderImage = `/assets/placeholder/products/product-list.svg`;
const BlogBlock: FC<{ blogs: Blog[] }> = ({ blogs }) => (
    <div className="mx-auto max-w-[1234px] text-center pt-4 smJl:pb-16 pb-10 px-8">
        <div className="border-t border-[#e7e7e7] mb-8" />
        <h1
            className="font-semibold leading-[1.33] text-lg mb-7"
            data-chext-position
            data-chext-overflow
            style={{}}
        >
            Blog
        </h1>
        <div className="flex flex-wrap -mx-4 smJl:mb-8 text-left">
            {blogs?.map((blog) => {
                return (
                    <div key={blog?._id} className="px-4 w-1/2 md:w-1/4 mb-4">
                        <Link href={`${ROUTES.BLOG}/${blog?.slug}`}>
                            <div className="blog-thumb-image">
                                <div className="blog-lazyload-image h-full">
                                    <Image
                                        className="w-full h-full object-cover"
                                        alt="blog"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                            shimmer(565, 275),
                                        )}`}
                                        src={
                                            blog?.thumbnail || placeholderImage
                                        }
                                    />
                                </div>
                            </div>
                        </Link>
                        <Link
                            className="text-primary hover:text-secondary transition-colors duration-200"
                            href={`${ROUTES.BLOG}/${blog?.slug}`}
                        >
                            <h6
                                className="font-semibold leading-[1.333] mt-5 mb-2 text-[15px]"
                                data-chext-position
                                data-chext-overflow
                                style={{}}
                            >
                                {blog?.title}
                            </h6>
                        </Link>
                        <div
                            className="text-xs flex items-center"
                            data-chext-position
                            data-chext-overflow
                            style={{}}
                        >
                            <span className="createIconSvgWrapper mr-2">
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
                                    <path
                                        d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            {DateTime.fromISO(blog?.createdAt).toFormat(
                                "dd/MM/yyyy",
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
        <Link href="/blog" className="inline-flex" aria-label="blog-show-more">
            <button
                type="button"
                className="blog-button mt-2 md:flex hidden"
                data-chext-position
                data-chext-overflow
                style={{}}
            >
                Xem Thêm
            </button>
        </Link>
        <Link href="/blog" className="flex w-full" aria-label="blog-show-all">
            <button
                type="button"
                className="blog-button-show-all md:hidden border-primary text-primary"
                data-chext-position
                data-chext-overflow
                style={{}}
            >
                Xem Tất Cả
            </button>
        </Link>
    </div>
);
export default BlogBlock;
