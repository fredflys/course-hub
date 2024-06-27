import { ApolloClient, InMemoryCache } from "@apollo/client";

// const serverLink = createHttpLink({ uri: "127.0.0.1:3000/graphql" });

const gqlClient = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

export default gqlClient;
