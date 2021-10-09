import { useOrderQuery } from "@framework/order/get-order";
import usePrice from "@framework/product/use-price";
import { OrderItem, OrderLog } from "@framework/types";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { DateTime } from "luxon";
const OrderItemCard = ({ product }: { product: OrderItem }) => {
    const { price: itemTotal } = usePrice({
        amount: product.price,
        baseAmount: product.price,
        currencyCode: "VND",
    });
    return (
        <tr
            className="border-b font-normal border-gray-300 last:border-b-0"
            key={product._id}
        >
            <td className="p-4">{product?.productName}</td>
            <td className="p-4">{itemTotal}&nbsp;₫</td>
        </tr>
    );
};

const OrderLogsComponent = ({ orderLog }: { orderLog: OrderLog }) => {
    return (
        <tr
            className="border-b font-normal border-gray-300 last:border-b-0"
            key={orderLog?._id}
        >
            <td className="p-4">
                {DateTime.fromISO(orderLog.time).toFormat("ff")}
            </td>
            <td className="p-4">{orderLog.description}</td>
        </tr>
    );
};
const OrderDetails: React.FC<{ className?: string }> = ({
    className = "pt-10 lg:pt-12",
}) => {
    const {
        query: { orderId },
    } = useRouter();
    const { t } = useTranslation("common");
    const { data: order, isLoading } = useOrderQuery(orderId?.toString()!);
    const { price: subtotal } = usePrice(
        order && {
            amount: order?.totalCost,
            baseAmount: order?.totalCost,
            currencyCode: "VND",
        },
    );
    const { price: total } = usePrice(
        order && {
            amount: order?.deliveryFee
                ? order?.totalCost + order?.deliveryFee
                : order?.totalCost,
            baseAmount: order?.totalCost,
            currencyCode: "VND",
        },
    );
    const { price: shipping } = usePrice(
        order && {
            amount: order?.deliveryFee,
            baseAmount: order?.deliveryFee,
            currencyCode: "VND",
        },
    );
    if (isLoading) return <p>Loading...</p>;
    return (
        <div className={className}>
            <h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
                {t("text-order-details")}:
            </h2>
            <table className="w-full text-heading font-semibold text-sm lg:text-base">
                <thead>
                    <tr>
                        <th className="bg-gray-150 p-4 text-start first:rounded-ts-md w-1/2">
                            {t("text-product")}
                        </th>
                        <th className="bg-gray-150 p-4 text-start last:rounded-te-md w-1/2">
                            {t("text-total")}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {order?.showingProductsList.map((product, index) => (
                        <OrderItemCard
                            key={`${product._id}--product-order`}
                            product={product}
                        />
                    ))}
                </tbody>
                <thead>
                    <tr>
                        <th className="bg-gray-150 p-4 text-start first:rounded-ts-md w-1/2">
                            {t("Lịch sử đơn hàng")}
                        </th>
                        <th className="bg-gray-150 p-4 text-start last:rounded-te-md w-1/2">
                            {t("Mô tả")}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {order?.orderLogs.map((log, index) => (
                        <OrderLogsComponent
                            key={`${log._id}--log-order`}
                            orderLog={log}
                        />
                    ))}
                </tbody>
                <tfoot>
                    <tr className="odd:bg-gray-150">
                        <td className="p-4 italic">{t("Tạm tính")}:</td>
                        <td className="p-4">{subtotal}&nbsp;₫</td>
                    </tr>
                    <tr className="odd:bg-gray-150">
                        <td className="p-4 italic">{t("Phí vận chuyển")}:</td>
                        <td className="p-4">
                            {shipping || "Đang xử lý"} {shipping && "₫"}
                            <span className="text-[13px] font-normal ps-1.5 inline-block">
                                {shipping && "via Flat rate"}
                            </span>
                        </td>
                    </tr>
                    {/* Odd trong tailwind */}
                    <tr className="odd:bg-gray-150">
                        <td className="p-4 italic">
                            {t("Đơn vị vận chuyển")}:{" "}
                        </td>
                        <td className="p-4">
                            {order?.deliverySupplier || "Đang xử lý"}
                        </td>
                    </tr>
                    <tr className="odd:bg-gray-150">
                        <td className="p-4 italic">{t("Trạng thái")}</td>
                        <td className="p-4">
                            {order?.deliveryStatus || "Đang xử lý"}{" "}
                        </td>
                    </tr>
                    <tr className="odd:bg-gray-150">
                        <td className="p-4 italic">{t("Tổng tiền")}:</td>
                        <td className="p-4">{total}&nbsp;₫</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
export default OrderDetails;
