/* React */
import React from "react";

/* Components */
import "./Nav.scss";

/* Components Lib */
import { Input, Avatar, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Search } = Input;

class Nav extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <nav className="nav-bar">
                {React.createElement(
                    this.state.collapsed
                        ? MenuUnfoldOutlined
                        : MenuFoldOutlined,
                    {
                        className: "trigger",
                        onClick: this.toggle,
                    }
                )}
                <Button type="primary">zhu</Button>
                <Search
                    className="search-bar"
                    placeholder="input search text"
                    enterButton
                    size="middle"
                />
                <Avatar
                    style={{
                        color: "#f56a00",
                        backgroundColor: "#fde3cf",
                    }}
                >
                    U
                </Avatar>
            </nav>
        );
    }
}

export default Nav;
