import { CheckBox } from "@components/ui/checkbox";
import ConditionTooltip from "@components/common/condition-tooltip";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { prepareUrlAs } from "@utils/prepare-url";
import { usePopper } from "react-popper";
import { AiFillExclamationCircle } from "react-icons/ai";
import { useUI } from "@contexts/ui.context";

export const ConditionFilter = ({ conditionsFilter, modalTooltip, mobile }) => {
    const router = useRouter();
    const { setModalView, openModal } = useUI();
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const [show, setShow] = useState(false);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement },
            },
            { name: "preventOverflow", enabled: false },
            { name: "flip", enabled: false },
            // {
            //     name: "offset",
            //     options: {
            //         offset: [25, -20],
            //     },
            // },
        ],
        placement: "right-start",
    });
    const { pathname, query } = useRouter();
    const selectedConditions = query?.conditions
        ? (query?.conditions as string).split("|")
        : [];
    const [formState, setFormState] =
        React.useState<string[]>(selectedConditions);
    React.useEffect(() => {
        setFormState(selectedConditions);
    }, [query?.conditions]);
    function openConditionTooltip() {
        setModalView("CONDITION_TOOLTIP_VIEW");
        return openModal();
    }
    function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
        const { value } = e.currentTarget;

        const currentFormState = formState.includes(value)
            ? formState.filter((i) => i !== value)
            : [...formState, value];
        const { conditions, page, ...restQuery } = query;
        const { url } = prepareUrlAs(
            router,
            {
                pathname,
                query: {
                    ...restQuery,
                    ...(currentFormState.length
                        ? { conditions: currentFormState.join("|") }
                        : {}),
                },
            },
            undefined,
        );
        router.push(decodeURI(url), undefined, { scroll: true });
    }
    return (
        <div className="block border-b border-gray-300 pb-7 mb-7">
            <div className="flex items-center relative">
                <h3 className="text-heading lg:text-lg md:text-base font-semibold mb-2 mr-4 uppercase">
                    Tình trạng
                </h3>
                {!modalTooltip ? (
                    <div
                        ref={setReferenceElement}
                        onMouseEnter={() => setShow(true)}
                        onMouseLeave={() => setShow(false)}
                    >
                        <AiFillExclamationCircle size={14} className="mb-1" />
                    </div>
                ) : (
                    <div
                        onClick={openConditionTooltip}
                        aria-label="condition-tooltip-modal"
                    >
                        <AiFillExclamationCircle size={14} className="mb-1" />
                    </div>
                )}
                {!modalTooltip && show && (
                    <div
                        ref={setPopperElement}
                        className="bg-white z-20 min-w-[31.25rem] ml-5 fixed"
                        style={{
                            ...styles.popper,
                            boxShadow: "rgb(61 61 61 / 25%) 0px 4px 16px",
                        }}
                        {...attributes.popper}
                        onMouseEnter={() => setShow(true)}
                        onMouseLeave={() => setShow(false)}
                    >
                        <div
                            ref={setArrowElement}
                            style={{
                                ...styles.arrow,
                                transform: `translate(-4px, 6px)`,
                                boxShadow:
                                    "rgb(61 61 61 / 5%) -0.3rem 0.3rem 8px",
                            }}
                            className="arrow"
                        />
                        <ConditionTooltip mobile={mobile} />
                    </div>
                )}
            </div>
            <div className="mt-2 flex flex-col space-y-2">
                {conditionsFilter?.map((item: any) => (
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
