import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import timerReducer from "./timerReducer";

export default combineReducers({
  timer: timerReducer,
  form: formReducer
});
