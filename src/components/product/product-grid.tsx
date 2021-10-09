import { FC } from "react";
import ProductCard from "@components/product/product-card";
// import { Button } from "@components/ui/button";
// import { useProductsQuery } from "@framework/product/get-all-products";
import { Product } from "@framework/types";

interface IProductGridProps {
    products: Product[];
    favorites?: string[];
}

export const ProductGrid: FC<IProductGridProps> = ({ products, favorites }) => {
    // const memoizedValue = useMemo(() => pagination, [pagination]);
    return (
        <>
            {products?.map((product) => {
                return (
                    <ProductCard
                        key={`product--key${product._id}`}
                        isFavorite={favorites.includes(product._id)}
                        product={product}
                        variant="jl"
                        className="bg-[#f6f5fc]"
                    />
                );
            })}
            {/* <div className="text-center pt-8 xl:pt-14">
                {hasNextPage && (
                    <Button
                        loading={loadingMore}
                        disabled={loadingMore}
                        onClick={() => fetchNextPage()}
                        variant="slim"
                    >
                        {t("button-load-more")}
                    </Button>
                )}
            </div> */}
        </>
    );
};
