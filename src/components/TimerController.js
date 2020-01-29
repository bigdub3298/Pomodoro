import React, { Component } from "react";
import { connect } from "react-redux";
import { setTimer, startTimer, stopTimer } from "../actions";
import Timer from "./Timer";

export class TimerController extends Component {
  workTime = 0.1;
  breakTime = 0.1;
  count = 0;

  toggleTimerState = () => {
    if (this.props.buttonValue === "start") {
      this.props.startTimer();
    } else {
      this.props.stopTimer();
    }
  };

  componentDidMount() {
    this.props.setTimer(this.workTime);
  }

  componentDidUpdate() {
    if (this.props.isDone && this.count < 1) {
      const timerAmount =
        this.props.type === "work" ? this.workTime : this.breakTime;
      this.props.setTimer(timerAmount);

      setTimeout(() => {
        this.props.startTimer();
      }, 2000);
      this.count++;
    } else if (this.props.isDone) {
      const timerAmount =
        this.props.type === "work" ? this.workTime : this.breakTime;
      this.props.setTimer(timerAmount);
      this.count = 0;
    }
  }

  render() {
    return (
      <div>
        <Timer />
        <h3>{this.props.type}</h3>
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
    type: state.timer.type,
    isDone: state.timer.isDone
  };
};

export default connect(mapStateToProps, {
  setTimer,
  startTimer,
  stopTimer
})(TimerController);
