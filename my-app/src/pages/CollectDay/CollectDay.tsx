import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Box from "@material-ui/core/Box";
import { TableDays } from "../../components/TableDays/TableDays";

export const CollectDay: FC = () => {
  const { data } = useSelector((state: RootState) => state.allDay);

  return (
    <Box>
      <TableDays data={data} />
    </Box>
  );
};
