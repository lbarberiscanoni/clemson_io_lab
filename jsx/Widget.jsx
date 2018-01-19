import React from "react";
import ReactDOM from "react-dom";

class Widget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="thumbnail">
                <a href="https://twitter.com/LolloYolo" data-widget-id="560981316045250560" className="twitter-timeline">Tweets by @LolloYolo</a>
            </div>
        )
    }
}

export default Widget
