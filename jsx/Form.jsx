import React from "react";
import ReactDOM from "react-dom";

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let parameters = ["Name", "Email", "Request"]
        let components = []
        parameters.map((x) => {
            components.push(<div className="form-group"><label> { x } </label><input className="form-control" /></div>);
        })

        return(
            <form>
                { components }
                <button className="btn btn-primary">Submit Request</button>
            </form>
        )
    }
}

export default Form
