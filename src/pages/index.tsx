import React from "react";
import { GetStaticProps, NextPage } from "next";
import { SiteLinksSearchBoxJsonLd } from "next-seo";
// import { useAmp } from "next/amp";
export const config = {
    amp: false,
    hybrid: false,
};
// import { Layout } from "@components/layout/layout";
import { Container } from "@components";
// import { I18NExample } from "@components/examples/translate";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CharityLayout from "@containers/campaigns/charity/charity-layout";
import SectionTwo from "@containers/campaigns/charity/section-2";
import SectionThree from "@containers/campaigns/charity/section-3";
import SectionFour from "@containers/campaigns/charity/section-4";
import SectionFive from "@containers/campaigns/charity/section-5";
const SectionSix = dynamic(
    () => import("@containers/campaigns/charity/section-6"),
    {
        ssr: false,
    },
);
// import SectionSix from "@containers/campaigns/charity/section-6";
import SectionSeven from "@containers/campaigns/charity/section-7";

// Các pages sẽ không cần gắn types như :React.FC
const Home: NextPage = () => {
    return (
        <>
            <SiteLinksSearchBoxJsonLd
                url={process.env.NEXT_PUBLIC_WEBSITE_URL}
                potentialActions={[
                    {
                        target: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/hang-moi-ve?q`,
                        queryInput: "Search",
                    },
                    {
                        target: `android-app://com.example/https/${process.env.NEXT_PUBLIC_WEBSITE_URL.substring(
                            8,
                        )}/hang-moi-ve?q`,
                        queryInput: "Search",
                    },
                ]}
            />
            {/* <Subscription /> */}
            {/* <Main />
            <I18NExample /> */}
            <Container>
                <CharityLayout />
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SectionFive />
                <SectionSix />
                <SectionSeven />
            </Container>
            {/* <Cards /> */}
        </>
    );
};

{
    /* <amp-img
alt="Mountains"
width="550"
height="368"
layout="responsive"
src="https://amp.dev/static/inline-examples/images/mountains.webp"
>
<amp-img
    alt="Mountains"
    fallback=""
    width="550"
    height="368"
    layout="responsive"
    src="https://amp.dev/static/inline-examples/images/mountains.jpg"
></amp-img>
</amp-img> */
}
// Home.Layout = Layout;
export default Home;
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
