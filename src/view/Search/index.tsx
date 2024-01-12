import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { Filter } from "@/components/filters";
import { Container, Content } from "./styles";
import { useInfiniteQueryBooks } from "@/hooks/useInfiniteQueryBooks";
import { BooksList } from "./partials/BooksList";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const { ref, inView } = useInView();

  const query = useMemo(() => {
    return searchParams.get("q") || "";
  }, [searchParams.get("q")]);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQueryBooks({
      query,
    });

  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Container>
      <Content>
        <Filter />
        <BooksList data={data} />
        {data && (
          <div>
            <button
              ref={ref}
              data-testid="button-load-more"
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                  ? "Load Newer"
                  : "Nothing more to load"}
            </button>
          </div>
        )}
      </Content>
    </Container>
  );
};
