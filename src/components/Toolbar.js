import React, { Component } from "react";
import HamburgerButton from "./HamburgurButton";
import "../scss/Toolbar.scss";

class Toolbar extends Component {
  menuRef = React.createRef();

  toggleMenu = () => {
    const opacity = this.menuRef.current.style.opacity;
    this.menuRef.current.style.opacity = opacity === "0" ? "1" : "0";
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
          style={{ opacity: "0" }}
        >
          <label>Work:</label>
          <input type="range" min="1" max="59" step="1" />
          <label>Break:</label>
          <input type="range" min="1" max="59" step="1" />
        </div>
        <div className="toolbar__footer"></div>
      </div>
    );
  }
}

export default Toolbar;
