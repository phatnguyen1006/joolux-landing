import { useCart } from "@contexts/cart/cart.context";
import { useUI } from "@contexts/ui.context";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import { useWindowSize } from "@utils/use-window-size";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

export interface ProductsList {
    product: string;
    price: number;
}

export interface ICheckoutInputType {
    customerProvince: string;
    customerDistrict: string;
    customerPhone: string;
    customerWard: string;
    customerAddress: string;
    customerName: string;
    customerEmail: string;
    orderCode: string;
    customerNote: string;
    productsList: ProductsList[];
    totalCost: number;
    vat: number;
    finalPrice: number;
    paymentMethod: string;
    deliverySupplier: string;
    deliveryCode: string;
    deliveryStatus: string;
    deliveryFee: number;
}
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

async function checkout(input: ICheckoutInputType) {
    return http.post(
        `https://api.joolux-client.ml${API_ENDPOINTS.CHECKOUT}`,
        input,
    );
}
export const useCheckoutMutation = () => {
    const { width } = useWindowSize();
    const router = useRouter();
    const { setDisplaySuccess } = useUI();
    const { items, clearCart } = useCart();
    return useMutation((input: ICheckoutInputType) => checkout(input), {
        onSuccess: () => {
            setDisplaySuccess(true);
            window.scrollTo({ top: 0 });
            clearCart(items);
            router.replace("/order/success");
        },
        onError: () => {
            toast("Có lỗi khi tiến hành thanh toán", {
                type: "dark",
                progressClassName: "fancy-progress-bar",
                position: width > 768 ? "bottom-right" : "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        },
    });
};
