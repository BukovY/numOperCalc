import { createSlice } from "@reduxjs/toolkit";
import {
  ADD_DAY_DATA,
  DELETE_DAY_DATE,
  CHECK_DAY,
  UNCHECK_DAY,
} from "../constants";

const prevDate = localStorage.getItem("operationData");
const date: Array<any> = [];
const selectedDate: Array<any> = [];
const initialState = {
  data: prevDate ? JSON.parse(prevDate) : date,
  selectedDate: selectedDate,
};
const allDay = createSlice({
  name: "allDay",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ADD_DAY_DATA, (state, action: any) => {
        state.data = [action.payload, ...state.data];
        localStorage.setItem("operationData", JSON.stringify(state.data));
      })
      .addCase(DELETE_DAY_DATE, (state, action: any) => {
        state.data = state.data.filter((el: any) => el.id !== action.payload);
        localStorage.setItem("operationData", JSON.stringify(state.data));
      })
      .addCase(CHECK_DAY, (state, action: any) => {
        if (state.selectedDate.length === 0) {
          state.selectedDate = [action.payload];
        } else {
          state.selectedDate.push(action.payload);
        }
      })
      .addCase(UNCHECK_DAY, (state, action: any) => {
        state.selectedDate = state.selectedDate.filter(
          (el: any) => el !== action.payload
        );
      });
  },
});

export default allDay.reducer;
