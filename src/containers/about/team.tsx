import React, { FC } from "react";
import Image from "next/image";
import { toBase64 } from "@utils/toBase64";
import { shimmer } from "@utils/shimmer";
import parse from "html-react-parser";

const Team: FC<{
    teams: {
        _id: string;
        name: string;
        role: string;
        img: string;
        alt: string;
    }[];
}> = ({ teams }) => {
    return (
        <div>
            <div className="mx-auto max-w-[1234px] pt-8 border-t border-[#cfcfcf] font-body other-page px-8">
                <div className="max-w-[900px] mx-auto">
                    <h5 className="text-2xl text-center mb-2 text-primary">
                        Đội Ngũ
                    </h5>
                    <div
                        className="text-[#424242] text-15px mx-auto mb-16 text-center"
                        style={{ maxWidth: 700 }}
                    >
                        Chúng tôi là những người có cùng đam mê với thị trường
                        hàng hiệu, cùng nhau thực hiện sứ mệnh đưa hàng hiệu đến
                        gần hơn với người Việt Nam. Chúng tôi tin rằng, bạn xứng
                        đáng được chiêm ngưỡng, cảm nhận và tận hưởng diện mạo
                        hoàn hảo nhất của bản thân.
                    </div>
                    <div className="about-team-container flex flex-wrap -mx-3 justify-center">
                        {teams.map((member) => {
                            return (
                                <div
                                    key={member._id}
                                    className="w-1/2 smJl:w-1/3 px-3 mb-16"
                                >
                                    <div className="about-team-member-wrapper">
                                        <Image
                                            src={member.img}
                                            // layout="fill"
                                            className="rounded-full"
                                            placeholder="blur"
                                            width={180}
                                            height={180}
                                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                                shimmer(565, 275),
                                            )}`}
                                            alt={member.alt}
                                        />
                                        <div
                                            className="mb-3 mt-4 border-t-2 border-[#101010]"
                                            style={{ width: 80 }}
                                        />
                                        <div className="text-xl mb-1 font-semibold">
                                            {member.name}
                                        </div>
                                        <div className="text-sm text-[#424242]">
                                            {parse(member.role)}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Team;
