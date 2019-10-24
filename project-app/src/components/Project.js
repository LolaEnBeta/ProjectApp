import React from 'react';

class Project extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="card text-center mx-auto mb-4 mt-4" style={{width: 250}}>
                <div>
                    <div class="card-header">
                        Name
                    </div>

                    <div class="card-body">
                        <p class="card-text">Description</p>
                    </div>

                    <div class="card-footer text-muted">
                        Created:
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;
