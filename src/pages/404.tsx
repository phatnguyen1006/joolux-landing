import { Layout } from "@components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import ErrorPageComponent from "@components/404/error-page";
import ErrorNavigation from "@components/404/error-navigation";

export default function ErrorPage() {
    return (
        <div className="mx-auto max-w-[1234px] pt-4 smJl:pb-16 pb-10 px-8">
            <NextSeo
                additionalMetaTags={[
                    {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                    },
                ]}
                title={"Trang không tồn tại | Joolux"}
                description={"Trang trang bạn tìm kiếm không tồn tại"}
                canonical={process.env.NEXT_PUBLIC_WEBSITE_URL}
                openGraph={{
                    url: process.env.NEXT_PUBLIC_WEBSITE_URL,
                    title: "Trang không tồn tại | Joolux",
                    description: "Trang không tồn tại",
                    images: [
                        {
                            url: "https://joolux.com/og-image.jpg",
                            width: 800,
                            height: 600,
                            alt: "Og Image Alt",
                        },
                        {
                            url: "https://joolux.com/og-image.jpg",
                            width: 900,
                            height: 800,
                            alt: "Og Image Alt Second",
                        },
                    ],
                }}
            />
            <ErrorPageComponent />
            <ErrorNavigation />
        </div>
    );
}

ErrorPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
        },
    };
};
