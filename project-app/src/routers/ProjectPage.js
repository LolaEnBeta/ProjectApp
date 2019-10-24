import React from 'react';
import Project from '../components/Project';

class ProjectPage extends React.Component {
    constructor({ location }) {
        super();
        const params = new URLSearchParams(location.search);
        let name = params.get("name");
        let description = params.get("description");
        let dateOfCreation = params.get("dateOfCreation");
        this.state = {
            name: name,
            description: description,
            dateOfCreation: dateOfCreation
        }
    }

    render() {
        return(
            <div className="card text-center">
                <Project
                    name={this.state.name}
                    description={this.state.description}
                    dateOfCreation={this.state.dateOfCreation}

                />
            </div>
        );
    }
}

export default ProjectPage;
