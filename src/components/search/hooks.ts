import { useDebounce } from "../../hooks/useDebounce"
import { useQueryBooks } from "../../hooks/queries/books"
import { useSearchParams } from "react-router-dom";

export function useSearch(disabled: boolean) {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || ''
  const debounceSearch = useDebounce(query, 250)
  
  const { data = { items: [] }, status } = useQueryBooks({
    q: debounceSearch
  }, {
    enabled: !!debounceSearch && disabled
  })

  const handleSetSearch = (value: string) => {
    setSearchParams(new URLSearchParams({q: value}).toString())
  }

  return {
    setSearch: handleSetSearch,
    search: query,
    result: data.items,
    status
  }
}