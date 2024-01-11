import { FilterContentProps } from "./partials/ContentFilter/types";

export const filtersWithInitialState: FilterContentProps = {
  price: {
    title: "Preço",
    items: [
      {
        id: 1,
        label: "de R$0 até R$30",
        handle: "byRangePrice0To30",
      },
      {
        id: 2,
        label: "de R$31 até R$50",
        handle: "byRangePrice31To50",
      },
      {
        id: 3,
        label: "de R$51 até R$100",
        handle: "byRangePrice51To100",
      },
      {
        id: 4,
        label: "Mais de R$100",
        handle: "byRangePriceMoreThen101",
      },
    ],
  },
  availableItems: {
    title: "Disponibilidade para venda",
    items: [
      {
        id: 1,
        label: "não disponível",
        handle: "byNotAvailableToSell",
      },
      {
        id: 2,
        label: "disponível",
        handle: "byAvailableToSell",
      },
    ],
  },
  availableFormats: {
    title: "Formatos disponíveis",
    items: [
      {
        id: 1,
        label: "ePub",
        handle: "byEpubFormat",
      },
      {
        id: 2,
        label: "PDF",
        handle: "byPDFFormat",
      },
    ],
  },
};
