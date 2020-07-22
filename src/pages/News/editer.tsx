/* React */
import * as React from "react";

/* Components */
import "./index.scss";

/* Components Lib */
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./editor.plugins";
import i18nConfig from "./i18n.config";
import {} from "antd";
import {} from "@ant-design/icons";

const data = {
    blocks: [
        {
            type: "header",
            data: {
                text: "请输入标题",
                level: 2
            }
        },
        {
            type: "paragraph",
            data: {
                text: "新闻内容"
            }
        }
    ]
};

enum LogLevels {
    VERBOSE = "VERBOSE",
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR"
}

class Editor extends React.Component {
    render() {
        return (
            <EditorJs
                data={data}
                placeholder="请输入文本"
                tools={EDITOR_JS_TOOLS}
                i18n={i18nConfig}
                logLevel={LogLevels.ERROR}
                hideToolbar={false}
                autofocus={true}
            />
        );
    }
}

export default Editor;
