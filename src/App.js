import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh/'
  })

  return (
    <ApolloProvider client={client}>
      <p>It's working!</p>
    </ApolloProvider>
  );
}

export default App;
