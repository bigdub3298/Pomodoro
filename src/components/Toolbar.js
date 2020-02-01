import React, { Component } from "react";
import { connect } from "react-redux";
import { resetTimer, stopTimer } from "../actions";
import HamburgerButton from "./HamburgurButton";
import TimerForm from "./TimerForm";
import "../scss/Toolbar.scss";

class Toolbar extends Component {
  state = { menuOpen: true };
  menuRef = React.createRef();

  toggleMenu = () => {
    if (this.state.menuOpen) {
      this.menuRef.current.style.display = "block";
      this.menuRef.current.style.opacity = "1";
      this.props.stopTimer();
    } else {
      this.menuRef.current.style.display = "none";
      this.menuRef.current.style.opacity = "0";
      this.props.resetTimer(this.props.workTime);
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
          ref={this.menuRef}
          className="toolbar__menu"
          style={{ opacity: "0", display: "none" }}
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
