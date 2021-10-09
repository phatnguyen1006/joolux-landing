import Link from "@components/ui/link";
import MegaMenu from "@components/ui/mega-menu";
import ListMenu from "@components/ui/list-menu";
import classNames from "classnames";
import { useTranslation } from "next-i18next";

interface MenuProps {
    data: any;
    className?: string;
}

const HeaderMenu: React.FC<MenuProps> = ({ data, className }) => {
    const { t } = useTranslation("menu");
    return (
        <div className="border-b border-gray-300">
            <div className={classNames(`headerMenu relative`, className)}>
                <nav className="flex items-center">
                    {data?.map((item: any) => {
                        if (!item.subMenu) {
                            return (
                                <div
                                    className={`menuItem group cursor-pointer py-7 ${
                                        item.subMenu ? "relative" : ""
                                    }`}
                                    key={item.id}
                                >
                                    <Link
                                        href={item.path}
                                        className="uppercase font-semibold inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 relative group-hover:text-black"
                                    >
                                        {t(item.label)}
                                    </Link>
                                    {item?.columns &&
                                        Array.isArray(item.columns) && (
                                            <MegaMenu
                                                columns={item.columns}
                                                image={item?.menuImage}
                                                imageUrl={item?.menuImageUrl}
                                                numOfCols={item?.numOfCols}
                                            />
                                        )}
                                </div>
                            );
                        }
                    })}
                </nav>
                <nav className="flex items-center">
                    <div className={`menuItem group cursor-pointer`} key={7}>
                        <Link
                            href={"/ky-gui"}
                            className="uppercase font-semibold inline-flex items-center text-sm xl:text-base text-secondary px-3 xl:px-4 py-2 relative group-hover:text-black"
                        >
                            Ký gửi
                        </Link>
                    </div>
                    <div
                        className={`menuItem group cursor-pointer`}
                        key={data[0].id}
                    >
                        <Link
                            href={"/other"}
                            className="uppercase font-semibold inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 relative group-hover:text-black"
                        >
                            Dịch vụ khác
                        </Link>
                        {data[1]?.subMenu && Array.isArray(data[1].subMenu) && (
                            <div className="subMenu shadow-header bg-white absolute end-0 opacity-0 group-hover:opacity-100">
                                <ul className="text-body text-sm py-5">
                                    {data[1].subMenu.map(
                                        (menu: any, index: number) => {
                                            const dept: number = 1;
                                            const menuName: string = `sidebar-menu-${dept}-${index}`;
                                            return (
                                                <ListMenu
                                                    dept={dept}
                                                    data={menu}
                                                    hasSubMenu={menu.subMenu}
                                                    menuName={menuName}
                                                    key={menuName}
                                                    menuIndex={index}
                                                />
                                            );
                                        },
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default HeaderMenu;
