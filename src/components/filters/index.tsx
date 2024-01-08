import {
  Content,
  ContentTitle,
  Button,
  FilterTitle,
  FilterContent,
} from "./styles";
import { Item } from "./types";
import { filtersWithInitialState } from "./constants";

const Filter = () => {
  const handleToggleCheckbox = () => {
    console.log("click");
  };

  return (
    <Content>
      <ContentTitle>Filtros</ContentTitle>
      <Button>Limpar Filtro</Button>
      {Object.entries(filtersWithInitialState).map(([filterType, category]) => (
        <div key={filterType}>
          <FilterTitle>{category.title}</FilterTitle>
          <FilterContent>
            <ul>
              {category?.items?.map((item: Item) => (
                <li key={item.id}>
                  <input
                    name={item.label}
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleToggleCheckbox()}
                  />
                  <span>{item.label}</span>
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
