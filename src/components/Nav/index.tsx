/* React */
import * as React from "react";

/* Components */
import "./index.scss";

/* Components Lib */
import { Input, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Search } = Input;

class Nav extends React.Component {
    props: {
        collapsed;
        trigger;
    };
    render() {
        return (
            <nav className="nav-bar">
                {React.createElement(
                    this.props.collapsed
                        ? MenuUnfoldOutlined
                        : MenuFoldOutlined,
                    {
                        className: "trigger",
                        onClick: this.props.trigger,
                    }
                )}
                <Search
                    className="search-bar"
                    placeholder="键入搜索"
                    enterButton
                    size="middle"
                />
                <Button type="primary" danger>
                    退出登录
                </Button>
            </nav>
        );
    }
}

export default Nav;
