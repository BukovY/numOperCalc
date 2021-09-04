import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setDate } from "../../redux/actions/operCalc";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

export default function DatePicker() {
  const classes = useStyles();
  const { operation } = useSelector((state: RootState) => state.operCalc);

  const dispatch = useDispatch();
  const selectDate = (ev: any) => {
    dispatch(setDate(ev));
  };
  return (
    <TextField
      value={operation.date}
      label="День"
      type="date"
      defaultValue="2017-05-24"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={(ev) => selectDate(ev.target.value)}
    />
  );
}
