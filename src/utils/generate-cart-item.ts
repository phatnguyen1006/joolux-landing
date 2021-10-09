// import isEmpty from "lodash/isEmpty";

interface Item {
    _id: string | number;
    name: string;
    urlKey: string;
    // image: {
    //     thumbnail: string;
    //     [key: string]: unknown;
    // };
    images: string[];
    price: number;
    specialPrice?: string;
    onSale?: boolean;
    [key: string]: unknown;
}
export function generateCartItem(item: Item, attributes: object) {
    const { _id, name, urlKey, images, price, specialPrice, onSale } = item;
    return {
        id: _id,
        name,
        slug: urlKey,
        image: images[0],
        specialPrice: onSale && specialPrice ? parseInt(specialPrice) : price,
        price: price,
        attributes,
    };
}
