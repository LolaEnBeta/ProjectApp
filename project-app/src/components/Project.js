import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            description: this.props.description,
        }
    }

    render() {
        return(
            <div className="card text-center mx-auto mb-4 mt-4" style={{width: 250}}>
                <div>
                    <div class="card-header">
                        {this.state.name}
                    </div>

                    <div class="card-body">
                        <p class="card-text">{this.state.description}</p>
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
