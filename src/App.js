import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {
  AboutPage, HomePage, GamePage, NoMatch
} from "pages";

class App extends Component {
  render() {
    return (
      <div id="wrap">
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route exact={false} path="/about" component={AboutPage} />
          <Route exact={false} path="/game" component={GamePage} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
