import { Blog } from "@framework/types";
import React, { FC } from "react";
import BlogPost from "./blog-post";
import BlogItemCenter from "./blog-breadcrumb";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";

interface IBlogContainerProps {
    blogs: Blog[];
    pagination: {
        hasNextPage: number;
        hasPreviousPage: number;
        total: number;
        totalPage: number;
    };
    isLoading: boolean;
    seo?: { name: string; slug: string; description: string; image: string };
}

const BlogContainer: FC<IBlogContainerProps> = ({
    isLoading,
    pagination,
    blogs,
    seo,
}) => {
    return (
        <div className="mx-auto max-w-[1440px] py-4 lg:px-8 px-5 blogContainer">
            <BlogItemCenter seo={seo} />
            {isLoading ? (
                <ProductFeedLoader limit={20} uniqueKey="search-product" />
            ) : (
                pagination?.total !== 0 && (
                    <BlogPost
                        blogs={blogs}
                        pagination={pagination}
                        isLoading={isLoading}
                    />
                )
            )}
        </div>
    );
};
export default BlogContainer;
