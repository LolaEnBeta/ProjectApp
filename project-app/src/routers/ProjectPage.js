import React from 'react';

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
                <div class="card-header">
                    {this.state.name}
                </div>

                <div class="card-body">
                    <h5 class="card-title">Title</h5>
                    <p class="card-text">Text</p>
                </div>

                <div class="card-footer text-muted">
                    Created:
                </div>
            </div>
        );
    }
}

export default ProjectPage;
