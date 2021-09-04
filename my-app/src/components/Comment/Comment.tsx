import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setComment } from "../../redux/actions/operCalc";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
      },
    },
  })
);

export default function Comment() {
  const classes = useStyles();
  const { operation } = useSelector((state: RootState) => state.operCalc);
  const dispatch = useDispatch();
  const changeComment = (ev: string) => {
    dispatch(setComment(ev));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Комментарий"
        value={operation.comment}
        onChange={(event) => changeComment(event.target.value)}
      />
    </form>
  );
}
