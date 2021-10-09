import React from "react";
import { Button } from "@components/ui/button";
import { GoogleLogin } from "react-google-login";
import { useTranslation } from "next-i18next";
import { useGoogleAuthMutation } from "@framework/auth/use-google-auth";
import { FcGoogle } from "react-icons/fc";

function GoogleAuth() {
    const { t } = useTranslation();
    const { mutate: authGoogle } = useGoogleAuthMutation();
    function handleGoogleAuth(e) {
        authGoogle({
            tokenId: e?.tokenId,
        });
    }
    return (
        <GoogleLogin
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY}
            render={(renderProps) => (
                <Button
                    variant="jl"
                    className="h-11 md:h-12 w-full mt-2.5 bg-white text-black hover:opacity-80 border-solid border-[1px] border-[#101010] hover:bg-white"
                    onClick={renderProps.onClick}
                >
                    <FcGoogle className="text-sm sm:text-base me-1.5" />
                    {t("common:text-login-with-google")}
                </Button>
            )}
            onSuccess={handleGoogleAuth}
            onFailure={handleGoogleAuth}
            cookiePolicy={"single_host_origin"}
        />
    );
}

export default GoogleAuth;
