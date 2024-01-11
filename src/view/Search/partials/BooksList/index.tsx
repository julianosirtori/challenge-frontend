import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import {
  ContentResults,
  ContentResultsCategory,
  ContentResultsCover,
  ContentResultsTitle,
  ContentResultsWrapper,
} from "./styles";
import { BooksListProps } from "./types";
import { Book } from "@/services/books/types";
import { filterBooks } from "@/components/filters/handlers";
import { FilterHandler } from "@/components/filters/type";

export function BooksList({ data }: BooksListProps) {
  const [searchParams] = useSearchParams();

  const booksFiltered: Book[] = useMemo(() => {
    const allBooks = data?.pages.reduce<Book[]>((acc, curr) => {
      if (curr.items) {
        return [...acc, ...curr.items];
      }
      return acc;
    }, []);

    if (searchParams.size <= 1) {
      return allBooks || [];
    }

    if (!allBooks) {
      return [];
    }

    const filters: FilterHandler[] = [];
    for (const key of searchParams.keys()) {
      filters.push(key as FilterHandler);
    }

    return filterBooks(allBooks, filters);
  }, [data, searchParams]);

  return (
    <ContentResults data-testid="books-list">
      {booksFiltered.map((book) => (
        <ContentResultsWrapper key={book.id} data-testid="book-item">
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
    </ContentResults>
  );
}
