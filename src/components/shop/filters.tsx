import { CategoryFilter } from "./category-filter";
import { FilteredItem } from "./filtered-item";
import { ColorFilter } from "./color-filter";
import { PriceFilter } from "./price-filter";
import { useRouter } from "next/router";
import isEmpty from "lodash/isEmpty";
import { useTranslation } from "next-i18next";
import { Filter } from "@framework/types";
import { BrandFilter } from "./brand-filter";
import { GenderFilter } from "./gender-filter";
import { StatusFilter } from "./status-filter";
import { ConditionFilter } from "./condition-filter";
import { MaterialFilter } from "./material-filter";
import { SizeFilter } from "./size-filter";
import { PromotionFilter } from "./promotion-filter";
import { SpecialFilter } from "./special-filter";
import { useQueryClient } from "react-query";
import { ROUTES } from "@utils/routes";
import { SubCategoryFilter } from "./sub-categories-filter";

interface IShopFilters {
    filter: Filter;
    modalTooltip?: boolean;
    mobile?: boolean;
    totalItems?: number;
    filterName?: string;
}
export const ShopFilters: React.FC<IShopFilters> = ({
    filter,
    modalTooltip = false,
    totalItems = 2000,
    mobile = true,
    filterName = "Hàng mới về",
}) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const { query, asPath } = router;
    const { t } = useTranslation("common");
    const { page, sort, category, collection, ...restQuery } = query;
    const {
        brands,
        categories,
        subCategories,
        colors,
        conditions,
        genders,
        specials,
        materials,
        promotions,
        prices,
        sizes,
        statuses,
    } = filter ?? {};
    return (
        <div className="pt-1">
            <div className="block border-b border-gray-300 pb-7 mb-7">
                <div className="flex items-center justify-between mb-2.5">
                    <h2 className="font-semibold text-heading text-xl md:text-2xl">
                        {t(filterName)}
                    </h2>
                    <br />
                </div>
                <div className="flex-shrink-0 text-black text-xs md:text-sm leading-4 pe-4 md:me-6 lg:block mb-3">
                    {totalItems} {t("text-items")}
                </div>
                {(!isEmpty(restQuery) || category) && (
                    <button
                        className="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none text-heading font-semibold"
                        aria-label="Clear All"
                        onClick={async () => {
                            const url = query.category
                                ? ROUTES.HANG_MOI_VE
                                : asPath.split("?")[0];
                            router.push(url);
                            await queryClient.resetQueries({
                                active: true,
                            });
                        }}
                    >
                        {t("text-clear-filter")}
                    </button>
                )}
                <div className="flex flex-wrap -m-1.5 pt-2">
                    {!isEmpty(restQuery) &&
                        Object.values(restQuery)
                            .join("|")
                            .split("|")
                            .map((v, idx) => (
                                <FilteredItem
                                    itemKey={
                                        Object.keys(restQuery).find((k) =>
                                            restQuery[k]?.includes(v),
                                        )!
                                    }
                                    itemValue={v}
                                    key={idx}
                                />
                            ))}
                </div>
            </div>
            {categories?.length > 0 && (
                <CategoryFilter categoriesFilter={categories} />
            )}
            {subCategories?.subCateData?.length > 0 && (
                <SubCategoryFilter subCategoryFilter={subCategories} />
            )}
            {brands?.length > 0 && <BrandFilter brandsFilter={brands} />}
            {genders?.length > 0 && <GenderFilter gendersFilter={genders} />}
            {statuses?.length > 0 && <StatusFilter statusesFilter={statuses} />}
            {conditions?.length > 0 && (
                <ConditionFilter
                    conditionsFilter={conditions}
                    modalTooltip={modalTooltip}
                    mobile={mobile}
                />
            )}
            {materials?.length > 0 && (
                <MaterialFilter materialsFilter={materials} />
            )}
            {sizes?.length > 0 && <SizeFilter sizesFilter={sizes} />}
            {promotions?.length > 0 && (
                <PromotionFilter promotionsFilter={promotions} />
            )}
            {specials?.length > 0 && (
                <SpecialFilter specialsFilter={specials} />
            )}
            {prices?.length > 0 && <PriceFilter pricesFilter={prices} />}
            {colors?.length > 0 && <ColorFilter colorsFilter={colors} />}
        </div>
    );
};
