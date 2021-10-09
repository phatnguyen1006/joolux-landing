import ProductCardLoader from "@components/ui/loaders/product-card-loader";
import { FC } from "react";

interface Props {
    limit?: number;
    uniqueKey?: string;
}

const ProductFeedLoader: FC<Props> = ({
    limit = 5,
    uniqueKey = "product",
}: Props) => {
    return (
        <>
            {Array.from({ length: limit }).map((_, idx) => (
                <ProductCardLoader
                    key={idx}
                    uniqueKey={`${uniqueKey}-${idx}`}
                />
            ))}
        </>
    );
};

export default ProductFeedLoader;
