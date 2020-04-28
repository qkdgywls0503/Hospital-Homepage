import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import "../css/styles.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="header">
          <div className="menubar">
            <Route exact path="/" component={Header} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
