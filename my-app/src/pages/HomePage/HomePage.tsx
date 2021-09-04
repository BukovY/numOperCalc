import React, { FC } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { minToTime } from "../../utils/functions";
import { ButtonsTimeDay } from "../../components/ButtonsTimeDay/ButtonsTimeDay";
import { ButtonsOperation } from "../../components/OperationSelector/OperationSelector";
import { TableDay } from "../../components/TableDay/TableDay";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  clearField,
  addOperation,
  clearDataDay,
} from "../../redux/actions/operCalc";
import Comment from "../../components/Comment/Comment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export const HomePage: FC = () => {
  const classes = useStyles();
  const { time, selectedOperationType, operation } = useSelector(
    (state: RootState) => state.operCalc
  );
  const dispatch = useDispatch();

  return (
    <Box>
      <Typography variant="body1">{minToTime(time)}</Typography>
      <ButtonsTimeDay />
      <ButtonsOperation />

      <Button
        variant="contained"
        color={
          time > 0 && selectedOperationType !== "" ? "primary" : "secondary"
        }
        onClick={() => dispatch(addOperation())}
      >
        Добавить
      </Button>
      <Button
        variant="contained"
        color={
          time !== 0 || selectedOperationType !== "" ? "primary" : "secondary"
        }
        onClick={() => dispatch(clearField())}
      >
        Сбросить поле ввода
      </Button>
      <br />
      <TableDay />
      <Comment />
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(clearDataDay())}
      >
        Сбросить данные
      </Button>
      <Button variant="contained" color="primary" disabled>
        Сохранить
      </Button>
    </Box>
  );
};
