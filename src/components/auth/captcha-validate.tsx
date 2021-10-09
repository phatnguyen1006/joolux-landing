import { FC, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptchaComponent: FC<any> = ({ setValue }) => {
    const reCaptchaRef = useRef(null);
    function onChange() {
        setValue("captcha", reCaptchaRef.current.getValue());
    }

    return (
        <>
            <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_APIKEY}
                onChange={onChange}
                ref={reCaptchaRef}
            />
        </>
    );
};
export default ReCaptchaComponent;
