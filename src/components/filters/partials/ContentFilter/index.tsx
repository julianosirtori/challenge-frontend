import { useSearchParams } from "react-router-dom";

import {
  Content,
  ContentTitle,
  Button,
  FilterTitle,
  FilterContent,
  WrapperFilter,
} from "./styles";
import { ContentFilterProps, Item } from "./types";
import { filtersWithInitialState } from "../../constants";

export const ContentFilter = ({ onClose }: ContentFilterProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const clearFilters = () => {
    setSearchParams((searchParams) => {
      Object.entries(filtersWithInitialState).forEach(([, category]) => {
        category?.items?.map((item: Item) => {
          searchParams.delete(item.handle);
        });
      });
      return searchParams;
    });
  };

  const handleChangeFilter = (
    item: Item,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchParams((searchParams) => {
      if (!e.target.checked) {
        searchParams.delete(item.handle);
        return searchParams;
      }
      searchParams.set(item.handle, "1");

      return searchParams;
    });
    onClose?.();
  };

  return (
    <Content data-testid="filter-content">
      <ContentTitle>Filtros</ContentTitle>
      <WrapperFilter>
        {Object.entries(filtersWithInitialState).map(
          ([filterType, category]) => (
            <div key={filterType}>
              <FilterTitle>{category.title}</FilterTitle>
              <FilterContent>
                <ul>
                  {category?.items?.map((item: Item) => (
                    <li key={item.handle}>
                      <input
                        data-testid={`filter-checkbox-${item.handle}`}
                        id={item.handle}
                        name={item.handle}
                        checked={!!searchParams.get(item.handle)}
                        onChange={(e) => handleChangeFilter(item, e)}
                        type="checkbox"
                      />
                      <label htmlFor={item.handle}>{item.label}</label>
                    </li>
                  ))}
                </ul>
              </FilterContent>
            </div>
          ),
        )}
      </WrapperFilter>
      {searchParams.size > 1 && (
        <Button data-testid="btn-clear-filters" onClick={clearFilters}>
          Limpar Filtro
        </Button>
      )}
    </Content>
  );
};
