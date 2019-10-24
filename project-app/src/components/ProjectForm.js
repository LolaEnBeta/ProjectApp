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
                    <div className="card m-2" style={{width: 250}}>
                        <div>
                            <input
                                onChange={event => this.changeStateValues(event.target)}
                                type="text"
                                name="name"
                                placeholder="Project name"
                                className="mt-4"
                            />
                        </div>

                        <div>
                            <input
                                onChange={event => this.changeStateValues(event.target)}
                                type="text"
                                placeholder="Description"
                                className="m-2"
                            />
                        </div>

                        <div>
                            <input
                                className="btn"
                                type="submit"
                                value="Create"
                                className="btn btn-light m-2"
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ProjectForm;
