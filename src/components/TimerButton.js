import React from "react";

export default function TimerButton(props) {
  return <button onClick={props.onClick}>{props.value}</button>;
}
