import { createAction } from "@reduxjs/toolkit";
import {
  SET_TIME,
  SET_OPERATION,
  CLEAR_FIELD,
  CLEAR_DATA_DAY,
  ADD_OPERATION,
  SET_COMMENT,
  SET_DATE,
} from "../constants";

export const setTime = createAction<number>(SET_TIME);
export const setOperation = createAction<string>(SET_OPERATION);
export const clearField = createAction(CLEAR_FIELD);
export const clearDataDay = createAction(CLEAR_DATA_DAY);
export const addOperation = createAction(ADD_OPERATION);
export const setComment = createAction<string>(SET_COMMENT);
export const setDate = createAction<any>(SET_DATE);
