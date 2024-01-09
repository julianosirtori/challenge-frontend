import { FilterContentProps } from "./types";

export const filtersWithInitialState: FilterContentProps = {
  price: {
    title: "Preço",
    items: [
      {
        id: 1,
        label: "de R$0 até R$30",
        name: "price-1",
      },
      {
        id: 2,
        label: "de R$31 até R$50",
        name: "price-2",
      },
      {
        id: 3,
        label: "de R$51 até R$100",
        name: "price-3",
        rangeValue: {
          min: 51,
          max: 100,
        },
      },
      {
        id: 4,
        label: "Mais de R$100",
        name: "price",
      },
    ],
  },
  availableItems: {
    title: "Disponibilidade para venda",
    items: [
      {
        id: 1,
        label: "não disponível",
        name: "available-1",
      },
      {
        id: 2,
        label: "disponível",
        name: "available-2",
      },
    ],
  },
  availableFormats: {
    title: "Formatos disponíveis",
    items: [
      {
        id: 1,
        label: "Epub",
        name: "format-1",
      },
      {
        id: 2,
        label: "PDF",
        name: "format-2",
      },
    ],
  },
};
