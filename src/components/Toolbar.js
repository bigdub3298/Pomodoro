import React, { Component } from "react";
import { connect } from "react-redux";
import { resetTimer, stopTimer } from "../actions";
import HamburgerButton from "./HamburgurButton";
import TimerForm from "./TimerForm";
import "../scss/Toolbar.scss";

class Toolbar extends Component {
  state = { menuOpen: false };

  toggleMenu = () => {
    if (this.state.menuOpen) {
      this.props.resetTimer(this.props.workTime);
    } else {
      this.props.stopTimer();
    }
    this.setState({ menuOpen: !this.state.menuOpen });
  };

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
          <TimerForm initialValues={{ work: 1, break: 1, rounds: 1 }} />
        </div>
        <div className="toolbar__footer"></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { work: workTime } = state.form.timerForm?.values ?? { work: 0 };

  return { workTime };
};

export default connect(mapStateToProps, {
  stopTimer,
  resetTimer
})(Toolbar);
