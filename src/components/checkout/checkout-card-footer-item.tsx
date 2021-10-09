type FooterItemProps = {
    discount: string;
    basePrice: string;
    subtotal: string;
    totalItems: number;
};
export const CheckoutCardFooterItem: React.FC<FooterItemProps> = ({
    discount,
    basePrice,
    subtotal,
    totalItems,
}) => {
    return (
        <div className="bg-gray-100 sm:p-10 p-5">
            <div className="flex -mx-2 text-15px">
                <div className="w-3/5 px-2">
                    {`Tạm tính ${totalItems} sản phẩm):`}
                </div>
                <div className="w-2/5 px-2 text-right">{basePrice}&nbsp;₫</div>
            </div>
            <div className="flex -mx-2 text-15px">
                <div className="w-1/2 px-2">Phí vận chuyển:</div>
                <div className="w-1/2 px-2 text-right">Đã bao gồm</div>
            </div>
            <div className="flex -mx-2 text-15px">
                <div className="w-1/2 px-2">Tổng tiền đã giảm:</div>
                <div className="w-1/2 px-2 text-right">
                    {/* {discount || 0}&nbsp;₫ */}
                    {0}&nbsp;₫
                </div>
            </div>
            <div className="flex -mx-2 text-15px mt-4">
                <div className="w-1/2 px-2">
                    <b className="text-xl font-semibold">Thành tiền:</b>
                </div>
                <div className="w-1/2 px-2 text-right">
                    <b className="text-xl font-semibold text-secondary">
                        {subtotal}&nbsp;₫
                    </b>
                </div>
            </div>
        </div>
    );
};
