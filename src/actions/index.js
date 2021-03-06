let timer = null;

export const setTimer = minutes => {
  return {
    type: "TIMER_SET",
    payload: minutes
  };
};

export const startTimer = () => dispatch => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), 1000);
  dispatch({ type: "TIMER_START" });
  dispatch(tick());
};

const tick = () => {
  return { type: "TIMER_TICK" };
};

export const stopTimer = () => {
  clearInterval(timer);
  return { type: "TIMER_STOP" };
};

export const resetToOriginal = minutes => dispatch => {
  clearInterval(timer);
  dispatch({ type: "RESET_T0_ORIGINAL" });
  dispatch(setTimer(minutes));
};

export const resetTimer = minutes => dispatch => {
  clearInterval(timer);
  dispatch({ type: "RESET_TIMER" });
  dispatch(setTimer(minutes));
};

export const skipTimer = minutes => dispatch => {
  dispatch({ type: "SKIP_TIMER" });
  dispatch(setTimer(minutes));
};
