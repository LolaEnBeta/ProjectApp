import React from 'react';
import Project from '../components/Project';

class ProjectsPage extends React.Component {
    constructor(){
        super();
        this.state = {
            projects: [
                {name: "project1"},
                {name: "project2"},
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.projects.map(project => {
                    return (
                        <Project
                            name={project.name}/>);
                })}
            </div>
        );
    }
}

export default ProjectsPage;