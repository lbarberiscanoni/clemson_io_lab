import React from "react";
import ReactDOM from "react-dom";

class Collaborator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3> { this.props.projectName } </h3>
                    <h3 className="panel-title"> { this.props.author } </h3>
                </div>
                <div className="panel-body"> { this.props.description } </div>
            </div>
        )
    }
}

export default Collaborator
