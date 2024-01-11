export type FilterProps = {
  mainTitle: string;
  filters: FilterContentProps;
  dispatch: React.Dispatch<React.SetStateAction<boolean>>;
  hasSelectedFilters: boolean;
  resetFilters: () => void;
};

export type FilterContentProps = {
  price: Items;
  availableItems: Items;
  availableFormats: Items;
};

interface Items {
  title: string;
  items: Item[];
}

export type Item = {
  id: number;
  label: string;
  handle: string;
};

export type ContentFilterProps = {
  onClose?: () => void;
};
