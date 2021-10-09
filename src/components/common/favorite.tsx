import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FC, useState, useEffect, useCallback } from "react";
import { useIsMount } from "@utils/use-is-mount";
import { useUI } from "@contexts/ui.context";
import { useFavoriteProductMutation } from "@framework/product/use-favorite-product";
import debounce from "lodash/debounce";
const Favorite: FC<{
    isFavorite: boolean;
    productId: string;
    className?: string;
}> = ({ isFavorite, productId, className = "" }) => {
    const [favorite, setFavorite] = useState<boolean>(isFavorite);
    const { mutate: favoriteProduct } = useFavoriteProductMutation();

    const { setModalView, openModal, isAuthorized, setFavoriteData } = useUI();
    function handleFavorite() {
        if (!isAuthorized) {
            setFavoriteData(productId);
            setModalView("LOGIN_VIEW");
            return openModal();
        }
        setFavorite((fav) => !fav);
        debouncedClick();
    }

    // Debounce onclick with other value
    const debouncedClick = useCallback(
        debounce(
            () => {
                favoriteProduct({ product: productId });
            },
            500,
            { leading: true, trailing: false, maxWait: 500 },
        ),
        [],
    );

    // Debounce onClick with state value
    // https://stackoverflow.com/questions/61785903/problems-with-debounce-in-useeffect
    // const debounceFavoriteState = useCallback(
    //     debounce((fav) => {
    //         console.log(fav);
    //     }, 1000),
    //     [],
    // );
    const isMount = useIsMount();
    useEffect(() => {
        if (!isMount) {
            setFavorite(isFavorite);
        }
    }, [isFavorite]);
    return (
        <>
            {favorite ? (
                <BsHeartFill
                    onClick={handleFavorite}
                    color="red"
                    size={24}
                    className={className}
                />
            ) : (
                <BsHeart
                    onClick={handleFavorite}
                    color="red"
                    size={24}
                    className={className}
                />
            )}
        </>
    );
};

export default Favorite;
