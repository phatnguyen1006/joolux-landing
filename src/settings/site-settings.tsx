import { ILFlag } from "@components/icons/ILFlag";
import { SAFlag } from "@components/icons/SAFlag";
import { CNFlag } from "@components/icons/CNFlag";
import { USFlag } from "@components/icons/USFlag";
import { DEFlag } from "@components/icons/DEFlag";
import { ESFlag } from "@components/icons/ESFlag";
export const siteSettings = {
    name: "Joolux",
    description:
        "Sàn mua bán và ký gửi đồ hiệu, hàng hiệu chính hãng mới cũ chuyên nghiệp. Mua bán chuyên nghiệp phí tốt, an toàn. Dịch vụ nhanh chóng đảm bảo.",
    author: {
        name: "Webdev Studios",
        websiteUrl: "https://joolux-client.ml",
        address: "",
    },
    logo: {
        url: "/assets/images/logo.svg",
        alt: "Webdev",
        href: "/",
        width: 95,
        height: 30,
    },
    defaultLanguage: "en",
    currencyCode: "USD",
    site_header: {
        menu: [
            {
                id: 1,
                path: "/hang-moi-ve",
                label: "Hàng mới về",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                menuImageUrl: "/hang-moi-ve",
                numOfCols: 5,
                columns: [
                    {
                        id: 1,
                        columnItems: [
                            {
                                id: 1,
                                path: "/hang-moi-ve",
                                label: "Thương hiệu",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/hang-moi-ve?brands=Louis+Vuitton",
                                        label: "Louis Vuitton",
                                    },
                                    {
                                        id: 2,
                                        path: "/hang-moi-ve?brands=Gucci",
                                        label: "Gucci",
                                    },
                                    {
                                        id: 3,
                                        path: "/hang-moi-ve?brands=Chanel",
                                        label: "Chanel",
                                    },
                                    {
                                        id: 4,
                                        path: "/hang-moi-ve?brands=Prada",
                                        label: "Prada",
                                    },
                                    {
                                        id: 5,
                                        path: "/hang-moi-ve?brands=Burberry",
                                        label: "Burberry",
                                    },
                                    {
                                        id: 6,
                                        path: "/hang-moi-ve?brands=Bottega+Veneta",
                                        label: "Bottega Veneta",
                                    },
                                    {
                                        id: 7,
                                        path: "/hang-moi-ve?brands=Balenciaga",
                                        label: "Balenciaga",
                                    },
                                    {
                                        id: 8,
                                        path: "/hang-moi-ve?brands=Dior",
                                        label: "Dior",
                                    },
                                    {
                                        id: 9,
                                        path: "/hang-moi-ve?brands=Saint+Laurent",
                                        label: "Saint Laurent",
                                    },
                                    {
                                        id: 10,
                                        path: "/hang-moi-ve?brands=Fendi",
                                        label: "Fendi",
                                    },
                                    {
                                        id: 11,
                                        path: "/hang-moi-ve?brands=Celine",
                                        label: "Celine",
                                    },
                                    {
                                        id: 12,
                                        path: "/brands",
                                        bold: true,
                                        label: "Xem tất cả",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        columnItems: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?genders=Nam",
                                label: "Nam",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/hang-moi-ve?genders=Nam",
                                        bold: true,
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/tui-xach?genders=Nam",
                                        label: "Túi xách",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/giay-sneaker?genders=Nam",
                                        label: "Giày & Sneaker",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/dong-ho-cao-cap?genders=Nam",
                                        label: "Đồng hồ",
                                    },
                                    {
                                        id: 5,
                                        path: "/categories/phu-kien?genders=Nam",
                                        label: "Phụ kiện",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 3,
                        columnItems: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?genders=Nữ",
                                label: "Nữ",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/hang-moi-ve?genders=Nữ",
                                        bold: true,
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/tui-xach?genders=Nữ",
                                        label: "Túi xách",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/giay-sneaker?genders=Nữ",
                                        label: "Giày & Sneaker",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/dong-ho-cao-cap?genders=Nữ",
                                        label: "Đồng hồ",
                                    },
                                    {
                                        id: 5,
                                        path: "/categories/phu-kien?genders=Nữ",
                                        label: "Phụ kiện",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                path: "/dich-vu",
                label: "Dịch vụ khác",
                subMenu: [
                    {
                        id: 1,
                        path: "/dich-vu/kiem-dinh-hang-hieu",
                        label: "Kiểm định hàng hiệu",
                    },
                    {
                        id: 2,
                        path: "/dich-vu/cham-soc-hang-hieu",
                        label: "Chăm sóc và chế tác hàng hiệu",
                    },
                    {
                        id: 3,
                        path: "/minimal",
                        label: "Cho thuê hàng hiệu (upcoming)",
                    },
                ],
            },
            {
                id: 3,
                path: "/hang-moi-ve",
                label: "Thương hiệu",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                menuImageUrl: "/hang-moi-ve",
                numOfCols: 4,
                columns: [
                    {
                        id: 1,
                        columnItems: [
                            {
                                id: 1,
                                path: "/hang-moi-ve",
                                label: "Thương hiệu nổi tiếng",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/hang-moi-ve?brands=Louis+Vuitton",
                                        label: "Louis Vuitton",
                                    },
                                    {
                                        id: 2,
                                        path: "/hang-moi-ve?brands=Gucci",
                                        label: "Gucci",
                                    },
                                    {
                                        id: 3,
                                        path: "/hang-moi-ve?brands=Chanel",
                                        label: "Chanel",
                                    },
                                    {
                                        id: 4,
                                        path: "/hang-moi-ve?brands=Prada",
                                        label: "Prada",
                                    },
                                    {
                                        id: 5,
                                        path: "/hang-moi-ve?brands=Burberry",
                                        label: "Burberry",
                                    },
                                    {
                                        id: 6,
                                        path: "/hang-moi-ve?brands=Bottega+Veneta",
                                        label: "Bottega Veneta",
                                    },
                                    {
                                        id: 7,
                                        path: "/hang-moi-ve?brands=Balenciaga",
                                        label: "Balenciaga",
                                    },
                                    {
                                        id: 8,
                                        path: "/hang-moi-ve?brands=Dior",
                                        label: "Dior",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        columnItems: [
                            {
                                id: 1,
                                path: "/hang-moi-ve",
                                label: "",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/hang-moi-ve?brands=Goyard",
                                        label: "Goyard",
                                    },
                                    {
                                        id: 2,
                                        path: "/hang-moi-ve?brands=Saint+Laurent",
                                        label: "Saint Laurent",
                                    },
                                    {
                                        id: 3,
                                        path: "/hang-moi-ve?brands=Fendi",
                                        label: "Fendi",
                                    },
                                    {
                                        id: 4,
                                        path: "/hang-moi-ve?brands=Celine",
                                        label: "Celine",
                                    },
                                    {
                                        id: 5,
                                        path: "/hang-moi-ve?brands=Longines",
                                        label: "Longines",
                                    },
                                    {
                                        id: 6,
                                        path: "/hang-moi-ve?brands=Chloé",
                                        label: "Chloé",
                                    },
                                    {
                                        id: 7,
                                        path: "/hang-moi-ve?brands=Alexander+McQueen",
                                        label: "Alexander McQueen",
                                    },
                                    {
                                        id: 8,
                                        path: "/brands",
                                        bold: true,
                                        label: "Xem tất cả",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 4,
                path: "/hang-moi-ve?genders=Nam",
                label: "Nam",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                menuImageUrl: "/hang-moi-ve?genders=Nam",
                numOfCols: 4,
                columns: [
                    {
                        id: 1,
                        columnItems: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?genders=Nam",
                                label: "Thương hiệu",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/hang-moi-ve?brands=Louis+Vuitton&genders=Nam",
                                        label: "Louis Vuitton",
                                    },
                                    {
                                        id: 2,
                                        path: "/hang-moi-ve?brands=Gucci&genders=Nam",
                                        label: "Gucci",
                                    },
                                    {
                                        id: 3,
                                        path: "/hang-moi-ve?brands=Chanel&genders=Nam",
                                        label: "Chanel",
                                    },
                                    {
                                        id: 4,
                                        path: "/hang-moi-ve?brands=Prada&genders=Nam",
                                        label: "Prada",
                                    },
                                    {
                                        id: 5,
                                        path: "/hang-moi-ve?brands=Burberry&genders=Nam",
                                        label: "Burberry",
                                    },
                                    {
                                        id: 6,
                                        path: "/hang-moi-ve?brands=Bottega+Veneta&genders=Nam",
                                        label: "Bottega Veneta",
                                    },
                                    {
                                        id: 7,
                                        path: "/hang-moi-ve?brands=Balenciaga&genders=Nam",
                                        label: "Balenciaga",
                                    },
                                    {
                                        id: 8,
                                        path: "/hang-moi-ve?brands=Dior&genders=Nam",
                                        label: "Dior",
                                    },
                                    {
                                        id: 9,
                                        path: "/hang-moi-ve?brands=Saint+Laurent&genders=Nam",
                                        label: "Saint Laurent",
                                    },
                                    {
                                        id: 10,
                                        path: "/hang-moi-ve?brands=Fendi&genders=Nam",
                                        label: "Fendi",
                                    },
                                    {
                                        id: 11,
                                        path: "/hang-moi-ve?brands=Celine&genders=Nam",
                                        label: "Celine",
                                    },
                                    {
                                        id: 12,
                                        path: "/brands",
                                        bold: true,
                                        label: "Xem tất cả",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        columnItems: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?genders=Nam",
                                label: "Danh mục",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/hang-moi-ve?genders=Nam",
                                        bold: true,
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/tui-xach?genders=Nam",
                                        label: "Túi xách",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/giay-sneaker?genders=Nam",
                                        label: "Giày & Sneaker",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/dong-ho-cao-cap?genders=Nam",
                                        label: "Đồng hồ",
                                    },
                                    {
                                        id: 5,
                                        path: "/categories/phu-kien?genders=Nam",
                                        label: "Phụ kiện",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 5,
                path: "/hang-moi-ve?genders=Nữ",
                label: "Nữ",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                menuImageUrl: "/hang-moi-ve?genders=Nữ",
                numOfCols: 4,
                columns: [
                    {
                        id: 1,
                        columnItems: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?genders=Nữ",
                                label: "Thương hiệu",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/hang-moi-ve?brands=Louis+Vuitton&genders=Nữ",
                                        label: "Louis Vuitton",
                                    },
                                    {
                                        id: 2,
                                        path: "/hang-moi-ve?brands=Gucci&genders=Nữ",
                                        label: "Gucci",
                                    },
                                    {
                                        id: 3,
                                        path: "/hang-moi-ve?brands=Chanel&genders=Nữ",
                                        label: "Chanel",
                                    },
                                    {
                                        id: 4,
                                        path: "/hang-moi-ve?brands=Prada&genders=Nữ",
                                        label: "Prada",
                                    },
                                    {
                                        id: 5,
                                        path: "/hang-moi-ve?brands=Burberry&genders=Nữ",
                                        label: "Burberry",
                                    },
                                    {
                                        id: 6,
                                        path: "/hang-moi-ve?brands=Bottega+Veneta&genders=Nữ",
                                        label: "Bottega Veneta",
                                    },
                                    {
                                        id: 7,
                                        path: "/hang-moi-ve?brands=Balenciaga&genders=Nữ",
                                        label: "Balenciaga",
                                    },
                                    {
                                        id: 8,
                                        path: "/hang-moi-ve?brands=Dior&genders=Nữ",
                                        label: "Dior",
                                    },
                                    {
                                        id: 9,
                                        path: "/hang-moi-ve?brands=Saint+Laurent&genders=Nữ",
                                        label: "Saint Laurent",
                                    },
                                    {
                                        id: 10,
                                        path: "/hang-moi-ve?brands=Fendi&genders=Nữ",
                                        label: "Fendi",
                                    },
                                    {
                                        id: 11,
                                        path: "/hang-moi-ve?brands=Celine&genders=Nữ",
                                        label: "Celine",
                                    },
                                    {
                                        id: 12,
                                        path: "/brands",
                                        bold: true,
                                        label: "Xem tất cả",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        columnItems: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?genders=Nữ",
                                label: "Danh mục",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/hang-moi-ve?genders=Nữ",
                                        bold: true,
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/tui-xach?genders=Nữ",
                                        label: "Túi xách",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/giay-sneaker?genders=Nữ",
                                        label: "Giày & Sneaker",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/dong-ho-cao-cap?genders=Nữ",
                                        label: "Đồng hồ",
                                    },
                                    {
                                        id: 5,
                                        path: "/categories/phu-kien?genders=Nữ",
                                        label: "Phụ kiện",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 6,
                path: "/categories/tui-xach",
                label: "Túi xách",
                menuImage: "https://joolux.com/img/menu/mega-2.jpg",
                menuImageUrl: "/categories/tui-xach",
                numOfCols: 5,
                columns: [
                    {
                        id: 1,
                        columnItems: [
                            {
                                id: 1,
                                path: "/categories/tui-xach",
                                label: "Thương hiệu",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/categories/tui-xach?brands=Louis+Vuitton",
                                        label: "Louis Vuitton",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/tui-xach?brands=Gucci",
                                        label: "Gucci",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/tui-xach?brands=Chanel",
                                        label: "Chanel",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/tui-xach?brands=Prada",
                                        label: "Prada",
                                    },
                                    {
                                        id: 5,
                                        path: "/categories/tui-xach?brands=Burberry",
                                        label: "Burberry",
                                    },
                                    {
                                        id: 6,
                                        path: "/categories/tui-xach?brands=Bottega+Veneta",
                                        label: "Bottega Veneta",
                                    },
                                    {
                                        id: 7,
                                        path: "/categories/tui-xach?brands=Balenciaga",
                                        label: "Balenciaga",
                                    },
                                    {
                                        id: 8,
                                        path: "/categories/tui-xach?brands=Dior",
                                        label: "Dior",
                                    },
                                    {
                                        id: 9,
                                        path: "/categories/tui-xach?brands=Saint+Laurent",
                                        label: "Saint Laurent",
                                    },
                                    {
                                        id: 10,
                                        path: "/categories/tui-xach?brands=Fendi",
                                        label: "Fendi",
                                    },
                                    {
                                        id: 11,
                                        path: "/categories/tui-xach?brands=Celine",
                                        label: "Celine",
                                    },
                                    {
                                        id: 12,
                                        path: "/categories/tui-xach",
                                        bold: true,
                                        label: "Xem tất cả",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        columnItems: [
                            {
                                id: 1,
                                path: "/categories/tui-xach?genders=Nam",
                                label: "Nam",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/categories/tui-xach?genders=Nam",
                                        bold: true,
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Đeo+Chéo",
                                        label: "Túi Đeo Chéo",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Xách+Tay",
                                        label: "Túi Xách Tay",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Đeo+Hông",
                                        label: "Túi Đeo Hông",
                                    },
                                    {
                                        id: 5,
                                        path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Đeo+Vai",
                                        label: "Túi Đeo Vai",
                                    },
                                    {
                                        id: 6,
                                        path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Clutch",
                                        label: "Túi Clutch",
                                    },
                                    {
                                        id: 7,
                                        path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Tote",
                                        label: "Túi Tote",
                                    },
                                    {
                                        id: 8,
                                        path: "/categories/tui-xach?genders=Nam&subCategory=Ví",
                                        label: "Ví",
                                    },
                                    {
                                        id: 9,
                                        path: "/categories/tui-xach?genders=Nam&subCategory=Cặp+Hồ+Sơ",
                                        label: "Cặp Hồ Sơ",
                                    },
                                    {
                                        id: 10,
                                        path: "/categories/tui-xach?genders=Nam&subCategory=Ba+Lô",
                                        label: "Ba Lô",
                                    },
                                    {
                                        id: 11,
                                        path: "/categories/tui-xach?genders=Nam&subCategory=Vali",
                                        label: "Vali",
                                    },
                                    {
                                        id: 12,
                                        path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Du+Lịch",
                                        label: "Túi Du Lịch",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 3,
                        columnItems: [
                            {
                                id: 1,
                                path: "/categories/tui-xach?genders=Nữ",
                                label: "Nữ",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/categories/tui-xach?genders=Nữ",
                                        bold: true,
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Đeo+Chéo",
                                        label: "Túi Đeo Chéo",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Xách+Tay",
                                        label: "Túi Xách Tay",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Đeo+Hông",
                                        label: "Túi Đeo Hông",
                                    },
                                    {
                                        id: 5,
                                        path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Đeo+Vai",
                                        label: "Túi Đeo Vai",
                                    },
                                    {
                                        id: 6,
                                        path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Clutch",
                                        label: "Túi Clutch",
                                    },
                                    {
                                        id: 7,
                                        path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Tote",
                                        label: "Túi Tote",
                                    },
                                    {
                                        id: 8,
                                        path: "/categories/tui-xach?genders=Nữ&subCategory=Ví",
                                        label: "Ví",
                                    },
                                    {
                                        id: 9,
                                        path: "/categories/tui-xach?genders=Nữ&subCategory=Ba+Lô",
                                        label: "Ba Lô",
                                    },
                                    {
                                        id: 10,
                                        path: "/categories/tui-xach?genders=Nữ&subCategory=Vali",
                                        label: "Vali",
                                    },
                                    {
                                        id: 11,
                                        path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Du+Lịch",
                                        label: "Túi Du Lịch",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 7,
                path: "/categories/giay-sneaker",
                label: "GIÀY & SNEAKER",
                menuImage: "https://joolux.com/img/menu/mega-3.jpg",
                menuImageUrl: "/categories/giay-sneaker",
                numOfCols: 5,
                columns: [
                    {
                        id: 1,
                        columnItems: [
                            {
                                id: 1,
                                path: "/categories/giay-sneaker",
                                label: "Thương hiệu",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/categories/giay-sneaker?brands=Louis+Vuitton",
                                        label: "Louis Vuitton",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/giay-sneaker?brands=Gucci",
                                        label: "Gucci",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/giay-sneaker?brands=Chanel",
                                        label: "Chanel",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/giay-sneaker?brands=Prada",
                                        label: "Prada",
                                    },
                                    {
                                        id: 5,
                                        path: "/categories/giay-sneaker?brands=Burberry",
                                        label: "Burberry",
                                    },
                                    {
                                        id: 6,
                                        path: "/categories/giay-sneaker?brands=Bottega+Veneta",
                                        label: "Bottega Veneta",
                                    },
                                    {
                                        id: 7,
                                        path: "/categories/giay-sneaker?brands=Balenciaga",
                                        label: "Balenciaga",
                                    },
                                    {
                                        id: 8,
                                        path: "/categories/giay-sneaker?brands=Dior",
                                        label: "Dior",
                                    },
                                    {
                                        id: 9,
                                        path: "/categories/giay-sneaker?brands=Saint+Laurent",
                                        label: "Saint Laurent",
                                    },
                                    {
                                        id: 10,
                                        path: "/categories/giay-sneaker?brands=Fendi",
                                        label: "Fendi",
                                    },
                                    {
                                        id: 11,
                                        path: "/categories/giay-sneaker?brands=Celine",
                                        label: "Celine",
                                    },
                                    {
                                        id: 12,
                                        path: "/categories/giay-sneaker",
                                        bold: true,
                                        label: "Xem tất cả",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        columnItems: [
                            {
                                id: 1,
                                path: "/categories/giay-sneaker?genders=Nam",
                                label: "Nam",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/categories/giay-sneaker?genders=Nam",
                                        bold: true,
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/giay-sneaker?genders=Nam&subCategory=Sneaker",
                                        label: "Sneaker",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/giay-sneaker?genders=Nam&subCategory=Dép",
                                        label: "Dép",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/giay-sneaker?genders=Nam&subCategory=Sandal",
                                        label: "Sandal",
                                    },
                                    {
                                        id: 5,
                                        path: "/categories/giay-sneaker?genders=Nam&subCategory=Giày+Loafer",
                                        label: "Giày Loafer",
                                    },
                                    {
                                        id: 6,
                                        path: "/categories/giay-sneaker?genders=Nam&subCategory=Giày+Tây",
                                        label: "Giày Tây",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 3,
                        columnItems: [
                            {
                                id: 1,
                                path: "/categories/giay-sneaker?genders=Nữ",
                                label: "Nữ",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/categories/giay-sneaker?genders=Nữ",
                                        bold: true,
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/giay-sneaker?genders=Nữ&subCategory=Sneaker",
                                        label: "Sneaker",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/giay-sneaker?genders=Nữ&subCategory=Dép",
                                        label: "Dép",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Boots",
                                        label: "Giày Boots",
                                    },
                                    {
                                        id: 5,
                                        path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Cao+Gót",
                                        label: "Giày Cao Gót",
                                    },
                                    {
                                        id: 6,
                                        path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Búp+Bê",
                                        label: "Giày Búp Bê",
                                    },
                                    {
                                        id: 7,
                                        path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Sandal",
                                        label: "Sandal",
                                    },
                                    {
                                        id: 8,
                                        path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Loafer",
                                        label: "Giày Loafer",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 8,
                path: "/categories/dong-ho-cao-cap",
                label: "Đồng hồ",
                menuImage: "https://joolux.com/img/menu/mega-4.jpg",
                menuImageUrl: "/categories/dong-ho-cao-cap",
                numOfCols: 5,
                columns: [
                    {
                        id: 1,
                        columnItems: [
                            {
                                id: 1,
                                path: "/categories/dong-ho-cao-cap",
                                label: "Thương hiệu",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/categories/dong-ho-cao-cap?brands=Louis+Vuitton",
                                        label: "Rolex",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/dong-ho-cao-cap?brands=Frederique+Constant",
                                        label: "Frederique Constant",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/dong-ho-cao-cap?brands=Maurice+Lacroix",
                                        label: "Maurice Lacroix",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/dong-ho-cao-cap?brands=Longines",
                                        label: "Longines",
                                    },
                                    {
                                        id: 5,
                                        path: "/categories/dong-ho-cao-cap?brands=Tissot",
                                        label: "Tissot",
                                    },
                                    {
                                        id: 6,
                                        path: "/categories/dong-ho-cao-cap?brands=Montblanc",
                                        label: "Montblanc",
                                    },
                                    {
                                        id: 7,
                                        path: "/categories/dong-ho-cao-cap?brands=Chopard",
                                        label: "Chopard",
                                    },
                                    {
                                        id: 8,
                                        path: "/categories/dong-ho-cao-cap?brands=Edox",
                                        label: "Edox",
                                    },
                                    {
                                        id: 9,
                                        path: "/categories/dong-ho-cao-cap?brands=Omega",
                                        label: "Omega",
                                    },
                                    {
                                        id: 10,
                                        path: "/categories/dong-ho-cao-cap",
                                        bold: true,
                                        label: "Xem tất cả",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        columnItems: [
                            {
                                id: 1,
                                path: "/categories/dong-ho-cao-cap?genders=Nam",
                                label: "Nam",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/categories/dong-ho-cao-cap?genders=Nam",
                                        bold: true,
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/dong-ho-cao-cap?genders=Nam&subCategory=Quartz",
                                        label: "Quartz",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/dong-ho-cao-cap?genders=Nam&subCategory=Automatic",
                                        label: "Automatic",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/dong-ho-cao-cap?genders=Nam&subCategory=Eco-Drive",
                                        label: "Eco-Drive",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 3,
                        columnItems: [
                            {
                                id: 1,
                                path: "/categories/dong-ho-cao-cap?genders=Nữ",
                                label: "Nữ",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/categories/dong-ho-cao-cap?genders=Nữ",
                                        bold: true,
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/dong-ho-cao-cap?genders=Nữ&subCategory=Quartz",
                                        label: "Quartz",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/dong-ho-cao-capr?genders=Nữ&subCategory=Automatic",
                                        label: "Automatic",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/dong-ho-cao-cap?genders=Nữ&subCategory=Eco-Drive",
                                        label: "Eco-Drive",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 9,
                path: "/categories/phu-kien",
                label: "Phụ kiện",
                menuImage: "https://joolux.com/img/menu/mega-5.jpg",
                menuImageUrl: "/categories/phu-kien",
                numOfCols: 5,
                columns: [
                    {
                        id: 1,
                        columnItems: [
                            {
                                id: 1,
                                path: "/categories/phu-kien",
                                label: "Thương hiệu",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/categories/phu-kien?brands=Louis+Vuitton",
                                        label: "Louis Vuitton",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/phu-kien?brands=Gucci",
                                        label: "Gucci",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/phu-kien?brands=Chanel",
                                        label: "Chanel",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/phu-kien?brands=Prada",
                                        label: "Prada",
                                    },
                                    {
                                        id: 5,
                                        path: "/categories/phu-kien?brands=Burberry",
                                        label: "Burberry",
                                    },
                                    {
                                        id: 6,
                                        path: "/categories/phu-kien?brands=Bottega+Veneta",
                                        label: "Bottega Veneta",
                                    },
                                    {
                                        id: 7,
                                        path: "/categories/phu-kien?brands=Balenciaga",
                                        label: "Balenciaga",
                                    },
                                    {
                                        id: 8,
                                        path: "/categories/phu-kien?brands=Dior",
                                        label: "Dior",
                                    },
                                    {
                                        id: 9,
                                        path: "/categories/phu-kien?brands=Saint+Laurent",
                                        label: "Saint Laurent",
                                    },
                                    {
                                        id: 10,
                                        path: "/categories/phu-kien?brands=Fendi",
                                        label: "Fendi",
                                    },
                                    {
                                        id: 11,
                                        path: "/categories/phu-kien?brands=Celine",
                                        label: "Celine",
                                    },
                                    {
                                        id: 12,
                                        path: "/categories/phu-kien",
                                        bold: true,
                                        label: "Xem tất cả",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        columnItems: [
                            {
                                id: 1,
                                path: "/categories/phu-kien?genders=Nam",
                                label: "Nam",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/categories/phu-kien?genders=Nam",
                                        bold: true,
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/phu-kien?genders=Nam&subCategory=Kính+mát",
                                        label: "Kính Mát",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/phu-kien?genders=Nam&subCategory=Thắt+lưng",
                                        label: "Thắt Lưng",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/phu-kien?genders=Nam&subCategory=Mũ",
                                        label: "Mũ",
                                    },
                                    {
                                        id: 5,
                                        path: "/categories/phu-kien?genders=Nam&subCategory=Khăn",
                                        label: "Khăn",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 3,
                        columnItems: [
                            {
                                id: 1,
                                path: "/categories/phu-kien?genders=Nữ",
                                label: "Nữ",
                                columnItemItems: [
                                    {
                                        id: 1,
                                        path: "/categories/phu-kien?genders=Nữ",
                                        bold: true,
                                        label: "Tất cả",
                                    },
                                    {
                                        id: 2,
                                        path: "/categories/phu-kien?genders=Nữ&subCategory=Kính+mát",
                                        label: "Kính Mát",
                                    },
                                    {
                                        id: 3,
                                        path: "/categories/phu-kien?genders=Nữ&subCategory=Thắt+lưng",
                                        label: "Thắt Lưng",
                                    },
                                    {
                                        id: 4,
                                        path: "/categories/phu-kien?genders=Nữ&subCategory=Mũ",
                                        label: "Mũ",
                                    },
                                    {
                                        id: 5,
                                        path: "/categories/phu-kien?genders=Nữ&subCategory=Khăn",
                                        label: "Khăn",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
        mobileMenu: [
            {
                id: 1,
                path: "/hang-moi-ve",
                label: "Hàng mới về",
                subMenu: [
                    {
                        id: 1,
                        path: "/hang-moi-ve",
                        label: "Thương hiệu",
                        subMenu: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?brands=Louis+Vuitton",
                                label: "Louis Vuitton",
                            },
                            {
                                id: 2,
                                path: "/hang-moi-ve?brands=Gucci",
                                label: "Gucci",
                            },
                            {
                                id: 3,
                                path: "/hang-moi-ve?brands=Chanel",
                                label: "Chanel",
                            },
                            {
                                id: 4,
                                path: "/hang-moi-ve?brands=Prada",
                                label: "Prada",
                            },
                            {
                                id: 5,
                                path: "/hang-moi-ve?brands=Burberry",
                                label: "Burberry",
                            },
                            {
                                id: 6,
                                path: "/hang-moi-ve?brands=Bottega+Veneta",
                                label: "Bottega Veneta",
                            },
                            {
                                id: 7,
                                path: "/hang-moi-ve?brands=Balenciaga",
                                label: "Balenciaga",
                            },
                            {
                                id: 8,
                                path: "/hang-moi-ve?brands=Dior",
                                label: "Dior",
                            },
                            {
                                id: 9,
                                path: "/hang-moi-ve?brands=Saint+Laurent",
                                label: "Saint Laurent",
                            },
                            {
                                id: 10,
                                path: "/hang-moi-ve?brands=Fendi",
                                label: "Fendi",
                            },
                            {
                                id: 11,
                                path: "/hang-moi-ve?brands=Celine",
                                label: "Celine",
                            },
                            {
                                id: 12,
                                path: "/brands",
                                bold: true,
                                label: "Xem tất cả",
                            },
                        ],
                    },
                    {
                        id: 2,
                        path: "/hang-moi-ve?genders=Nam",
                        label: "Nam",
                        subMenu: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?genders=Nam",
                                bold: true,
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/categories/tui-xach?genders=Nam",
                                label: "Túi xách",
                            },
                            {
                                id: 3,
                                path: "/categories/giay-sneaker?genders=Nam",
                                label: "Giày & Sneaker",
                            },
                            {
                                id: 4,
                                path: "/categories/dong-ho-cao-cap?genders=Nam",
                                label: "Đồng hồ",
                            },
                            {
                                id: 5,
                                path: "/categories/phu-kien?genders=Nam",
                                label: "Phụ kiện",
                            },
                        ],
                    },
                    {
                        id: 3,
                        path: "/hang-moi-ve?genders=Nữ",
                        label: "Nữ",
                        subMenu: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?genders=Nữ",
                                bold: true,
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/categories/tui-xach?genders=Nữ",
                                label: "Túi xách",
                            },
                            {
                                id: 3,
                                path: "/categories/giay-sneaker?genders=Nữ",
                                label: "Giày & Sneaker",
                            },
                            {
                                id: 4,
                                path: "/categories/dong-ho-cao-cap?genders=Nữ",
                                label: "Đồng hồ",
                            },
                            {
                                id: 5,
                                path: "/categories/phu-kien?genders=Nữ",
                                label: "Phụ kiện",
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                path: "/dich-vu",
                label: "Dịch vụ khác",
                subMenu: [
                    {
                        id: 1,
                        path: "/dich-vu/kiem-dinh-hang-hieu",
                        label: "Kiểm định hàng hiệu",
                    },
                    {
                        id: 2,
                        path: "/dich-vu/cham-soc-hang-hieu",
                        label: "Chăm sóc và chế tác hàng hiệu",
                    },
                    {
                        id: 3,
                        path: "/minimal",
                        label: "Cho thuê hàng hiệu (upcoming)",
                    },
                ],
            },
            {
                id: 3,
                path: "/categories/hang-moi-ve",
                label: "Thương hiệu",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                subMenu: [
                    {
                        id: 1,
                        path: "/hang-moi-ve",
                        label: "Thương hiệu nổi tiếng",
                        subMenu: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?brands=Louis+Vuitton",
                                label: "Louis Vuitton",
                            },
                            {
                                id: 2,
                                path: "/hang-moi-ve?brands=Gucci",
                                label: "Gucci",
                            },
                            {
                                id: 3,
                                path: "/hang-moi-ve?brands=Chanel",
                                label: "Chanel",
                            },
                            {
                                id: 4,
                                path: "/hang-moi-ve?brands=Prada",
                                label: "Prada",
                            },
                            {
                                id: 5,
                                path: "/hang-moi-ve?brands=Burberry",
                                label: "Burberry",
                            },
                            {
                                id: 6,
                                path: "/hang-moi-ve?brands=Bottega+Veneta",
                                label: "Bottega Veneta",
                            },
                            {
                                id: 7,
                                path: "/hang-moi-ve?brands=Balenciaga",
                                label: "Balenciaga",
                            },
                            {
                                id: 8,
                                path: "/hang-moi-ve?brands=Dior",
                                label: "Dior",
                            },
                            {
                                id: 9,
                                path: "/hang-moi-ve?brands=Goyard",
                                label: "Goyard",
                            },
                            {
                                id: 10,
                                path: "/hang-moi-ve?brands=Saint+Laurent",
                                label: "Saint Laurent",
                            },
                            {
                                id: 11,
                                path: "/hang-moi-ve?brands=Fendi",
                                label: "Fendi",
                            },
                            {
                                id: 12,
                                path: "/hang-moi-ve?brands=Celine",
                                label: "Celine",
                            },
                            {
                                id: 13,
                                path: "/hang-moi-ve?brands=Longines",
                                label: "Longines",
                            },
                            {
                                id: 14,
                                path: "/hang-moi-ve?brands=Chloé",
                                label: "Chloé",
                            },
                            {
                                id: 15,
                                path: "/hang-moi-ve?brands=Alexander+McQueen",
                                label: "Alexander McQueen",
                            },
                            {
                                id: 16,
                                path: "/brands",
                                bold: true,
                                label: "Xem tất cả",
                            },
                        ],
                    },
                ],
            },
            {
                id: 4,
                path: "/hang-moi-ve?genders=Nam",
                label: "Nam",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                subMenu: [
                    {
                        id: 1,
                        path: "/hang-moi-ve?genders=Nam",
                        label: "Thương hiệu",
                        subMenu: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?brands=Louis+Vuitton&genders=Nam",
                                label: "Louis Vuitton",
                            },
                            {
                                id: 2,
                                path: "/hang-moi-ve?brands=Gucci&genders=Nam",
                                label: "Gucci",
                            },
                            {
                                id: 3,
                                path: "/hang-moi-ve?brands=Chanel&genders=Nam",
                                label: "Chanel",
                            },
                            {
                                id: 4,
                                path: "/hang-moi-ve?brands=Prada&genders=Nam",
                                label: "Prada",
                            },
                            {
                                id: 5,
                                path: "/hang-moi-ve?brands=Burberry&genders=Nam",
                                label: "Burberry",
                            },
                            {
                                id: 6,
                                path: "/hang-moi-ve?brands=Bottega+Veneta&genders=Nam",
                                label: "Bottega Veneta",
                            },
                            {
                                id: 7,
                                path: "/hang-moi-ve?brands=Balenciaga&genders=Nam",
                                label: "Balenciaga",
                            },
                            {
                                id: 8,
                                path: "/hang-moi-ve?brands=Dior&genders=Nam",
                                label: "Dior",
                            },
                            {
                                id: 9,
                                path: "/hang-moi-ve?brands=Saint+Laurent&genders=Nam",
                                label: "Saint Laurent",
                            },
                            {
                                id: 10,
                                path: "/hang-moi-ve?brands=Fendi&genders=Nam",
                                label: "Fendi",
                            },
                            {
                                id: 11,
                                path: "/hang-moi-ve?brands=Celine&genders=Nam",
                                label: "Celine",
                            },
                            {
                                id: 12,
                                path: "/brands",
                                bold: true,
                                label: "Xem tất cả",
                            },
                        ],
                    },
                    {
                        id: 2,
                        path: "/hang-moi-ve?genders=Nam",
                        label: "Danh mục",
                        subMenu: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?genders=Nam",
                                bold: true,
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/categories/tui-xach?genders=Nam",
                                label: "Túi xách",
                            },
                            {
                                id: 3,
                                path: "/categories/giay-sneaker?genders=Nam",
                                label: "Giày & Sneaker",
                            },
                            {
                                id: 4,
                                path: "/categories/dong-ho-cao-cap?genders=Nam",
                                label: "Đồng hồ",
                            },
                            {
                                id: 5,
                                path: "/categories/phu-kien?genders=Nam",
                                label: "Phụ kiện",
                            },
                        ],
                    },
                ],
            },
            {
                id: 5,
                path: "/hang-moi-ve?genders=Nữ",
                label: "Nữ",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                subMenu: [
                    {
                        id: 1,
                        path: "/hang-moi-ve?genders=Nữ",
                        label: "Thương hiệu",
                        subMenu: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?brands=Louis+Vuitton&genders=Nữ",
                                label: "Louis Vuitton",
                            },
                            {
                                id: 2,
                                path: "/hang-moi-ve?brands=Gucci&genders=Nữ",
                                label: "Gucci",
                            },
                            {
                                id: 3,
                                path: "/hang-moi-ve?brands=Chanel&genders=Nữ",
                                label: "Chanel",
                            },
                            {
                                id: 4,
                                path: "/hang-moi-ve?brands=Prada&genders=Nữ",
                                label: "Prada",
                            },
                            {
                                id: 5,
                                path: "/hang-moi-ve?brands=Burberry&genders=Nữ",
                                label: "Burberry",
                            },
                            {
                                id: 6,
                                path: "/hang-moi-ve?brands=Bottega+Veneta&genders=Nữ",
                                label: "Bottega Veneta",
                            },
                            {
                                id: 7,
                                path: "/hang-moi-ve?brands=Balenciaga&genders=Nữ",
                                label: "Balenciaga",
                            },
                            {
                                id: 8,
                                path: "/hang-moi-ve?brands=Dior&genders=Nữ",
                                label: "Dior",
                            },
                            {
                                id: 9,
                                path: "/hang-moi-ve?brands=Saint+Laurent&genders=Nữ",
                                label: "Saint Laurent",
                            },
                            {
                                id: 10,
                                path: "/hang-moi-ve?brands=Fendi&genders=Nữ",
                                label: "Fendi",
                            },
                            {
                                id: 11,
                                path: "/hang-moi-ve?brands=Celine&genders=Nữ",
                                label: "Celine",
                            },
                            {
                                id: 12,
                                path: "/brands",
                                bold: true,
                                label: "Xem tất cả",
                            },
                        ],
                    },
                    {
                        id: 2,
                        path: "/hang-moi-ve?genders=Nữ",
                        label: "Danh mục",
                        subMenu: [
                            {
                                id: 1,
                                path: "/hang-moi-ve?genders=Nữ",
                                bold: true,
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/categories/tui-xach?genders=Nữ",
                                label: "Túi xách",
                            },
                            {
                                id: 3,
                                path: "/categories/giay-sneaker?genders=Nữ",
                                label: "Giày & Sneaker",
                            },
                            {
                                id: 4,
                                path: "/categories/dong-ho-cao-cap?genders=Nữ",
                                label: "Đồng hồ",
                            },
                            {
                                id: 5,
                                path: "/categories/phu-kien?genders=Nữ",
                                label: "Phụ kiện",
                            },
                        ],
                    },
                ],
            },
            {
                id: 6,
                path: "/categories/tui-xach",
                label: "Túi xách",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                subMenu: [
                    {
                        id: 1,
                        path: "/categories/tui-xach",
                        label: "Thương hiệu",
                        subMenu: [
                            {
                                id: 1,
                                path: "/categories/tui-xach?brands=Louis+Vuitton",
                                label: "Louis Vuitton",
                            },
                            {
                                id: 2,
                                path: "/categories/tui-xach?brands=Gucci",
                                label: "Gucci",
                            },
                            {
                                id: 3,
                                path: "/categories/tui-xach?brands=Chanel",
                                label: "Chanel",
                            },
                            {
                                id: 4,
                                path: "/categories/tui-xach?brands=Prada",
                                label: "Prada",
                            },
                            {
                                id: 5,
                                path: "/categories/tui-xach?brands=Burberry",
                                label: "Burberry",
                            },
                            {
                                id: 6,
                                path: "/categories/tui-xach?brands=Bottega+Veneta",
                                label: "Bottega Veneta",
                            },
                            {
                                id: 7,
                                path: "/categories/tui-xach?brands=Balenciaga",
                                label: "Balenciaga",
                            },
                            {
                                id: 8,
                                path: "/categories/tui-xach?brands=Dior",
                                label: "Dior",
                            },
                            {
                                id: 9,
                                path: "/categories/tui-xach?brands=Saint+Laurent",
                                label: "Saint Laurent",
                            },
                            {
                                id: 10,
                                path: "/categories/tui-xach?brands=Fendi",
                                label: "Fendi",
                            },
                            {
                                id: 11,
                                path: "/categories/tui-xach?brands=Celine",
                                label: "Celine",
                            },
                            {
                                id: 12,
                                path: "/categories/tui-xach",
                                bold: true,
                                label: "Xem tất cả",
                            },
                        ],
                    },
                    {
                        id: 2,
                        path: "/categories/tui-xach?genders=Nam",
                        label: "Nam",
                        subMenu: [
                            {
                                id: 1,
                                path: "/categories/tui-xach?genders=Nam",
                                bold: true,
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Đeo+Chéo",
                                label: "Túi Đeo Chéo",
                            },
                            {
                                id: 3,
                                path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Xách+Tay",
                                label: "Túi Xách Tay",
                            },
                            {
                                id: 4,
                                path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Đeo+Hông",
                                label: "Túi Đeo Hông",
                            },
                            {
                                id: 5,
                                path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Đeo+Vai",
                                label: "Túi Đeo Vai",
                            },
                            {
                                id: 6,
                                path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Clutch",
                                label: "Túi Clutch",
                            },
                            {
                                id: 7,
                                path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Tote",
                                label: "Túi Tote",
                            },
                            {
                                id: 8,
                                path: "/categories/tui-xach?genders=Nam&subCategory=Ví",
                                label: "Ví",
                            },
                            {
                                id: 9,
                                path: "/categories/tui-xach?genders=Nam&subCategory=Cặp+Hồ+Sơ",
                                label: "Cặp Hồ Sơ",
                            },
                            {
                                id: 10,
                                path: "/categories/tui-xach?genders=Nam&subCategory=Ba+Lô",
                                label: "Ba Lô",
                            },
                            {
                                id: 11,
                                path: "/categories/tui-xach?genders=Nam&subCategory=Vali",
                                label: "Vali",
                            },
                            {
                                id: 12,
                                path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Du+Lịch",
                                label: "Túi Du Lịch",
                            },
                        ],
                    },
                    {
                        id: 3,
                        path: "/categories/tui-xach?genders=Nữ",
                        label: "Nữ",
                        subMenu: [
                            {
                                id: 1,
                                path: "/categories/tui-xach?genders=Nữ",
                                bold: true,
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Đeo+Chéo",
                                label: "Túi Đeo Chéo",
                            },
                            {
                                id: 3,
                                path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Xách+Tay",
                                label: "Túi Xách Tay",
                            },
                            {
                                id: 4,
                                path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Đeo+Hông",
                                label: "Túi Đeo Hông",
                            },
                            {
                                id: 5,
                                path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Đeo+Vai",
                                label: "Túi Đeo Vai",
                            },
                            {
                                id: 6,
                                path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Clutch",
                                label: "Túi Clutch",
                            },
                            {
                                id: 7,
                                path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Tote",
                                label: "Túi Tote",
                            },
                            {
                                id: 8,
                                path: "/categories/tui-xach?genders=Nữ&subCategory=Ví",
                                label: "Ví",
                            },
                            {
                                id: 9,
                                path: "/categories/tui-xach?genders=Nữ&subCategory=Ba+Lô",
                                label: "Ba Lô",
                            },
                            {
                                id: 10,
                                path: "/categories/tui-xach?genders=Nữ&subCategory=Vali",
                                label: "Vali",
                            },
                            {
                                id: 11,
                                path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Du+Lịch",
                                label: "Túi Du Lịch",
                            },
                        ],
                    },
                ],
            },
            {
                id: 7,
                path: "/categories/giay-sneaker",
                label: "Giày & Sneaker",
                menuImage: "https://joolux.com/img/menu/mega-1.jpg",
                subMenu: [
                    {
                        id: 1,
                        path: "/categories/giay-sneaker",
                        label: "Thương hiệu",
                        subMenu: [
                            {
                                id: 1,
                                path: "/categories/giay-sneaker?brands=Louis+Vuitton",
                                label: "Louis Vuitton",
                            },
                            {
                                id: 2,
                                path: "/categories/giay-sneaker?brands=Gucci",
                                label: "Gucci",
                            },
                            {
                                id: 3,
                                path: "/categories/giay-sneaker?brands=Chanel",
                                label: "Chanel",
                            },
                            {
                                id: 4,
                                path: "/categories/giay-sneaker?brands=Prada",
                                label: "Prada",
                            },
                            {
                                id: 5,
                                path: "/categories/giay-sneaker?brands=Burberry",
                                label: "Burberry",
                            },
                            {
                                id: 6,
                                path: "/categories/giay-sneaker?brands=Bottega+Veneta",
                                label: "Bottega Veneta",
                            },
                            {
                                id: 7,
                                path: "/categories/giay-sneaker?brands=Balenciaga",
                                label: "Balenciaga",
                            },
                            {
                                id: 8,
                                path: "/categories/giay-sneaker?brands=Dior",
                                label: "Dior",
                            },
                            {
                                id: 9,
                                path: "/categories/giay-sneaker?brands=Saint+Laurent",
                                label: "Saint Laurent",
                            },
                            {
                                id: 10,
                                path: "/categories/giay-sneaker?brands=Fendi",
                                label: "Fendi",
                            },
                            {
                                id: 11,
                                path: "/categories/giay-sneaker?brands=Celine",
                                label: "Celine",
                            },
                            {
                                id: 12,
                                path: "/categories/giay-sneaker",
                                bold: true,
                                label: "Xem tất cả",
                            },
                        ],
                    },
                    {
                        id: 2,
                        path: "/categories/giay-sneaker?genders=Nam",
                        label: "Nam",
                        subMenu: [
                            {
                                id: 1,
                                path: "/categories/giay-sneaker?genders=Nam",
                                bold: true,
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/categories/giay-sneaker?genders=Nam&subCategory=Sneaker",
                                label: "Sneaker",
                            },
                            {
                                id: 3,
                                path: "/categories/giay-sneaker?genders=Nam&subCategory=Dép",
                                label: "Dép",
                            },
                            {
                                id: 4,
                                path: "/categories/giay-sneaker?genders=Nam&subCategory=Sandal",
                                label: "Sandal",
                            },
                            {
                                id: 5,
                                path: "/categories/giay-sneaker?genders=Nam&subCategory=Giày+Loafer",
                                label: "Giày Loafer",
                            },
                            {
                                id: 6,
                                path: "/categories/giay-sneaker?genders=Nam&subCategory=Giày+Tây",
                                label: "Giày Tây",
                            },
                        ],
                    },
                    {
                        id: 3,
                        path: "/categories/giay-sneaker?genders=Nữ",
                        label: "Nữ",
                        subMenu: [
                            {
                                id: 1,
                                path: "/categories/giay-sneaker?genders=Nữ",
                                bold: true,
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/categories/giay-sneaker?genders=Nữ&subCategory=Sneaker",
                                label: "Sneaker",
                            },
                            {
                                id: 3,
                                path: "/categories/giay-sneaker?genders=Nữ&subCategory=Dép",
                                label: "Dép",
                            },
                            {
                                id: 4,
                                path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Boots",
                                label: "Giày Boots",
                            },
                            {
                                id: 5,
                                path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Cao+Gót",
                                label: "Giày Cao Gót",
                            },
                            {
                                id: 6,
                                path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Búp+Bê",
                                label: "Giày Búp Bê",
                            },
                            {
                                id: 7,
                                path: "/categories/giay-sneaker?genders=Nữ&subCategory=Sandal",
                                label: "Sandal",
                            },
                            {
                                id: 8,
                                path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Loafer",
                                label: "Giày Loafer",
                            },
                        ],
                    },
                ],
            },
            {
                id: 8,
                path: "/categories/dong-ho-cao-cap",
                label: "Đồng hồ",
                subMenu: [
                    {
                        id: 1,
                        path: "/categories/dong-ho-cao-cap",
                        label: "Thương hiệu",
                        subMenu: [
                            {
                                id: 1,
                                path: "/categories/dong-ho-cao-cap?brands=Louis+Vuitton",
                                label: "Rolex",
                            },
                            {
                                id: 2,
                                path: "/categories/dong-ho-cao-cap?brands=Frederique+Constant",
                                label: "Frederique Constant",
                            },
                            {
                                id: 3,
                                path: "/categories/dong-ho-cao-cap?brands=Maurice+Lacroix",
                                label: "Maurice Lacroix",
                            },
                            {
                                id: 4,
                                path: "/categories/dong-ho-cao-cap?brands=Longines",
                                label: "Longines",
                            },
                            {
                                id: 5,
                                path: "/categories/dong-ho-cao-cap?brands=Tissot",
                                label: "Tissot",
                            },
                            {
                                id: 6,
                                path: "/categories/dong-ho-cao-cap?brands=Montblanc",
                                label: "Montblanc",
                            },
                            {
                                id: 7,
                                path: "/categories/dong-ho-cao-cap?brands=Chopard",
                                label: "Chopard",
                            },
                            {
                                id: 8,
                                path: "/categories/dong-ho-cao-cap?brands=Edox",
                                label: "Edox",
                            },
                            {
                                id: 9,
                                path: "/categories/dong-ho-cao-cap?brands=Omega",
                                label: "Omega",
                            },
                            {
                                id: 10,
                                path: "/categories/dong-ho-cao-cap",
                                bold: true,
                                label: "Xem tất cả",
                            },
                        ],
                    },
                    {
                        id: 2,
                        path: "/categories/dong-ho-cao-cap?genders=Nam",
                        label: "Nam",
                        subMenu: [
                            {
                                id: 1,
                                path: "/categories/dong-ho-cao-cap?genders=Nam",
                                bold: true,
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/categories/dong-ho-cao-cap?genders=Nam&subCategory=Quartz",
                                label: "Quartz",
                            },
                            {
                                id: 3,
                                path: "/categories/dong-ho-cao-cap?genders=Nam&subCategory=Automatic",
                                label: "Automatic",
                            },
                            {
                                id: 4,
                                path: "/categories/dong-ho-cao-cap?genders=Nam&subCategory=Eco-Drive",
                                label: "Eco-Drive",
                            },
                        ],
                    },
                    {
                        id: 3,
                        path: "/categories/dong-ho-cao-cap?genders=Nữ",
                        label: "Nữ",
                        subMenu: [
                            {
                                id: 1,
                                path: "/categories/dong-ho-cao-cap?genders=Nữ",
                                bold: true,
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/categories/dong-ho-cao-cap?genders=Nữ&subCategory=Quartz",
                                label: "Quartz",
                            },
                            {
                                id: 3,
                                path: "/categories/dong-ho-cao-capr?genders=Nữ&subCategory=Automatic",
                                label: "Automatic",
                            },
                            {
                                id: 4,
                                path: "/categories/dong-ho-cao-cap?genders=Nữ&subCategory=Eco-Drive",
                                label: "Eco-Drive",
                            },
                        ],
                    },
                ],
            },
            {
                id: 9,
                path: "/categories/phu-kien",
                label: "Phụ kiện",
                subMenu: [
                    {
                        id: 1,
                        path: "/categories/phu-kien",
                        label: "Thương hiệu",
                        subMenu: [
                            {
                                id: 1,
                                path: "/categories/phu-kien?brands=Louis+Vuitton",
                                label: "Louis Vuitton",
                            },
                            {
                                id: 2,
                                path: "/categories/phu-kien?brands=Gucci",
                                label: "Gucci",
                            },
                            {
                                id: 3,
                                path: "/categories/phu-kien?brands=Chanel",
                                label: "Chanel",
                            },
                            {
                                id: 4,
                                path: "/categories/phu-kien?brands=Prada",
                                label: "Prada",
                            },
                            {
                                id: 5,
                                path: "/categories/phu-kien?brands=Burberry",
                                label: "Burberry",
                            },
                            {
                                id: 6,
                                path: "/categories/phu-kien?brands=Bottega+Veneta",
                                label: "Bottega Veneta",
                            },
                            {
                                id: 7,
                                path: "/categories/phu-kien?brands=Balenciaga",
                                label: "Balenciaga",
                            },
                            {
                                id: 8,
                                path: "/categories/phu-kien?brands=Dior",
                                label: "Dior",
                            },
                            {
                                id: 9,
                                path: "/categories/phu-kien?brands=Saint+Laurent",
                                label: "Saint Laurent",
                            },
                            {
                                id: 10,
                                path: "/categories/phu-kien?brands=Fendi",
                                label: "Fendi",
                            },
                            {
                                id: 11,
                                path: "/categories/phu-kien?brands=Celine",
                                label: "Celine",
                            },
                            {
                                id: 12,
                                path: "/categories/phu-kien",
                                bold: true,
                                label: "Xem tất cả",
                            },
                        ],
                    },
                    {
                        id: 2,
                        path: "/categories/phu-kien?genders=Nam",
                        label: "Nam",
                        subMenu: [
                            {
                                id: 1,
                                path: "/categories/phu-kien?genders=Nam",
                                bold: true,
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/categories/phu-kien?genders=Nam&subCategory=Kính+mát",
                                label: "Kính Mát",
                            },
                            {
                                id: 3,
                                path: "/categories/phu-kien?genders=Nam&subCategory=Thắt+lưng",
                                label: "Thắt Lưng",
                            },
                            {
                                id: 4,
                                path: "/categories/phu-kien?genders=Nam&subCategory=Mũ",
                                label: "Mũ",
                            },
                            {
                                id: 5,
                                path: "/categories/phu-kien?genders=Nam&subCategory=Khăn",
                                label: "Khăn",
                            },
                        ],
                    },
                    {
                        id: 3,
                        path: "/categories/phu-kien?genders=Nữ",
                        label: "Nữ",
                        subMenu: [
                            {
                                id: 1,
                                path: "/categories/mat-kinh?genders=Nữ",
                                bold: true,
                                label: "Tất cả",
                            },
                            {
                                id: 2,
                                path: "/categories/phu-kien?genders=Nữ&subCategory=Kính+mát",
                                label: "Kính Mát",
                            },
                            {
                                id: 3,
                                path: "/categories/phu-kien?genders=Nữ&subCategory=Thắt+lưng",
                                label: "Thắt Lưng",
                            },
                            {
                                id: 4,
                                path: "/categories/phu-kien?genders=Nữ&subCategory=Mũ",
                                label: "Mũ",
                            },
                            {
                                id: 5,
                                path: "/categories/phu-kien?genders=Nữ&subCategory=Khăn",
                                label: "Khăn",
                            },
                        ],
                    },
                ],
            },
        ],
        languageMenu: [
            {
                id: "ar",
                name: "عربى - AR",
                value: "ar",
                icon: <SAFlag width="20px" height="15px" />,
            },
            {
                id: "zh",
                name: "中国人 - ZH",
                value: "zh",
                icon: <CNFlag width="20px" height="15px" />,
            },
            {
                id: "en",
                name: "English - EN",
                value: "en",
                icon: <USFlag width="20px" height="15px" />,
            },
            {
                id: "de",
                name: "Deutsch - DE",
                value: "de",
                icon: <DEFlag width="20px" height="15px" />,
            },
            {
                id: "he",
                name: "rעברית - HE",
                value: "he",
                icon: <ILFlag width="20px" height="15px" />,
            },
            {
                id: "es",
                name: "Español - ES",
                value: "es",
                icon: <ESFlag width="20px" height="15px" />,
            },
        ],
    },
};
