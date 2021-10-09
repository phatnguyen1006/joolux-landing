import React, { FC } from "react";
import Link from "@components/ui/link";

const ProductNumber: FC<{
    details: {
        id: number;
        columnName: string;
        value: string;
        highlight: boolean;
        slug: string;
    }[];
}> = ({ details }) => {
    if (details?.[4]?.value && details?.[5]?.value && details?.[6]?.value) {
        details[17].value = `Dài: ${details[4].value} x Rộng: ${details[6].value} x Cao: ${details[5].value}`;
    }
    return (
        <div className="py-6">
            <ul className="text-sm space-y-5 pb-1">
                {details?.length &&
                    details?.map((item) => {
                        if (
                            item?.id !== 5 &&
                            item?.id !== 6 &&
                            item?.id !== 7
                        ) {
                            return (
                                item.value && (
                                    <li key={item.id}>
                                        <span className="transition hover:underline hover:text-heading">
                                            {item?.columnName}:{" "}
                                        </span>
                                        {item.highlight ? (
                                            <Link
                                                href={
                                                    item.id === 1
                                                        ? `/hang-moi-ve?brands=${item.slug}`
                                                        : `/${item.slug}`
                                                }
                                                className={`font-semibold inline-block pe-2 ${
                                                    item.highlight
                                                        ? "text-secondary"
                                                        : "text-heading"
                                                }`}
                                            >
                                                {item?.value}
                                            </Link>
                                        ) : (
                                            <span
                                                className={`font-semibold inline-block pe-2 ${
                                                    item.highlight
                                                        ? "text-secondary"
                                                        : "text-heading"
                                                }`}
                                            >
                                                {item?.value}
                                            </span>
                                        )}
                                    </li>
                                )
                            );
                        }
                    })}
            </ul>
        </div>
    );
};

export default ProductNumber;
