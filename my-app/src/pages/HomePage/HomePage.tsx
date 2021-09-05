import React, { FC } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { minToTime } from "../../utils/functions";
import { ButtonsTimeDay } from "../../components/ButtonsTimeDay/ButtonsTimeDay";
import { ButtonsOperation } from "../../components/OperationSelector/OperationSelector";
import { TableDay } from "../../components/TableDay/TableDay";
import Button from "@material-ui/core/Button";
import {
  clearField,
  addOperation,
  clearDataDay,
} from "../../redux/actions/operCalc";
import Comment from "../../components/Comment/Comment";
import DatePicker from "../../components/DatePicker/DatePicker";
import { addDayData } from "../../redux/actions/allDay";
import { nanoid } from "nanoid";

export const HomePage: FC = () => {
  const { time, selectedOperationType, operation } = useSelector(
    (state: RootState) => state.operCalc
  );
  const dispatch = useDispatch();

  const save = () => {
    if (operation.totalTime !== 0) {
      if (operation.date !== "") {
        const obgToAdd = {
          ...operation,
          id: nanoid(),
        };
        dispatch(addDayData(obgToAdd));
        dispatch(clearDataDay());
      } else {
        alert("Не выбрана дата");
      }
    } else {
      alert("Данных для добавления нет");
    }
  };

  const addOper = () => {
    if (time !== 0 && selectedOperationType !== "") {
      dispatch(addOperation());
    } else {
      alert("Данных для добавления недостаточно");
    }
  };

  const clearInputs = () => {
    if (time !== 0 || selectedOperationType !== "") {
      dispatch(clearField());
    } else {
      alert("Данных для сброса нет");
    }
  };

  return (
    <Box>
      <Typography variant="h3" align="center">
        {minToTime(time)}
      </Typography>
      <ButtonsTimeDay />
      <ButtonsOperation />
      <br />
      <Box display="flex" justifyContent="space-around">
        <Button
          variant="contained"
          color={
            time > 0 && selectedOperationType !== "" ? "primary" : "secondary"
          }
          onClick={addOper}
        >
          Добавить операцию
        </Button>
        <Button
          variant="contained"
          color={
            time !== 0 || selectedOperationType !== "" ? "primary" : "secondary"
          }
          onClick={clearInputs}
        >
          Сбросить поле ввода
        </Button>
      </Box>
      <br />
      <TableDay operation={operation} />
      <br />
      <Box display="flex" justifyContent="space-around">
        <Comment />
        <DatePicker />
      </Box>
      <br />
      <Box display="flex" justifyContent="space-around">
        <Button
          variant="contained"
          onClick={() => dispatch(clearDataDay())}
          color={operation.totalTime !== 0 ? "primary" : "secondary"}
        >
          Сбросить данные
        </Button>
        <Button
          variant="contained"
          onClick={save}
          color={
            operation.totalTime !== 0 && operation.date !== ""
              ? "primary"
              : "secondary"
          }
        >
          Сохранить
        </Button>
      </Box>
    </Box>
  );
};
