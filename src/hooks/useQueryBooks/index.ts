import { useQuery } from "react-query";

import { FetchVolumesParams } from "@/services/books/types";
import { fetchVolumes } from "@/services/books";

import { Options } from "./types";

export function useQueryBooks(params: FetchVolumesParams, options?: Options) {
  return useQuery({
    queryKey: ["queryBooks", params],
    queryFn: () => fetchVolumes(params),
    ...options,
  });
}
