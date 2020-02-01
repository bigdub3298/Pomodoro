import React, { Component } from "react";
import { connect } from "react-redux";
import { setTimer, startTimer, stopTimer, resetTimer } from "../actions";
import Timer from "./Timer";
import mp3 from "../assets/notifications/just-saying.mp3";
import ogg from "../assets/notifications/just-saying.ogg";
import m4r from "../assets/notifications/just-saying.m4a";
import "../scss/TimerController.scss";

export class TimerController extends Component {
  buttonRef = React.createRef();
  audioRef = React.createRef();
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
    this.props.setTimer(this.props.workTime);
  }

  componentDidUpdate() {
    if (this.props.count === 0) {
      this.buttonRef.current.innerText = "Start";
    }

    if (this.props.time === 0 && this.props.count <= this.props.rounds * 2) {
      this.props.stopTimer();
      this.buttonRef.current.innerText = "Start";
      const timerAmount =
        this.props.type === "work" ? this.props.workTime : this.props.breakTime;
      this.props.setTimer(timerAmount);
      this.audioRef.current.play();

      setTimeout(() => {
        this.props.startTimer();
        this.buttonRef.current.innerText = "Stop";
      }, 2000);
    } else if (this.props.time === 0) {
      this.props.stopTimer();
      this.buttonRef.current.innerText = "Start";
      const timerAmount =
        this.props.type === "work" ? this.props.workTime : this.props.breakTime;
      this.props.setTimer(timerAmount);
      this.audioRef.current.play();
      this.props.resetTimer(this.props.workTime);
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
          Start
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { work: workTime, break: breakTime, rounds } = state.form.timerForm
    ?.values ?? { work: 0, break: 0, rounds: 0 };
  return {
    time: state.timer.time,
    type: state.timer.type,
    count: state.timer.count,
    workTime,
    breakTime,
    rounds
  };
};

export default connect(mapStateToProps, {
  setTimer,
  startTimer,
  stopTimer,
  resetTimer
})(TimerController);
