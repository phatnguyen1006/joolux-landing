import { useState } from "react";
import usePrice from "@framework/product/use-price";
import { useCart } from "@contexts/cart/cart.context";
import { CheckoutItem } from "@components/checkout/checkout-card-item";
import { CheckoutCardFooterItem } from "./checkout-card-footer-item";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
type FormValues = {
    couponValue: string;
};

const defaultValues = {
    couponValue: "",
};
const CheckoutCard: React.FC = () => {
    const { items, total, isEmpty, totalUniqueItems, specialPriceTotal } =
        useCart();
    const {
        price: subTotal,
        basePrice,
        discount,
    } = usePrice({
        amount: specialPriceTotal || total,
        baseAmount: total,
        currencyCode: "VND",
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ defaultValues });
    async function onSubmit(input: FormValues) {}
    const { t } = useTranslation("common");
    const [collapseItem, setCollapseItem] = useState<boolean>(false);

    // const checkoutFooter = [
    //     {
    //         id: 1,
    //         name: t("text-sub-total"),
    //         price: subtotal,
    //     },
    //     {
    //         id: 2,
    //         name: t("text-shipping"),
    //         price: t("text-free"),
    //     },
    //     {
    //         id: 3,
    //         name: t("text-total"),
    //         price: subtotal,
    //     },
    // ];
    return (
        <div className="pt-12 md:pt-0 2xl:ps-4">
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                {t("text-your-order")}
            </h2>
            <div className="flex p-4 mt-6 md:mt-7 xl:mt-9 bg-gray-150 text-sm font-semibold text-heading">
                <span>{t("text-product")}</span>
                <span className="ms-auto flex-shrink-0">
                    {t("text-sub-total")}
                </span>
            </div>
            <button
                onClick={() => {
                    setCollapseItem(!collapseItem);
                }}
                className="flex uppercase py-3 text-15px leading-none w-full justify-between items-center border-b border-gray-200 bg-transparent mb-2 outline-none"
            >
                <b>{`Sản phẩm (${totalUniqueItems})`}</b>
                <span
                    className={`createIcon ${
                        collapseItem ? "transform rotate-180" : ""
                    }`}
                >
                    <svg
                        fillRule="evenodd"
                        clipRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="1.414"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        className="createIconSvg"
                    >
                        <g fill="none">
                            <path
                                d="M5.25 15.375L12 8.625L18.75 15.375"
                                stroke="currentColor"
                                strokeWidth="2.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                    <svg
                        fillRule="evenodd"
                        clipRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="1.414"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        className="createIconSvg"
                    >
                        <g fill="none">
                            <path
                                d="M5.25 15.375L12 8.625L18.75 15.375"
                                stroke="currentColor"
                                strokeWidth="2.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                </span>
            </button>
            <div>
                {!isEmpty && !collapseItem ? (
                    items.map((item) => (
                        <CheckoutItem item={item} key={item.id} />
                    ))
                ) : (
                    <p className="text-red-500 lg:px-3 py-4">
                        {isEmpty ? t("text-empty-cart") : ""}
                    </p>
                )}
            </div>
            {/* {checkoutFooter.map((item: any) => (
                <CheckoutCardFooterItem item={item} key={item.id} />
            ))} */}
            <CheckoutCardFooterItem
                totalItems={totalUniqueItems}
                subtotal={subTotal}
                discount={discount}
                basePrice={basePrice || subTotal}
            />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex-shrink-1 w-full mt-6"
                noValidate
            >
                <div className="flex flex-col sm:flex-row items-start">
                    <Input
                        placeholderKey="Bạn có coupon?"
                        type="text"
                        variant="jl"
                        className="w-1/2"
                        inputClassName="px-4 lg:px-7 h-8 md:h-10 text-center sm:text-start bg-white"
                        {...register("couponValue")}
                        errorKey={errors.couponValue?.message}
                    />
                    <Button
                        variant="jl"
                        className="mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 h-8 md:h-10 flex-shrink-1"
                    >
                        <span className="lg:py-0.5">Nhập Coupon</span>
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutCard;
