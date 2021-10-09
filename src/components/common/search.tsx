import React, { useRef, useEffect } from "react";
import cn from "classnames";
import SearchResultLoader from "@components/ui/loaders/search-result-loader";
import { useUI } from "@contexts/ui.context";
import SearchBox from "@components/common/search-box";
import { useSearchQuery } from "@framework/product/use-search";
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from "body-scroll-lock";
import Scrollbar from "@components/common/scrollbar";
import SearchProduct from "@components/common/search-product";
import { useRouter } from "next/router";
import useDebounce from "@utils/use-debounce";

export default function Search() {
    const { displaySearch, closeSearch } = useUI();
    const [searchText, setSearchText] = React.useState("");
    const debouncedSearchQuery = useDebounce(searchText, 600);
    const { data, isLoading } = useSearchQuery(
        // [API_ENDPOINTS.SEARCH, debouncedSearchQuery],
        {
            text: debouncedSearchQuery,
        },
    );
    const router = useRouter();
    function handleSearch(
        e: React.KeyboardEvent & React.FormEvent<HTMLInputElement>,
    ) {
        if (e.key === "Enter") {
            e.preventDefault();
            if (e.currentTarget.value) {
                router.push(`/hang-moi-ve?search=${e.currentTarget.value}`);
                closeSearch();
            }
        }
    }
    function handleAutoSearch(e: React.FormEvent<HTMLInputElement>) {
        setSearchText(e.currentTarget.value);
    }
    function clear() {
        setSearchText("");
    }

    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (ref.current) {
            if (displaySearch) {
                disableBodyScroll(ref.current);
            } else {
                enableBodyScroll(ref.current);
            }
        }
        return () => {
            clearAllBodyScrollLocks();
        };
    }, [displaySearch]);
    return (
        <div ref={ref}>
            <div
                // overlay.open
                className={cn("overlay", {
                    open: displaySearch,
                })}
                role="button"
                onClick={closeSearch}
            />
            <div
                className={cn(
                    "drawer-search relative hidden top-0 z-30 opacity-0 invisible transition duration-300 ease-in-out left-1/2 px-4 w-full md:w-[730px] lg:w-[930px]",
                    {
                        open: displaySearch,
                    },
                )}
            >
                <div className="w-full flex flex-col justify-center">
                    <div className="flex-shrink-0 mt-3.5 lg:mt-4 w-full">
                        <div className="flex flex-col mx-auto mb-1.5 w-full ">
                            <SearchBox
                                onSubmit={handleSearch}
                                onKeyDown={handleSearch}
                                onChange={handleAutoSearch}
                                name="search"
                                value={searchText}
                                onClear={clear}
                                ref={(input) => input && input.focus()}
                            />
                        </div>
                        {searchText && (
                            <div className="bg-white flex flex-col rounded-md overflow-hidden h-full max-h-64vh lg:max-h-[550px]">
                                <Scrollbar className="os-host-flexbox">
                                    <div className="h-full">
                                        {isLoading ? (
                                            <div className="p-5 border-b border-gray-300 border-opacity-30 last:border-b-0">
                                                {Array.from({ length: 5 }).map(
                                                    (_, idx) => (
                                                        <SearchResultLoader
                                                            key={idx}
                                                            uniqueKey={`top-search-${idx}`}
                                                        />
                                                    ),
                                                )}
                                            </div>
                                        ) : (
                                            data?.map((product, index) => (
                                                <div
                                                    className=" p-5 border-b border-gray-150 relative last:border-b-0"
                                                    onClick={closeSearch}
                                                >
                                                    <SearchProduct
                                                        product={product}
                                                        key={index}
                                                    />
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </Scrollbar>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
