import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:9000/graphql'
})
export const ApolloClientProvider = ({children}:PropsProvider) => {
  return(
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  )
}