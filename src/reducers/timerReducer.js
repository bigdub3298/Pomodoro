const INITIAL_STATE = {
  time: 0,
  type: "work",
  count: 1,
  isTimerOn: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "RESET_TIMER":
      return { ...INITIAL_STATE, time: action.payload * 60000 };
    case "TIMER_SET":
      return { ...state, time: action.payload * 60000 };
    case "TIMER_TICK":
      return { ...state, time: state.time - 1000 };
    case "TIMER_STOP":
      const type = state.type === "work" ? "break" : "work";
      if (state.time === 0) {
        return {
          ...state,
          type,
          count: state.count + 1,
          isTimerOn: !state.isTimerOn
        };
      }
      return { ...state, isTimerOn: !state.isTimerOn };
    case "TIMER_START":
      return { ...state, isTimerOn: !state.isTimerOn };
    default:
      return state;
  }
};
