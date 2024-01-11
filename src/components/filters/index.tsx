import { useWindowSize } from "react-use";
import { useState } from "react";
import { ContainerDesktop, ContainerMobile } from "./styles";
import { ContentFilter } from "./partials/ContentFilter";

export function Filter() {
  const [showFilter, setShowFilter] = useState(false);

  const { width } = useWindowSize();

  const isMobile = width < 768;

  if (!isMobile) {
    return (
      <ContainerDesktop data-testid="container-desktop">
        <ContentFilter />
      </ContainerDesktop>
    );
  }

  return (
    <>
      <button
        data-testid="button-show-filter"
        onClick={() => setShowFilter(true)}
      >
        Exibir Filtros
      </button>
      <ContainerMobile isOpen={showFilter} data-testid="container-mobile">
        <ContentFilter onClose={() => setShowFilter(false)} />
      </ContainerMobile>
    </>
  );
}
