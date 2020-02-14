import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStepForward,
  faPlay,
  faPause
} from "@fortawesome/free-solid-svg-icons";
import {
  setTimer,
  startTimer,
  stopTimer,
  resetToOriginal,
  resetTimer,
  skipTimer
} from "../actions";
import Timer from "./Timer";
import mp3 from "../assets/notifications/just-saying.mp3";
import ogg from "../assets/notifications/just-saying.ogg";
import m4r from "../assets/notifications/just-saying.m4a";
import "../scss/TimerController.scss";

export class TimerController extends Component {
  audioRef = React.createRef();
  toggleTimerState = e => {
    if (this.props.timerIsOn) {
      this.props.stopTimer();
    } else {
      this.props.startTimer();
    }
  };

  renderButtonIcon(timerIsOn) {
    return <FontAwesomeIcon icon={timerIsOn ? faPause : faPlay} />;
  }

  onReset = () => {
    if (this.props.type === "work") {
      if (this.props.time !== this.props.workTimerAmount * 60000) {
        this.props.resetTimer(this.props.workTimerAmount);
      }
    } else if (this.props.type === "break") {
      if (this.props.time !== this.props.breakTimerAmount * 60000) {
        this.props.resetTimer(this.props.breakTimerAmount);
      }
    }
  };

  onSkip = () => {
    if (this.props.count === this.props.rounds * 2) {
      this.props.resetToOriginal(this.props.workTimerAmount);
    } else {
      if (this.props.type === "work") {
        this.props.skipTimer(this.props.breakTimerAmount);
      } else if (this.props.type === "break") {
        this.props.skipTimer(this.props.workTimerAmount);
      }
    }
    this.audioRef.current.play();
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
        <div className="control-panel">
          <div className="control-panel__start" onClick={this.toggleTimerState}>
            {this.renderButtonIcon(this.props.timerIsOn)}
          </div>
          <div className="control-panel__menu">
            <div className="control-panel__menu-left">
              <h3>
                {Math.ceil(this.props.count / 2)}/{this.props.rounds}
              </h3>
              <p onClick={this.onReset} className="control-panel__reset">
                Reset
              </p>
            </div>
            <div className="control-panel__menu-right">
              <div onClick={this.onSkip} className="control-panel__skip">
                <FontAwesomeIcon icon={faStepForward} />
              </div>
            </div>
          </div>
        </div>
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
    timerIsOn: state.timer.isTimerOn
  };
};

export default connect(mapStateToProps, {
  setTimer,
  startTimer,
  stopTimer,
  resetToOriginal,
  resetTimer,
  skipTimer
})(TimerController);
