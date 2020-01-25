const INITIAL_STATE = {
  time: 0,
  buttonString: "start"
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TIMER_SET":
      if (state.buttonString === "restart") {
        return { time: action.payload * 60000, buttonString: "start" };
      }
      return { ...state, time: action.payload * 60000 };
    case "TIMER_TICK":
      return { ...state, time: state.time - 1000 };
    case "TIMER_START":
      return { ...state, buttonString: "stop" };
    case "TIMER_STOP":
      if (state.time === 0) {
        return { ...state, buttonString: "restart" };
      }
      return { ...state, buttonString: "start" };
    default:
      return state;
  }
};
