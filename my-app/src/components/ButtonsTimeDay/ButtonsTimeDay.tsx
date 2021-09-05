import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { setTime } from "../../redux/actions/operCalc";
import Typography from "@material-ui/core/Typography";
import { RootState } from "../../redux/store";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10px",
    "& > *": {
      margin: theme.spacing(1),
    },
    "@media screen and (max-width: 680px)": {
      alignItems: "center",
    },
  },
}));
export const ButtonsTimeDay: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const changeOperTime = (num: number) => {
    dispatch(setTime(num));
  };
  const { time } = useSelector((state: RootState) => state.operCalc);
  return (
    <Box className={classes.root}>
      <Typography variant="body1">часы</Typography>
      <ButtonGroup variant="contained">
        <Button
          color={time >= 60 ? "primary" : "secondary"}
          onClick={() => changeOperTime(-60)}
        >
          -1
        </Button>
        <Button color="primary" onClick={() => changeOperTime(+60)}>
          +1
        </Button>
        <Button color="primary" onClick={() => changeOperTime(+120)}>
          +2
        </Button>
        <Button color="primary" onClick={() => changeOperTime(+180)}>
          +3
        </Button>
        <Button color="primary" onClick={() => changeOperTime(+240)}>
          +4
        </Button>
      </ButtonGroup>
      <Typography variant="body1">минуты</Typography>
      <ButtonGroup variant="contained">
        <Button
          color={time >= 1 ? "primary" : "secondary"}
          onClick={() => changeOperTime(-1)}
        >
          -1
        </Button>
        <Button
          color={time >= 5 ? "primary" : "secondary"}
          onClick={() => changeOperTime(-5)}
        >
          -5
        </Button>
        <Button color="primary" onClick={() => changeOperTime(+5)}>
          +5
        </Button>
        <Button color="primary" onClick={() => changeOperTime(+10)}>
          +10
        </Button>
        <Button color="primary" onClick={() => changeOperTime(+20)}>
          +20
        </Button>
        <Button color="primary" onClick={() => changeOperTime(+30)}>
          +30
        </Button>
      </ButtonGroup>
    </Box>
  );
};
