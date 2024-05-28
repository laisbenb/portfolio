import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_SKILLS_API,
  }),
  cache: new InMemoryCache(),
});

export default client;