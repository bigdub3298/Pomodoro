const INITIAL_STATE = {
  time: 0,
  type: "work",
  count: 1,
  isTimerOn: false
};

export default (state = INITIAL_STATE, action) => {
  let type;
  switch (action.type) {
    case "RESET_T0_ORIGINAL":
      return { ...INITIAL_STATE };
    case "TIMER_SET":
      return { ...state, time: action.payload * 60000 };
    case "TIMER_TICK":
      return { ...state, time: state.time - 1000 };
    case "TIMER_STOP":
      type = state.type === "work" ? "break" : "work";
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
    case "SKIP_TIMER":
      type = state.type === "work" ? "break" : "work";
      return {
        ...state,
        type,
        count: state.count + 1
      };
    case "RESET_TIMER":
      return {
        ...state,
        isTimerOn: state.isTimerOn ? !state.isTimerOn : false
      };
    default:
      return state;
  }
};
