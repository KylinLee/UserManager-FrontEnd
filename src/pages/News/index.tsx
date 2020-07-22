/* React */
import * as React from "react";

/* Components */
import "./index.scss";

/* Components Lib */
import { Table, Tag } from "antd";
import {} from "@ant-design/icons";

const columns = [
    {
        title: "标题",
        dataIndex: "title"
    },
    {
        title: "时间",
        dataIndex: "date"
    },
    {
        title: "是否发布",
        dataIndex: "publish",
        key: "published",
        render: (published) => (
            <React.Fragment>
                {published.map((state) => {
                    let color = "volcano";
                    if (state != 0) {
                        color = "geekblue";
                        state = "已发布";
                    } else {
                        state = "未发布";
                    }

                    return (
                        <Tag color={color} key={state}>
                            {state}
                        </Tag>
                    );
                })}
            </React.Fragment>
        )
    }
];

class News extends React.Component {
    render() {
        return <Table columns={columns}></Table>;
    }
}

export default News;
