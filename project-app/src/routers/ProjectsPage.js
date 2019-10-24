import React from 'react';
import Project from '../components/Project';

class ProjectsPage extends React.Component {
    constructor(){
        super();
        this.state = {
            projects: [
                {
                    name: "project1",
                    description: "new project",
                },
                {
                    name: "project2",
                    description: "another project",
                },
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.projects.map(project => {
                    return (
                        <Project
                            name={project.name}
                            description={project.description}/>);
                })}
            </div>
        );
    }
}

export default ProjectsPage;