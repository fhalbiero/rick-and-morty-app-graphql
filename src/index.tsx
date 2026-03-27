import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Global } from './styles/global';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
      <Global />
    </ApolloProvider>
  </StrictMode>
);

reportWebVitals();
