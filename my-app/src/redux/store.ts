import { combineReducers, createStore } from "redux";
import operCalc from "./reducer/operCalcReducer";
const rootReducers = combineReducers({
  operCalc,
});
export type RootState = ReturnType<typeof rootReducers>;

const store = createStore(rootReducers);

export default store;
