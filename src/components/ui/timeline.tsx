import React, { FC } from "react";
import { useWindowSize } from "@utils/use-window-size";
import VerticalTimeline from "./vertical-timeline";
const VALUES = [
    "2008-06-01",
    "2010-06-01",
    "2013-06-01",
    "2015-03-01",
    "2019-01-01",
    "2019-06-17",
    "2019-08-01",
];
const Timeline: FC = () => {
    // const [value, setValue] = useState<any>({ value: 0, previous: 0 });
    // const dates = [
    //     "6/12/2015",
    //     "8/15/2015",
    //     "10/22/2015",
    //     "11/2/2015",
    //     "12/22/2015",
    // ];
    const { width } = useWindowSize();
    return width < 780 ? (
        <VerticalTimeline />
    ) : (
        <div>
            {/* <Image
                src="/assets/images/charity-timeline.jpg"
                width={700}
                height={100}
                layout="responsive"
            /> */}
            <div className="timeline-wrapper">
                <div className="middle-line" />
                <div
                    className="box box-bottom"
                    data-aos="fade-up"
                    data-aos-delay="800"
                >
                    <div className="date"></div>
                    <div className="box-content">
                        <p className="!text-[#E5C289] !text-[22px]">07/10</p>
                        <p>Những thương hiệu góp mặt tại chương trình </p>
                    </div>
                </div>

                <div
                    className="box box-bottom"
                    data-aos="fade-up"
                    data-aos-delay="900"
                >
                    <div className="date"></div>
                    <div className="box-content">
                        <p className="!text-[#E5C289] !text-[22px]">09/10</p>
                        <p>Livestream đấu giá và mở bán chính thức - Lần 1</p>
                    </div>
                </div>

                <div
                    className="box box-bottom"
                    data-aos="fade-up"
                    data-aos-delay="1000"
                >
                    <div className="date"></div>
                    <div className="box-content">
                        <p className="!text-[#E5C289] !text-[22px]">30/10</p>
                        <p>Livestream đấu giá và mở bán chính thức - Lần 2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
