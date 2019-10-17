import React from 'react';

class ProjectsPage extends React.Component {
    constructor(){
        super();
        this.state = {
            projects: [
                "project1",
                "proyect2",
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.projects.map(project => {
                    return (
                        <button>{project}</button>);
                })}
            </div>
        );
    }
}

export default ProjectsPage;