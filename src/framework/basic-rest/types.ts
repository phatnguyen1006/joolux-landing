import { QueryKey } from "react-query";

export type UserProfile = {
    firstname: string;
    lastname: string;
    address: string;
    city: string;
    district: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
    provider: string;
    gender: string;
};
export type CollectionsQueryOptionsType = {
    text?: string;
    collection?: string;
    status?: string;
    limit?: number;
};

export type CategoriesQueryOptionsType = {
    text?: string;
    category?: string;
    status?: string;
    limit?: number;
};
export type ProductsQueryOptionsType = {
    type?: string;
    page?: number;
    text?: string;
    category?: string;
    status?: string;
    limit?: number;
    categories?: string;
    brands?: string;
    colors?: string;
    conditions?: string;
    genders?: string;
    statuses?: string;
    sizes?: string;
    materials?: string;
    prices?: string;
    search?: string;
};
export type QueryOptionsType = {
    text?: string;
    category?: string;
    status?: string;
    limit?: number;
};

export type RelatedProductsQueryOptionsType = {
    id: string;
    brand: string;
    category: string;
};

export type QueryParamsType = {
    queryKey: QueryKey;
    pageParam?: string;
};
export type Attachment = {
    id: string | number;
    thumbnail: string;
    original: string;
};
export type Category = {
    id: number | string;
    name: string;
    slug: string;
    details?: string;
    image?: Attachment;
    icon?: string;
    products?: Product[];
    productCount?: number;
};
export type Collection = {
    id: number | string;
    name: string;
    slug: string;
    details?: string;
    image?: Attachment;
    icon?: string;
    products?: Product[];
    productCount?: number;
};
export type Brand = {
    id: number | string;
    name: string;
    slug: string;
    image?: Attachment;
    background_image?: any;
    [key: string]: unknown;
};
export type Tag = {
    id: string | number;
    name: string;
    slug: string;
};

export interface Reviews {
    total: number;
    averageRatingScore: number;
    reviewList: any[];
}

export interface Offer {
    inPromotion: boolean;
}

export type Product = {
    id: number | string;
    name: string;
    slug: string;
    price: number;
    quantity: number;
    sale_price?: number;
    // image: Attachment;
    sku?: string;
    otherSpecialValue: {
        hasToContact: string;
    };
    gallery?: Attachment[];
    category?: Category;
    retailPrice?: number;
    tag?: Tag[];
    meta?: any[];
    description?: string;
    status: string;
    variations?: object;
    details: {
        id: number;
        columnName: string;
        value: string;
        highlight: boolean;
        slug: string;
    }[];
    reviews: Reviews;
    offer: Offer;
    images: string[];
    gender: string;
    tags: any[];
    properties: any[];
    isDeleted: number;
    // category: string[];
    rootCategory: string[];
    approved: boolean;
    _id: string;
    // sku: string;
    attribute: string;
    type: string;
    productWebsite: string;
    createdAt: Date;
    freeShipping: string;
    hasOptions: string;
    image: string;
    MK_loai_kinh: string;
    magikfeatured: string;
    magikCountdowntimer: string;
    magikCtCatoverride: string;
    msrpDisplayActualPriceType: string;
    msrpEnabled: string;
    // name: string;
    optionsContainer: string;
    // price: string;
    productSocialbar: string;
    requiredOptions: string;
    size: string;
    smallImage: string;
    specialFromDate: Date;
    specialPrice: string;
    thumbnail: string;
    gioiTinh: string;
    maSpHang: string;
    brand: string;
    productInformation: string;
    TX_cao: string;
    TX_Dai: string;
    TX_HinhDang: string;
    TX_mau: string;
    TX_rong: string;
    xuatXu: string;
    updatedAt: Date;
    urlKey: string;
    urlPath: string;
    visibility: string;
    qty: number;
    min_qty: number;
    onSale: boolean;
    use_config_min_qty: string;
    is_qty_decimal: string;
    backorders: string;
    use_config_backorders: string;
    min_sale_qty: string;
    use_config_min_sale_qty: string;
    max_sale_qty: string;
    use_config_max_sale_qty: string;
    is_in_stock: string;
    use_config_notify_stock_qty: string;
    manage_stock: string;
    use_config_manage_stock: string;
    stock_status_changed_auto: string;
    use_config_qty_increments: string;
    qty_increments: string;
    use_config_enable_qty_inc: string;
    enable_qty_increments: string;
    is_decimal_divided: string;
    _media_image: string;
    _media_position: string;
    _media_is_disabled: string;
    [key: string]: unknown;
};

export interface Filter {
    categories: { value: string; name: string }[];
    brands: string[];
    colors: string[];
    conditions: string[];
    promotions: string[];
    specials: string[];
    genders: string[];
    statuses: string[];
    sizes: string[];
    materials: string[];
    prices: string[];
    subCategories: {
        subCateFilterName: string;
        subCateData: [
            {
                id: number;
                value: string;
            },
        ];
    };
}

export type OrderItem = {
    _id: number | string;
    productName: string;
    price: number;
};

export type OrderLog = {
    _id: string;
    action: string;
    description: string;
    time: string;
};
export type Order = {
    id: string | number;
    name: string;
    slug: string;
    products: OrderItem[];
    total: number;
    tracking_number: string;
    customer: {
        id: number;
        email: string;
    };
    shipping_fee: number;
    payment_gateway: string;
    customerProvince: string;
    customerDistrict: string;
    customerPhone: string;
    customerWard: string;
    customerAddress: String;
    customerName: string;
    customerEmail: string;
    _id: string;
    // note
    customerNote: string;
    showingProductsList: OrderItem[];
    orderLogs: OrderLog[];
    status: string;
    user: string;
    totalCost: number;
    vat: number;
    couponApply: {
        coupon: string;
        totalMoneyDiscount: number;
        allowMoneyDiscount: number;
    };
    campaignApply: {
        campaign: string;
        totalMoneyDiscount: number;
        allowMoneyDiscount: number;
    };
    finalPrice: number;
    createdAt: Date;
    updatedAt: Date;
    paymentMethod: string;
    paid: Boolean;
    deliverySupplier: string;
    deliveryCode: string;
    deliveryStatus: string;
    deliveryFee: number;
    deliveryText: string;
    isFreeShip: Boolean;
};

export type HomepageBanner = {
    id: 2;
    title: string;
    slug: string;
    image: {
        mobile: {
            url: string;
            width: number;
            height: number;
        };
        desktop: {
            url: string;
            width: number;
            height: number;
        };
    };
};

export type CollectionBanner = {
    name: string;
    slug: string;
    description: string;
    image: string;
};

export type PopupBanner = {
    _id: string;
    name: string;
    description: string;
    image: string;
};

export type Blog = {
    images: any[];
    metaKeyWords: string[];
    tags: string[];
    _id: string;
    title: string;
    slug: string;
    category: string;
    shortBody: string;
    body: string;
    metaDescription: string;
    thumbnail: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
};

export type Article = {
    _id: string;
    slug: string;
    body: string;
    teamMembers: {
        _id: string;
        name: string;
        role: string;
        img: string;
        alt: string;
    }[];
    newsCarousel: {
        id: number;
        title: string;
        slug: string;
        image: {
            mobile: {
                url: string;
                width: number;
                height: number;
            };
            desktop: {
                url: string;
                width: number;
                height: number;
            };
        };
    }[];
};
