/* React */
import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Apollo */
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { from } from "apollo-boost";
import { gql } from "apollo-boost";

/* Components */
import "./App.scss";
import Nav from "./components/Nav";
import SideMenu from "./components/SideMenu";
import About from "./pages/About";
import Home from "./pages/Index";
import Source from "./pages/SourceMan";

/* Components Lib */
import { Layout } from "antd";
import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

class App extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        console.log("toggle");
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Router>
                <Layout>
                    <Sider
                        theme="light"
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <SideMenu />
                    </Sider>

                    <Layout>
                        <Header style={{ backgroundColor: "#fff" }}>
                            <Nav
                                collapsed={this.state.collapsed}
                                trigger={this.toggle}
                            />
                        </Header>

                        <Content
                            style={{ padding: "20px", boxSizing: "border-box" }}
                        >
                            <Switch>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/source">
                                    <Source />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default App;
