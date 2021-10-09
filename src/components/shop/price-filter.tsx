import { RadioBox } from "@components/ui/radiobox";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
import { prepareUrlAs } from "@utils/prepare-url";

const priceFilterItems = [
    {
        id: "1",
        name: "Under $50",
        slug: "0-50",
    },
    {
        id: "2",
        name: "$50 to $100",
        slug: "50-100",
    },
    {
        id: "3",
        name: "$100 to $150",
        slug: "100-150",
    },
    {
        id: "4",
        name: "$150 to $200",
        slug: "150-200",
    },
    {
        id: "5",
        name: "$200 to $300",
        slug: "200-300",
    },
    {
        id: "6",
        name: "$300 to $500",
        slug: "300-500",
    },
    {
        id: "7",
        name: "$500 to $1000",
        slug: "500-1000",
    },
    {
        id: "8",
        name: "Over $1000",
        slug: "1000-",
    },
];
export const PriceFilter = ({ pricesFilter }) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { pathname, query } = router;
    const selectedPrices = query?.price
        ? (query.price as string)
        : "price=0-50";
    const [formState, setFormState] = React.useState<string>(selectedPrices);
    React.useEffect(() => {
        setFormState(selectedPrices);
    }, [query?.price]);
    function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
        const { value } = e.currentTarget;
        const { price, page, ...restQuery } = query;
        const { url } = prepareUrlAs(
            router,
            {
                pathname,
                query: {
                    ...restQuery,
                    ...(formState ? { price: value } : {}),
                },
            },
            undefined,
        );
        router.push(decodeURI(url), undefined, { scroll: true });
    }
    // const items = priceFilterItems;
    return (
        <div className="block border-b border-gray-300 pb-7 mb-7">
            <h3 className="text-heading lg:text-lg md:text-base font-semibold mb-2 uppercase">
                {t("text-price")}
            </h3>
            <div className="mt-2 flex flex-col space-y-4">
                {pricesFilter?.map((item: any) => (
                    <RadioBox
                        key={item?.id}
                        variant="jl"
                        labelKey={item?.name}
                        name={item?.name?.toLowerCase()}
                        checked={item?.name === formState}
                        value={item?.name}
                        onChange={handleItemClick}
                    />
                ))}
            </div>
        </div>
    );
};
