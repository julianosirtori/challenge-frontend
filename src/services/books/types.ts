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
  items?: Book[];
};

export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
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
  listPrice?: {
    amount: number;
    currencyCode: string;
  };
  buyLink: string;
  saleability: "NOT_FOR_SALE" | "FOR_SALE";
}

interface AccessInfo {
  epub: {
    isAvailable: boolean;
  };
  pdf: {
    isAvailable: boolean;
  };
}
