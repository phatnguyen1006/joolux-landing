import React, { FC } from "react";
import { Product } from "@framework/types";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import ProductCard from "@components/product/product-card";
import EmptyCart from "@components/cart/cart-empty";
import Link from "@components/ui/link";
import { ROUTES } from "@utils/routes";
interface IAccountFavoritesComponent {
    isLoading: boolean;
    wishList: Product[];
    pagination: {
        hasNextPage: number;
        hasPreviousPage: number;
        total: number;
        totalPage: number;
    };
}
const AccountFavoritesComponent: FC<IAccountFavoritesComponent> = ({
    wishList,
    pagination,
    isLoading,
}) => {
    return (
        <div
            className={`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 transition-opacity duration-300`}
        >
            {isLoading ? (
                <ProductFeedLoader limit={8} uniqueKey="search-product" />
            ) : pagination?.total !== 0 ? (
                wishList?.map((product: Product) => (
                    <ProductCard
                        allowFavorite={false}
                        key={`product--key${product._id}`}
                        product={product}
                        variant="jl"
                        className="bg-[#f6f5fc]"
                        bottomBorder="border-none"
                    />
                ))
            ) : (
                <div className="px-5 md:px-7 pb-5 flex justify-center flex-col items-center text-center col-span-full">
                    {/* layout
                    initial="from"
                    animate="to"
                    exit="from"
                    variants={fadeInOut(0.25)}
                > */}
                    <EmptyCart />
                    <h5 className="font-semibold leading-[1.33] text-base mb-2 mt-5">
                        Bạn chưa có sản phẩm nào yêu thích cả
                    </h5>
                    <h6 className="text-sm leading-6">
                        Đến cửa hàng và thêm các sản phẩm vào danh sách yêu
                        thích
                    </h6>
                    <Link
                        href={`${ROUTES.HANG_MOI_VE}`}
                        data-testid="flex w-full"
                        className="mt-5"
                    >
                        <button
                            type="button"
                            data-testid="goto-checkout-button"
                            className="cart-go-to-checkout-button"
                        >
                            Đến cửa hàng ngay
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default AccountFavoritesComponent;
