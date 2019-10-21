import React from 'react';

class ProjectForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <form>
                    <input placeholder="Project name" type="text"></input>
                </form>
            </div>
        );
    }
}

export default ProjectForm;
