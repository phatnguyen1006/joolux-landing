import React, { FC } from "react";
import BlogMenu from "./blog-menu";
import BlogNews from "./blog-news";

interface IBlogCategoryProps {
    banner?: any;
    variant?: "rounded" | "default";
    effectActive?: boolean;
    className?: string;
    classNameInner?: string;
}

const BlogCategory: FC<IBlogCategoryProps> = ({ ...props }) => {
    return (
        <div className="BlogLayout__SidebarWrapper-sc-1ragf6m-1  blog-layout-sidebar w-full">
            <aside className="block">
                <BlogMenu />
                <BlogNews />
            </aside>
        </div>
    );
};
export default BlogCategory;
