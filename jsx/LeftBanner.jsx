import React from "react";
import ReactDOM from "react-dom";
import Widget from "./Widget";

class LeftBanner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Widget />
            </div>
        )
    }
}

export default LeftBanner
