import React, { FC } from "react";
import Image from "next/image";
import { CollectionBanner } from "@framework/types";
import Link from "@components/ui/link";
import { ROUTES } from "@utils/routes";
import { toBase64 } from "@utils/toBase64";
import { shimmer } from "@utils/shimmer";

const BrandBlock: FC<{
    collectionBanner: CollectionBanner[];
}> = ({ collectionBanner }) => (
    <div className="mx-auto max-w-[1234px] px-5">
        <div className="flex flex-wrap">
            {collectionBanner.map((item) => {
                return (
                    <div
                        className="w-full smJl:w-1/2 px-4 smJl:mb-12 mb-5"
                        key={item.slug}
                    >
                        <Link
                            className="bg-white border border-gray-300 block"
                            href={`${ROUTES.PROMOTIONS}/${item.slug}`}
                        >
                            <div>
                                <div className="brand-image">
                                    <Image
                                        width={565}
                                        height={275}
                                        alt="Louis Vuitton"
                                        src={item.image}
                                        placeholder="blur"
                                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                            shimmer(565, 275),
                                        )}`}
                                    />
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="font-semibold leading-[1.33] text-xl mb-2 mb-2px">
                                    {item.name}
                                </p>
                                <p className="text-sm text-gray-700">
                                    Mua ngay
                                </p>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    </div>
);
export default BrandBlock;
