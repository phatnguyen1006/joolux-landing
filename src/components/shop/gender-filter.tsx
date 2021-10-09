import { CheckBox } from "@components/ui/checkbox";
import { useRouter } from "next/router";
import React from "react";
import { prepareUrlAs } from "@utils/prepare-url";

export const GenderFilter = ({ gendersFilter }) => {
    const router = useRouter();
    const { pathname, query } = useRouter();
    const selectedGenders = query?.genders
        ? (query?.genders as string).split("|")
        : [];
    const [formState, setFormState] = React.useState<string[]>(selectedGenders);
    React.useEffect(() => {
        setFormState(selectedGenders);
    }, [query?.genders]);
    function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
        const { value } = e.currentTarget;

        const currentFormState = formState.includes(value)
            ? formState.filter((i) => i !== value)
            : [...formState, value];
        const { genders, page, ...restQuery } = query;
        const { url } = prepareUrlAs(
            router,
            {
                pathname,
                query: {
                    ...restQuery,
                    ...(currentFormState.length
                        ? { genders: currentFormState.join("|") }
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
                Giới tính
            </h3>
            <div className="mt-2 flex flex-col space-y-2">
                {gendersFilter?.map((item: any) => (
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
            </div>
        </div>
    );
};
