import React, { FC, useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { Button } from "@components/ui/button";
import { useCart } from "@contexts/cart/cart.context";
import { generateCartItem } from "@utils/generate-cart-item";

interface IProductButtonLogic {
    quantity: number;
    isInStock: string;
    hasToContact: string;
    data: any;
    isSelected: boolean;
    width: number;
}
const ProductButtonLogic: FC<IProductButtonLogic> = ({
    quantity,
    data,
    isInStock,
    hasToContact,
    isSelected,
    width,
}) => {
    const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
    const [immeAddToCartLoader, setImmeAddToCartLoader] =
        useState<boolean>(false);
    const { addItemToCart } = useCart();
    const router = useRouter();
    function addToCart() {
        if (isSelected) return;
        // to show btn feedback while product carting
        setAddToCartLoader(true);
        setTimeout(() => {
            setAddToCartLoader(false);
        }, 600);

        const item = generateCartItem(data!, {});
        addItemToCart(item, 1);
        toast("Đã thêm vào giỏ hàng", {
            type: "dark",
            progressClassName: "fancy-progress-bar",
            position: width > 768 ? "bottom-right" : "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }

    function immediatelyCheckout() {
        if (isSelected) return;
        setImmeAddToCartLoader(true);
        setTimeout(() => {
            setImmeAddToCartLoader(false);
        }, 600);

        const item = generateCartItem(data!, {});
        addItemToCart(item, 1);
        router.push("/cart");
    }

    // Debounce onclick with other value
    function contactSeller() {
        console.log("contact seller clicked");
    }
    return quantity === 0 || isInStock === "2" ? (
        <Button
            variant="jl"
            className={`w-full md:w-6/12 xl:w-full mb-4 bg-white text-black border solid border-[#101010] hover:opacity-60 hover:bg-white opacity-60`}
            disabled
            loading={addToCartLoader}
        >
            <span className="py-2 3xl:px-8">
                {quantity === 0 && isInStock !== "2"
                    ? "Tạm hết hàng"
                    : "Đang giao dịch"}
            </span>
        </Button>
    ) : hasToContact ? (
        <div className="flex items-center space-s-4 pt-3">
            <Button
                onClick={contactSeller}
                variant="jl"
                className={`w-full md:w-6/12 xl:w-full`}
                disabled={false}
                loading={immeAddToCartLoader}
            >
                <AiFillPhone color="white" className="mr-3" size={24} />
                <span className="py-2 3xl:px-8">Liên hệ người bán</span>
            </Button>
        </div>
    ) : isSelected ? (
        <div className="flex items-center space-s-4 pt-3">
            <Button
                onClick={() => {
                    router.push("/cart");
                }}
                variant="jl"
                className={`w-full md:w-6/12 xl:w-full`}
                loading={immeAddToCartLoader}
            >
                <span className="py-2 3xl:px-8">Đến giỏ hàng</span>
            </Button>
        </div>
    ) : (
        <>
            <div className="flex items-center space-s-4 pt-3">
                <Button
                    onClick={addToCart}
                    variant="jl"
                    className={`w-full md:w-6/12 xl:w-full mb-4 bg-white text-black border solid border-[#101010] hover:opacity-60 hover:bg-white ${
                        isSelected && "hover:opacity-65 hover:bg-white"
                    }`}
                    iconCart
                    disabled={isSelected}
                    loading={addToCartLoader}
                >
                    <span className="py-2 3xl:px-8">Thêm vào giỏ hàng</span>
                </Button>
            </div>
            <div className="flex items-center space-s-4 pt-3">
                <Button
                    onClick={immediatelyCheckout}
                    variant="jl"
                    className={`w-full md:w-6/12 xl:w-full ${
                        isSelected && "bg-gray-400 hover:bg-gray-400"
                    }`}
                    disabled={isSelected}
                    loading={immeAddToCartLoader}
                >
                    <span className="py-2 3xl:px-8">Thanh toán ngay</span>
                </Button>
            </div>
        </>
    );
};

export default ProductButtonLogic;
