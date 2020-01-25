import React, { Component } from "react";
import { connect } from "react-redux";
import { startTimer, stopTimer, setTimer } from "../actions";
import mp3 from "../assets/notifications/just-saying.mp3";
import ogg from "../assets/notifications/just-saying.ogg";
import m4r from "../assets/notifications/just-saying.m4a";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  toggleTimerState = () => {
    if (this.props.buttonValue === "start") {
      this.props.startTimer();
    } else if (this.props.buttonValue === "stop") {
      this.props.stopTimer();
    } else {
      this.props.setTimer(0.1);
      setTimeout(() => {
        this.props.startTimer();
      }, 750);
    }
  };

  millisecondsToFormatedTime = milliseconds => {
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    const formatedMinutes = `0${minutes}`.slice(-2);
    const formatedSeconds = `0${seconds}`.slice(-2);

    return `${formatedMinutes}:${formatedSeconds}`;
  };

  componentDidMount() {
    this.props.setTimer(0.1);
  }

  componentDidUpdate() {
    if (this.props.time === 0) {
      this.props.stopTimer();
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
        <h1>{this.millisecondsToFormatedTime(this.props.time)}</h1>
        <button onClick={this.toggleTimerState}>
          {this.props.buttonValue}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    time: state.timer.time,
    buttonValue: state.timer.buttonString
  };
};
export default connect(mapStateToProps, {
  setTimer,
  startTimer,
  stopTimer
})(Timer);
