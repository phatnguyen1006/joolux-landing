/* This example requires Tailwind CSS v2.0+ */
import { ROUTES } from "@utils/routes";
import { useLogoutMutation } from "@framework/auth/use-logout";
import Link from "next/link";
import {
    IoPersonCircleSharp,
    IoHomeOutline,
    IoCartOutline,
    IoPersonOutline,
    IoLogOutOutline,
} from "react-icons/io5";
import { useTranslation } from "next-i18next";

export default function ExaAccountDropdownmple() {
    const { t } = useTranslation("common");
    const { mutate: logout } = useLogoutMutation();
    const accountMenu = [
        {
            slug: ROUTES.ACCOUNT,
            name: "text-dashboard",
            icon: <IoHomeOutline className="w-4 h-4" />,
        },
        {
            slug: ROUTES.ORDERS,
            name: "text-orders",
            icon: <IoCartOutline className="w-4 h-4" />,
        },
        {
            slug: ROUTES.ACCOUNT_DETAILS,
            name: "text-account-details",
            icon: <IoPersonOutline className="w-4 h-4" />,
        },
    ];
    return (
        <div className="group inline-block relative">
            <button>
                <IoPersonCircleSharp className="w-7 h-7 text-white" />
            </button>
            <div className="hidden group-hover:block arrow bg-white top-[38px] left-4 z-50"></div>
            <ul
                className="absolute hidden text-gray-700 group-hover:block min-w-[170px] right-[-72px] top-7 bg-white mt-3"
                style={{
                    boxShadow: "0 2px 4px #999",
                    border: "1px solid #666",
                    padding: "1.07em 1.43em 1.43em",
                }}
            >
                {accountMenu.map((item) => {
                    return (
                        <Link key={item.slug} href={item.slug}>
                            <a
                                className={
                                    "flex items-center cursor-pointer text-xs text-heading font-normal py-2.5 px-2 lg:px-3 hover:underline"
                                }
                            >
                                {item.icon}
                                <span className="ps-2">
                                    {t(`${item?.name}`)}
                                </span>
                            </a>
                        </Link>
                    );
                })}
                <button
                    className="flex items-center cursor-pointer text-xs text-heading font-normal py-2.5 px-2 lg:px-3 hover:underline focus:outline-none w-full"
                    onClick={() => logout()}
                >
                    <IoLogOutOutline className="w-4 h-4" />
                    <span className="ps-2">Đăng xuất</span>
                </button>
            </ul>
        </div>
    );
}
