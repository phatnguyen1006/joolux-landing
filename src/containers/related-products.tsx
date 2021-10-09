import React, { useEffect } from "react";
import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { useRelatedProductsQuery } from "@framework/product/get-related-products";
import Alert from "@components/ui/alert";
import Link from "@components/ui/link";
import isEqual from "lodash/isEqual";

interface ProductsProps {
    sectionHeading: string;
    className?: string;
    brand?: string;
    category?: string;
    id?: string;
}

const RelatedProducts: React.FC<ProductsProps> = ({
    sectionHeading,
    className = "mb-9 lg:mb-10 xl:mb-14",
    brand,
    category,
    id,
}) => {
    const { data, isLoading, error, isFetched, refetch } =
        useRelatedProductsQuery({
            brand,
            category,
            id,
        });
    if (error) return <p>{error}</p>;
    useEffect(() => {
        refetch();
    }, []);
    return (
        isFetched &&
        data?.length !== 0 && (
            <div className={className}>
                <SectionHeader
                    sectionHeading={sectionHeading}
                    justify={"justify-center"}
                />
                <div className="grid grid-cols-2 smJl:grid-cols-3 lg:grid-cols-4 gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
                    {error ? (
                        <div className="col-span-full">
                            <Alert message={error?.message} />
                        </div>
                    ) : isLoading ? (
                        <ProductFeedLoader
                            limit={4}
                            uniqueKey="related-product"
                        />
                    ) : (
                        data?.map((product: any) => (
                            <ProductCard
                                allowFavorite={false}
                                key={`product-related-key${product._id}`}
                                product={product}
                                imgWidth={270}
                                imgHeight={270}
                                variant="jl"
                                bottomBorder="border-none"
                                className="bg-[#f6f5fc]"
                            />
                        ))
                    )}
                </div>
                <div className="text-center mt-3">
                    <Link href="/hang-moi-ve" className="inline-flex">
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
        )
    );
};
function areEqual(prevProps, nextProps) {
    return isEqual(prevProps, nextProps);
}
const MemorizedRelatedProducts = React.memo(RelatedProducts, areEqual);
export default MemorizedRelatedProducts;
