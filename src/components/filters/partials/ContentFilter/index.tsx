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
          searchParams.delete(item.name);
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
        searchParams.delete(item.name);
        return searchParams;
      }
      searchParams.set(item.name, "1");

      return searchParams;
    });
    onClose?.();
  };

  return (
    <Content>
      <ContentTitle>Filtros</ContentTitle>
      <WrapperFilter>
        {Object.entries(filtersWithInitialState).map(
          ([filterType, category]) => (
            <div key={filterType}>
              <FilterTitle>{category.title}</FilterTitle>
              <FilterContent>
                <ul>
                  {category?.items?.map((item: Item) => (
                    <li key={item.name}>
                      <input
                        id={item.name}
                        name={item.name}
                        checked={!!searchParams.get(item.name)}
                        onChange={(e) => handleChangeFilter(item, e)}
                        type="checkbox"
                      />
                      <label htmlFor={item.name}>{item.label}</label>
                    </li>
                  ))}
                </ul>
              </FilterContent>
            </div>
          ),
        )}
      </WrapperFilter>
      {searchParams.size > 1 && (
        <Button onClick={clearFilters}>Limpar Filtro</Button>
      )}
    </Content>
  );
};
