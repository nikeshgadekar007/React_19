/** @format */

import { useInfiniteQuery, QueryFunctionContext } from "@tanstack/react-query";
import { useState } from "react";

import { DisplayComponent } from "./DisplayComponent"; // your custom item display
import React from "react";

interface Page {
  data: any[];
  previousCursor?: number;
  nextCursor?: number;
}

// Fetches from a paginated API with param `page`
const fetchData = async ({
  pageParam = 1,
}: QueryFunctionContext): Promise<Page> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${pageParam}`
  );
  const data = await response.json();
  return {
    data,
    previousCursor:
      (pageParam as number) > 0 ? (pageParam as number) - 1 : undefined,
    nextCursor: data.length ? (pageParam as number) + 1 : undefined,
  };
};

export default function PaginatedDisplay() {
  const [currentPage, setCurrentPage] = useState(0);

  const {
    data, // InfiniteQueryData<Page>
    error, // Error
    fetchNextPage,
    hasNextPage, // boolean
    isError,
    isFetching, // boolean
    isFetchingNextPage,
  } = useInfiniteQuery<Page, Error>({
    queryKey: ["posts"],
    queryFn: fetchData,
    getNextPageParam: (lastPage: Page) => lastPage.nextCursor,
    initialPageParam: 1, // Add this line to specify the initial page parameter
  });

  return (
    <div>
      {/* Main Data Layer - only display the last fetched page */}
      <div>
        {/* data.pages: Page[] */}
        {isFetching ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>{error.message}</div>
        ) : (
          data &&
          data.pages[currentPage].data.map((item, index) => (
            <ul>
              <DisplayComponent key={index} {...item} />
            </ul>
          ))
        )}
      </div>
      {/* Pagination Controls */}
      <div>
        <button
          disabled={currentPage === 0}
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          {/* If the current page is not the first */}
          {currentPage > 0 ? "Previous Page" : "No earlier data"}
        </button>
        <button
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={() => {
            // The next page has not yet been populated
            if (data && data.pages.length <= currentPage + 1) {
              fetchNextPage();
            }
            setCurrentPage(currentPage + 1);
          }}
        >
          {isFetchingNextPage
            ? "Fetching next page"
            : hasNextPage
            ? "Next Page"
            : "No later data"}
        </button>
        <div></div>
      </div>
    </div>
  );
}
