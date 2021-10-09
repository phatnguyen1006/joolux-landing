import { UserProfile } from "@framework/types";
import { useState, FC } from "react";
import AccountEdit from "./account-edit";
import AccountInfo from "./account-info";
import ChangePassword from "./change-password";

const AccountDetails: FC = () => {
    const [page, setPage] = useState(1);
    const [details, setDetails] = useState<UserProfile>();
    if (page === 1) {
        return <AccountInfo setPage={setPage} setDetails={setDetails} />;
    }
    if (page === 2) {
        return <AccountEdit setPage={setPage} details={details} />;
    }
    if (page === 3) {
        return <ChangePassword setPage={setPage} />;
    }
};
export default AccountDetails;
