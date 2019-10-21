import React from 'react';
import { Link } from "react-router-dom";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
        }
    }

    render() {
        return(
            <div className="mt-2">
                <Link
                    className="btn btn-light mt-2"
                    to={"/proctect?name=" + this.state.name}>
                    {this.state.name}
                </Link>
            </div>
        );
    }
}

export default Project;
