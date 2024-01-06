import { FetchVolumesParams, FetchVolumesResponse } from "./types"

const googleApi = 'https://www.googleapis.com/books'

export async function fetchVolumes(params: FetchVolumesParams): Promise<FetchVolumesResponse> {
  const searchParams = new URLSearchParams({
    ...params,
    printType: 'books',
    langRestrict: 'pt',
  })
  const url = `${googleApi}/v1/volumes?${searchParams.toString()}`
  const response = await fetch(url, {
    method: 'GET'
  })
  const data = await response.json();
  return data
}