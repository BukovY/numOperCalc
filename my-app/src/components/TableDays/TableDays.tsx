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
            <td>Отметить</td>
            <td>День</td>
            <td>Комментарий</td>
            <td>ТВА</td>
            <td>СМА</td>
            <td>ИВЛ</td>
            <td>СМА + ИВЛ</td>
            <td>ЭА + ИВЛ</td>
            <td>СА + ЭА + ИВЛ</td>
            <td>ПВТБ + ИВЛ</td>
            <td>Всего операций</td>
            <td>Время</td>
            <td>Время в минутах</td>
            <td>Удалить</td>
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
              <td>{i.tva}</td>
              <td>{i.sma}</td>
              <td>{i.ivl}</td>
              <td>{i.smaIvl}</td>
              <td>{i.eaIvl}</td>
              <td>{i.saEaIvl}</td>
              <td>{i.pvtbIvl}</td>
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
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </table>
      )}
    </Box>
  );
};
