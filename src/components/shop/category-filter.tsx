import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
import { prepareUrlAs } from "@utils/prepare-url";
import { RadioBox } from "@components/ui/radiobox";

export const CategoryFilter = ({ categoriesFilter }) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { pathname, query } = router;
    const selectedCategory = query?.category as string;
    const [formState, setFormState] = React.useState<string>(selectedCategory);
    React.useEffect(() => {
        setFormState(selectedCategory);
    }, [query?.category]);
    function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
        const { value } = e.currentTarget;
        const { category, page, ...restQuery } = query;
        const { url } = prepareUrlAs(
            router,
            {
                pathname: `/categories/${value}`,
                query: {
                    ...restQuery,
                },
            },
            undefined,
        );
        router.push(decodeURI(url), undefined, { scroll: false });
    }
    return (
        <div className="block border-b border-gray-300 pb-7 mb-7">
            <h3 className="text-heading lg:text-lg md:text-base font-semibold mb-2 uppercase">
                {t("text-category")}
            </h3>
            <div className="mt-2 flex flex-col space-y-2">
                {categoriesFilter?.map((item: any) => (
                    <RadioBox
                        key={item?.id}
                        labelKey={item?.name}
                        name={item?.name?.toLowerCase()}
                        checked={item?.value === formState}
                        value={item?.value}
                        variant="jl"
                        onChange={handleItemClick}
                    />
                ))}
            </div>
        </div>
    );
};
