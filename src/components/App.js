import React, { Component } from "react";
import Timer from "./Timer";
import TimerButton from "./TimerButton";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerValue: 0.5 * 60000,
      buttonValue: "start"
    };
    this.interval = undefined;
  }

  // Event Handlers
  toggleTimer = () => {
    this.setState({ timerValue: this.state.timerValue - 1000 });

    if (this.state.buttonValue === "stop") {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => {
        this.setState({ timerValue: this.state.timerValue - 1000 });
      }, 1000);
    }

    this.setState({
      buttonValue: this.state.buttonValue === "start" ? "stop" : "start"
    });
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
        <TimerButton
          value={this.state.buttonValue}
          onClick={this.toggleTimer}
        />
      </div>
    );
  }
}

export default App;
