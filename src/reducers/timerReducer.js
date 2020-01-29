const INITIAL_STATE = {
  time: 0,
  type: "work",
  count: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "RESET_COUNT":
      return { ...state, count: 0 };
    case "TIMER_SET":
      return { ...state, time: action.payload * 60000 };
    case "TIMER_TICK":
      return { ...state, time: state.time - 1000 };
    case "TIMER_START":
      return { ...state, count: state.count + 1 };
    case "TIMER_STOP":
      const type = state.type === "work" ? "break" : "work";
      if (state.time === 0) {
        return { ...state, type };
      }
    default:
      return state;
  }
};
