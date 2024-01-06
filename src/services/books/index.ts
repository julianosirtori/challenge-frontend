import {
  FetchVolumesParams,
  FetchVolumesQueryParams,
  FetchVolumesResponse,
} from "./types";

const googleApiHost = process.env.VITE_HOST_GOOGLE_API;

export function normalizeFetchVolumes(params: FetchVolumesParams) {
  const normalizeParams: FetchVolumesQueryParams = {
    q: params.query,
    printType: "books",
    langRestrict: "pt",
  };
  if (params.maxResults) {
    normalizeParams["maxResults"] = String(params.maxResults);
  }

  if (params.startIndex) {
    normalizeParams["startIndex"] = String(params.startIndex);
  }

  return normalizeParams;
}

export async function fetchVolumes(
  params: FetchVolumesParams,
): Promise<FetchVolumesResponse> {
  const searchParams = new URLSearchParams(normalizeFetchVolumes(params));
  const url = `${googleApiHost}/books/v1/volumes?${searchParams.toString()}`;
  const response = await fetch(url, {
    method: "GET",
  });
  const data = await response.json();
  return data;
}
