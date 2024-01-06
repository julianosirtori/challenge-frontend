export type FilterProps = {
    mainTitle: string
    filters: FilterContentProps
    dispatch: React.Dispatch<React.SetStateAction<boolean>>
    hasSelectedFilters: boolean
    resetFilters: () => void
  }
  
export type FilterContentProps = {
  price: Items<Price>
  availableItems: Items<AvailableItems> 
  availableFormats:Items<AvailableFormats> 
}

interface Items<T> {
  title: string,
  items: T[],

}

type Price = {
  id: number,
  label: string,
  checked: boolean,
  rangeValue?: {
    min: number,
    max: number
  }
}

type AvailableItems = {
  id: number,
  label: string,
  checked: boolean

}

type AvailableFormats = {
  id: number,
  label: string,
  checked: boolean
}