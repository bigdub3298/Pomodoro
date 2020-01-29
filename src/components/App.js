import React from "react";
import TimerController from "./TimerController";
import Header from "./Header";
import "../scss/App.scss";

export default function App() {
  return (
    <div className="app">
      <Header />
      <TimerController />
    </div>
  );
}
