import { Blog } from "@framework/types";
import React, { FC } from "react";
import BlogCategory from "./blog-category";
import BlogLayoutBody from "./blog-layout-body";

interface IBlogPostProps {
    blogs: Blog[];
    pagination: {
        hasNextPage: number;
        hasPreviousPage: number;
        total: number;
        totalPage: number;
    };
    isLoading: boolean;
}

const BlogPost: FC<IBlogPostProps> = ({ blogs, pagination, isLoading }) => {
    return (
        <div className="flex flex-wrap mt-8">
            <BlogLayoutBody
                blogs={blogs}
                pagination={pagination}
                isLoading={isLoading}
            />
            <BlogCategory />
        </div>
    );
};
export default BlogPost;
