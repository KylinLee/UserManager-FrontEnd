/* React */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/* Apollo */
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

/* Components */
import Nav from "./components/Nav/Nav";
import "./App.scss";

/* Components Lib */
import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Sider></Sider>
                    <Layout>
                        <Header>
                            <Nav />
                        </Header>
                        <Content>Content</Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default App;
