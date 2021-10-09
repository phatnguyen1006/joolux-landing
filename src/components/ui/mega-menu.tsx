import React from "react";
import cn from "classnames";
import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";
import Image from "next/image";

interface MenuItem {
    id: number | string;
    path: string;
    label: string;
    columnItemItems?: MenuItem[];
}

type MegaMenuProps = {
    columns: {
        id: number | string;
        columnItems: MenuItem[];
    }[]; // ep kieu array
    image?: string;
    imageUrl?: string;
    numOfCols: number;
};

const MegaMenu: React.FC<MegaMenuProps> = ({
    columns,
    image,
    imageUrl,
    numOfCols,
}) => {
    const { t } = useTranslation("menu");
    return (
        <div
            className={cn(
                "megaMenu shadow-header bg-white absolute -start-1 xl:start-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-20 px-8",
                {
                    "max-w-[1000px]": numOfCols === 4,
                },
            )}
        >
            {/* <ul
                className="even:bg-gray-150 pt-6 2xl:pt-7"
                key={`image-menu-${image}-${columns[0].columnItems[0].label}`}
            >
                <li className="mb-1.5">
                    <span
                        // href={columnItem.path}
                        className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8hover:text-heading uppercase font-[15px]"
                    >
                        {t(`${columns[0].columnItems[0].label}`)}
                    </span>
                </li>{" "}
            </ul> */}
            <div
                className={cn("grid", {
                    "grid-cols-4": numOfCols === 4,
                    "grid-cols-5": numOfCols === 5,
                    "grid-cols-6": numOfCols === 6,
                })}
            >
                {columns?.map((column) => (
                    <ul
                        className="bg:white pb-7 2xl:pb-8 pt-6 2xl:pt-7"
                        key={column.id}
                    >
                        {column?.columnItems?.map((columnItem) => (
                            <React.Fragment key={columnItem.id}>
                                <li className="mb-1.5">
                                    {columnItem.label ? (
                                        <Link
                                            href={columnItem.path}
                                            className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 hover:text-heading uppercase font-[15px]"
                                        >
                                            {t(columnItem.label)}
                                        </Link>
                                    ) : (
                                        <span className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 hover:text-heading uppercase font-[15px]">
                                            {t("­­­­")}
                                        </span>
                                    )}
                                </li>
                                {columnItem?.columnItemItems?.map(
                                    (item: any) => (
                                        <li
                                            key={item.id}
                                            className={
                                                columnItem?.columnItemItems
                                                    ?.length === item.id
                                                    ? "border-b border-gray-300 pb-3.5 mb-3"
                                                    : ""
                                            }
                                        >
                                            <Link
                                                href={item.path}
                                                className={cn(
                                                    "text-body text-sm block py-1.5 px-5 xl:px-8 hover:text-secondary",
                                                    {
                                                        "font-semibold":
                                                            item.bold,
                                                    },
                                                )}
                                            >
                                                {t(item.label)}
                                            </Link>
                                        </li>
                                    ),
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                ))}

                {image && (
                    <ul
                        className="bg:white pb-7 2xl:pb-8 pt-6 2xl:pt-7 col-span-2"
                        key={`image-menu-${image}`}
                    >
                        <span className="block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 hover:text-heading uppercase font-[15px]">
                            {t("­­­­")}
                        </span>
                        <li className="mb-1.5">
                            <Link href={imageUrl}>
                                <Image src={image} width={442} height={218} />
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default MegaMenu;
