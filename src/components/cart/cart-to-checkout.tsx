import React, { FC } from "react";
import { ROUTES } from "@utils/routes";
import Link from "@components/ui/link";

interface ICartToCheckOutProps {
    discount: string;
    basePrice: string;
    cartTotal: string;
    totalItems: number;
}

const CartToCheckout: FC<ICartToCheckOutProps> = ({
    discount,
    cartTotal,
    totalItems,
    basePrice,
}) => (
    <section className="md:mt-16 mt-8 mb-8">
        <div className="max-w-[1234px] mx-auto pt-4">
            <div className="flex flex-wrap flex-col-reverse md:flex-row">
                <div className="w-full flex-1 mx-auto px-4">
                    <div className="flex -mx-4">
                        <div className="sm:w-1/2 px-4 sm:mb-8 mb-3">
                            <div className="icon-container block">
                                <div className="mb-2 mr-4 text-black w-[10%]">
                                    <span className="createIcon">
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
                                                d="M21.6729 18.0439L21.6741 18.0451C22.0992 18.4674 22.1575 18.6306 22.1655 18.675L22.1656 18.6754C22.167 18.6831 22.1694 18.6965 22.1556 18.7443C22.1425 18.7892 22.1299 18.8217 22.1112 18.8699C22.0971 18.9062 22.0795 18.9515 22.0557 19.0177L22.0485 19.0351C22.041 19.0529 22.0295 19.0801 22.0142 19.1152C21.9835 19.1854 21.9375 19.2871 21.8778 19.4096C21.7577 19.6559 21.5852 19.98 21.3733 20.2993L21.3729 20.2998C20.8358 21.111 20.4261 21.5027 19.8311 21.7785C19.542 21.9125 19.1287 22.0639 18.3901 21.9718C17.6281 21.8768 16.4991 21.5193 14.8043 20.567L14.8041 20.5669C12.052 19.0226 9.98355 17.5143 7.74028 15.2709C7.74027 15.2709 7.74025 15.2708 7.74024 15.2708L7.73451 15.2651L7.73447 15.2651L7.7287 15.2593L7.72825 15.2588C5.48558 13.0217 3.97745 10.9476 2.43309 8.19488L2.43294 8.19462C1.48072 6.49976 1.12321 5.37062 1.0282 4.60852C0.936274 3.87116 1.08704 3.45797 1.22087 3.16886C1.50267 2.57191 1.89628 2.16139 2.70096 1.62484C3.02016 1.41295 3.34406 1.24055 3.59023 1.12054C3.71271 1.06083 3.81442 1.01483 3.88466 0.984102C3.91975 0.968753 3.94688 0.957258 3.96473 0.949808L3.98206 0.942642C4.04507 0.919961 4.08938 0.902878 4.12512 0.889097C4.17544 0.869696 4.20879 0.85684 4.25344 0.844118C4.30095 0.830581 4.31443 0.833059 4.32289 0.834614L4.32309 0.834652C4.36947 0.843172 4.53344 0.903134 4.95572 1.32545L4.95693 1.32665C5.34506 1.7122 5.85259 2.39556 6.33273 3.12978C6.80944 3.85875 7.23361 4.59839 7.46002 5.07579L7.46 5.0758L7.46193 5.07977C7.74268 5.65851 7.82881 5.96168 7.82378 6.18708C7.81929 6.38819 7.73984 6.59866 7.4599 6.98735L7.45875 6.98896C7.40202 7.06838 7.33975 7.15162 7.27559 7.23739C7.10145 7.47018 6.91337 7.7216 6.7844 7.96583C6.58317 8.34689 6.48015 8.77411 6.59152 9.30411L6.59167 9.30483C6.70012 9.81717 7.09883 10.4814 7.60375 11.1597C8.12531 11.8604 8.81436 12.6462 9.58366 13.4156L9.58434 13.4163C10.3533 14.1823 11.1387 14.8712 11.8391 15.3933C12.5161 15.898 13.1799 16.2984 13.6924 16.4075C14.2203 16.5227 14.6485 16.4209 15.0305 16.2197C15.2809 16.0877 15.5366 15.895 15.7736 15.7165C15.8555 15.6547 15.9352 15.5947 16.0117 15.5394C16.3991 15.2604 16.6095 15.1819 16.8107 15.1778C17.0373 15.1732 17.3411 15.26 17.9207 15.5384L17.9218 15.5389C18.3966 15.7654 19.1364 16.1912 19.8664 16.6689C20.6016 17.15 21.2869 17.6579 21.6729 18.0439Z"
                                                fill="transparent"
                                                stroke="currentColor"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="icon-card-content">
                                    <h5 className="font-semibold leading-[1.33] jqBAH text-base mb-2">
                                        Cần hỗ trợ
                                    </h5>
                                    <h6 className="text-sm leading-6 text-black">
                                        Vui lòng liên hệ ngay
                                    </h6>
                                    <h6 className="text-sm leading-6 text-black">
                                        HOTLINE:{" "}
                                        <a
                                            href="tel:1900292984"
                                            className="text-secondary"
                                        >
                                            1900 292984
                                        </a>
                                    </h6>
                                    <h6 className="text-sm leading-6 text-black">
                                        Thời gian liên hệ
                                    </h6>
                                    <ul className="text-sm text-black list-disc list-inside">
                                        <li>Thứ hai - Thứ sáu: 8h30 - 18h</li>
                                        <li>Thứ bảy: 8h30 - 12h</li>
                                    </ul>
                                    <h6 className="text-sm leading-6 text-black">
                                        (Hoặc chat trực tuyến)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 px-4 sm:mb-8 mb-3">
                            <div className="icon-container block">
                                <div className="mb-2 mr-4 text-black w-[10%]">
                                    <span className="createIcon">
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
                                                    d="M15.75 8.25L10.5562 14.25L8.25 11.9906"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M21.7078 5.26734C17.5162 4.51547 15.7833 3.95859 12 2.25C8.21671 3.95859 6.48374 4.51547 2.29218 5.26734C1.5328 17.303 11.2772 21.4589 12 21.75C12.7228 21.4589 22.4672 17.303 21.7078 5.26734Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <div className="IconCard__ContentWrapper-d01562-2 bfpxXI">
                                    <h5 className="font-semibold leading-[1.33] jqBAH text-base text-black mb-2">
                                        Cam Kết Đổi Trả
                                    </h5>
                                    <p className="text-sm leading-relaxed text-black">
                                        Hàng chính hãng đã được kiểm định. Cam
                                        kết đổi trả nếu phát hiện hàng giả,
                                        nhái, kém chất lượng
                                    </p>
                                    <a
                                        className="text-secondary text-sm inline-block mt-2"
                                        href="/p/cam-ket-tu-joolux"
                                    >
                                        Cam kết từ Joolux
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-sum-card">
                    <div className="bg-gray-100 p-5 sm:py-10 xl:px-12 text-[15px]">
                        <div className="mb-6">
                            <div className="flex -mx-2">
                                <div className="cart-row-label">
                                    {`Giỏ hàng (tạm tính ${totalItems} sản phẩm):`}
                                </div>
                                <div className="cart-row-value">
                                    {basePrice}&nbsp;₫
                                </div>
                            </div>
                            <div className="flex -mx-2">
                                <div className="cart-row-label">
                                    Phí vận chuyển:
                                </div>
                                <div className="cart-row-value">Đã bao gồm</div>
                            </div>
                            {/* <div className="flex -mx-2">
                                <div className="cart-row-label">
                                    Tổng tiền đã giảm:{" "}
                                </div>
                                <div className="cart-row-value">
                                    {discount || 0}&nbsp;₫
                                </div>
                            </div> */}
                            <div className="flex -mx-2">
                                <div className="cart-row-label mb-0">
                                    Thành tiền:
                                </div>
                                <div className="cart-row-value text-secondary font-bold">
                                    {cartTotal}&nbsp;₫
                                </div>
                            </div>
                        </div>
                        <Link
                            href={ROUTES.CHECKOUT}
                            data-testid="flex w-full"
                            className="BaseButton__Anchor-x7xjk1-0 brJEQn"
                        >
                            <button
                                type="button"
                                data-testid="goto-checkout-button"
                                className="cart-go-to-checkout-button"
                            >
                                Tiếp Tục Việc Thanh Toán
                            </button>
                            <div>
                                <p className="text-center">Hoặc</p>
                            </div>
                        </Link>
                        <Link
                            href={`${ROUTES.HANG_MOI_VE}`}
                            data-testid="flex w-full"
                            className="BaseButton__Anchor-x7xjk1-0 brJEQn"
                        >
                            <button
                                type="button"
                                data-testid="goto-checkout-button"
                                className="cart-go-to-checkout-button"
                            >
                                Tiếp Tục Mua Sắm
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default CartToCheckout;
