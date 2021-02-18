import React from 'react';
import { render } from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';

import { Global } from './styles/global';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: "https://rickandmortyapi.com/graphql"
})

const client = new ApolloClient({
  link: httpLink,
  cache
});

render(
    <ApolloProvider client={client}>
      <App />
      <Global />
    </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
