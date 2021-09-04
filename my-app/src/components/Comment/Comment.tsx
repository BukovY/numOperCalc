import React from "react";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setComment } from "../../redux/actions/operCalc";

export default function Comment() {
  const { operation } = useSelector((state: RootState) => state.operCalc);
  const dispatch = useDispatch();
  const changeComment = (ev: string) => {
    dispatch(setComment(ev));
  };

  return (
    <TextField
      id="standard-basic"
      label="Комментарий"
      value={operation.comment}
      onChange={(event) => changeComment(event.target.value)}
    />
  );
}
