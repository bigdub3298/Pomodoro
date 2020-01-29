const INITIAL_STATE = {
  time: 0,
  buttonString: "start",
  type: "work",
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
      const type = state.type === "work" ? "break" : "work";
      if (state.time === 0) {
        return { ...state, buttonString: "start", isDone: true, type };
      }
      return { ...state, buttonString: "start" };
    default:
      return state;
  }
};
