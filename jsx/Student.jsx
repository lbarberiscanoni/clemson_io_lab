import React from "react";
import ReactDOM from "react-dom";

class Student extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var stylesheet = {
            width: "30rem"
        };

        return(
            <div className="card" style={ stylesheet }>
                <img className="card-img-top img-thumbnail" src={ this.props.path } alt="Card image cap"></img>
                <div className="card-body">
                    <h4 className="card-title">{ this.props.name }</h4>
                    <p className="card-text">{ this.props.description }</p>
                </div>
                <button className="card-link btn btn-primary" href={ this.props.cv } target="_blank">Curriculum Vitae</button>
            </div>
        )
    }
}

export default Student
