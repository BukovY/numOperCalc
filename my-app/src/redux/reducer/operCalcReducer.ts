import { createSlice } from "@reduxjs/toolkit";
import {
  SET_TIME,
  SET_OPERATION,
  CLEAR_FIELD,
  CLEAR_DATA_DAY,
  ADD_OPERATION,
  SET_COMMENT,
  SET_DATE,
} from "../constants";

const initialState = {
  time: 0,
  selectedOperationType: "",
  operation: {
    date: "",
    comment: "",
    totalTime: 0,
    tva: 0,
    sma: 0,
    ivl: 0,
    smaIvl: 0,
    eaIvl: 0,
    saEaIvl: 0,
    pvtbIvl: 0,
    pvaSmaIvl: 0,
  },
};

const operCalc = createSlice({
  name: "opercalc",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SET_DATE, (state, action: any) => {
        state.operation.date = action.payload;
      })
      .addCase(SET_COMMENT, (state, action: any) => {
        state.operation.comment = action.payload;
      })
      .addCase(SET_TIME, (state, action: any) => {
        state.time = state.time + action.payload;
        if (state.time < 0) {
          state.time = 0;
        }
      })
      .addCase(SET_OPERATION, (state, action: any) => {
        if (state.selectedOperationType === action.payload) {
          state.selectedOperationType = "";
        } else {
          state.selectedOperationType = action.payload;
        }
      })
      .addCase(CLEAR_FIELD, (state) => {
        state.time = 0;
        state.selectedOperationType = "";
      })
      .addCase(CLEAR_DATA_DAY, (state) => {
        state.operation = {
          date: "",
          comment: "",
          totalTime: 0,
          tva: 0,
          sma: 0,
          ivl: 0,
          smaIvl: 0,
          eaIvl: 0,
          saEaIvl: 0,
          pvtbIvl: 0,
          pvaSmaIvl: 0,
        };
      })
      .addCase(ADD_OPERATION, (state) => {
        if (state.time > 0 && state.selectedOperationType !== "") {
          state.operation.totalTime += state.time;
          switch (state.selectedOperationType) {
            case "tva":
              state.operation.tva += 1;
              break;
            case "sma":
              state.operation.sma += 1;
              break;
            case "ivl":
              state.operation.ivl += 1;
              break;
            case "smaIvl":
              state.operation.smaIvl += 1;
              break;
            case "eaIvl":
              state.operation.eaIvl += 1;
              break;
            case "saEaIvl":
              state.operation.saEaIvl += 1;
              break;
            case "pvtbIvl":
              state.operation.pvtbIvl += 1;
              break;
            case "pvaSmaIvl":
              state.operation.pvaSmaIvl += 1;
              break;
          }
          state.time = 0;
          state.selectedOperationType = "";
        }
      });
  },
});
export default operCalc.reducer;
