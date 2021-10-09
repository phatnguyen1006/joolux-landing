import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
import { prepareUrlAs } from "@utils/prepare-url";
import { RadioBox } from "@components/ui/radiobox";

export const SubCategoryFilter = ({ subCategoryFilter }) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { pathname, query } = router;
    const selectedSubCategory = query?.subCategory as string;
    const [formState, setFormState] =
        React.useState<string>(selectedSubCategory);
    React.useEffect(() => {
        setFormState(selectedSubCategory);
    }, [query?.subCategory]);
    function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
        const { value } = e.currentTarget;
        const { subCategory, page, ...restQuery } = query;
        const { url } = prepareUrlAs(
            router,
            {
                pathname,
                query: {
                    ...restQuery,
                    ...{ subCategory: value },
                },
            },
            undefined,
        );
        router.push(decodeURI(url), undefined, { scroll: false });
    }
    return (
        <div className="block border-b border-gray-300 pb-7 mb-7">
            <h3 className="text-heading lg:text-lg md:text-base font-semibold mb-2 uppercase">
                {t(subCategoryFilter?.subCateFilterName || "Loại")}
            </h3>
            <div className="mt-2 flex flex-col space-y-2">
                {subCategoryFilter?.subCateData?.map((item: any) => (
                    <RadioBox
                        key={item?.id}
                        labelKey={item?.name}
                        name={item?.name?.toLowerCase()}
                        checked={item?.name === formState}
                        value={item?.name}
                        variant="jl"
                        onChange={handleItemClick}
                    />
                ))}
            </div>
        </div>
    );
};
