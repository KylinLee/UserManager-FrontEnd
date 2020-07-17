/* React */
import React from "react";

/* Components */
import "./Nav.scss";

/* Components Lib */
import { AlignLeftOutlined } from "@ant-design/icons";
import { Input, Avatar } from "antd";

const { Search } = Input;

function Nav() {
    return (
        <nav className="nav-bar">
            <AlignLeftOutlined />
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

export default Nav;
