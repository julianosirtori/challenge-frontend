import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Filter from "@/components/filters";
import {
  Container,
  Content,
  ContentResults,
  ContentResultsCategory,
  ContentResultsCover,
  ContentResultsTitle,
  ContentResultsWrapper,
} from "./styles";
import { useInfiniteQueryBooks } from "@/hooks/useInfiniteQueryBooks";

export const Search = () => {
  const [searchParmas] = useSearchParams();
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQueryBooks({
      query: searchParmas.get("q") || "",
    });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Container>
      <Content>
        <Filter />
        <ContentResults>
          {data?.pages.map((page) => (
            <>
              {page.items?.map((book) => (
                <ContentResultsWrapper key={book.id}>
                  <ContentResultsCover>
                    {book.volumeInfo?.imageLinks?.thumbnail && (
                      <img
                        src={book.volumeInfo?.imageLinks?.thumbnail}
                        alt={book.volumeInfo.title}
                      />
                    )}
                  </ContentResultsCover>
                  <ContentResultsTitle>
                    <label>{book.volumeInfo.title} </label>
                  </ContentResultsTitle>
                  <ContentResultsCategory>
                    <span>{book.volumeInfo.authors?.join(" ")}</span>
                  </ContentResultsCategory>
                </ContentResultsWrapper>
              ))}
            </>
          ))}
        </ContentResults>
        <div>
          <button
            ref={ref}
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
      </Content>
    </Container>
  );
};
