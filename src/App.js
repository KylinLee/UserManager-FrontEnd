import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

client.query({
    query: gql`
    query {
  rates(currency: "USD") {
    rate
    name
    currency
  }
}
  `
})

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <PrimaryButton>Hello</PrimaryButton>
                <p>The Fluent Design Already Loaded</p>
                <ApolloProvider client={client}>
                    <div>
                        <h2>My first Apollo app 🚀</h2>
                    </div>
                </ApolloProvider>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>
        </div>
    );
}

export default App;
