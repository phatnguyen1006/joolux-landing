import { useUI } from "@contexts/ui.context";
import Modal from "./modal";
import dynamic from "next/dynamic";
import Newsletter from "../newsletter";
import ImageView from "../image-view";
const LoginForm = dynamic(() => import("@components/auth/login-form"));
const SignUpForm = dynamic(
    () => import("@components/auth/refactor-sign-up-form"),
);
const ForgetPasswordForm = dynamic(
    () => import("@components/auth/forget-password-form"),
);
const ConditionTooltip = dynamic(
    () => import("@components/common/condition-tooltip"),
);

// const ProductPopup = dynamic(() => import("@components/product/product-popup"));

const ManagedModal: React.FC = () => {
    const { displayModal, closeModal, modalView } = useUI();
    return (
        <Modal
            open={displayModal}
            onClose={closeModal}
            hiddenClose={
                modalView === "LOGIN_VIEW" ||
                modalView === "SIGN_UP_VIEW" ||
                modalView === "IMAGE_VIEW"
            }
        >
            {modalView === "LOGIN_VIEW" && <LoginForm />}
            {modalView === "SIGN_UP_VIEW" && <SignUpForm />}
            {modalView === "FORGET_PASSWORD" && <ForgetPasswordForm />}
            {modalView === "NEWSLETTER_VIEW" && <Newsletter />}
            {modalView === "IMAGE_VIEW" && <ImageView />}
            {modalView === "CONDITION_TOOLTIP_VIEW" && (
                <ConditionTooltip mobile={false} />
            )}
            {/* {modalView === "PRODUCT_VIEW" && <ProductPopup />} */}
        </Modal>
    );
};

export default ManagedModal;
