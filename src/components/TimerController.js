import React, { Component } from "react";
import { connect } from "react-redux";
import { setTimer, startTimer, stopTimer } from "../actions";
import Timer from "./Timer";
import mp3 from "../assets/notifications/just-saying.mp3";
import ogg from "../assets/notifications/just-saying.ogg";
import m4r from "../assets/notifications/just-saying.m4a";

export class TimerController extends Component {
  toggleTimerState = () => {
    if (this.props.buttonValue === "start") {
      this.props.startTimer();
    } else {
      this.props.stopTimer();
    }
  };

  componentDidMount() {
    this.props.setTimer(0.1);
  }

  componentDidUpdate() {
    if (this.props.isDone) {
      this.props.setTimer(0.1);
    }
  }

  render() {
    return (
      <div>
        <Timer />
        <button onClick={this.toggleTimerState}>
          {this.props.buttonValue}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buttonValue: state.timer.buttonString,
    isDone: state.timer.isDone
  };
};

export default connect(mapStateToProps, {
  setTimer,
  startTimer,
  stopTimer
})(TimerController);
