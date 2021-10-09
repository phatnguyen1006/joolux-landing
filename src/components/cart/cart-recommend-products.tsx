import ProductCard from "@components/product/product-card";
import Link from "@components/ui/link";
import { Product } from "@framework/types";
import { useFetchNewestProductsQuery } from "@framework/product/get-newest-products";
interface ProductsProps {
    className?: string;
}

const CartRecommendProducts: React.FC<ProductsProps> = ({
    className = "mb-9 lg:mb-10 xl:mb-14",
}) => {
    const { isLoading, error, data } = useFetchNewestProductsQuery();
    if (error) return <p>{error.message}</p>;
    return (
        !isLoading && (
            <div className="max-w-[1234px] mx-auto pt-4 smJl:pb-10 pb-8 px-8">
                <div className="border-t border-[#e7e7e7] mb-8 md:mb-14"></div>
                <div className={className}>
                    <h1
                        className="font-semibold leading-[1.33] text-lg mb-7 text-center"
                        data-chext-position
                        data-chext-overflow
                    >
                        Hàng Mới Về
                    </h1>
                    <div className="grid grid-cols-2 smJl:grid-cols-4 2xl:grid-cols-4 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
                        {data?.newestProducts?.map((product: Product) => (
                            <ProductCard
                                allowFavorite={false}
                                key={`product--key${product._id}`}
                                product={product}
                                variant="jl"
                                bottomBorder="border-none"
                                className="bg-[#f6f5fc]"
                            />
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            href="/hang-moi-ve"
                            className="inline-flex"
                            aria-label="newest-product-show-more"
                        >
                            <button
                                type="button"
                                className="blog-button mt-2 md:flex hidden"
                                data-chext-position
                                data-chext-overflow
                            >
                                Xem Thêm
                            </button>
                        </Link>
                        <Link
                            href="/hang-moi-ve"
                            className="flex w-full"
                            aria-label="newest-products-show-all"
                        >
                            <button
                                type="button"
                                className="blog-button-show-all md:hidden border-primary text-primary"
                                data-chext-position
                                data-chext-overflow
                            >
                                Xem Tất Cả
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    );
};

export default CartRecommendProducts;
