import React, { Component } from "react";
import { connect } from "react-redux";
import { setTimer, startTimer, stopTimer, resetToOriginal } from "../actions";
import Timer from "./Timer";
import mp3 from "../assets/notifications/just-saying.mp3";
import ogg from "../assets/notifications/just-saying.ogg";
import m4r from "../assets/notifications/just-saying.m4a";
import "../scss/TimerController.scss";

export class TimerController extends Component {
  buttonRef = React.createRef();
  audioRef = React.createRef();
  toggleTimerState = e => {
    if (this.props.isTimerOn) {
      this.props.stopTimer();
    } else {
      this.props.startTimer();
    }
  };

  componentDidMount() {
    this.props.setTimer(this.props.workTimerAmount);
  }

  componentDidUpdate() {
    if (this.props.time === 0 && this.props.count < this.props.rounds * 2) {
      this.props.stopTimer();
      const timerAmount =
        this.props.type === "work"
          ? this.props.breakTimerAmount
          : this.props.workTimerAmount;
      this.props.setTimer(timerAmount);
      this.audioRef.current.play();

      setTimeout(() => {
        this.props.startTimer();
      }, 2000);
    } else if (this.props.time === 0) {
      this.props.stopTimer();
      this.audioRef.current.play();
      this.props.resetToOriginal(this.props.workTimerAmount);
    }
  }

  render() {
    return (
      <div className="timer-controller">
        <audio ref={this.audioRef}>
          <source src={mp3} type="audio/mpeg" />
          <source src={ogg} type="audio/ogg" />
          <source src={m4r} type="audio/mp4" />
        </audio>
        <Timer time={this.props.time} type={this.props.type} />
        <button
          ref={this.buttonRef}
          className="timer-controller__button"
          onClick={this.toggleTimerState}
        >
          {this.props.isTimerOn ? "Stop" : "Start"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { work: workTimerAmount, break: breakTimerAmount, rounds } = state.form
    .timerForm?.values ?? { work: 0, break: 0, rounds: 0 };
  return {
    time: state.timer.time,
    type: state.timer.type,
    count: state.timer.count,
    workTimerAmount,
    breakTimerAmount,
    rounds,
    isTimerOn: state.timer.isTimerOn
  };
};

export default connect(mapStateToProps, {
  setTimer,
  startTimer,
  stopTimer,
  resetToOriginal
})(TimerController);
