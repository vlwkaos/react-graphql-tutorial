import {
  ApolloClient, ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';

// 서버 주소
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

// 주소를 주고 cache 만들고 ApolloClient 초기화
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

