import { CheckBox } from "@components/ui/checkbox";
import { Input } from "@components/ui/input";
import Scrollbar from "@components/common/scrollbar";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { prepareUrlAs } from "@utils/prepare-url";
import { useTranslation } from "next-i18next";
const colorFilterItems = [
    {
        id: "1",
        name: "Black",
        slug: "black",
        hexColor: "#000",
    },
    {
        id: "2",
        name: "Blue",
        slug: "blue",
        hexColor: "#3310ce",
    },
    {
        id: "3",
        name: "Olive",
        slug: "olive",
        hexColor: "#0c7448",
    },
    {
        id: "4",
        name: "Maroon",
        slug: "maroon",
        hexColor: "#5f0e0e",
    },
    {
        id: "5",
        name: "Brown",
        slug: "brown",
        hexColor: "#362727",
    },
    {
        id: "6",
        name: "White",
        slug: "white",
        hexColor: "#fff",
    },
    {
        id: "7",
        name: "Gray",
        slug: "gray",
        hexColor: "#e1e1e1",
    },
];

export const ColorFilter = ({ colorsFilter }) => {
    const { t } = useTranslation("common");
    const router = useRouter();
    const { pathname, query } = useRouter();
    const [showAllColors, setShowAllColors] = useState(false);
    const [colorsSearch, setColorsSearch] = useState("");
    const [colorsArray, setColorsArray] = useState(colorsFilter);
    const selectedColors = query?.colors
        ? (query?.colors as string).split("|")
        : [];
    const [formState, setFormState] = React.useState<string[]>(selectedColors);
    React.useEffect(() => {
        setFormState(selectedColors);
    }, [query?.colors]);
    function handleAutoSearch(e: React.FormEvent<HTMLInputElement>) {
        const filtered = colorsFilter.filter((el) => {
            return (
                el.name
                    .toLowerCase()
                    .indexOf(e.currentTarget.value.toLowerCase()) !== -1
            );
        });
        setColorsArray(filtered);
    }
    function clear() {
        setColorsSearch("");
    }
    function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
        const { value } = e.currentTarget;

        const currentFormState = formState.includes(value)
            ? formState.filter((i) => i !== value)
            : [...formState, value];
        const { colors, page, ...restQuery } = query;
        const { url } = prepareUrlAs(
            router,
            {
                pathname,
                query: {
                    ...restQuery,
                    ...(currentFormState.length
                        ? { colors: currentFormState.join("|") }
                        : {}),
                },
            },
            undefined,
        );
        router.push(decodeURI(url), undefined, { scroll: true });
    }
    return (
        <div className="block border-b border-gray-300 pb-7 mb-7">
            <h3 className="text-heading lg:text-lg md:text-base font-semibold mb-2 uppercase">
                {t("text-colors")}
            </h3>
            <Input
                className="block relative mb-4"
                placeholderKey="Tìm Màu Sắc"
                name="color-search"
                inputClassName="px-8"
                variant="jl"
                hasIcon
                // value={brandsSearch}
                onChange={handleAutoSearch}
            />
            <div className="mt-2 flex flex-col space-y-2">
                {!showAllColors ? (
                    <>
                        {colorsArray?.slice(0, 8).map((item: any) => (
                            <CheckBox
                                key={item?.id}
                                label={item?.name}
                                name={item?.name?.toLowerCase()}
                                checked={formState.includes(item?.name)}
                                value={item?.name}
                                variant="jl"
                                onChange={handleItemClick}
                            />
                        ))}
                    </>
                ) : (
                    <Scrollbar className="os-host-flexbox max-h-48">
                        <div className="h-auto">
                            {colorsArray?.map((item: any) => (
                                <div>
                                    <CheckBox
                                        key={item?.id}
                                        label={item?.name}
                                        name={item?.name?.toLowerCase()}
                                        checked={formState.includes(item?.name)}
                                        value={item?.name}
                                        variant="jl"
                                        onChange={handleItemClick}
                                    />
                                </div>
                            ))}
                        </div>
                    </Scrollbar>
                )}
            </div>
            {!showAllColors && (
                <button
                    className="p-0 text-secondary outline-none font-medium text-sm mt-2"
                    aria-label="Xem tất cả Thương Hiệu"
                    data-testid="filter-select-showall-button"
                    onClick={() => {
                        setShowAllColors(true);
                    }}
                >
                    Xem tất cả
                </button>
            )}
        </div>
    );
};
