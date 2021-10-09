import { isArray } from "lodash";
import dynamic from "next/dynamic";
import { FC } from "react";
const Countdown = dynamic(() => import("react-countdown"), { ssr: false });
import { zeroPad } from "react-countdown";
import { Button } from "@components/ui/button";
const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
        // Render a completed state
        return <span>Time Over!</span>;
    } else {
        // Render a countdown
        const formattedDays =
            zeroPad(days).length < 3 ? zeroPad(days).split("") : zeroPad(days);
        const formattedHours =
            zeroPad(hours).length < 3
                ? zeroPad(hours).split("")
                : zeroPad(hours);
        const formattedMinutes =
            zeroPad(minutes).length < 3
                ? zeroPad(minutes).split("")
                : zeroPad(minutes);
        const formattedSeconds =
            zeroPad(seconds).length < 3
                ? zeroPad(seconds).split("")
                : zeroPad(seconds);
        return (
            <div className="flex items-center space-s-1.5 md:space-s-2.5 justify-center">
                <div className="text-heading text-sm sm:text-lg md:text-md font-normal text-center uppercase">
                    {isArray(formattedDays) ? (
                        <div className="flex">
                            {formattedDays.map((day) => {
                                return (
                                    <span className="countdown-item text-[#101010] text-xs sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 mr-2 font-normal">
                                        {day}
                                    </span>
                                );
                            })}
                        </div>
                    ) : (
                        <span className="countdown-item text-[#101010] sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 font-normal">
                            {formattedDays}
                        </span>
                    )}
                    ngày
                </div>
                <div className="text-heading text-sm sm:text-lg md:text-md font-normal text-center uppercase">
                    {isArray(formattedHours) ? (
                        <div className="flex">
                            {formattedHours.map((hour) => {
                                return (
                                    <span className="countdown-item text-[#101010] text-xs sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 mr-2 font-normal">
                                        {hour}
                                    </span>
                                );
                            })}
                        </div>
                    ) : (
                        <span className="countdown-item text-[#101010] text-xs sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 font-normal">
                            {formattedHours}
                        </span>
                    )}
                    giờ
                </div>
                <div className="text-heading text-sm sm:text-lg md:text-md font-normal text-center uppercase">
                    {isArray(formattedMinutes) ? (
                        <div className="flex">
                            {formattedMinutes.map((minute) => {
                                return (
                                    <span className="countdown-item text-[#101010] text-xs sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 mr-2 font-normal">
                                        {minute}
                                    </span>
                                );
                            })}
                        </div>
                    ) : (
                        <span className="countdown-item text-[#101010] text-xs sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 font-normal">
                            {formattedMinutes}
                        </span>
                    )}
                    phút
                </div>
                <div className="text-heading text-sm sm:text-lg md:text-md font-normal text-center uppercase">
                    {isArray(formattedSeconds) ? (
                        <div className="flex">
                            {formattedSeconds.map((second) => {
                                return (
                                    <span className="countdown-item text-[#101010] text-xs sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 mr-2 font-normal">
                                        {second}
                                    </span>
                                );
                            })}
                        </div>
                    ) : (
                        <span className="countdown-item text-[#101010] text-xs sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 font-normal">
                            {formattedSeconds}
                        </span>
                    )}
                    giây
                </div>
            </div>
        );
    }
};

const CountdownComponent: FC = () => {
    const date = "2021-10-09T19:30:00+0700";
    const url =
        "https://www.facebook.com/events/806937079986486/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D";

    function handleClick(url: string) {
        window.open(url, "_blank");
    }

    return (
        <div className="text-center mt-8">
            <Countdown date={date} intervalDelay={1000} renderer={renderer} />
            <div>
                <Button
                    className="h-full w-1/2 md:w-1/4 mt-5  text-[#101010] text-xs md:text-md font-bold text-center uppercase countdown-button hover:text-[#101010]"
                    onClick={() => handleClick(url)}
                >
                    Xem chương Trình
                </Button>
            </div>
        </div>
    );
};

export default CountdownComponent;
