import Filters from "../../components/filters";
import {
    Container,
  Content,
  ContentResults,
  ContentResultsCategory,
  ContentResultsCover,
  ContentResultsTitle,
  ContentResultsWrapper,
} from "./styles";

import { useSearchParams } from "react-router-dom";
import { useInfiniteQueryBooks } from "../../hooks/queries/books";
import { useInView } from 'react-intersection-observer'
import { useEffect } from "react";

const Search = () => {
  const [ searchParmas ] = useSearchParams()
  const { ref, inView } = useInView()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQueryBooks({
    q: searchParmas.get('q') || ''
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <Container>
        <Content>
        <Filters />
        <ContentResults>
          {data?.pages.map((page) => (
            <>
              {page.items?.map((book) => (
                <ContentResultsWrapper>
                  <ContentResultsCover>
                    <img src={book.volumeInfo?.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                  </ContentResultsCover>
                  <ContentResultsTitle>
                    <label>{book.volumeInfo.title} </label>
                  </ContentResultsTitle>
                  <ContentResultsCategory>
                    {book.volumeInfo.authors?.map(author => (
                      <span key={author}>{author}</span>
                    ))}
                  </ContentResultsCategory>
                </ContentResultsWrapper>
              ))}
            </>
          ))}
        </ContentResults>
        </Content>
        <div>
            <button
              ref={ref}
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load Newer'
                : 'Nothing more to load'}
            </button>
          </div>
      </Container>
  );
};

export default Search;
