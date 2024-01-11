import { Book } from "@/services/books/types";
import { FilterHandler } from "./type";

export const handlers = {
  byRangePrice0To30: (book: Book) => {
    return Number(book.saleInfo.listPrice?.amount) <= 30;
  },
  byRangePrice31To50: (book: Book) => {
    return (
      Number(book.saleInfo.listPrice?.amount) >= 31 &&
      Number(book.saleInfo.listPrice?.amount) <= 50
    );
  },
  byRangePrice51To100: (book: Book) => {
    return (
      Number(book.saleInfo.listPrice?.amount) >= 51 &&
      Number(book.saleInfo.listPrice?.amount) <= 100
    );
  },
  byRangePriceMoreThen101: (book: Book) => {
    return Number(book.saleInfo.listPrice?.amount) >= 101;
  },
  byAvailableToSell: (book: Book) => {
    return book.saleInfo.saleability === "FOR_SALE";
  },
  byNotAvailableToSell: (book: Book) => {
    return book.saleInfo.saleability === "NOT_FOR_SALE";
  },
  byEpubFormat: (book: Book) => {
    return book.accessInfo.epub.isAvailable;
  },
  byPDFFormat: (book: Book) => {
    return book.accessInfo.pdf.isAvailable;
  },
};

export const filterBooks = (
  books: Book[] = [],
  filters: FilterHandler[] = [],
) => {
  const handlersFiltered = Object.keys(handlers).filter((key) =>
    filters.includes(key as FilterHandler),
  );
  return books.filter((book) =>
    handlersFiltered.some((handleKey) =>
      handlers[handleKey as FilterHandler](book),
    ),
  );
};
