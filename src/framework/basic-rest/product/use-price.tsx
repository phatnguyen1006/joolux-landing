import { useMemo } from "react";

export function formatPrice({
    amount,
    currencyCode,
    locale,
}: {
    amount: number;
    currencyCode: string;
    locale: string;
}) {
    // Format price với built-in Intl
    const formatCurrency = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyCode,
    });
    return formatCurrency.format(amount);
}

export function formatVariantPrice({
    amount,
    baseAmount,
    currencyCode,
    locale,
}: {
    baseAmount: number;
    amount: number;
    currencyCode: string;
    locale: string;
}) {
    const hasDiscount = baseAmount > amount;
    const formatDiscount = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyCode,
    });
    const discount = hasDiscount
        ? formatDiscount
              .format(baseAmount - amount)
              .replace(/[,]/g, ".")
              .replace(/[£$₫]/g, "")
        : null;
    const price = formatPrice({ amount, currencyCode, locale })
        .replace(/[,]/g, ".")
        .replace(/[£$₫]/g, "");
    const basePrice = hasDiscount
        ? formatPrice({ amount: baseAmount, currencyCode, locale })
              .replace(/[,]/g, ".")
              .replace(/[£$₫]/g, "")
        : null;

    return { price, basePrice, discount };
}

export default function usePrice(
    data?: {
        amount: number;
        baseAmount?: number;
        currencyCode: string;
    } | null,
) {
    const { amount, baseAmount, currencyCode } = data ?? {};
    const locale = "en";
    const value = useMemo(() => {
        if (typeof amount !== "number" || !currencyCode) return "";

        return baseAmount
            ? formatVariantPrice({ amount, baseAmount, currencyCode, locale })
            : formatPrice({ amount, currencyCode, locale });
    }, [amount, baseAmount, currencyCode]);

    return typeof value === "string"
        ? { price: value, basePrice: null, discount: null }
        : value;
}
