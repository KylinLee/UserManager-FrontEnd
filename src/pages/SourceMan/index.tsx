/* React */
import * as React from "react";

/* Components */
import "./index.scss";

/* Components Lib */
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import {} from "antd";
import {} from "@ant-design/icons";

class Source extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            files: [
                {
                    source: "index.html",
                    options: {
                        type: "local",
                    },
                },
            ],
        };
    }

    handleInit() {
        console.log("FilePond instance has initialised", this.pond);
    }

    pond: any;
    state: {
        [stateProp: string]: any;
    };

    render() {
        return (
            <div className="App">
                {/* Pass FilePond properties as attributes */}
                <FilePond
                    ref={(ref) => (this.pond = ref)}
                    files={this.state.files}
                    allowMultiple={true}
                    maxFiles={3}
                    server="/api"
                    name="files"
                    oninit={() => this.handleInit()}
                    onupdatefiles={(fileItems) => {
                        // Set currently active file objects to this.state
                        this.setState({
                            files: fileItems.map((fileItem) => fileItem.file),
                        });
                    }}
                />
            </div>
        );
    }
}

export default Source;
