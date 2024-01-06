export type FetchVolumesParams = {
  query: string;
  startIndex?: number;
  maxResults?: number;
};

export type FetchVolumesQueryParams = {
  q: string;
  startIndex?: string;
  maxResults?: string;
  printType: string;
  langRestrict: string;
};

export type FetchVolumesResponse = {
  kind: string;
  totalItems: number;
  items: Books[];
};

export interface Books {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
}

interface VolumeInfo {
  title: string;
  authors?: string[];
  publisher: string;
  description: string;
  imageLinks?: {
    smallThumbnail: string;
    thumbnail: string;
  };
  language: string;
}

interface SaleInfo {
  country: string;
  listPrice: {
    amount: number;
    currencyCode: string;
  };
  buyLink: string;
}
