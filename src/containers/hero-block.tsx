import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
// import { homeOneHeroBanner as banners } from "@framework/static/banner";
// import { useWindowSize } from "@utils/use-window-size";
import { ROUTES } from "@utils/routes";
import { SwiperSlide } from "swiper/react";
import { HomepageBanner } from "@framework/types";

const breakpoints = {
    "1500": {
        slidesPerView: 1,
    },
    "0": {
        slidesPerView: 1,
    },
};

const HeroBlock: React.FC<{ homepageBanner: HomepageBanner[] }> = ({
    homepageBanner,
}) => {
    // const { width } = useWindowSize();
    return (
        <div className="heroBannerOne relative mb-5 md:mb-12 lg:mb-14 2xl:mb-16 mx-auto overflow-hidden px-0">
            <Carousel
                breakpoints={breakpoints}
                // centeredSlides={width < 1500 ? false : true}
                autoplay={{ delay: 3000 }}
                className="mx-0"
                buttonClassName="hidden"
                pagination={{
                    clickable: true,
                }}
            >
                {homepageBanner?.map((banner) => (
                    <SwiperSlide
                        className="carouselItem px-0"
                        key={`banner--key-${banner?.id}`}
                    >
                        <BannerCard
                            banner={banner}
                            href={`${ROUTES.SERVICES}/${banner.slug}`}
                            variant="default"
                        />
                    </SwiperSlide>
                ))}
            </Carousel>
        </div>
    );
};

export default HeroBlock;
