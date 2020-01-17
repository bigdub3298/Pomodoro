import React from "react";

export default function Timer(props) {
  return (
    <div>
      <h1>{millisecondsToFormatedTime(props.time)}</h1>
    </div>
  );
}

const millisecondsToFormatedTime = milliseconds => {
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

  const formatedMinutes = `0${minutes}`.slice(-2);
  const formatedSeconds = `0${seconds}`.slice(-2);

  return `${formatedMinutes}:${formatedSeconds}`;
};
