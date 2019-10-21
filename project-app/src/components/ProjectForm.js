import React from 'react';

class ProjectForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <form
                    // onSubmit={this.addProject.bind(this)}
                >
                    <input
                        onChange={event => this.changeStateValues(event.target)}
                        type="text"
                        name="name"
                        placeholder="Project name"
                    />
                </form>
            </div>
        );
    }
}

export default ProjectForm;
