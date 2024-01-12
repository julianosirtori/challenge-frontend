import { useDebounce } from "@/hooks/useDebounce";
import { useQueryBooks } from "@/hooks/useQueryBooks";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { UseSearchProps } from "./types";

export function useSearch({ disabled }: UseSearchProps) {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get("q") || "");
  const debounceSearch = useDebounce(search, 250) as typeof search;

  const { data = { items: [] }, status } = useQueryBooks(
    {
      query: `intitle:${debounceSearch}`,
    },
    {
      enabled: !!debounceSearch && disabled,
    },
  );

  return {
    setSearch,
    search,
    result: data.items,
    status,
  };
}
