import { DefaultSeo as NextDefaultSeo } from "next-seo";
import { siteSettings } from "@settings/site-settings";
import { sitePages } from "@settings/site-pages";
import { useRouter } from "next/router";
export const DefaultSeo = () => {
    const { name, description } = siteSettings;
    const { pathname, query, asPath } = useRouter();
    const seoTitle = sitePages?.[pathname.substring(1)]?.["page_title"] || name;
    const seoDescription =
        sitePages?.[pathname.substring(1)]?.["page_description"] || description;
    const seoOgBanner =
        sitePages?.[pathname.substring(1)]?.["banner"] ||
        "https://joolux.com/og-image.jpg";
    return (
        <NextDefaultSeo
            title={
                (query.search && `${query.search} | Joolux`) ||
                "Trao Tủ Đồ Yêu Thương"
            }
            description={"Góp xe cứu thương - Rút Ngắn Đại Dịch"}
            canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${asPath}`}
            openGraph={{
                type: "website",
                description: "Góp xe cứu thương - Rút Ngắn Đại Dịch",
                locale: "en_IE",
                site_name: seoTitle,
                title: "Trao Tủ Đồ Yêu Thương",
                images: [
                    {
                        url: "/assets/images/banner/Cover-Event-Charity.png",
                        width: 800,
                        height: 600,
                        alt: "Og Image Alt",
                    },
                    {
                        url: "/assets/images/banner/Mobile-Landing-Page.png",
                        width: 900,
                        height: 800,
                        alt: "Og Image Alt Second",
                    },
                ],
            }}
            twitter={{
                handle: "@handle",
                site: "@site",
                cardType: "summary_large_image",
            }}
            additionalMetaTags={[
                {
                    name: "viewport",
                    content:
                        "width=device-width, initial-scale=1 maximum-scale=1",
                },
                {
                    name: "apple-mobile-web-app-capable",
                    content: "yes",
                },
                {
                    name: "theme-color",
                    content: "#ffffff",
                },
            ]}
            additionalLinkTags={[
                {
                    rel: "apple-touch-icon",
                    href: "icons/apple-icon-180.png",
                },
                {
                    rel: "manifest",
                    href: "/manifest.json",
                },
            ]}
        />
    );
};
