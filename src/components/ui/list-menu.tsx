import { useTranslation } from "next-i18next";
import Link from "./link";

const ListMenu = ({ dept, data, hasSubMenu, menuIndex }: any) => {
    const { t } = useTranslation("menu");
    return (
        <li className="relative">
            <Link
                href={data?.path}
                className="flex items-center justify-between py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 hover:text-secondary"
            >
                {t(data.label)}
            </Link>
        </li>
    );
};

export default ListMenu;
