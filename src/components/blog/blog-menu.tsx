import React, { FC } from "react";
import ActiveLink from "@components/ui/active-link";
import { useGetAllBlogCategoriesQuery } from "@framework/blog/get-all-blog-categories";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { ROUTES } from "@utils/routes";

interface IBlogMenuProps {
    banner?: any;
    variant?: "rounded" | "default";
    effectActive?: boolean;
    className?: string;
    classNameInner?: string;
}

const BlogMenu: FC<IBlogMenuProps> = ({ ...props }) => {
    const { isLoading, data, error } = useGetAllBlogCategoriesQuery();
    if (error) return <p>{error.message}</p>;
    return (
        <div className="text-xs block Breadcrumbb">
            <div className="mb-8">
                <h6 className="typo-h6 font-body uppercase border-b border-gray-900 pb-3">
                    Danh mục
                </h6>
                <div className="py-4">
                    <ul className="ist-nonem-0 p-0">
                        {isLoading ? (
                            <ProductFeedLoader />
                        ) : (
                            data?.data?.map((i) => {
                                if (i?.total !== 0)
                                    return (
                                        <li
                                            key={i.id}
                                            className="CategoryWidgetList__ListItem-sc-8o6c2-0 efHCuC"
                                        >
                                            <ActiveLink
                                                activeClassName="!text-secondary"
                                                href={`${ROUTES.BLOG}/category/${i?.slug}`}
                                            >
                                                <a
                                                    href={`${ROUTES.BLOG}/category/${i?.slug}`}
                                                    className="hover:text-secondary transition-colors duration-200 blog-category-item"
                                                >
                                                    {i?.name} {`(${i?.total})`}
                                                </a>
                                            </ActiveLink>
                                        </li>
                                    );
                            })
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default BlogMenu;
