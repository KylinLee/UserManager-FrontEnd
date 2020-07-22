/* React */
import * as React from "react";

/* Components */
import "./index.scss";

/* Components Lib */
import { Input, Dropdown, message, Menu } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
} from "@ant-design/icons";

const { Search } = Input;

function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
}

function handleButtonClick(e) {
    message.info("Click on left button.");
    console.log("click left button", e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1" icon={<UserOutlined />}>
            个人信息
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
            2nd menu item
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
            3rd item
        </Menu.Item>
    </Menu>
);

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
                        onClick: this.props.trigger
                    }
                )}
                <Search
                    className="search-bar"
                    placeholder="键入搜索"
                    size="middle"
                />
                <Dropdown.Button
                    overlay={menu}
                    icon={<UserOutlined />}
                    trigger={["click"]}
                    placement="bottomRight"
                    arrow={true}
                >
                    登出
                </Dropdown.Button>
            </nav>
        );
    }
}

export default Nav;
