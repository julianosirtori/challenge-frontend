import { QueryClient, QueryClientProvider as Provider } from "react-query";
import { QueryClientProviderProps } from "./types";

const queryClient = new QueryClient();

export function QueryClientProvider({ children }: QueryClientProviderProps) {
  return <Provider client={queryClient}>{children}</Provider>;
}
