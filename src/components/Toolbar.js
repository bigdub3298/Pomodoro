import React, { Component } from "react";
import { connect } from "react-redux";
import { setTimer, stopTimer } from "../actions";
import HamburgerButton from "./HamburgurButton";
import TimerForm from "./TimerForm";
import "../scss/Toolbar.scss";

class Toolbar extends Component {
  state = { menuOpen: false };
  prevWorkTimerAmount = 0;
  prevBreakTimerAmount = 0;

  toggleMenu = () => {
    if (this.state.menuOpen) {
      this.verifyTimerAmountChanges();
    } else {
      this.gatherPreviousTimerAmounts();
    }
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  gatherPreviousTimerAmounts() {
    this.prevWorkTimerAmount = this.props.workTimerAmount;
    this.prevBreakTimerAmount = this.props.breakTimerAmount;
  }

  verifyTimerAmountChanges() {
    if (
      this.props.type === "work" &&
      this.prevWorkTimerAmount !== this.props.workTimerAmount
    ) {
      this.resetCurrentTimerIteration(this.props.workTimerAmount);
    } else if (
      this.props.type === "break" &&
      this.prevBreakTimerAmount !== this.props.breakTimerAmount
    ) {
      this.resetCurrentTimerIteration(this.props.breakTimerAmount);
    }
  }

  resetCurrentTimerIteration(timerAmount) {
    if (this.props.timerIsOn) {
      this.props.stopTimer();
    }
    this.props.setTimer(timerAmount);
  }

  render() {
    return (
      <div className="toolbar">
        <div className="toolbar__nav">
          <div>
            <HamburgerButton toggleMenu={this.toggleMenu} />
          </div>
          <div className="toolbar__title">Pomodoro</div>
        </div>
        <div
          className={
            this.state.menuOpen
              ? "toolbar__menu toolbar__menu--open"
              : "toolbar__menu"
          }
        >
          <TimerForm initialValues={{ work: 25, break: 5, rounds: 2 }} />
        </div>
        <div className="toolbar__footer"></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { work: workTimerAmount, break: breakTimerAmount } = state.form
    .timerForm?.values ?? {
    work: 0,
    break: 0
  };

  return {
    type: state.timer.type,
    timerIsOn: state.timer.isTimerOn,
    workTimerAmount,
    breakTimerAmount
  };
};

export default connect(mapStateToProps, {
  stopTimer,
  setTimer
})(Toolbar);
