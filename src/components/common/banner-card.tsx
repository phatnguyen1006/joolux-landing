import Link from "@components/ui/link";
import Image from "next/image";
import type { FC } from "react";
import { useWindowSize } from "@utils/use-window-size";
import cn from "classnames";
import { LinkProps } from "next/link";
import { toBase64 } from "@utils/toBase64";
import { shimmer } from "@utils/shimmer";
interface IBannerProps {
    banner: any;
    variant?: "rounded" | "default";
    effectActive?: boolean;
    className?: string;
    classNameInner?: string;
    href: LinkProps["href"];
}

function getImage(deviceWidth: number, imgObj: any) {
    return deviceWidth < 480 ? imgObj?.mobile : imgObj?.desktop;
}

const BannerCard: FC<IBannerProps> = ({
    banner,
    className,
    variant = "rounded",
    effectActive = false,
    classNameInner,
    href,
}) => {
    const { width } = useWindowSize();
    const { title, image } = banner;
    const selectedImage = getImage(width, image);
    return (
        <div className={cn(className, "mx-auto flex justify-center flex-wrap")}>
            <Link
                href={href}
                // https://tailwindcss.com/docs/hover-focus-and-other-states#group-hover
                className={cn(
                    "group flex justify-center relative overflow-hidden smJl:h-[550px] h-[180px]",
                    classNameInner,
                )}
            >
                <Image
                    src={
                        selectedImage?.url ||
                        "/assets/images/hero/banner-2-jl.jpg"
                    }
                    // width={selectedImage.width}
                    // height={selectedImage.height}
                    layout="fill"
                    alt={title}
                    quality={100}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                        shimmer(1500, 550),
                    )}`}
                    className={cn("bg-gray-300 w-full", {
                        "rounded-md": variant === "rounded",
                    })}
                />
                {effectActive && (
                    <div className="absolute inset-0 -start-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine h-full"></div>
                )}
            </Link>
        </div>
    );
};

export default BannerCard;
