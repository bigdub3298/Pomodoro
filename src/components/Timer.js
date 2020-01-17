import React, { Component } from "react";

export class Timer extends Component {
  state = {
    interval: null,
    timerValue: 0.5 * 60000
  };

  componentDidUpdate() {
    if (this.state.timerValue === 0) {
      clearInterval(this.state.interval);
    }
  }

  millisecondsToFormatedTime(milliseconds) {
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    const formatedMinutes = `0${minutes}`.slice(-2);
    const formatedSeconds = `0${seconds}`.slice(-2);

    return `${formatedMinutes}:${formatedSeconds}`;
  }

  startTimer = () => {
    this.setState({ timerValue: this.state.timerValue - 1000 });

    const interval = setInterval(() => {
      this.setState({ timerValue: this.state.timerValue - 1000 });
    }, 1000);
    this.setState({ interval: interval });
  };

  render() {
    return (
      <div>
        <p>Time: {this.millisecondsToFormatedTime(this.state.timerValue)}</p>
        <button onClick={this.startTimer}>Start</button>
      </div>
    );
  }
}

export default Timer;
