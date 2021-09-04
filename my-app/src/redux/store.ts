import { combineReducers, createStore } from "redux";
import operCalc from "./reducer/operCalcReducer";
import allDay from "./reducer/allDayReducer";
const rootReducers = combineReducers({
  operCalc,
  allDay,
});
export type RootState = ReturnType<typeof rootReducers>;

const store = createStore(rootReducers);

export default store;
