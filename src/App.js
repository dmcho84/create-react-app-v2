import { Link, Route } from "react-router-dom";
import React, { Component } from "react";
import { About, Home } from "pages";

class App extends Component {
  render() {
    return (
      <div id="inner-root">
        <h1>Just Do It</h1>
        그냥해
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact={false} path="/about" component={About} />
      </div>
    );
  }
}

export default App;
