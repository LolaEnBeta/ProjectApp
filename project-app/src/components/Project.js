import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            description: this.props.description,
            dateOfCreation: this.props.dateOfCreation,
        }
    }

    render() {
        return(
            <div className="card text-center mx-auto mb-4 mt-4" style={{width: 250}}>
                <div>
                    <div className="card-header">
                        {this.state.name}
                    </div>

                    <div className="card-body">
                        <p className="card-text">{this.state.description}</p>
                    </div>

                    <div className="card-footer text-muted">
                        <p className="card-text">Created on: {this.state.dateOfCreation}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;
