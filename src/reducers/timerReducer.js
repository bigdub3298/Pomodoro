const INITIAL_STATE = {
  time: 0,
  buttonString: "start",
  isDone: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TIMER_SET":
      return { ...state, time: action.payload * 60000, isDone: false };
    case "TIMER_TICK":
      return { ...state, time: state.time - 1000 };
    case "TIMER_START":
      return { ...state, buttonString: "stop" };
    case "TIMER_STOP":
      return { ...state, buttonString: "start", isDone: true };
    default:
      return state;
  }
};
