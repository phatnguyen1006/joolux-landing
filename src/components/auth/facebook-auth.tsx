import React from "react";
import { Button } from "@components/ui/button";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { SiFacebook } from "react-icons/si";
import { useTranslation } from "next-i18next";
import { useFacebookAuthMutation } from "@framework/auth/use-facebook-auth";

function FacebookAuth() {
    const { t } = useTranslation();
    const { mutate: authFacebook } = useFacebookAuthMutation();
    async function handleFacebookAuth(e) {
        authFacebook({
            email: e?.email,
            avatar: e?.picture,
            name: e?.name,
            tokenId: e?.accessToken,
        });
    }
    return (
        <FacebookLogin
            appId={process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_KEY}
            onSuccess={handleFacebookAuth}
            // autoLoad={true}
            fields="name,email,picture"
            scope="public_profile,email"
            onFail={handleFacebookAuth}
            render={({ onClick }) => (
                <Button
                    variant="jl"
                    className="h-11 md:h-12 w-full mt-2.5 bg-white text-black hover:opacity-80 border-solid border-[1px] border-[#101010] hover:bg-white"
                    onClick={onClick}
                >
                    <SiFacebook className="text-sm sm:text-base me-1.5 text-[#1877f2]" />
                    {t("common:text-login-with-facebook")}
                </Button>
            )}
        />
    );
}

export default FacebookAuth;
