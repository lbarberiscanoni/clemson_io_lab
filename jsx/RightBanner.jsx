import React from "react";
import ReactDOM from "react-dom";

class RightBanner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>Fall 2018 News</h2>
                <p>Dr. Shuffler will be accepting MS and PhD students for the Fall of 2018.</p>
                <p>If you have questions about program admission requirements, please visit the <a href="https://www.clemson.edu/cbshs/departments/psychology/"> Clemson Psychology Department website </a> for more details.</p>
                <a href="mailto:mshuffl@clemson.edu" className="text-primary">mshuffl@clemson.edu</a>

                <a href="http://newsstand.clemson.edu/mediarelations/psychology-researcher-to-use-grant-to-improve-teamwork-across-disciplines/" target="_blank">
                    <h3>NSF CAREER Grant Awarded to DIGITAL Lab!</h3>
                </a>
                <div className="embed-responsive embed-responsive-4by3">
                    <iframe className="embed-responsive-item" src="assets/research_rock_stars.mp4"></iframe>
                </div>
            </div>
        )
    }
}

export default RightBanner
