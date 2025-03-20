/** @format */

import {
  useInfiniteQuery,
  type QueryFunctionContext,
} from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { DisplayComponent } from "./DisplayComponent"; // your custom item display

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

export default function InfiniteScrollDisplay() {
  const [ref, inView] = useInView();

  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isError,
    error,
  } = useInfiniteQuery<Page, Error>({
    queryKey: ["infiniteScroll"],
    queryFn: fetchData,
    getNextPageParam: (lastPage: Page) => lastPage.nextCursor,
    initialPageParam: 1, // Add this line to specify the initial page parameter
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div>
      <div>
        {/* data.pages: Page[] */}
        {isError ? (
          <div>{error.message}</div>
        ) : (
          data &&
          data.pages.map((page, pageNum) => (
            <React.Fragment key={pageNum}>
              {page.data.map((item, index) => (
                <DisplayComponent key={index} {...item} />
              ))}
            </React.Fragment>
          ))
        )}
      </div>
      {/* Pagination Controls */}
      <div>
        <button
          ref={ref}
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage
            ? "Fetching next page"
            : hasNextPage
            ? "Fetch More Data"
            : "No more data"}
        </button>
      </div>
    </div>
  );
}
