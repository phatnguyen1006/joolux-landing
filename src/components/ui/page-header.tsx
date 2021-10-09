import Image from "next/image";
import { toBase64 } from "@utils/toBase64";
import { shimmer } from "@utils/shimmer";
import { useWindowSize } from "@utils/use-window-size";
interface HeaderProps {
    pageSubHeader?: string;
    pageHeader?: string;
}

const PageHeader: React.FC<HeaderProps> = ({
    pageSubHeader = "",
    pageHeader = "",
}) => {
    const { width } = useWindowSize();
    return (
        <div
            data-aos="fade-up"
            data-aos-delay="1000"
            className="flex justify-center relative bg-no-repeat bg-center bg-cover h-full page-header"
            // style={{
            //     backgroundImage:
            //         "url(/assets/images/banner/banner-charity.png)",
            // }}
        >
            {/* <div className="absolute top-0 start-0 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" /> */}
            <Image
                src={
                    width < 520
                        ? "/assets/images/banner/Mobile-Landing-Page.png"
                        : "/assets/images/banner/Cover-Event-Charity.png"
                }
                quality={100}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(565, 275),
                )}`}
                width={width < 520 ? 500 : 1600}
                height={width < 520 ? 850 : 700}
            />
        </div>
    );
};

export default PageHeader;
