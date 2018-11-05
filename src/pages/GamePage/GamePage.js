import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as counterActions from "redux/modules/Counter";
import GameContainer from "containers/GameContainer";

class GamePage extends Component {
  render() {
    console.log(this.props.Counter);
    return (
      <div>
        {this.props.Counter}
        <GameContainer />
      </div>
    );
  }
}

/* Redux Connect - Store & Dispatch */
const mapStateToProps = state => ({
  Counter: state.Counter.toJS()
});
const mapDispatchToProps = dispatch => ({
  CounterActions: bindActionCreators(counterActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePage);
