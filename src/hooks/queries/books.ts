import {  useInfiniteQuery, useQuery } from 'react-query'
import { FetchVolumesParams } from '../../services/books/types';
import { fetchVolumes } from '../../services/books';

export function useQueryBooks(params: FetchVolumesParams, {enabled}: {enabled?: boolean}){
  return useQuery({
    queryKey: ['queryBooks', params],
    queryFn:  () => fetchVolumes(params),
    enabled
  })
}

export function useInfiniteQueryBooks(params: FetchVolumesParams){
  return useInfiniteQuery({
    queryKey: ['infiniteQueryBooks', params], 
    queryFn: ({ pageParam = 1 }) => {
      return fetchVolumes({
        q: params.q,
        maxResults: '20',
        startIndex: pageParam 
      })
    },
    getPreviousPageParam: (firstPage, allPages) => {
      const totalItems = allPages.reduce((acc, curr) => curr.items?.length + acc, 0)
      return firstPage.items ? totalItems : undefined
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalItems = allPages.reduce((acc, curr) => curr.items?.length + acc, 0)
      return lastPage.items ? totalItems  : undefined
    },
  })
}