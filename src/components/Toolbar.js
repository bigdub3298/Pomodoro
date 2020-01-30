import React from "react";
import "../scss/Toolbar.scss";

export default function Toolbar() {
  return (
    <div className="toolbar">
      <div className="toolbar__nav">
        <div className="toolbar__hamburger-button"></div>
        <div className="toolbar__title">Pomodoro</div>
      </div>
      <div className="toolbar__menu">
        <label>Work:</label>
        <input type="range" min="1" max="59" step="1" />
        <label>Break:</label>
        <input type="range" min="1" max="59" step="1" />
      </div>
      <div className="toolbar__footer"></div>
    </div>
  );
}
