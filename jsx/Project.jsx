import React from "react";
import ReactDOM from "react-dom";

class Project extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{ this.props.title }</h3>
                    <h4 className="card-subtitle text-muted">{ this.props.status } </h4>
                    <p className="card-text">{ this.props.content }</p>
                </div>
            </div>
        )
    }
}

export default Project
