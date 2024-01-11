import { FetchVolumesResponse } from "@/services/books/types";
import { InfiniteData } from "react-query";

export type BooksListProps = {
  data?: InfiniteData<FetchVolumesResponse>;
};
