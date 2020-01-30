import React, { Component } from "react";
import HamburgerButton from "./HamburgurButton";
import TimerForm from "./TimerForm";
import "../scss/Toolbar.scss";

class Toolbar extends Component {
  menuRef = React.createRef();

  toggleMenu = () => {
    // const opacity = this.menuRef.current.style.opacity;
    // const display = this.menuRef.current.style.display;
    // this.menuRef.current.style.display = display === "none" ? "block" : "none";
    // this.menuRef.current.style.opacity = opacity === "0" ? "1" : "0";
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
          // style={{opacity: "0", display: "none" }}
        >
          <TimerForm initialValues={{ work: 25, break: 5, rounds: 2 }} />
        </div>
        <div className="toolbar__footer"></div>
      </div>
    );
  }
}

export default Toolbar;
