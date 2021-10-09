import React, { FC } from "react";

const SectionTwo: FC = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="mx-auto max-w-[1400px] text-center pt-8 smJl:pb-16 pb-10 px-8 overflow-hidden"
        >
            <h2 className="font-brand text-black uppercase text-lg md:text-3xl">
                Khởi nguồn yêu thương
            </h2>
            <p className="mt-4 font-light text-[18px] font-body text-justify md:text-center">
                Tuy dịch bệnh đã được phần nào kiểm soát nhưng bao nhiêu khó
                khăn, ảnh hưởng vẫn còn đó, với khao khát được đóng góp vì cộng
                đồng trong sự nghiệp chống dịch. Chính động lực đó đã thôi thúc
                Joolux khởi nguồn dự án “ Trao tủ đồ yêu thương” hợp tác cùng
                những người có sức ảnh hưởng, với mục tiêu dùng sức mạnh của
                những người có sức ảnh hưởng, tác động và lan toả để cùng sẻ
                chia.
                <br /> Mục tiêu gây quỹ mua một chiếc xe cứu thương hỗ trợ đội
                ngũ y bác sĩ, những cá nhân khó khăn. Số tiền thu được sẽ được
                đơn vị đồng tổ chức quỹ CTXH Anh Hùng Lực Lượng Vũ Trang Nhân
                Dân Phan Trọng Bình thực hiện trao tặng.
            </p>
        </div>
    );
};

export default SectionTwo;
