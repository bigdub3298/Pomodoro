import React from "react";
import TimerController from "./TimerController";
import Toolbar from "./Toolbar";
import "../scss/App.scss";

export default function App() {
  return (
    <div className="app">
      <Toolbar />
      <TimerController />
    </div>
  );
}
