import Box from "@material-ui/core/Box";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { minToTime } from "../../utils/functions";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export const TableDay: FC = () => {
  const { operation } = useSelector((state: RootState) => state.operCalc);

  function createData(name: string, value: any) {
    return { name, value };
  }
  const rows = [
    createData("ТВА", operation.tva),
    createData("СМА", operation.sma),
    createData("ИВЛ", operation.ivl),
    createData("СМА + ИВЛ", operation.smaIvl),
    createData("ЭА + ИВЛ", operation.eaIvl),
    createData("СА + ЭА + ИВЛ", operation.saEaIvl),
    createData("ПВТБ + ИВЛ", operation.pvtbIvl),
    createData(
      "Всего операций",
      operation.tva +
        operation.sma +
        operation.ivl +
        operation.smaIvl +
        operation.eaIvl +
        operation.saEaIvl +
        operation.pvtbIvl
    ),
    createData("Время", minToTime(operation.totalTime)),
    createData("Время в минутах", operation.totalTime),
  ];
  const classes = useStyles();
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Переменная</TableCell>
              <TableCell align="right">Значение</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
