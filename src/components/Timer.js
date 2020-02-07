import React, { Component } from "react";
import "../scss/Timer.scss";

class Timer extends Component {
  formatMilliSec = milliseconds => {
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    const formatedSeconds = `0${seconds}`.slice(-2);

    return `${minutes}:${formatedSeconds}`;
  };

  render() {
    return (
      <div className="timer">
        <h1 className="timer__display">
          {this.formatMilliSec(this.props.time)}
        </h1>
        <h3 className="timer__type">{this.props.type}</h3>
      </div>
    );
  }
}

export default Timer;
