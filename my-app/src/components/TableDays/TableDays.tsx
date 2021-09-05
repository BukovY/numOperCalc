import Box from "@material-ui/core/Box";
import React, { FC } from "react";
import { minToTime } from "../../utils/functions";
import s from "./TableDays.module.css";
import { deleteDayDate } from "../../redux/actions/allDay";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { checkDay, uncheckDay } from "../../redux/actions/allDay";

type TableDaysType = {
  data: Array<any>;
};
export const TableDays: FC<TableDaysType> = ({ data }) => {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector((state: RootState) => state.allDay);
  const changeSelect = (id: string) => {
    if (selectedDate.indexOf(id) === -1) {
      dispatch(checkDay(id));
    } else {
      dispatch(uncheckDay(id));
    }
  };
  return (
    <Box className={s.table}>
      {data.length > 0 && (
        <table className={s.table}>
          <tr>
            <td>&#9989;</td>
            <td>📅</td>
            <td>&#9998;</td>
            <td>📈</td>
            <td>🕒</td>
            <td>⌛</td>
            <td>❌</td>
          </tr>
          {data.map((i) => (
            <tr>
              <td>
                <input
                  checked={selectedDate.indexOf(i.id) > -1}
                  onChange={() => changeSelect(i.id)}
                  type="checkbox"
                />
              </td>
              <td>{i.date}</td>
              <td>{i.comment}</td>
              <td>
                {i.tva +
                  i.sma +
                  i.ivl +
                  i.smaIvl +
                  i.eaIvl +
                  i.saEaIvl +
                  i.pvtbIvl}
              </td>
              <td>{minToTime(i.totalTime)}</td>
              <td>{i.totalTime}</td>
              <td>
                <button onClick={() => dispatch(deleteDayDate(i.id))}>
                  &#10060;
                </button>
              </td>
            </tr>
          ))}
        </table>
      )}
    </Box>
  );
};
