import { combineReducers } from "redux";
import workouts from "./workouts";
import workout from "./workout";

export default combineReducers({
  workouts,
  workout
});
