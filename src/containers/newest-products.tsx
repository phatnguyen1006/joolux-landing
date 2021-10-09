import ProductCard from "@components/product/product-card";
import Link from "@components/ui/link";
import { Product } from "@framework/types";

interface ProductsProps {
    className?: string;
    data: Product[];
}

const NewestProducts: React.FC<ProductsProps> = ({
    className = "mb-9 lg:mb-10 xl:mb-14",
    data,
}) => {
    // const { data, isLoading, error, isFetched } = useRelatedProductsQuery({});
    // if (error) return <p>{error}</p>;
    return (
        data && (
            <div className="max-w-[1234px] mx-auto smJl:pb-16 pb-10 px-8">
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
                        {data?.map((product: any) => (
                            <ProductCard
                                allowFavorite={false}
                                key={`product--key${product._id}`}
                                product={product}
                                variant="jl"
                                className="bg-[#f6f5fc]"
                                bottomBorder="border-none"
                            />
                        ))}
                    </div>
                    <div className="text-center mt-6">
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

export default NewestProducts;
