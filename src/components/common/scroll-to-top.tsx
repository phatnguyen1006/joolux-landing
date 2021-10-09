import React, { FC } from "react";
import cn from "classnames";
import { useWindowScroll } from "react-use";
const ScrollToTop: FC = () => {
    // const {} = useWindowSize();
    const { y } = useWindowScroll();
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleScrollToSection = () => {
        const section2 = document.querySelector(".section-timeline");
        section2.scrollIntoView({
            behavior: "smooth",
        });
    };
    return y < 400 ? (
        <div
            onClick={handleScrollToSection}
            className={cn("go-next-button", {
                hidden: y > 400,
            })}
        >
            Xem thêm
        </div>
    ) : (
        <div
            onClick={handleScrollToTop}
            className={cn("go-top-button", {
                hidden: y < 400,
            })}
        >
            TOP
        </div>
    );
};

export default ScrollToTop;
