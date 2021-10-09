import MultiStepForm from "@components/common/form/multi-step-form";
import React, { FC, useState } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import {
    ICheckoutInputType,
    useCheckoutMutation,
} from "@framework/checkout/use-checkout";
// import Router from "next/router";
// import { ROUTES } from "@utils/routes";

// const CheckoutFormInfoStep = dynamic(
//     () => import("@components/checkout/checkout-form-info-step"),
//     { ssr: false },
// );
import CheckoutFormInfoStep from "@components/checkout/checkout-form-info-step";
import { useCart } from "@contexts/cart/cart.context";

const CheckoutFormMethodStep = dynamic(
    () => import("@components/checkout/checkout-form-method-step"),
    { ssr: false },
);

const CheckoutFormConfirmStep = dynamic(
    () => import("@components/checkout/checkout-form-confirm-step"),
    { ssr: false },
);

const CheckoutForm: FC = () => {
    const [step, setStep] = useState<number>(1);
    const { mutate: beginCheckoutTransaction, isLoading } =
        useCheckoutMutation();
    const { items, total, specialPriceTotal } = useCart();
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, touchedFields },
    } = useForm<ICheckoutInputType>({
        mode: "all",
    });
    function onSubmit(input: ICheckoutInputType) {
        const productsList = [];
        items.map((i) => {
            productsList.push({
                product: i.id,
                price: i.specialPrice,
            });
        });
        const request = {
            ...input,
            productsList: productsList.length > 0 && productsList,
            totalCost: total,
            finalCost: specialPriceTotal,
        };
        beginCheckoutTransaction(request);
        // Router.push(ROUTES.ORDER);
    }
    const nextStep = () => {
        setStep((prev) => prev + 1);
    };
    const prevStep = () => {
        setStep((prev) => prev - 1);
    };
    const values = getValues();
    const stepData = [
        {
            id: 1,
            stepBody: (
                <CheckoutFormInfoStep
                    formStep={1}
                    step={step}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    register={register}
                    errors={errors}
                    touchedFields={touchedFields}
                    handleSubmit={handleSubmit(nextStep)}
                />
            ),
            stepHeader: "Thông tin và địa chỉ nhận hàng",
        },
        {
            id: 2,
            stepBody: (
                <CheckoutFormMethodStep
                    formStep={2}
                    step={step}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    register={register}
                    errors={errors}
                    touchedFields={touchedFields}
                    handleSubmit={handleSubmit(nextStep)}
                />
            ),
            stepHeader: "Phương thức thanh toán",
        },
        {
            id: 3,
            stepBody: (
                <CheckoutFormConfirmStep
                    formStep={3}
                    step={step}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={values}
                    errors={errors}
                    touchedFields={touchedFields}
                    isLoading={isLoading}
                    handleSubmit={handleSubmit(onSubmit)}
                />
            ),
            stepHeader: "Xem lại đơn đặt hàng",
        },
    ];
    return <MultiStepForm step={step} stepData={stepData} />;
};
export default CheckoutForm;
