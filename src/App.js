import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';

import PokemonContainer from './containers/PokemonContainer';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh/'
  })

  return (
    <ApolloProvider client={client}>
      <main style={{ textAlign: "center" }}>
        <h1>Pokedex App!</h1>
        <PokemonContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
