import { useInfiniteQuery } from "react-query";

import { fetchVolumes } from "@/services/books";
import { FetchVolumesParams } from "@/services/books/types";

export function useInfiniteQueryBooks(params: FetchVolumesParams) {
  return useInfiniteQuery({
    queryKey: ["infiniteQueryBooks", params],
    queryFn: ({ pageParam = 1 }) => {
      return fetchVolumes({
        query: params.query,
        maxResults: 20,
        startIndex: pageParam,
      });
    },
    getPreviousPageParam: (firstPage, allPages) => {
      const totalItems = allPages.reduce(
        (acc, curr) => curr.items?.length + acc,
        0,
      );
      return firstPage.items ? totalItems : undefined;
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalItems = allPages.reduce(
        (acc, curr) => curr.items?.length + acc,
        0,
      );
      return lastPage.items ? totalItems : undefined;
    },
  });
}
