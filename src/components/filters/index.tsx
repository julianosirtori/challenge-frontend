import { useWindowSize } from "react-use";
import { useState } from "react";
import { ContainerDesktop, ContainerMobile } from "./styles";
import { ContentFilter } from "./partials/ContentFilter";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);

  const { width } = useWindowSize();
  const isMobile = width < 768;

  if (!isMobile) {
    return (
      <ContainerDesktop>
        <ContentFilter />
      </ContainerDesktop>
    );
  }

  return (
    <>
      <button onClick={() => setShowFilter(true)}>Exibir Filtros</button>
      <ContainerMobile isOpen={showFilter}>
        <ContentFilter onClose={() => setShowFilter(false)} />
      </ContainerMobile>
    </>
  );
};

export default Filter;
