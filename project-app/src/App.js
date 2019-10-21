import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from './routers/HomePage';
import ProjectsPage from './routers/ProjectsPage';
import ProjectPage from './routers/ProjectPage';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: "#e3f2fd"}}>
            <Link className="btn btn-light m-2" to="/">Home</Link>
            <Link className="btn btn-light m-2" to="/projects">Projects</Link>
          </nav>
          <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/projects" component={ProjectsPage}/>
            <Route path="/project" component={ProjectPage}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
