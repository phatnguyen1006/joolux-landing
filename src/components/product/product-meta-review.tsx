import { Collapse } from "@components/common/accordion";
// import ReviewForm from "@components/common/form/review-form";
// import { FC } from "react";

interface Props {
    data: {
        id: number;
        title: string;
        content: React.ReactNode;
    }[];
}

const ProductMetaReview: React.FC<Props> = ({ data }) => {
    return (
        <>
            {data?.map((item: any, index: any) => (
                <Collapse
                    i={item.id}
                    key={item.id}
                    title={item.title}
                    translatorNS="review"
                    content={item.content}
                    variant="transparent"
                />
            ))}
        </>
    );
};

export default ProductMetaReview;
