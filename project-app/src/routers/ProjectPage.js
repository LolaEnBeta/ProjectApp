import React from 'react';

class ProjectPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div class="card text-center">
                <div class="card-header">
                    PROJECT
                </div>

                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>

                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        );
    }
}

export default ProjectPage;
