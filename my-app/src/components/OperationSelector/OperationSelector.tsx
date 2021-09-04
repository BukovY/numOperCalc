import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOperation } from "../../redux/actions/operCalc";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { RootState } from "../../redux/store";

export const ButtonsOperation: FC = () => {
  const dispatch = useDispatch();
  const changeOperation = (num: string) => {
    dispatch(setOperation(num));
  };
  const { selectedOperationType } = useSelector(
    (state: RootState) => state.operCalc
  );
  return (
    <Box>
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
