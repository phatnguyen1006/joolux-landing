import { Input } from "@components/ui/input";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { prepareUrlAs } from "@utils/prepare-url";
import { CheckBox } from "@components/ui/checkbox";
import Scrollbar from "@components/common/scrollbar";

export const MaterialFilter = ({ materialsFilter }) => {
    const router = useRouter();
    const { pathname, query } = router;
    const [showAllMaterials, setShowAllMaterials] = useState(false);
    const [materialsSearch, setMaterialsSearch] = useState("");
    const [materialsArray, setMaterialsArray] = useState(materialsFilter);
    const selectedMaterials = query?.materials
        ? (query.materials as string).split("|")
        : [];
    const [formState, setFormState] =
        React.useState<string[]>(selectedMaterials);

    React.useEffect(() => {
        setFormState(selectedMaterials);
    }, [query?.materials]);

    function handleAutoSearch(e: React.FormEvent<HTMLInputElement>) {
        const filtered = materialsFilter.filter((el) => {
            return (
                el.name
                    .toLowerCase()
                    .indexOf(e.currentTarget.value.toLowerCase()) !== -1
            );
        });
        setMaterialsArray(filtered);
    }
    function clear() {
        setMaterialsSearch("");
    }
    function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
        const { value } = e.currentTarget;
        const currentFormState = formState.includes(value)
            ? formState.filter((i) => i !== value)
            : [...formState, value];
        const { materials, page, ...restQuery } = query;
        const { url } = prepareUrlAs(
            router,
            {
                pathname,
                query: {
                    ...restQuery,
                    ...(currentFormState.length
                        ? {
                              materials: currentFormState.join("|"),
                          }
                        : {}),
                },
            },
            undefined,
        );
        router.push(decodeURI(url), undefined, { scroll: true });
        // router.push(
        //     {
        //         pathname,
        //         query: {
        //             ...restQuery,
        //             ...(currentFormState.length
        //                 ? {
        //                       category: currentFormState.join(","),
        //                   }
        //                 : {}),
        //         },
        //     },
        //     undefined,
        //     { scroll: false },
        // );
    }
    return (
        <div className="block border-b border-gray-300 pb-7 mb-7">
            <h3 className="text-heading lg:text-lg md:text-base font-semibold mb-2 uppercase">
                Chất liệu
            </h3>
            <Input
                className="block relative mb-4"
                placeholderKey="Tìm Chất Liệu"
                name="material-search"
                inputClassName="px-8"
                variant="jl"
                hasIcon
                // value={materialsSearch}
                onChange={handleAutoSearch}
            />
            <div className="mt-2 flex flex-col space-y-2">
                {!showAllMaterials ? (
                    <>
                        {materialsArray?.slice(0, 6).map((item: any) => (
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
                            {materialsArray?.map((item: any) => (
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
            {!showAllMaterials && (
                <button
                    className="p-0 text-secondary outline-none font-medium text-sm mt-2"
                    aria-label="Xem tất cả"
                    data-testid="filter-select-showall-button"
                    onClick={() => {
                        setShowAllMaterials(true);
                    }}
                >
                    Xem tất cả
                </button>
            )}
        </div>
    );
};
