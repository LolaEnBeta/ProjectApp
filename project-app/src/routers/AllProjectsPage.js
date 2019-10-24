import React from 'react';
import ProjectMiniature from '../components/ProjectMiniature';

class AllProjectsPage extends React.Component {
    constructor(){
        super();
        this.state = {
            projects: [
                {
                    name: "project1",
                    description: "new project",
                    dateOfCreation: "24-10-2019",
                },
                {
                    name: "project2",
                    description: "another project",
                    dateOfCreation: "31-10-2015",
                },
            ]
        }
    }
    render() {
        return (
            <div>
                {this.state.projects.map(project => {
                    return (
                        <ProjectMiniature
                            key={project.name}
                            name={project.name}
                            description={project.description}
                            dateOfCreation={project.dateOfCreation}/>);
                })}
            </div>
        );
    }
}

export default AllProjectsPage;