import React, { FC } from "react";
import ActiveLink from "@components/ui/active-link";
import { BreadcrumbItems } from "@components/common/breadcrumb";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
interface IBlogItemProps {
    seo?: { name: string; slug: string; description: string; image: string };
}

const BlogItemCenter: FC<IBlogItemProps> = ({ seo }) => {
    const { t } = useTranslation("common");
    return (
        <div className="pb-3">
            <BreadcrumbItems separator="/">
                <ActiveLink
                    href={"/"}
                    activeClassName="font-semibold text-heading"
                >
                    {/* <a>{t("breadcrumb-home")}</a> */}
                    <a>{t("Trang chủ")}</a>
                </ActiveLink>
                <ActiveLink
                    href={ROUTES.BLOG}
                    activeClassName="font-semibold text-heading"
                >
                    <a className="capitalize">
                        {/* {t("breadcrumb-search")} */}
                        {t("blog")}
                    </a>
                </ActiveLink>
                {seo?.name && (
                    <span className="font-semibold text-heading">
                        <a>{seo?.name}</a>
                    </span>
                )}
            </BreadcrumbItems>
        </div>
    );
};
export default BlogItemCenter;
