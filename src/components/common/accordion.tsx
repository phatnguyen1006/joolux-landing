import React, { useState } from "react";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { heightCollapse } from "@utils/motion/height-collapse";
import { useTranslation } from "next-i18next";

type CollapseProps = {
    i: number;
    titleKey?: string;
    title?: string;
    content?: any;
    contentKey?: any;
    translatorNS: string;
    variant?: "gray" | "transparent";
};

export const Collapse: React.FC<CollapseProps> = ({
    i,
    titleKey,
    title,
    content,
    contentKey,
    translatorNS,
    variant = "gray",
}) => {
    const [expanded, setExpanded] = useState<boolean>(i < 4);
    const { t } = useTranslation(translatorNS);
    return (
        <div
            className={cn({
                "rounded-md bg-gray-200": variant === "gray",
                "shadow-sm": expanded,
            })}
        >
            <motion.header
                initial={false}
                onClick={() => setExpanded(!expanded)}
                className={cn(
                    "cursor-pointer flex items-center transition-colors py-5 md:py-6",
                    {
                        "px-6 md:px-8 lg:px-10": variant === "gray",
                        "border-b-2 border-[#101010]":
                            variant === "transparent",
                    },
                )}
            >
                <div className="flex-shrink-0 relative w-4 h-4 mr-3 flex justify-center items-center">
                    <div className="w-full h-0.5 bg-heading rounded-sm" />
                    <div
                        className={`origin-bottom transform w-0.5 h-full bg-heading rounded-sm absolute bottom-0 transition-transform duration-500 ease-in-out ${
                            expanded ? "scale-0" : "scale-100"
                        }`}
                    />
                </div>
                <h2
                    className={cn(
                        "uppercase text-sm font-semibold leading-relaxed text-heading pe-2",
                        {
                            "md:text-base": variant === "gray",
                            "md:text-base lg:text-lg":
                                variant === "transparent",
                        },
                    )}
                >
                    {titleKey ? t(titleKey) : title}
                </h2>
            </motion.header>
            <AnimatePresence initial={false}>
                {expanded && (
                    <motion.div
                        key="content"
                        initial="from"
                        animate="to"
                        exit="from"
                        variants={heightCollapse()}
                    >
                        <div
                            className={cn(
                                "pb-6 md:pb-7 leading-7 text-sm text-gray-600",
                                {
                                    "pt-5 border-t border-gray-300 px-6 md:px-8 lg:px-10":
                                        variant === "gray",
                                },
                            )}
                        >
                            {contentKey ? t(contentKey) : content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

type AccordionProps = {
    translatorNS: string;
    items: {
        titleKey?: string;
        title?: string;
        contentKey?: string;
        content?: string;
    }[];
    variant?: "gray" | "transparent";
};

const Accordion: React.FC<AccordionProps> = ({
    items,
    translatorNS,
    variant = "gray",
}) => {
    return (
        <>
            {items?.map((item, index) => (
                <Collapse
                    i={index}
                    key={item.titleKey}
                    titleKey={item.titleKey}
                    contentKey={item.contentKey}
                    variant={variant}
                    translatorNS={translatorNS}
                />
            ))}
        </>
    );
};

export default Accordion;
