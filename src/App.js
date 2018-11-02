import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Home, About } from "pages";

class App extends Component {
  render() {
    return (
      <div id={`inner-root`}>
        <h1>Just Do It</h1>
        그냥해
        <nav>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/about">About</Link>
          </button>
        </nav>
        <Route exact={true} path={`/`} component={Home} />
        <Route exact={false} path={`/about`} component={About} />
      </div>
    );
  }
}

export default App;
