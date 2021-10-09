import { FC } from "react";
import { ICheckoutRadioBox } from "./types";

const CheckoutRadioBox: FC<ICheckoutRadioBox> = ({
    value,
    labelText,
    initialCheck,
    register,
    setRadioItem,
    name,
    id,
}) => {
    return (
        <label
            role="radio"
            // aria-checked={initialCheck}
            // tabIndex={-1}
            className="step-form-radio-label"
        >
            <input
                type="radio"
                className="hidden"
                name={name}
                onClick={() => {
                    setRadioItem(id);
                }}
                {...register(name)}
                defaultValue={value}
                defaultChecked={initialCheck}
            />
            <div
                className={`step-form-radio-box ${
                    !initialCheck && "before:opacity-0"
                }`}
            />
            <span className="step-form-radio-text">{labelText}</span>
        </label>
    );
};

export default CheckoutRadioBox;
