import { CheckBox } from "@components/ui/checkbox";
import { useRouter } from "next/router";
import React from "react";
import { prepareUrlAs } from "@utils/prepare-url";
import { RadioBox } from "@components/ui/radiobox";

export const StatusFilter = ({ statusesFilter }) => {
    const router = useRouter();
    const { pathname, query } = router;
    const selectedStatus = query?.statuses as string;
    const [formState, setFormState] = React.useState<string>(selectedStatus);
    React.useEffect(() => {
        setFormState(selectedStatus);
    }, [query?.statuses]);
    function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
        const { value } = e.currentTarget;
        const { statuses, page, ...restQuery } = query;
        const { url } = prepareUrlAs(
            router,
            {
                pathname,
                query: {
                    ...restQuery,
                    ...{ statuses: value },
                },
            },
            undefined,
        );
        router.push(decodeURI(url), undefined, { scroll: true });
    }
    return (
        <div className="block border-b border-gray-300 pb-7 mb-7">
            <h3 className="text-heading lg:text-lg md:text-base font-semibold mb-2 uppercase">
                Tình trạng kho
            </h3>
            <div className="mt-2 flex flex-col space-y-2">
                {statusesFilter?.map((item: any) => (
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
