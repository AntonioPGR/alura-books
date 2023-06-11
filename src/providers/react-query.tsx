import { QueryClientProvider, QueryClient } from "@tanstack/react-query"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: 1000 * 60,
    }
  }
})
export const ReactQueryProvider = ({children}:PropsProvider) => {
  return(
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}