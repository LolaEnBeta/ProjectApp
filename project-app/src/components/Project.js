import React from 'react';
import { Link } from "react-router-dom";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            description: this.props.description,
        }
    }

    render() {
        return(
            <div className="card text-center mx-auto mb-4 mt-4" style={{width: 250}}>
                <div>
                    <div class="card-header">
                        {this.state.name}
                    </div>

                    <div class="card-body">
                        <p class="card-text">{this.state.description}</p>
                    </div>

                    <div class="card-footer text-muted">
                        Created:
                    </div>
                </div>

                <div>
                    <Link
                        className="btn btn-light m-2"
                        to={"/project?name=" + this.state.name + "&description=" + this.state.description}>
                        Open project
                    </Link>
                </div>
            </div>
        );
    }
}

export default Project;
