import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
        }
    }

    render() {
        return(
            <div className="mt-2">
                <button className="btn btn-light mt-2">
                    {this.state.name}
                </button>
            </div>
        );
    }
}

export default Project;
