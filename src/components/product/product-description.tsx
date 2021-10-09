import React, { FC } from "react";
import parse from "html-react-parser";

const ProductDescription: FC<{ description: string }> = ({ description }) => {
    return <div className="pt-2 pb-4">{parse(description)}</div>;
};

export default ProductDescription;
