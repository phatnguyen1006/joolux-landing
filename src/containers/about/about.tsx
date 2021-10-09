import React, { FC } from "react";
import parse from "html-react-parser";
const About: FC<{ body: string }> = ({ body }) => {
    return (
        <div>
            <div className="mx-auto max-w-[1234px] py-10 sm:py-14 px-8 font-body other-page">
                <div className="max-w-[900px] mx-auto flex flex-col sm:flex-row">
                    <div className="pr-3 sm:pr-10 mb-3">
                        <svg
                            className="w-[100px] h-[100px] smJl:w-[70px] smJl:h-[70px] text-secondary"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M49.994 0C22.386 0 0 22.386 0 49.994s22.386 49.994 49.994 49.994 49.994-22.376 49.994-49.994S77.612 0 49.994 0zm0 96.228c-25.525 0-46.222-20.697-46.222-46.234 0-25.537 20.697-46.222 46.222-46.222 25.525 0 46.234 20.697 46.234 46.222 0 25.525-20.697 46.234-46.234 46.234z"
                                fill="currentColor"
                            />
                            <path
                                d="M64.266 34.93A13.708 13.708 0 0 0 53.4 40.242l-.151.202a1.634 1.634 0 0 0-.137 1.52 1.637 1.637 0 0 0 1.497.99c.061 0 .122-.005.182-.013h.056c.04-.005.08-.012.12-.022l.066-.016.105-.032.064-.022.1-.045.057-.028a1.08 1.08 0 0 0 .105-.06l.044-.027c.048-.031.094-.065.138-.102l.016-.014c.038-.033.074-.067.108-.101l.04-.045c.025-.026.051-.054.075-.084l.013-.014v-.012a10.555 10.555 0 1 1-.99 11.349l-1.327-2.875-4.07-8.773a13.894 13.894 0 0 0-4.435-4.777 13.863 13.863 0 1 0 3.27 20.01l.018-.021.012-.014v-.012a.206.206 0 0 0 .024-.035 1.912 1.912 0 0 0 .095-.147v-.016c.024-.042.044-.087.065-.13l.016-.041c.012-.032.024-.065.034-.097l.016-.052.024-.095.012-.054c0-.033.01-.067.015-.101.004-.034 0-.032 0-.049v-.155c0-.214-.043-.427-.125-.625l-.027-.056a1.625 1.625 0 0 0-2.689-.403l-.072.094a10.555 10.555 0 1 1 .673-11.974c.119.202.232.393.339.605l2.253 4.9v.014l1.412 3.042.32.684 1.145 2.49a13.91 13.91 0 0 0 4.741 5.271 13.822 13.822 0 1 0 7.62-25.346z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div className="about-text-content">
                        <div className="text-xs font-medium uppercase mb-1">
                            Cuộc Hành Trình Hàng Hiệu
                        </div>
                        <h1 className="leading-[1.333] text-2xl font-brand uppercase mb-10 font-normal">
                            Về chúng tôi
                        </h1>
                        {parse(body)}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
