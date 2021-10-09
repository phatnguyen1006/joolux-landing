import React, { FC } from "react";
import Image from "next/image";
const SectionThree: FC = () => {
    return (
        <div className="section-1">
            <div
                data-aos="fade-up"
                data-aos-delay="700"
                className="mx-auto max-w-[1400px] text-center pt-8 smJl:pb-16 pb-10 px-4 sm:px-8 overflow-hidden"
            >
                <h2 className="font-brand text-black uppercase text-lg md:text-3xl">
                    "Tủ Đồ Yêu Thương"
                </h2>
                <div className="flex justify-between md:flex-row md:text-center text-justify flex-col mt-10 items-center md:items-stretch">
                    <div className="section-three-card w-full md:w-1/3 max-w-[400px] p-4 flex flex-col items-center px-4 mb-10">
                        <Image
                            src="/assets/images/Group.svg"
                            width={70}
                            height={90}
                        />
                        <p className="font-normal text-[22px] text-heading">
                            Trao yêu thương
                        </p>
                        <p className="text-[#231F20]">
                            Nơi bạn có thể đóng góp những món hàng hiệu ( túi
                            xách, áo quần, giày dép…) cho quỹ. Mỗi món đồ trao
                            tặng không chỉ về giá trị vật chất mà nó còn mang
                            trong mình tình yêu thương gửi vào chuyến xe cấp cứu
                            ngày đêm cứu từng sinh mệnh.
                        </p>
                    </div>
                    <div className="section-three-card w-full md:w-1/3 max-w-[400px] p-4 flex flex-col items-center px-4 mb-10">
                        <Image
                            src="/assets/images/heart.svg"
                            width={70}
                            height={90}
                        />
                        <p className="font-normal text-[22px] text-heading">
                            Nhận yêu thương
                        </p>
                        <p className="text-[#231F20]">
                            Nơi bạn có thể đặt mua những sản phẩm như một cách
                            để đồng hành cùng Joolux trên hành trình góp sức vì
                            cộng đồng. “Trao giá trị - lãi yêu thương”, khi cầm
                            trên tay những món đồ đấu giá, những món đồ mang
                            những câu chuyện đặc biệt về tình người, về sự sẻ
                            chia.
                        </p>
                    </div>
                    <div className="section-three-card  w-full md:w-1/3 max-w-[400px]  p-4 flex flex-col items-center px-4 mb-10">
                        <Image
                            src="/assets/images/heart-share.svg"
                            width={70}
                            height={100}
                        />
                        <p className="font-normal text-[22px] text-heading">
                            Lan toả điều tích cực
                        </p>
                        <p className="text-[#231F20]">
                            Nơi bạn có thể chia sẻ và lan tỏa những điều nhắn
                            gửi ý nghĩa; mỗi cá nhân dùng sức ảnh hưởng của mình
                            lan tỏa, mang chương trình có thể phủ sóng rộng rãi
                            đến nhiều hơn những tấm lòng thiện nguyên, mong muốn
                            góp sức vì cộng đồng.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;
