import React from 'react';
import { Link } from "react-router-dom";

class ProjectMiniature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            description: this.props.description,
            dateOfCreation: this.props.dateOfCreation,
        }
    }

    render() {
        return(
            <div className="card text-center mx-auto mb-4 mt-4" style={{width: 250}}>
                <div>
                    <div className="card-header">
                        {this.state.name}
                    </div>

                    <div className="card-body">
                        <p className="card-text">{this.state.description}</p>
                    </div>

                    <div className="card-footer text-muted">
                    <p className="card-text">Create on: {this.state.dateOfCreation}</p>
                    </div>
                </div>

                <div>
                    <Link
                        className="btn btn-light m-2"
                        to={"/project?name=" + this.state.name + "&description=" + this.state.description + "&dateOfCreation=" + this.state.dateOfCreation} >
                        Open project
                    </Link>
                </div>
            </div>
        );
    }
}

export default ProjectMiniature;
