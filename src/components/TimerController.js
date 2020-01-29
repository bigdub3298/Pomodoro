import React, { Component } from "react";
import { connect } from "react-redux";
import { setTimer, startTimer, stopTimer, resetCount } from "../actions";
import Timer from "./Timer";
import mp3 from "../assets/notifications/just-saying.mp3";
import ogg from "../assets/notifications/just-saying.ogg";
import m4r from "../assets/notifications/just-saying.m4a";

export class TimerController extends Component {
  audioRef = React.createRef();
  workTime = 0.1;
  breakTime = 0.1;

  toggleTimerState = e => {
    if (e.target.innerText === "Start") {
      e.target.innerText = "Stop";
      this.props.startTimer();
    } else {
      e.target.innerText = "Start";
      this.props.stopTimer();
    }
  };

  componentDidMount() {
    this.props.setTimer(this.workTime);
  }

  componentDidUpdate() {
    if (this.props.time === 0 && this.props.count < 2) {
      this.props.stopTimer();
      const timerAmount =
        this.props.type === "work" ? this.workTime : this.breakTime;
      this.props.setTimer(timerAmount);
      this.audioRef.current.play();

      setTimeout(() => {
        this.props.startTimer();
      }, 2000);
    } else if (this.props.time === 0) {
      this.props.stopTimer();
      const timerAmount =
        this.props.type === "work" ? this.workTime : this.breakTime;
      this.props.setTimer(timerAmount);
      this.audioRef.current.play();
      this.props.resetCount();
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
        <Timer time={this.props.time} />
        <h3>{this.props.type}</h3>
        <button onClick={this.toggleTimerState}>Start</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    time: state.timer.time,
    type: state.timer.type,
    count: state.timer.count
  };
};

export default connect(mapStateToProps, {
  setTimer,
  startTimer,
  stopTimer,
  resetCount
})(TimerController);
