import {
  ADD_DAY_DATA,
  DELETE_DAY_DATE,
  CHECK_DAY,
  UNCHECK_DAY,
} from "../constants";
import { createAction } from "@reduxjs/toolkit";

export const addDayData = createAction<object>(ADD_DAY_DATA);
export const deleteDayDate = createAction<string>(DELETE_DAY_DATE);
export const checkDay = createAction<string>(CHECK_DAY);
export const uncheckDay = createAction<string>(UNCHECK_DAY);
