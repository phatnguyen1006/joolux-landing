import { Blog } from "@framework/types";
import React, { FC } from "react";
import BlogCategory from "./blog-category";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import parse from "html-react-parser";
import { DateTime } from "luxon";
import Link from "@components/ui/link";
import { ROUTES } from "@utils/routes";
import BlogItemCenter from "./blog-breadcrumb";
interface IBlogReviewPostProps {
    currentBlog: Blog;
    prevBlog: Blog;
    nextBlog: Blog;
    seo: {
        name: string;
        slug: string;
        description: string;
        image: string;
    };
    isLoading: boolean;
}
const placeholderImage = `/assets/placeholder/products/product-list.svg`;

const BlogReviewPost: FC<IBlogReviewPostProps> = ({
    currentBlog,
    prevBlog,
    nextBlog,
    seo,
    isLoading,
}) => {
    return (
        <div className="max-w-[1440px] py-4 lg:px-8 px-5 blogContainer mx-auto">
            <div className="pt-8">
                <BlogItemCenter seo={seo} />
            </div>
            <div className="flex flex-wrap mt-2 mb-12">
                {isLoading ? (
                    <ProductFeedLoader
                        limit={20}
                        uniqueKey="blog-review-post loader"
                    />
                ) : (
                    <div className="BlogLayout__Body-sc-1ragf6m-0 review-post w-full mb-10">
                        <h1 className="Typography__H1-sc-18cqegv-0 h1-review-blog text-3xl smJl:text-4xl mb-3">
                            {currentBlog?.title}
                        </h1>

                        <div className="text-xs flex items-center mb-8">
                            <span className="createIcon__SvgWrapper-sc-7pbd21-1 time-blog mr-2">
                                <svg
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="1.414"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-labelledby="title"
                                    viewBox="0 0 24 24"
                                    preserveAspectRatio="xMidYMid meet"
                                    className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU"
                                >
                                    <path
                                        d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </span>
                            {DateTime.fromISO(currentBlog?.createdAt).toFormat(
                                "dd/MM/yyyy",
                            )}
                        </div>

                        <div className="BlogContentWrapper-qje2m-0 content-review">
                            {parse(currentBlog?.body)}
                        </div>
                        <div className="pt-6 border-t border-gray-900 mt-8"></div>

                        <div className="flex -mx-5 flex-wrap">
                            <div className="w-1/2 px-5">
                                {prevBlog?.title && (
                                    <>
                                        {" "}
                                        <div className="flex items-center text-sm smJl:text-15px font-semibold text-gray-700 mb-5 whitespace-no-wrap">
                                            <span className="createIcon__SvgWrapper-sc-7pbd21-1 iSSfWs mr-2 sm:mr-4  span-left">
                                                <svg
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit="1.414"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-labelledby="title"
                                                    viewBox="0 0 24 24"
                                                    preserveAspectRatio="xMidYMid meet"
                                                    className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU svg-left"
                                                >
                                                    <path
                                                        d="M8.35156 16.8438L8.625 16.5703C8.72917 16.4922 8.78125 16.388 8.78125 16.2578C8.78125 16.1276 8.72917 16.0104 8.625 15.9062L5.34375 12.6641H20.0312C20.1615 12.6641 20.2656 12.625 20.3438 12.5469C20.4479 12.4427 20.5 12.3255 20.5 12.1953V11.8047C20.5 11.6745 20.4479 11.5703 20.3438 11.4922C20.2656 11.388 20.1615 11.3359 20.0312 11.3359H5.34375L8.625 8.09375C8.72917 7.98958 8.78125 7.8724 8.78125 7.74219C8.78125 7.61198 8.72917 7.50781 8.625 7.42969L8.35156 7.15625C8.2474 7.05208 8.13021 7 8 7C7.89583 7 7.79167 7.05208 7.6875 7.15625L3.15625 11.6875C3.05208 11.7656 3 11.8698 3 12C3 12.1302 3.05208 12.2344 3.15625 12.3125L7.6875 16.8438C7.79167 16.9479 7.89583 17 8 17C8.13021 17 8.2474 16.9479 8.35156 16.8438Z"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                            </span>
                                            Bài Viết Trước Đó
                                        </div>
                                        <div className="flex smJl:flex-row flex-col-reverse">
                                            <Link
                                                className="flex-none mr-4 smJl:block hidden"
                                                href={`${ROUTES.BLOG}/${prevBlog?.slug}`}
                                            >
                                                <div className="ThumbImage__Container-sc-1m3pb9t-0 img-left smJl:w-[130px] w-0">
                                                    <img
                                                        className=""
                                                        src={
                                                            prevBlog?.thumbnail ||
                                                            placeholderImage
                                                        }
                                                    />
                                                </div>
                                            </Link>
                                            <Link
                                                className="text-primary hover:text-secondary text-15px font-semibold transition-colors duration-200"
                                                href={`${ROUTES.BLOG}/${prevBlog?.slug}`}
                                            >
                                                {prevBlog?.title}
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="w-1/2 px-5">
                                {nextBlog?.title && (
                                    <>
                                        {" "}
                                        <div className="flex items-center text-sm smJl:text-15px font-semibold text-gray-700 mb-5 justify-end text-right whitespace-no-wrap">
                                            Bài Viết Kế Tiếp
                                            <span className="createIcon__SvgWrapper-sc-7pbd21-1 iSSfWs ml-2 smJl:ml-4 span-right">
                                                <svg
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit="1.414"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-labelledby="title"
                                                    viewBox="0 0 24 24"
                                                    preserveAspectRatio="xMidYMid meet"
                                                    className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU svg-right"
                                                >
                                                    <path
                                                        d="M15.1484 16.8438L14.875 16.5703C14.7708 16.4922 14.7188 16.388 14.7188 16.2578C14.7188 16.1276 14.7708 16.0104 14.875 15.9062L18.1562 12.6641H3.46875C3.33854 12.6641 3.23438 12.625 3.15625 12.5469C3.05208 12.4427 3 12.3255 3 12.1953V11.8047C3 11.6745 3.05208 11.5703 3.15625 11.4922C3.23438 11.388 3.33854 11.3359 3.46875 11.3359H18.1562L14.875 8.09375C14.7708 7.98958 14.7188 7.8724 14.7188 7.74219C14.7188 7.61198 14.7708 7.50781 14.875 7.42969L15.1484 7.15625C15.2526 7.05208 15.3698 7 15.5 7C15.6042 7 15.7083 7.05208 15.8125 7.15625L20.3438 11.6875C20.4479 11.7656 20.5 11.8698 20.5 12C20.5 12.1302 20.4479 12.2344 20.3438 12.3125L15.8125 16.8438C15.7083 16.9479 15.6042 17 15.5 17C15.3698 17 15.2526 16.9479 15.1484 16.8438Z"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex smJl:flex-row flex-col-reverse">
                                            <Link
                                                className="text-primary hover:text-secondary text-15px font-semibold transition-colors duration-200 w-full"
                                                href={`${ROUTES.BLOG}/${nextBlog?.slug}`}
                                            >
                                                {nextBlog?.title}
                                            </Link>
                                            <Link
                                                className="flex-none ml-4 sm:block hidden"
                                                href={`${ROUTES.BLOG}/${nextBlog?.slug}`}
                                            >
                                                <div className="ThumbImage__Container-sc-1m3pb9t-0 hKeRoM img-right smJl:w-[130px] w-0">
                                                    <img
                                                        src={
                                                            nextBlog?.thumbnail ||
                                                            placeholderImage
                                                        }
                                                    />
                                                </div>
                                            </Link>
                                        </div>{" "}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <BlogCategory />
            </div>
        </div>
    );
};
export default BlogReviewPost;
