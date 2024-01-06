import { QueryClientProvider } from './QueryClientProvider'
import { RouterProvider } from './RouterProvider'

export function Providers({children}: ComponentWithChildren){
  return (
    <QueryClientProvider>
      <RouterProvider/>
      {children}
    </QueryClientProvider>
  )
}