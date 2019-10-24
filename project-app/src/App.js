import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import ProjectsPage from './routers/ProjectsPage';
import ProjectPage from './routers/ProjectPage';
import FormPage from './routers/FormPage';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg">
            <Link className="btn btn-light m-2" to="/">Home</Link>
            <Link className="btn btn-light m-2" to="/projectform">Add new project</Link>
          </nav>
          <div>
            <Route exact path="/" component={ProjectsPage}/>
            <Route path="/project" component={ProjectPage}/>
            <Route path="/projectform" component={FormPage}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
