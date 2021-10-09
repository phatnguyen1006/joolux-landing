import { Blog } from "@framework/types";
import React, { FC } from "react";
import { DateTime } from "luxon";
import Link from "@components/ui/link";
import { ROUTES } from "@utils/routes";
import Pagination from "@components/common/pagination";
import Image from "next/image";
import { toBase64 } from "@utils/toBase64";
import { shimmer } from "@utils/shimmer";
interface IBlogLayoutBodyProps {
    blogs: Blog[];
    pagination: {
        hasNextPage: number;
        hasPreviousPage: number;
        total: number;
        totalPage: number;
    };
    isLoading: boolean;
}
const placeholderImage = `/assets/placeholder/products/product-list.svg`;

const BlogLayoutBody: FC<IBlogLayoutBodyProps> = ({
    blogs,
    pagination,
    isLoading,
}) => {
    const renderBlogs = () => {
        return blogs.map((blog) => {
            return (
                <div
                    key={blog?._id}
                    className="border-[#e7e7e7] pb-10 pt-8 border-b"
                >
                    <div className="BlogPostCard__Container-cd57ja-0 eoicyw">
                        <div className="ThumbImage__Container-sc-1m3pb9t-0  w-[60px] isvsWb flex-none">
                            <div className="LazyLoadImage__ImageContainer-sc-1s3sqxo-0 bDpKwl h-full relative">
                                <Image
                                    src={blog?.thumbnail || placeholderImage}
                                    layout="fill"
                                    placeholder="blur"
                                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                        shimmer(565, 275),
                                    )}`}
                                />
                            </div>
                        </div>

                        <div className="pl-5 smJl:pl-7 content-post">
                            <Link
                                href={`${ROUTES.BLOG}/${blog?.slug}`}
                                className="hover:text-secondary transition-colors duration-200"
                            >
                                <h4 className="m-0 font-body text-xl mb-3 font-semibold">
                                    {blog?.title}
                                </h4>
                            </Link>

                            <div className="text-xs flex items-center">
                                <span className="createIcon__SvgWrapper-sc-7pbd21-1 jZjWRN mr-2">
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
                                {DateTime.fromISO(blog?.createdAt).toFormat(
                                    "dd/MM/yyyy",
                                )}
                            </div>
                            <h6 className="Typography__Paragraph-sc-18cqegv-6 aLuzu mt-5 mb-4">
                                {blog?.shortBody}
                            </h6>
                            <Link
                                href={`${ROUTES.BLOG}/${blog?.slug}`}
                                className="ml-0 pl-0 BaseButton__Anchor-x7xjk1-0 UxMA"
                            >
                                <button
                                    type="button"
                                    className="BaseButton__BaseButtonStyled-x7xjk1-1 GhostButton__CustomGhostStyledButton-rftl7l-0 fa-dKgr"
                                >
                                    Đọc Thêm
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="BlogLayout__Body-sc-1ragf6m-0 blog-layout-body block">
            {renderBlogs()}
            {/* <h1>Hello</h1> */}
            {/* <div className="border-[#e7e7e7] pb-10 border-b">
                <div className='BlogPostCard__Container-cd57ja-0 eoicyw'>
                    <div className='ThumbImage__Container-sc-1m3pb9t-0 isvsWb flex-none'>
                        <div className='LazyLoadImage__ImageContainer-sc-1s3sqxo-0 bDpKwl h-full relative'>
                            <img src="https://images.ctfassets.net/b7g5dqsgeo8w/1UY3xrLbMvwAZprgYKxAFU/7872553d53876b74d20640f4ca556e90/vuo__ng.jpg" />
                        </div>
                    </div>

                    <div className='pl-5 smJl:pl-7 content-post'>
                        
                        <a className='hover:text-secondary transition-colors duration-200'>
                            <h4 className='m-0 Typography__H4-sc-18cqegv-3 ddYKZJ text-xl mb-3 font-semibold'>Joolux được các shark 'Thương vụ bạc tỷ' đánh giá cao</h4>
                        </a>

                        <div className='text-xs flex items-center'>
                            <span className='createIcon__SvgWrapper-sc-7pbd21-1 jZjWRN mr-2'>
                            <svg fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU"><path d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z" fill="currentColor"></path></svg>
                            </span>
                            02/08/2021      
                        </div>
                        <h6 className='Typography__Paragraph-sc-18cqegv-6 aLuzu mt-5 mb-4'>Các nhà đầu tư “Shark Tank - Thương vụ bạc tỷ” ấn tượng với mô hình kinh doanh hàng hiệu đã qua sử dụng của start-up Joolux.
                        </h6>
                        <a className='ml-0 pl-0 BaseButton__Anchor-x7xjk1-0 UxMA'>
                            <button type="button" className='BaseButton__BaseButtonStyled-x7xjk1-1 GhostButton__CustomGhostStyledButton-rftl7l-0 fa-dKgr'>Đọc Thêm</button>
                        </a>
                    </div>
                </div>
           </div> */}

            {/* <div className="border-[#e7e7e7] pb-10 pt-8 border-b ">
                <div className='BlogPostCard__Container-cd57ja-0 eoicyw'>
                    <div className='ThumbImage__Container-sc-1m3pb9t-0 isvsWb flex-none'>
                        <div className='LazyLoadImage__ImageContainer-sc-1s3sqxo-0 bDpKwl h-full relative'>
                            <img src="https://images.ctfassets.net/b7g5dqsgeo8w/101Jjh6DafJno6ny96K31j/2bd0b0bfc733811c938438433e0fc040/hi__nh_thumnail.jpg" />
                        </div>
                    </div>

                    <div className='pl-5 smJl:pl-7 content-post'>
                        
                        <a className='hover:text-secondary transition-colors duration-200'>
                            <h4 className='m-0 Typography__H4-sc-18cqegv-3 ddYKZJ text-xl mb-3 font-semibold'>Ngọc Thanh Tâm xả kho hàng hiệu ủng hộ quỹ Vaccine</h4>
                        </a>

                        <div className='text-xs flex items-center'>
                            <span className='createIcon__SvgWrapper-sc-7pbd21-1 jZjWRN mr-2'>
                            <svg fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU"><path d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z" fill="currentColor"></path></svg>
                            </span>
                            02/08/2021      
                        </div>
                        <h6 className='Typography__Paragraph-sc-18cqegv-6 aLuzu mt-5 mb-4'>Diễn viên Ngọc Thanh Tâm tạo dấu ấn với phong cách thời trang và sở hữu “kho đồ hiệu khủng”, quyết định thanh lý, trích tiền ủng hộ quỹ vaccine Covid-19.
                        </h6>
                        <a className='ml-0 pl-0 BaseButton__Anchor-x7xjk1-0 UxMA'>
                            <button type="button" className='BaseButton__BaseButtonStyled-x7xjk1-1 GhostButton__CustomGhostStyledButton-rftl7l-0 fa-dKgr'>Đọc Thêm</button>
                        </a>
                    </div>
                </div>
           </div>




           <div className="border-[#e7e7e7] pb-10 pt-8 border-b ">
                <div className='BlogPostCard__Container-cd57ja-0 eoicyw'>
                    <div className='ThumbImage__Container-sc-1m3pb9t-0 isvsWb flex-none'>
                        <div className='LazyLoadImage__ImageContainer-sc-1s3sqxo-0 bDpKwl h-full relative'>
                            <img src="https://images.ctfassets.net/b7g5dqsgeo8w/4fxPx5FkiC9eZVdyVYAlOD/a220c8bb100b2371aff542ec6f980cb5/thumbnail.jpg" />
                        </div>
                    </div>

                    <div className='pl-5 smJl:pl-7 content-post'>
                        
                        <a className='hover:text-secondary transition-colors duration-200'>
                            <h4 className='m-0 Typography__H4-sc-18cqegv-3 ddYKZJ text-xl mb-3 font-semibold'>Loạt túi hiệu sang tay giảm giá sâu thời dịch</h4>
                        </a>

                        <div className='text-xs flex items-center'>
                            <span className='createIcon__SvgWrapper-sc-7pbd21-1 jZjWRN mr-2'>
                            <svg fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU"><path d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z" fill="currentColor"></path></svg>
                            </span>
                            25/06/2021      
                        </div>
                        <h6 className='Typography__Paragraph-sc-18cqegv-6 aLuzu mt-5 mb-4'>Các thiết kế của Louis Vuiitton, Chanel, Dior, Gucci... giảm giá sâu tại sàn giao dịch hàng hiệu đã qua sử dụng Joolux
                        </h6>
                        <a className='ml-0 pl-0 BaseButton__Anchor-x7xjk1-0 UxMA'>
                            <button type="button" className='BaseButton__BaseButtonStyled-x7xjk1-1 GhostButton__CustomGhostStyledButton-rftl7l-0 fa-dKgr'>Đọc Thêm</button>
                        </a>
                    </div>
                </div>
           </div>



           <div className="border-[#e7e7e7] pb-10 pt-8 border-b ">
                <div className='BlogPostCard__Container-cd57ja-0 eoicyw'>
                    <div className='ThumbImage__Container-sc-1m3pb9t-0 isvsWb flex-none'>
                        <div className='LazyLoadImage__ImageContainer-sc-1s3sqxo-0 bDpKwl h-full relative'>
                            <img src="https://images.ctfassets.net/b7g5dqsgeo8w/d2hslKcth5B7msnWyFusS/224d33eaad7fbe0bc1f79694416265e7/1-Omega-Silver-Snoopy-Speedmaster-50th-Anniversary.jpg" />
                        </div>
                    </div>

                    <div className='pl-5 smJl:pl-7 content-post'>
                        
                        <a className='hover:text-secondary transition-colors duration-200'>
                            <h4 className='m-0 Typography__H4-sc-18cqegv-3 ddYKZJ text-xl mb-3 font-semibold'>Omega Speedmaster Silver Snoopy Anniversary 50 kỷ niệm các sứ mệnh Apollo</h4>
                        </a>

                        <div className='text-xs flex items-center'>
                            <span className='createIcon__SvgWrapper-sc-7pbd21-1 jZjWRN mr-2'>
                            <svg fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU"><path d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z" fill="currentColor"></path></svg>
                            </span>
                            05/01/2021      
                        </div>
                        <h6 className='Typography__Paragraph-sc-18cqegv-6 aLuzu mt-5 mb-4'>Đồng hồ Omega Snoopy Speedmaster 50th Anniversary là chiếc đồng hồ thứ ba trong sê-ri “Snoopy” có khả năng sưu tập cao và bất kỳ ai chưa kịp sỡ hữu chúng sẽ rất vui khi biết đây không phải là phiên bản giới hạn.
                        </h6>
                        <a className='ml-0 pl-0 BaseButton__Anchor-x7xjk1-0 UxMA'>
                            <button type="button" className='BaseButton__BaseButtonStyled-x7xjk1-1 GhostButton__CustomGhostStyledButton-rftl7l-0 fa-dKgr'>Đọc Thêm</button>
                        </a>
                    </div>
                </div>
           </div>



           <div className="border-[#e7e7e7] pb-10 pt-8 border-b ">
                <div className='BlogPostCard__Container-cd57ja-0 eoicyw'>
                    <div className='ThumbImage__Container-sc-1m3pb9t-0 isvsWb flex-none'>
                        <div className='LazyLoadImage__ImageContainer-sc-1s3sqxo-0 bDpKwl h-full relative'>
                            <img src="https://images.ctfassets.net/b7g5dqsgeo8w/2KVkSQVAVzwKxIs2mihOvO/cdc0994459698de9448b88f829ae8423/louis-vuitton-stellar-times-joolux-journey-of-luxury-thumb.jpg" />
                        </div>
                    </div>

                    <div className='pl-5 smJl:pl-7 content-post'>
                        
                        <a className='hover:text-secondary transition-colors duration-200'>
                            <h4 className='m-0 Typography__H4-sc-18cqegv-3 ddYKZJ text-xl mb-3 font-semibold'>Thương hiệu xa xỉ Louis Vuitton mang vũ trụ vào BST nữ trang siêu cao cấp “Stellar Times”</h4>
                        </a>

                        <div className='text-xs flex items-center'>
                            <span className='createIcon__SvgWrapper-sc-7pbd21-1 jZjWRN mr-2'>
                            <svg fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" className="createIcon__InlineSvg-sc-7pbd21-0 ftOWGU"><path d="M11.5793 0.333008C14.6388 0.333008 17.4089 1.5766 19.4198 3.57857C21.4226 5.58914 22.6667 8.35809 22.6667 11.4163C22.6667 14.4746 21.4226 17.2435 19.4198 19.2541C17.4084 21.2561 14.6388 22.4997 11.5793 22.4997C8.5198 22.4997 5.75024 21.2561 3.74744 19.2541C1.73605 17.2435 0.5 14.4751 0.5 11.4163C0.5 8.35809 1.73551 5.58914 3.7469 3.57857C5.75024 1.5766 8.5198 0.333008 11.5793 0.333008ZM17.2301 10.8115C17.5625 10.8115 17.8267 11.0841 17.8267 11.4163C17.8267 11.7486 17.5625 12.0212 17.2301 12.0212H11.5965H11.5793C11.3575 12.0212 11.1616 11.8935 11.0595 11.7148L11.051 11.7062L11.0424 11.689V11.6804L11.0338 11.6632L11.0252 11.6461V11.6375L11.0166 11.6203L11.008 11.6117V11.5945L10.9994 11.5774V11.5688L10.9908 11.5516V11.5344V11.5258V11.5172L10.9822 11.5087V11.4915V11.4743V11.4593V11.4507V11.4335V11.4163V4.20063C10.9822 3.8684 11.2464 3.60434 11.5788 3.60434C11.9111 3.60434 12.1839 3.8684 12.1839 4.20063V10.8115H17.2301ZM18.5676 4.43089C16.778 2.64199 14.3064 1.54278 11.5793 1.54278C8.85217 1.54278 6.38061 2.64145 4.59098 4.43089C2.80993 6.21979 1.70168 8.69032 1.70168 11.4163C1.70168 14.1424 2.8094 16.6129 4.59098 18.4023C6.38061 20.1912 8.85217 21.2904 11.5793 21.2904C14.3064 21.2904 16.778 20.1912 18.5676 18.4023C20.3573 16.6134 21.4655 14.1429 21.4655 11.4163C21.4655 8.69032 20.3578 6.21979 18.5676 4.43089Z" fill="currentColor"></path></svg>
                            </span>
                            04/01/2021      
                        </div>
                        <h6 className='Typography__Paragraph-sc-18cqegv-6 aLuzu mt-5 mb-4'>Đồng hồ Omega Snoopy Speedmaster 50th Anniversary là chiếc đồng hồ thứ ba trong sê-ri “Snoopy” có khả năng sưu tập cao và bất kỳ ai chưa kịp sỡ hữu chúng sẽ rất vui khi biết đây không phải là phiên bản giới hạn.
                        </h6>
                        <a className='ml-0 pl-0 BaseButton__Anchor-x7xjk1-0 UxMA'>
                            <button type="button" className='BaseButton__BaseButtonStyled-x7xjk1-1 GhostButton__CustomGhostStyledButton-rftl7l-0 fa-dKgr'>Đọc Thêm</button>
                        </a>
                    </div>
                </div>
           </div> */}
            <div className="flex  py-4">
                {!isLoading && pagination?.total !== 0 && (
                    <Pagination
                        className={
                            "container flex justify-end mx-auto product-paginate mb-4 overflow-x-auto"
                        }
                        pagination={pagination}
                    />
                )}
            </div>
        </div>
    );
};
export default BlogLayoutBody;
