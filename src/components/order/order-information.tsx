import { IoCheckmarkCircle } from "react-icons/io5";
import OrderDetails from "@components/order/order-details";
import { useOrderQuery } from "@framework/order/get-order";
import { useRouter } from "next/router";
import usePrice from "@framework/product/use-price";
import { useTranslation } from "next-i18next";
import { DateTime } from "luxon";

export default function OrderInformation() {
    const {
        query: { orderId },
    } = useRouter();
    const { t } = useTranslation("common");
    const { data, isLoading, error } = useOrderQuery(orderId?.toString()!);
    const { price: total } = usePrice(
        data && {
            amount: data.shipping_fee
                ? data?.totalCost + data.shipping_fee
                : data?.totalCost,
            baseAmount: data?.totalCost,
            currencyCode: "VND",
        },
    );
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return (
        <div className="xl:px-32 2xl:px-44 3xl:px-56 py-16 lg:py-20">
            <div className="border border-gray-300 bg-gray-50 px-4 lg:px-5 py-4 rounded-md flex items-center justify-start text-heading text-sm md:text-base mb-6 lg:mb-8">
                <span className="w-10 h-10 me-3 lg:me-4 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                    <IoCheckmarkCircle className="w-5 h-5 text-green-600" />
                </span>
                {t("text-order-received")}
            </div>

            <ul className="border border-gray-300 bg-gray-50 rounded-md flex flex-col md:flex-row mb-7 lg:mb-8 xl:mb-10">
                <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
                    <span className="uppercase text-[11px] block text-body font-normal leading-5">
                        {t("text-order-number")}:
                    </span>
                    {data?._id.slice(0, 7)}...
                </li>
                <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
                    <span className="uppercase text-[11px] block text-body font-normal leading-5">
                        {t("text-date")}:
                    </span>
                    {DateTime.fromISO(data?.createdAt).toFormat("ff")}
                </li>
                <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
                    <span className="uppercase text-[11px] block text-body font-normal leading-5">
                        {t("text-email")}:
                    </span>
                    {data?.customerEmail}
                </li>
                <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
                    <span className="uppercase text-[11px] block text-body font-normal leading-5">
                        {t("text-total")}:
                    </span>
                    {total}&nbsp;₫
                </li>
                <li className="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0">
                    <span className="uppercase text-[11px] block text-body font-normal leading-5">
                        {t("text-payment-method")}:
                    </span>
                    {data?.paymentMethod}
                </li>
            </ul>
            {/* 
            <p className="text-heading text-sm md:text-base mb-8">
                {t("text-pay-cash")}
            </p> */}

            <OrderDetails />
        </div>
    );
}
