import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Box from "@material-ui/core/Box";
import { TableDays } from "../../components/TableDays/TableDays";
import { TableDay } from "../../components/TableDay/TableDay";
import Typography from "@material-ui/core/Typography";

export const CollectDay: FC = () => {
  const { data, selectedDate } = useSelector(
    (state: RootState) => state.allDay
  );

  const operation = {
    date: "Суммарно",
    comment: "Подсчет",
    totalTime: 0,
    tva: 0,
    sma: 0,
    ivl: 0,
    smaIvl: 0,
    eaIvl: 0,
    saEaIvl: 0,
    pvtbIvl: 0,
  };
  if (selectedDate.length > 0) {
    const dayToCalc = data.filter(
      (el: any) => selectedDate.indexOf(el.id) !== -1
    );
    for (let i of dayToCalc) {
      operation.totalTime += i.totalTime;
      operation.tva += i.tva;
      operation.sma += i.sma;
      operation.ivl += i.ivl;
      operation.smaIvl += i.smaIvl;
      operation.eaIvl += i.eaIvl;
      operation.saEaIvl += i.saEaIvl;
      operation.pvtbIvl += i.pvtbIvl;
    }
  }

  return (
    <Box>
      {data.length > 0 && (
        <Box>
          <Typography variant="h3" align="center">
            Сохраненные данные
          </Typography>
          <TableDays data={data} />
        </Box>
      )}

      {selectedDate.length > 0 && (
        <Box>
          <Typography variant="h3" align="center">
            Данные суммарно
          </Typography>
          <TableDay operation={operation} />
        </Box>
      )}
    </Box>
  );
};
