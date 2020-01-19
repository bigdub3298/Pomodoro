import React, { Component } from "react";
import Timer from "./Timer";
import TimerButton from "./TimerButton";
import mp3 from "../assets/notifications/just-saying.mp3";
import ogg from "../assets/notifications/just-saying.ogg";
import m4r from "../assets/notifications/just-saying.m4a";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerValue: 0.1 * 60000,
      buttonValue: "start"
    };
    this.interval = undefined;

    this.audioRef = React.createRef();
  }

  // Event Handlers
  toggleTimer = () => {
    if (this.state.timerValue === 0) {
      return;
    } else {
      this.setState({ timerValue: this.state.timerValue - 1000 });
    }

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
      this.audioRef.current.play();
    }
  }

  render() {
    return (
      <div>
        <audio ref={this.audioRef}>
          <source src={mp3} type="audio/mpeg" />
          <source src={ogg} type="audio/ogg" />
          <source src={m4r} type="audio/mp4" />
        </audio>
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
