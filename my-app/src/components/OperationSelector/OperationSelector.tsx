import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOperation } from "../../redux/actions/operCalc";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { RootState } from "../../redux/store";
import { makeStyles } from "@material-ui/core/styles";

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
export const ButtonsOperation: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const changeOperation = (num: string) => {
    dispatch(setOperation(num));
  };
  const { selectedOperationType } = useSelector(
    (state: RootState) => state.operCalc
  );
  return (
    <Box className={classes.root}>
      <Typography variant="body1">Типы операций</Typography>
      <ButtonGroup variant="contained">
        <Button
          color={selectedOperationType === "tva" ? "primary" : "default"}
          onClick={() => changeOperation("tva")}
        >
          ТВА
        </Button>
        <Button
          color={selectedOperationType === "sma" ? "primary" : "default"}
          onClick={() => changeOperation("sma")}
        >
          СМА
        </Button>
        <Button
          color={selectedOperationType === "ivl" ? "primary" : "default"}
          onClick={() => changeOperation("ivl")}
        >
          ИВЛ
        </Button>
        <Button
          color={selectedOperationType === "smaIvl" ? "primary" : "default"}
          onClick={() => changeOperation("smaIvl")}
        >
          СМА + ИВЛ
        </Button>
        <Button
          color={selectedOperationType === "eaIvl" ? "primary" : "default"}
          onClick={() => changeOperation("eaIvl")}
        >
          ЭА + ИВЛ
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="contained">
        <Button
          color={selectedOperationType === "pvaSmaIvl" ? "primary" : "default"}
          onClick={() => changeOperation("pvaSmaIvl")}
        >
          ПВА + СМА + ИВЛ
        </Button>
        <Button
          color={selectedOperationType === "saEaIvl" ? "primary" : "default"}
          onClick={() => changeOperation("saEaIvl")}
        >
          СА + ЭА + ИВЛ
        </Button>
        <Button
          color={selectedOperationType === "pvtbIvl" ? "primary" : "default"}
          onClick={() => changeOperation("pvtbIvl")}
        >
          ПВТБ + ИВЛ
        </Button>
      </ButtonGroup>
    </Box>
  );
};
