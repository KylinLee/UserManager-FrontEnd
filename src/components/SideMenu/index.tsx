/* React */
import * as React from "react";

/* Components */
import "./index.scss";

/* Components Lib */
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class SideMenu extends React.Component {
    render() {
        return (
            <>
                <div className="logo">
                    <h1>IMAKER</h1>
                </div>
                <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
                    <Menu.Item key="main" icon={<PieChartOutlined />}>
                        <Link to="/">主控台</Link>
                    </Menu.Item>

                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        <Link to="/about"> 人员档案</Link>
                    </Menu.Item>

                    <SubMenu
                        key="sub1"
                        icon={<UserOutlined />}
                        title="网站管理"
                    >
                        <Menu.Item key="3">文化展示</Menu.Item>
                        <Menu.Item key="4">项目展示</Menu.Item>
                        <Menu.Item key="5">优秀成员</Menu.Item>
                        <Menu.Item key="7">
                            <Link to="news">新闻发布</Link>
                        </Menu.Item>
                        <Menu.Item key="6">大事记</Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="sub2"
                        icon={<TeamOutlined />}
                        title="纳新管理"
                    >
                        <Menu.Item key="6">报名信息</Menu.Item>
                        <Menu.Item key="8">纳新系统</Menu.Item>
                    </SubMenu>

                    <Menu.Item key="9" icon={<FileOutlined />}>
                        <Link to="source">资源管理</Link>
                    </Menu.Item>
                </Menu>
            </>
        );
    }
}

export default SideMenu;
