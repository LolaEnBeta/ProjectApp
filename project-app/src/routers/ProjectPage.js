import React from 'react';
import Project from '../components/Project';

class ProjectPage extends React.Component {
    constructor({ location }) {
        super();
        const params = new URLSearchParams(location.search);
        let name = params.get("name");
        let description = params.get("description");
        this.state = {
            name: name,
            description: description,
        }
    }

    render() {
        return(
            <div className="card text-center">
                <Project
                    name={this.state.name}
                    description={this.state.description}
                />
            </div>
        );
    }
}

export default ProjectPage;
