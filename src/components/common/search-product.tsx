import Link from "@components/ui/link";
import Image from "next/image";
import usePrice from "@framework/product/use-price";
import { ROUTES } from "@utils/routes";
import { Product } from "@framework/types";

type SearchProductProps = {
    product?: Product;
};

const SearchProduct: React.FC<SearchProductProps> = ({ product }) => {
    const { price, basePrice } = usePrice(
        product && {
            amount:
                product?.onSale && product?.specialPrice
                    ? parseInt(product?.specialPrice as unknown as string)
                    : parseInt(product?.price as unknown as string),
            baseAmount: parseInt(product?.price as unknown as string),
            currencyCode: "VND",
        },
    );
    return (
        <Link
            href={`${ROUTES.PRODUCT}/${product.urlKey}/${product._id}`}
            className="group w-full h-auto flex justify-start items-center"
        >
            <div className="relative flex w-24 h-24 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 cursor-pointer me-4">
                <Image
                    src={
                        (product?.images[0] &&
                            `${process.env.NEXT_PUBLIC_BASE_IMAGE}${product?.images[0]}`) ??
                        "/assets/placeholder/search-product.svg"
                    }
                    width={96}
                    height={96}
                    loading="eager"
                    alt={product?.name || "Product Image"}
                    className="bg-gray-200 object-cover"
                />
            </div>
            <div className="flex flex-col w-full overflow-hidden">
                <h3 className="truncate text-sm text-heading mb-2">
                    {product?.name}
                </h3>
                <div className="text-heading font-semibold text-sm">
                    {price}&nbsp;₫
                    {basePrice && (
                        <del className="ps-2 text-gray-400 font-normal">
                            {basePrice}&nbsp;₫
                        </del>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default SearchProduct;
