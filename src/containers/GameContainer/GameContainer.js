import React, { Component } from "react";
import Layout from "components/Layout";

class GameContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.Counter);

    return (
      <div>
        <Layout>
          GameContainer
          {this.props.Counter}
          <div>
            <form action="/">
              <label htmlFor="rpsRadioScissors">
                <input
                  type="radio"
                  id="rpsRadioScissors"
                  name="rps-radio"
                  value="scissors"
                />
                가위
              </label>
              <label htmlFor="rpsRadioScissors">
                <input
                  type="radio"
                  id="rpsRadioRock"
                  name="rps-radio"
                  value="rock"
                />
                바위
              </label>
              <label htmlFor="rpsRadioScissors">
                <input
                  type="radio"
                  id="rpsRadioPaper"
                  name="rps-radio"
                  value="paper"
                />
                보
              </label>
              <button type="submit">결정</button>
            </form>
          </div>

        </Layout>
      </div>
    );
  }
}

export default GameContainer;
