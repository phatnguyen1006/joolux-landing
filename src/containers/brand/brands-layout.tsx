import React, { FC, useRef, createRef } from "react";
import Link from "@components/ui/link";
import { ROUTES } from "@utils/routes";
import { splitArray } from "@utils/split-array";
import BrandsListAlphabetically from "./brands-list-aphabetically";

const BrandsLayout: FC<{
    brands: {
        id: number;
        letters: string;
        brands: string[];
    }[];
}> = ({ brands }) => {
    const dynamicRefs = useRef<any>(
        brands.map((eachId) => ({ id: eachId.letters, ref: createRef() })),
    );
    const splitedArray = splitArray(brands, 7);
    return (
        <div className="mx-auto max-w-[980px] text-center pt-4 smJl:pb-16 pb-10 px-8">
            <div className="brand-layout">
                <BrandsListAlphabetically dynamicRefs={dynamicRefs?.current} />
                <div className="all-brands md:flex mt-4">
                    {splitedArray?.map((column) => {
                        return (
                            <ul
                                key={column?.[0]?.letters}
                                className="letters-list"
                            >
                                {column.map((item) => {
                                    return (
                                        <li className="ink" key={item?.letters}>
                                            <p
                                                ref={
                                                    dynamicRefs.current?.[
                                                        item?.id - 1
                                                    ]
                                                }
                                                className="letter"
                                            >
                                                {item?.letters}
                                            </p>
                                            <ul className="brands-list">
                                                {item?.brands.map((brand) => {
                                                    return (
                                                        <li
                                                            // ref={
                                                            //     dynamicRefs
                                                            //         .current[
                                                            //         "2"
                                                            //     ]
                                                            // }
                                                            className="brand hover:text-secondary"
                                                            key={brand}
                                                        >
                                                            <Link
                                                                href={`${ROUTES.HANG_MOI_VE}?brands=${brand}`}
                                                            >
                                                                {brand}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                    );
                                })}
                            </ul>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BrandsLayout;
