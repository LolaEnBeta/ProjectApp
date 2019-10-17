import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import HomePage from './routers/HomePage';


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Router>
        <div className="App">
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <div>
            <Route exact path="/" component={HomePage}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
