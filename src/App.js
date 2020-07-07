import React from "react";
import { PrimaryButton } from "@fluentui/react";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx"

function App() {
    return (
        <div className="App">
            <Router>
                <Link to="/">Root</Link> |
                <Link to={"/home"}>HOME</Link> |
                <Link to={"/about"}>ABOUT</Link>
                <Switch>
                    <Route path={"/home"}>
                        <Home />
                    </Route>
                    <Route path={"/about"}>
                        <About />
                    </Route>
                    <Route path={"/"}>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
