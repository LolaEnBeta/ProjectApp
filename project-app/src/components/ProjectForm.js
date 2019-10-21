import React from 'react';

class ProjectForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
        }
    }

    changeStateValues ({name, value}) {
        this.setState({
            [name]: value
        })
    };

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
                    <input
                        className="btn"
                        type="submit"
                        value="Create"/>
                </form>
            </div>
        );
    }
}

export default ProjectForm;
