import { ICheckoutInputType } from "@framework/checkout/use-checkout";
import { DeepMap, FieldError } from "react-hook-form";

export declare type CheckoutErrorsType = DeepMap<
    ICheckoutInputType,
    FieldError
>;
export declare type CheckoutTouchedFieldsType = DeepMap<
    ICheckoutInputType,
    true
>;

// export interface ICheckoutInputType {
//     fullname: string;
//     address: string;
//     city: string;
//     district: string;
//     gender: string;
//     phone: string;
//     method: string;
//     email: string;
// }

export interface IInfoStepProps {
    nextStep?: () => void;
    prevStep?: () => void;
    step?: number;
    formStep?: number;
    register?: any;
    errors?: CheckoutErrorsType;
    touchedFields?: CheckoutTouchedFieldsType;
    handleSubmit?: () => void;
}
export interface IConfirmStepProps {
    nextStep?: () => void;
    prevStep?: () => void;
    step?: number;
    formStep?: number;
    errors?: CheckoutErrorsType;
    touchedFields?: CheckoutTouchedFieldsType;
    isLoading: boolean;
    values: any;
    handleSubmit?: () => void;
}
export interface IMethodStepProps {
    nextStep?: () => void;
    prevStep?: () => void;
    step?: number;
    formStep?: number;
    register?: any;
    errors?: CheckoutErrorsType;
    touchedFields?: CheckoutTouchedFieldsType;
    handleSubmit?: () => void;
}

export interface ICheckoutRadioBox {
    register?: any;
    value?: string;
    id?: number;
    labelText?: string;
    name?: string;
    initialCheck?: boolean;
    setRadioItem?: any;
}
