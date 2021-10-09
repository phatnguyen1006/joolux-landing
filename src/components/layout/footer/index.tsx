import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import ActiveLink from "@components/ui/active-link";
import { ROUTES } from "@utils/routes";
// import {
//     PankodIcon,
//     GithubIcon,
//     TwitterIcon,
//     YoutubeIcon,
//     LinkedinIcon,
// } from "@components/icons";

export const Footer: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<{ email: string }>({
        mode: "all",
    });

    function onSubmit(input) {
        // Router.push(ROUTES.ORDER);
        console.log(input);
    }
    return (
        <footer className="bg-black text-white text-[15px] footer-container">
            <div className="footer-wrapper">
                <div className="flex lg:mb-6 md:mb-2 mb-0">
                    <div className="hidden lg:block pr-12 mr-2px">
                        <a href="/" aria-label="footer-logo">
                            <svg
                                width="50px"
                                height="50px"
                                className="text-secondary"
                                viewBox="0 0 100 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M49.994 0C22.386 0 0 22.386 0 49.994s22.386 49.994 49.994 49.994 49.994-22.376 49.994-49.994S77.612 0 49.994 0zm0 96.228c-25.525 0-46.222-20.697-46.222-46.234 0-25.537 20.697-46.222 46.222-46.222 25.525 0 46.234 20.697 46.234 46.222 0 25.525-20.697 46.234-46.234 46.234z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M64.266 34.93A13.708 13.708 0 0 0 53.4 40.242l-.151.202a1.634 1.634 0 0 0-.137 1.52 1.637 1.637 0 0 0 1.497.99c.061 0 .122-.005.182-.013h.056c.04-.005.08-.012.12-.022l.066-.016.105-.032.064-.022.1-.045.057-.028a1.08 1.08 0 0 0 .105-.06l.044-.027c.048-.031.094-.065.138-.102l.016-.014c.038-.033.074-.067.108-.101l.04-.045c.025-.026.051-.054.075-.084l.013-.014v-.012a10.555 10.555 0 1 1-.99 11.349l-1.327-2.875-4.07-8.773a13.894 13.894 0 0 0-4.435-4.777 13.863 13.863 0 1 0 3.27 20.01l.018-.021.012-.014v-.012a.206.206 0 0 0 .024-.035 1.912 1.912 0 0 0 .095-.147v-.016c.024-.042.044-.087.065-.13l.016-.041c.012-.032.024-.065.034-.097l.016-.052.024-.095.012-.054c0-.033.01-.067.015-.101.004-.034 0-.032 0-.049v-.155c0-.214-.043-.427-.125-.625l-.027-.056a1.625 1.625 0 0 0-2.689-.403l-.072.094a10.555 10.555 0 1 1 .673-11.974c.119.202.232.393.339.605l2.253 4.9v.014l1.412 3.042.32.684 1.145 2.49a13.91 13.91 0 0 0 4.741 5.271 13.822 13.822 0 1 0 7.62-25.346z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="flex-1 flex flex-wrap -mx-4">
                        <div className="px-4 w-full md:w-1/3 lg:w-1/4">
                            <h6 className="Typography__H6-sc-18cqegv-5 hnzrVF mb-4 font-semibold uppercase">
                                JOOLUX.COM
                            </h6>
                            <ul className="smJl:mb-10">
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href={ROUTES.VE_CHUNG_TOI}
                                    >
                                        <a className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary">
                                            Về chúng tôi
                                        </a>
                                    </ActiveLink>
                                </li>
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href={ROUTES.BLOG}
                                    >
                                        <a className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary">
                                            Blog
                                        </a>
                                    </ActiveLink>
                                </li>
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href={ROUTES.QUY_CHE_HOAT_DONG}
                                    >
                                        <a className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary">
                                            Quy chế hoạt động
                                        </a>
                                    </ActiveLink>
                                </li>
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href={ROUTES.CHINH_SACH_BAO_MAT}
                                    >
                                        <a className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary">
                                            Chính sách bảo mật
                                        </a>
                                    </ActiveLink>
                                </li>
                            </ul>
                            <div className="border-b border-gray-700 md:mb-10 mb-8 -mx-5 block md:hidden" />
                        </div>
                        <div className="px-4 w-full md:w-1/3 lg:w-1/4 order-2 md:order-none">
                            <h6 className="mb-4 font-semibold uppercase">
                                Thương hiệu nổi tiếng
                            </h6>
                            <ul className="smJl:mb-10 pb-0">
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href="/hang-moi-ve?brands=Louis+Vuitton"
                                    >
                                        <a
                                            href="/hang-moi-ve?brands=Louis+Vuitton"
                                            className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                        >
                                            Louis Vuitton
                                        </a>
                                    </ActiveLink>
                                </li>
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href="/hang-moi-ve?brands=Gucci"
                                    >
                                        <a
                                            className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                            href="/hang-moi-ve?brands=Gucci"
                                        >
                                            Gucci
                                        </a>
                                    </ActiveLink>
                                </li>
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href="/hang-moi-ve?brands=Chanel"
                                    >
                                        <a
                                            className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                            href="/hang-moi-ve?brands=Chanel"
                                        >
                                            Chanel
                                        </a>
                                    </ActiveLink>
                                </li>
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href="/hang-moi-ve?brands=Prada"
                                    >
                                        <a
                                            className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                            href="/hang-moi-ve?brands=Prada"
                                        >
                                            Prada
                                        </a>
                                    </ActiveLink>
                                </li>
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href="/hang-moi-ve?brands=Burberry"
                                    >
                                        <a
                                            className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                            href="/hang-moi-ve?brands=Burberry"
                                        >
                                            Burberry
                                        </a>
                                    </ActiveLink>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 w-full md:w-1/3 lg:w-1/4 order-3 md:order-none">
                            <h6 className="Typography__H6-sc-18cqegv-5 hnzrVF mb-4 font-semibold uppercase hidden md:block opacity-0 pointer-events-none">
                                Thương hiệu nổi tiếng
                            </h6>
                            <ul className="smJl:mb-10">
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href="/hang-moi-ve?brands=Longines"
                                    >
                                        <a
                                            className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                            href="/hang-moi-ve?brands=Longines"
                                        >
                                            Longines
                                        </a>
                                    </ActiveLink>
                                </li>
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href="/hang-moi-ve?brands=Saint+Laurent"
                                    >
                                        <a
                                            className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                            href="/hang-moi-ve?brands=Saint+Laurent"
                                        >
                                            Saint Laurent
                                        </a>
                                    </ActiveLink>
                                </li>
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href="/hang-moi-ve?brands=Fendi"
                                    >
                                        <a
                                            className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                            href="/hang-moi-ve?brands=Fendi"
                                        >
                                            Fendi
                                        </a>
                                    </ActiveLink>
                                </li>
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href="/hang-moi-ve?brands=Celine"
                                    >
                                        <a
                                            className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                            href="/hang-moi-ve?brands=Celine"
                                        >
                                            Celine
                                        </a>
                                    </ActiveLink>
                                </li>
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href="/hang-moi-ve?brands=Dior"
                                    >
                                        <a
                                            className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                            href="/hang-moi-ve?brands=Dior"
                                        >
                                            Dior
                                        </a>
                                    </ActiveLink>
                                </li>
                            </ul>
                            <div className="border-b border-gray-700 md:mb-10 mb-8 -mx-5 block md:hidden" />
                        </div>
                        <div className="px-4 w-full md:w-1/2 lg:w-1/4 order-6 md:order-4 lg:order-none">
                            <div className="flex items-center mb-3">
                                <div className="mr-6">
                                    <Image
                                        src="https://joolux.com/img/tradeStamp.png"
                                        width={56}
                                        height={56}
                                        alt="tradeStamp"
                                    />
                                </div>
                                <div className="footer-stamp-confirm">
                                    <Image
                                        src="https://joolux.com/img/tradeStampConfirm.png"
                                        layout="fill"
                                        alt="Con dấu đăng ký kinh doanh"
                                    />
                                </div>
                            </div>
                            <p className="text-gray-500 text-xs mb-8">
                                Đăng ký kinh doanh số 0313621164 do Sở Kế hoạch
                                và Đầu tư Thành phố Hồ Chí Minh cấp ngày
                                15/01/2016 được sửa đổi lần thứ 3 ngày 23/3/2018
                            </p>
                        </div>
                        <div className="px-4 w-full md:w-1/3 lg:w-1/4 order-1 md:order-1 lg:order-none">
                            <h6 className="mb-4 font-semibold uppercase">
                                dịch vụ của joolux
                            </h6>
                            <ul className="smJl:mb-10">
                                <li className="mb-3">
                                    <a
                                        className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                        href="/dich-vu/ki-gui-hang-hieu"
                                    >
                                        Ký gửi hàng hiệu
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <a
                                        className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                        href="/dich-vu/kiem-dinh-hang-hieu"
                                    >
                                        Kiểm định hàng hiệu
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <a
                                        className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                        href="/dich-vu/cham-soc-hang-hieu"
                                    >
                                        Joolux Care
                                    </a>
                                </li>
                            </ul>
                            <div className="border-b border-gray-700 md:mb-10 mb-8 -mx-5 block md:hidden" />
                        </div>
                        <div className="px-4 w-full md:w-1/3 lg:w-1/4 order-4 md:order-2 lg:order-none">
                            <h6 className="Typography__H6-sc-18cqegv-5 hnzrVF mb-4 font-semibold uppercase">
                                Chăm sóc khách hàng
                            </h6>
                            <ul className="mb-0 pb-4">
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href={ROUTES.CHINH_SACH_VAN_CHUYEN}
                                    >
                                        <a
                                            className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                            href={ROUTES.CHINH_SACH_VAN_CHUYEN}
                                        >
                                            Chính sách vận chuyển
                                        </a>
                                    </ActiveLink>
                                </li>
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href={
                                            ROUTES.CHINH_SACH_BAO_HANH_DOI_TRA
                                        }
                                    >
                                        <a
                                            className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                            href={
                                                ROUTES.CHINH_SACH_BAO_HANH_DOI_TRA
                                            }
                                        >
                                            Chính sách đổi trả
                                        </a>
                                    </ActiveLink>
                                </li>
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href={ROUTES.CHINH_SACH_THANH_TOAN}
                                    >
                                        <a
                                            className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                            href={ROUTES.CHINH_SACH_THANH_TOAN}
                                        >
                                            Chính sách thanh toán
                                        </a>
                                    </ActiveLink>
                                </li>
                                <li className="mb-3">
                                    <ActiveLink
                                        activeClassName="!text-secondary"
                                        href={ROUTES.CAM_KET_TU_JOOLUX}
                                    >
                                        <a
                                            className="transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary"
                                            href={ROUTES.CAM_KET_TU_JOOLUX}
                                        >
                                            Cam kết từ Joolux
                                        </a>
                                    </ActiveLink>
                                </li>
                            </ul>
                            <div className="text-md mb-4 md:mb-10 font-light flex flex-col">
                                <ul>
                                    <li className="mb-1">
                                        <span className="font-semibold">
                                            HOTLINE:{" "}
                                        </span>
                                        <a
                                            href="tel:1900292984"
                                            className="hover:text-secondary transition-colors duration-200"
                                        >
                                            1900 292984
                                        </a>
                                    </li>
                                    <li className="mb-1">
                                        <span className="font-semibold">
                                            Thứ hai - Thứ sáu:{" "}
                                        </span>
                                        8H30 - 18H
                                    </li>
                                    <li className="mb-1">
                                        <span className="font-semibold">
                                            Thứ bảy:{" "}
                                        </span>
                                        8H30 - 12H{/* */}{" "}
                                    </li>
                                    <li className="text-xs my-2">
                                        (Hoặc chat trực tuyến)
                                    </li>
                                    <li className="flex items-center mt-4">
                                        <a
                                            href="https://www.facebook.com/jooluxvn/"
                                            target="_blank"
                                            aria-label="footer-facebook"
                                            rel="noreferrer noopener"
                                            className="mr-4 hover:text-secondary transition-colors duration-200"
                                        >
                                            <span className="footer-icon-wrapper">
                                                <svg
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit="1.414"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    preserveAspectRatio="xMidYMid meet"
                                                    className="footer-icon"
                                                >
                                                    <g fill="none">
                                                        <path
                                                            d="M20.625 2.625H3.375C2.96016 2.625 2.625 2.96016 2.625 3.375V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V3.375C21.375 2.96016 21.0398 2.625 20.625 2.625ZM18.4594 8.09766H16.9617C15.7875 8.09766 15.5602 8.65547 15.5602 9.47578V11.2828H18.3633L17.9977 14.1117H15.5602V21.375H12.6375V14.1141H10.193V11.2828H12.6375V9.19687C12.6375 6.77578 14.1164 5.45625 16.2773 5.45625C17.3133 5.45625 18.2016 5.53359 18.4617 5.56875V8.09766H18.4594Z"
                                                            fill="currentColor"
                                                        />
                                                    </g>
                                                </svg>
                                            </span>
                                        </a>
                                        <a
                                            href="https://www.instagram.com/jooluxvn/"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            aria-label="footer-instagram"
                                            className="hover:text-secondary transition-colors duration-200"
                                        >
                                            <span className="footer-icon-wrapper">
                                                <svg
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit="1.414"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    preserveAspectRatio="xMidYMid meet"
                                                    className="footer-icon"
                                                >
                                                    <path
                                                        d="M16.3748 3.24984C17.5342 3.25331 18.6451 3.71539 19.4648 4.53517C20.2846 5.35495 20.7467 6.46582 20.7502 7.62516V16.3748C20.7467 17.5342 20.2846 18.6451 19.4648 19.4648C18.6451 20.2846 17.5342 20.7467 16.3748 20.7502H7.62516C6.46582 20.7467 5.35495 20.2846 4.53517 19.4648C3.71539 18.6451 3.25331 17.5342 3.24984 16.3748V7.62516C3.25331 6.46582 3.71539 5.35495 4.53517 4.53517C5.35495 3.71539 6.46582 3.25331 7.62516 3.24984H16.3748ZM16.3748 1.5H7.62516C4.25625 1.5 1.5 4.25625 1.5 7.62516V16.3748C1.5 19.7437 4.25625 22.5 7.62516 22.5H16.3748C19.7437 22.5 22.5 19.7437 22.5 16.3748V7.62516C22.5 4.25625 19.7437 1.5 16.3748 1.5Z"
                                                        fill="currentcolor"
                                                    />
                                                    <path
                                                        d="M17.6873 7.62515C17.4278 7.62515 17.174 7.54818 16.9582 7.40396C16.7423 7.25974 16.5741 7.05475 16.4748 6.81492C16.3754 6.5751 16.3494 6.3112 16.4001 6.0566C16.4507 5.802 16.5757 5.56813 16.7593 5.38458C16.9428 5.20102 17.1767 5.07602 17.4313 5.02537C17.6859 4.97473 17.9498 5.00072 18.1896 5.10006C18.4294 5.1994 18.6344 5.36763 18.7787 5.58347C18.9229 5.79931 18.9998 6.05306 18.9998 6.31265C19.0002 6.48512 18.9665 6.65596 18.9007 6.81536C18.8349 6.97477 18.7382 7.11961 18.6163 7.24156C18.4943 7.36351 18.3495 7.46017 18.1901 7.526C18.0307 7.59183 17.8598 7.62552 17.6873 7.62515Z"
                                                        fill="currentcolor"
                                                    />
                                                    <path
                                                        d="M12 8.49984C12.6923 8.49984 13.369 8.70512 13.9446 9.08973C14.5202 9.47433 14.9688 10.021 15.2337 10.6605C15.4986 11.3001 15.568 12.0039 15.4329 12.6828C15.2978 13.3618 14.9645 13.9855 14.475 14.475C13.9855 14.9645 13.3618 15.2978 12.6828 15.4329C12.0039 15.568 11.3001 15.4986 10.6606 15.2337C10.021 14.9688 9.47433 14.5202 9.08973 13.9446C8.70513 13.369 8.49985 12.6923 8.49985 12C8.50084 11.072 8.86992 10.1823 9.52611 9.52611C10.1823 8.86992 11.072 8.50084 12 8.49984ZM12 6.75C10.9617 6.75 9.94662 7.05791 9.08326 7.63478C8.2199 8.21166 7.54699 9.0316 7.14963 9.99091C6.75227 10.9502 6.64831 12.0058 6.85088 13.0242C7.05345 14.0426 7.55347 14.9781 8.28769 15.7123C9.02192 16.4465 9.95738 16.9466 10.9758 17.1491C11.9942 17.3517 13.0498 17.2477 14.0091 16.8504C14.9684 16.453 15.7883 15.7801 16.3652 14.9167C16.9421 14.0534 17.25 13.0384 17.25 12C17.25 10.6076 16.6969 9.27226 15.7123 8.28769C14.7277 7.30312 13.3924 6.75 12 6.75Z"
                                                        fill="currentcolor"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="border-b border-gray-700 md:mb-10 mb-8 -mx-5 block md:hidden" />
                        </div>
                        <div className="px-4 w-full md:w-1/3 lg:w-1/4 mb-10 font-light order-5 md:order-3 lg:order-none">
                            <h6 className="Typography__H6-sc-18cqegv-5 hnzrVF mb-4 font-semibold uppercase">
                                LIÊN HỆ
                            </h6>
                            <ul className="text-md">
                                <li className="mb-3">
                                    <span className="font-semibold">
                                        Trụ sở 1:
                                    </span>{" "}
                                    46 Nguyễn Thị Minh Khai, Phường Đakao, Quận
                                    1, Tp. Hồ Chí Minh
                                </li>
                                <li className="mb-3">
                                    <span className="font-semibold">
                                        Trụ sở 2:
                                    </span>{" "}
                                    Y-nest tầng 4 toà nhà Hoà Bình Green, 505
                                    Minh Khai, Phường Vĩnh Phú, Quận Hai Bà
                                    Trưng, Hà Nội
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Email:
                                    </span>{" "}
                                    <a
                                        href="mailto:info@joolux.com"
                                        className="hover:text-secondary transition-colors duration-200"
                                    >
                                        info@joolux.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-4 w-full md:w-1/2 lg:w-1/4 mb-10 order-7 md:order-5 lg:order-none">
                            <div className="font-semibold mb-3">
                                Đăng kí nhận thông tin
                            </div>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex w-full"
                            >
                                <label className="block w-full mb-0">
                                    <input
                                        type="text"
                                        name="email"
                                        defaultValue=""
                                        className="footer-email-input w-full border-white bg-transparent text-white h-10"
                                        placeholder="Nhập email của bạn"
                                        {...register("email", {
                                            required: "Thông tin bắt buộc",
                                            pattern: {
                                                // eslint-disable-next-line no-useless-escape
                                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: "Email không hợp lệ",
                                            },
                                        })}
                                    />
                                    {errors.email?.message && (
                                        <p className="step-form-input-error">
                                            {errors.email?.message}
                                        </p>
                                    )}
                                </label>
                                <button
                                    type="submit"
                                    className="footer-submit-email-button flex-none px-7 bg-white text-black h-10"
                                    data-testid="email-subscription-button"
                                >
                                    Đăng Ký
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-center border-t border-gray-700 py-7">
                    <h6 className="Typography__Paragraph-sc-18cqegv-6 aLuzu text-gray-500 font-light">
                        Copyright © {/* */}2021{/* */} Joolux.com
                    </h6>
                </div>
            </div>
        </footer>
    );
};
