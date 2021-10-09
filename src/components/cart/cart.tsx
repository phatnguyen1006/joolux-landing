import cn from "classnames";
import { useTranslation } from "next-i18next";
import { useEffect, useState, FC } from "react";
import { useCart } from "@contexts/cart/cart.context";
import { useUI } from "@contexts/ui.context";
import usePrice from "@framework/product/use-price";
import { ROUTES } from "@utils/routes";
import CartItem from "./cart-item";
import EmptyCart from "./cart-empty";
import Container from "@components/ui/container";
import Link from "@components/ui/link";
import CartToCheckout from "./cart-to-checkout";
import { Subscription } from "@components/common/subscription";
import CartRecommendProducts from "./cart-recommend-products";

const Cart: FC = () => {
    const { t } = useTranslation("common");
    const { closeCart } = useUI();
    const { items, total, isEmpty, totalUniqueItems, specialPriceTotal } =
        useCart();
    const {
        price: cartTotal,
        basePrice,
        discount,
    } = usePrice({
        amount: specialPriceTotal || total,
        baseAmount: total,
        currencyCode: "VND",
    });
    const [disable, setDisable] = useState<boolean>(true);

    useEffect(() => {
        if (isEmpty) {
            setDisable(true);
        } else {
            setDisable(false);
        }
    }, [isEmpty]);

    return (
        <div className="flex flex-col w-full h-full justify-between">
            <div className="w-full flex justify-between items-center relative ps-5 md:ps-7 py-4 border-b border-gray-100">
                <h2 className="font-bold text-xl md:text-2xl m-0 text-heading">
                    {t("text-shopping-cart")}
                </h2>
            </div>
            {!disable ? (
                // <Scrollbar className=" w-full flex-grow">
                <div className="w-full px-5 md:px-7">
                    {items?.map((item) => (
                        <CartItem item={item} key={item.id} />
                    ))}
                </div>
            ) : (
                <div className="px-5 md:px-7 pt-8 pb-5 flex justify-center flex-col items-center text-center">
                    {/* layout
                    initial="from"
                    animate="to"
                    exit="from"
                    variants={fadeInOut(0.25)}
                > */}
                    <EmptyCart />
                    <h5 className="font-semibold leading-[1.33] text-base mb-2 mt-5">
                        {t("Giỏ hàng của bạn hiện đang trống")}
                    </h5>
                    <h6 className="text-sm leading-6">
                        Chưa có sản phẩm nào trong giỏ hàng. Hãy bắt đầu mua sắm
                        ngay bây giờ
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
                            Mua ngay
                        </button>
                    </Link>
                </div>
            )}

            <div
                className="flex flex-col px-5 md:px-7 pt-2 pb-5 md:pb-7"
                onClick={closeCart}
            >
                <Link
                    href="#"
                    className={cn(
                        "w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 hover:bg-gray-600",
                        // {
                        //     "cursor-not-allowed bg-gray-400 hover:bg-gray-400":
                        //         disable,
                        // },
                    )}
                >
                    {/* <span className="w-full pe-5 -mt-0.5 py-0.5">
                        {`Discounted: $${discount || "0.00"}`}
                        <br />
                        {t("text-proceed-to-checkout")}
                    </span>
                    <span className="ms-auto flex-shrink-0 -mt-0.5 py-0.5">
                        <span className="border-s border-white pe-5 py-0.5" />
                        {cartTotal}
                    </span> */}
                </Link>
            </div>
            {!disable ? (
                <CartToCheckout
                    totalItems={totalUniqueItems}
                    cartTotal={cartTotal}
                    discount={discount}
                    basePrice={basePrice || cartTotal}
                />
            ) : (
                <div className="relative flex-grow">
                    <Container>
                        <CartRecommendProducts />
                    </Container>
                </div>
            )}
            <Subscription hasTitle />
        </div>
    );
};

export default Cart;
