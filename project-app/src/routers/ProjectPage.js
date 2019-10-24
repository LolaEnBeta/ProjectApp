import React from 'react';
import Project from '../components/Project';

class ProjectPage extends React.Component {
    constructor({ location }) {
        super();
        const params = new URLSearchParams(location.search);
        let name = params.get("name");
        this.state = {
            name: name
        }
    }

    render() {
        return(
            <div class="card text-center">
                <Project />
            </div>
        );
    }
}

export default ProjectPage;
