import React, { Component } from "react";
import Timer from "./Timer";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerValue: 0.5 * 60000
    };
    this.interval = undefined;
  }

  // Event Handlers
  startTimer = () => {
    this.setState({ timerValue: this.state.timerValue - 1000 });

    this.interval = setInterval(() => {
      this.setState({ timerValue: this.state.timerValue - 1000 });
    }, 1000);
  };

  // Life Cycle Methods
  componentDidUpdate() {
    if (this.state.timerValue === 0) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div>
        <Timer time={this.state.timerValue} />
        <button onClick={this.startTimer}>Start</button>
      </div>
    );
  }
}

export default App;
