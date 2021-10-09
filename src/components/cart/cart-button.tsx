import { useState, useEffect, useRef } from "react";
import CartIcon from "@components/icons/cart-icon";
import cn from "classnames";
import { useRouter } from "next/router";
import { useCart } from "@contexts/cart/cart.context";
import { useUI } from "@contexts/ui.context";
import usePrice from "@framework/product/use-price";
import { ROUTES } from "@utils/routes";
import Scrollbar from "@components/common/scrollbar";
import Link from "@components/ui/link";
import CartItem from "./cart-item";
import EmptyCart from "./cart-empty";
import { usePopper } from "react-popper";
import { useTranslation } from "next-i18next";
import { useIsMount } from "@utils/use-is-mount";

interface ICartButton {
    className: string;
    backgroundCart: "white" | "black";
}
const CartButton: React.FC<ICartButton> = ({ className, backgroundCart }) => {
    const { t } = useTranslation("common");
    const isMount = useIsMount();
    const { displaySuccess } = useUI();
    const { items, total, isEmpty, totalItems, specialPriceTotal } = useCart();
    const { price: cartTotal } = usePrice({
        amount: specialPriceTotal || total,
        baseAmount: total,
        currencyCode: "VND",
    });
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const [show, setShow] = useState(false);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement },
            },
            {
                name: "offset",
                options: {
                    offset: [25, -20],
                },
            },
        ],
        placement: "left-end",
    });

    const router = useRouter();
    const handleOpenCart: any = () => {
        router.push(ROUTES.CART, undefined, {
            locale: router.locale,
        });
    };
    const timer = useRef(null);

    useEffect(() => {
        if (!isMount) {
            if (totalItems !== 0 && !displaySuccess) {
                setShow(true);
            }
        }
    }, [totalItems]);
    return (
        <>
            <button
                className="cart-button-hover flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
                onClick={handleOpenCart}
                ref={setReferenceElement}
                onMouseEnter={() => {
                    clearTimeout(timer.current);
                    setShow(true);
                }}
                onMouseLeave={() => {
                    timer.current = setTimeout(() => {
                        setShow(false);
                    }, 500);
                }}
                aria-label="cart-button"
            >
                <CartIcon color={backgroundCart} />
                <span
                    className={`cart-counter-badge flex items-center justify-center absolute -top-2.5 xl:-top-3 -end-2.5 xl:-end-3 rounded-full font-bold ${className}`}
                >
                    {totalItems}
                </span>
            </button>
            {show && (
                <div
                    ref={setPopperElement}
                    style={styles.popper}
                    className="cart-dropdown-item bg-white shadow-cart max-w-[600px]"
                    {...attributes.popper}
                    onMouseEnter={() => {
                        clearTimeout(timer.current);
                        setShow(true);
                    }}
                    onMouseLeave={() => {
                        timer.current = setTimeout(() => {
                            setShow(false);
                        }, 500);
                    }}
                >
                    {!isEmpty ? (
                        <Scrollbar className="cart-scrollbar w-full flex-grow overflow-hidden">
                            <div className="w-full px-5 md:px-7 h-[350px]">
                                {items?.map((item) => (
                                    <>
                                        <CartItem item={item} key={item.id} />
                                    </>
                                ))}
                            </div>
                        </Scrollbar>
                    ) : (
                        <div className="px-5 md:px-7 pt-8 pb-5 flex justify-center flex-col items-center">
                            {/* layout
                    initial="from"
                    animate="to"
                    exit="from"
                    variants={fadeInOut(0.25)}
                > */}
                            <EmptyCart />
                            <h3 className="text-lg text-heading font-bold pt-8">
                                {t("text-empty-cart")}
                            </h3>
                        </div>
                    )}
                    <div
                        ref={setArrowElement}
                        style={{
                            ...styles.arrow,
                            transform: `translate(-6px, -4px)`,
                        }}
                        className="arrow"
                    />
                    <Link
                        href={isEmpty === false ? ROUTES.CART : "/"}
                        className={cn(
                            "w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 hover:bg-gray-600",
                            {
                                "cursor-not-allowed bg-gray-400 hover:bg-gray-400":
                                    isEmpty,
                            },
                        )}
                    >
                        <span className="w-full pe-5 -mt-0.5 py-0.5">
                            {/* {`Đã giảm: ${discount || 0} ₫`}
                            <br /> */}
                            <h2 className="font-semibold">
                                {t("Đến trang giỏ hàng")}
                            </h2>
                        </span>
                        {!isEmpty && (
                            <span className="ms-auto flex-shrink-0 -mt-0.5 py-0.5">
                                <span className="border-s border-white pe-5 py-0.5" />
                                {cartTotal}&nbsp;₫
                            </span>
                        )}
                    </Link>
                </div>
            )}
        </>
    );
};

export default CartButton;
