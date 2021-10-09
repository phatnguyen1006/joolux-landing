import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import { prepareUrlAs } from "@utils/prepare-url";

interface IPagination {
    pagination: {
        hasNextPage: number;
        hasPreviousPage: number;
        total: number;
        totalPage: number;
    };
    className?: string;
}
const Pagination: FC<IPagination> = ({
    pagination,
    className = "container flex justify-start mx-auto product-paginate mt-6 overflow-x-auto",
}) => {
    const router = useRouter();
    const { pathname, query } = router;
    const { page, ...restQuery } = query;

    const onPageChange = ({ selected }) => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        // setPageNum(() => {
        //     return selected + 1;
        // });
        const { url } = prepareUrlAs(
            router,
            {
                pathname,
                query: {
                    ...restQuery,
                    page: selected + 1,
                },
            },
            undefined,
        );
        router.push(decodeURI(url), undefined, { scroll: false });
    };
    return (
        <div className={className}>
            <ReactPaginate
                previousLabel={"<"}
                previousLinkClassName="inline-flex h-8 w-8 text-gray-600 bg-white border border-solid border-[#cfcfcf] leading-8 mx-1 justify-center items-center cursor-pointer text-sm"
                nextLinkClassName="inline-flex h-8 w-8 text-gray-600 bg-white border border-solid border-[#cfcfcf] leading-8 mx-1 justify-center items-center cursor-pointer text-sm"
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={
                    pagination?.totalPage ?? 130
                    // !isLoading ? data?.totalPages?.totalPage : temp_total
                }
                // limit={10}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                forcePage={(query?.page as unknown as number) - 1 || 0}
                // pageLinkClassName="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
                // activeLinkClassName="h-10 px-5 text-white bg-gray-600 border border-r-0 border-gray-600"
                onPageChange={onPageChange}
                breakLinkClassName="text-sm inline-flex px-[6px] h-8 w-8 text-gray-600 bg-white leading-8 mx-1 justify-center items-center"
                containerClassName={"flex w-1/2 items-center"}
                activeClassName={"active"}
            />
        </div>
    );
};

export default Pagination;
