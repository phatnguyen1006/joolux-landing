import cn from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import { ROUTES } from "@utils/routes";
import { FC } from "react";
import usePrice from "@framework/product/use-price";
import { Product } from "@framework/types";
import Favorite from "@components/common/favorite";
import { toBase64 } from "@utils/toBase64";
import { shimmer } from "@utils/shimmer";

interface IProductProps {
    product: Product;
    className?: string;
    contactClassName?: string;
    imageContentClassName?: string;
    variant?: "grid" | "gridSlim" | "list" | "listSmall" | "jl";
    imgWidth?: number | string;
    imgHeight?: number | string;
    imgLoading?: "eager" | "lazy";
    bottomBorder?: string;
    isFavorite?: boolean;
    allowFavorite?: boolean;
}

const ProductCard: FC<IProductProps> = ({
    product,
    className = "",
    contactClassName = "",
    imageContentClassName = "text-center",
    variant = "list",
    imgWidth = 254,
    imgHeight = 254,
    imgLoading,
    bottomBorder,
    isFavorite,
    allowFavorite = true,
}) => {
    const router = useRouter();
    // Cách làm skeletion image
    const placeholderImage = `/assets/placeholder/products/product-${variant}.svg`;

    const { price, basePrice } = usePrice({
        amount:
            (product?.specialPrice &&
                parseInt(product?.specialPrice as unknown as string)) ||
            (product?.price && parseInt(product?.price as unknown as string)),
        baseAmount:
            product?.price && parseInt(product?.price as unknown as string),
        currencyCode: "VND",
    });
    // function handlePopupView() {
    //     setModalData({ data: product });
    //     setModalView("PRODUCT_VIEW");
    //     return openModal();
    // }
    function navigateToProductPage() {
        router.push(
            `${ROUTES.PRODUCT}/${product.urlKey}/${product._id}`,
            undefined,
            {
                locale: router.locale,
            },
        );
    }
    const { hasToContact } = product?.otherSpecialValue ?? {};
    return (
        <div
            className={cn(
                {
                    "group box-border overflow-hidden flex rounded-md cursor-default px-3 mb-6":
                        variant !== "jl",
                },
                {
                    "pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 md:hover:-translate-y-1.5 hover:shadow-product":
                        variant === "grid",
                    "pe-0 md:pb-1 flex-col items-start bg-white":
                        variant === "gridSlim",
                    "items-center bg-transparent border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct":
                        variant === "listSmall",
                    "flex-row items-center transition-transform ease-linear bg-gray-200 pe-2 lg:pe-3 2xl:pe-4":
                        variant === "list",
                    "h-full pb-4 border-b border-[#cfcfcf] rounded-none relative px-2":
                        variant === "jl",
                },
                ` ${
                    product?.qty === 0 || product.is_in_stock === "2"
                        ? "opacity-70 cursor-default"
                        : ""
                }`,
                className,
                bottomBorder,
            )}
            title={product?.name}
        >
            <div
                onClick={navigateToProductPage}
                className={cn(
                    {
                        "flex mb-3 md:mb-3.5": variant === "grid",
                        "flex mb-3 md:mb-3.5 pb-0": variant === "gridSlim",
                        "flex flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44":
                            variant === "listSmall",
                    },
                    imageContentClassName,
                )}
            >
                <Image
                    src={
                        // "https://old.joolux.com/media/catalog/product/1/_/1.1_3_2.jpg"
                        product?._media_image
                            ? `${process.env.NEXT_PUBLIC_BASE_IMAGE}${product?._media_image}`
                            : placeholderImage
                    }
                    width={imgWidth}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(565, 275),
                    )}`}
                    height={imgHeight}
                    loading={imgLoading}
                    quality={100}
                    alt={product?.name || "Product Image"}
                    className={cn(
                        "bg-gray-300 object-cover rounded-s-md cursor-pointer",
                        {
                            "w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none":
                                variant === "grid",
                            "rounded-md transition duration-150 ease-linear transform group-hover:scale-105":
                                variant === "gridSlim",
                            "rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105":
                                variant === "list",
                        },
                    )}
                />
            </div>
            <div className="absolute w-[28px] top-2 right-2 bg-transparent">
                {allowFavorite && (
                    <Favorite
                        isFavorite={isFavorite}
                        productId={product?._id}
                    />
                )}
            </div>
            {product?.qty === 0 && product?.is_in_stock !== "2" && (
                <div className="p-1 text-xs text-center absolute min-w-[60px] max-w-[110px] top-2 left-2 bg-[#e7e7e7] text-black">
                    Tạm hết hàng
                </div>
            )}
            {product?.is_in_stock === "2" && (
                <div className="p-1 text-xs text-center absolute min-w-[60px] max-w-[110px] top-2 left-2 bg-[#e7e7e7] text-black">
                    Đang giao dịch
                </div>
            )}
            {product?.onSale &&
                product?.specialPrice &&
                product?.qty !== 0 &&
                product?.is_in_stock !== "2" &&
                !hasToContact && (
                    <div className="p-1 text-xs text-center absolute min-w-[60px] max-w-[110px] top-2 left-2 bg-black text-white">
                        Khuyến mãi
                    </div>
                )}
            {/* {hasToContact &&
                product?.qty !== 0 &&
                product?.is_in_stock !== "2" && (
                    <div className="p-1 text-xs text-center absolute min-w-[60px] max-w-[110px] top-2 left-2 bg-black text-white">
                        {hasToContact}
                    </div>
                )} */}

            <div
                className={cn(
                    "w-full overflow-hidden",
                    {
                        "ps-0 lg:ps-2.5 xl:ps-4 pe-2.5 xl:pe-4":
                            variant === "grid",
                        "ps-0": variant === "gridSlim",
                        "px-4 lg:px-5 2xl:px-4": variant === "listSmall",
                    },
                    contactClassName,
                )}
            >
                {/* <h2
                    className={cn("text-heading font-semibold truncate mb-1", {
                        "text-sm md:text-base": variant === "grid",
                        "md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg":
                            variant === "gridSlim",
                        "text-sm sm:text-base md:mb-1.5 pb-0":
                            variant === "listSmall",
                        "text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5":
                            variant === "list",
                    })}
                >
                    {product?.name}
                </h2> */}
                <a
                    className="text-15px text-primary hover:text-secondary transition-color duration-200"
                    onClick={navigateToProductPage}
                    role="button"
                >
                    <h6 className="typo-h6 font-semibold truncate">
                        {product?.brand}
                    </h6>
                    <div className="font-light truncate font-[15px]">
                        {product?.name}
                    </div>
                </a>
                {/* {product?.description && (
                    <p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
                        {product?.description}
                    </p>
                )} */}
                {/* <div
                    className={`text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 ${
                        variant === "grid"
                            ? "lg:text-lg lg:mt-2.5"
                            : "sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3"
                    }`}
                > */}
                {/* <span className="inline-block">{price}</span>
                    {discount && (
                        <del className="sm:text-base font-normal text-gray-800">
                            {basePrice}
                        </del>
                    )} */}
                <div className="flex flex-wrap items-center">
                    <div
                        className={`text-15px font-semibold mr-2 ${
                            product?.onSale && basePrice && "text-red-400"
                        }`}
                    >
                        {price || basePrice}&nbsp;₫
                    </div>
                </div>
                <div className="text-xs font-normal mt-2 truncate">
                    {/* {D: 22 cm x R: 6 cm x C: 17 cm} */}
                    {product?.TX_cao || product.TX_rong || product.TX_Dai
                        ? `${product?.TX_Dai && `D: ${product?.TX_Dai} x `}${
                              product?.TX_rong && `R: ${product?.TX_rong} x `
                          }
                          ${product?.TX_cao && `C: ${product?.TX_cao}`}`
                        : product?.size
                        ? product?.MK_loai_kinh
                            ? `Kích cỡ: ${product?.size}`
                            : `Cỡ giày: ${product?.size}`
                        : product?.DH_DuongKinhMat
                        ? `Kích thước mặt: ${product?.DH_DuongKinhMat}mm`
                        : ""}
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default ProductCard;
