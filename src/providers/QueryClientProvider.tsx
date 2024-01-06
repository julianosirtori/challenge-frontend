import {  
  QueryClient, 
  QueryClientProvider as Provider, 
} 
from 'react-query';

const queryClient = new QueryClient()

export function QueryClientProvider({children}: ComponentWithChildren) {
  return (
    <Provider client={queryClient}>
      {children}
    </Provider>
  )
}