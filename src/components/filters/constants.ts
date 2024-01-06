import { FilterContentProps } from "./types";

export const filtersWithInitialState: FilterContentProps = {
    price: {
      title: 'Preço',
      items: [
        {
          id: 1,
          label: 'de R$0 até R$30',
          checked: false,
        },
        {
          id: 2,
          label: 'de R$31 até R$50',
          checked: false,
        },
        {
          id: 3,
          label: 'de R$51 até R$100',
          checked: false,
          rangeValue: {
            min: 51,
            max: 100,
          },
        },
        {
          id: 4,
          label: 'Mais de R$100',
          checked: false,
        },
      ],
    },
    availableItems: {
      title: 'Disponibilidade para venda',
      items: [
        {
          id: 1,
          label: 'disponível',
          checked: false,
        },
        {
          id: 2,
          label: 'não disponível',
          checked: false,
        },
      ],
    },
    availableFormats: {
      title: 'Formatos disponíveis',
      items: [
        {
          id: 1,
          label: 'Epub',
          checked: false,
        },
        {
          id: 2,
          label: 'PDF',
          checked: false,
        },
      ],
    },
  };