import {
  Content,
  ContentTitle,
  Button,
  FilterTitle,
  FilterContent,
} from "./styles";
import { Item } from "./types";
import { filtersWithInitialState } from "./constants";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
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

  return (
    <Content>
      <ContentTitle>Filtros</ContentTitle>
      <Button onClick={clearFilters}>Limpar Filtro</Button>
      {Object.entries(filtersWithInitialState).map(([filterType, category]) => (
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
                    onChange={(e) =>
                      setSearchParams((searchParams) => {
                        if (!e.target.checked) {
                          searchParams.delete(item.name);
                          return searchParams;
                        }
                        searchParams.set(item.name, "1");
                        return searchParams;
                      })
                    }
                    type="checkbox"
                  />
                  <label htmlFor={item.name}>{item.label}</label>
                </li>
              ))}
            </ul>
          </FilterContent>
        </div>
      ))}
    </Content>
  );
};

export default Filter;
