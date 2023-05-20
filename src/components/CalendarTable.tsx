import { useEffect, useState } from "react";
import { ICell } from "./Calendar";
import Cell from "./Cell";
import styled from "styled-components";
import { createCells, getCells } from "../utils/createCells";
import { useAppSelector } from "../app/rootReducer";
import { getDaysOfWeek } from "../utils/date-utils";

const Table = styled.div`
  overflow: overlay;
  cursor: pointer;
  height: 57vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const CalendarTable: React.FC = () => {
  const [cells, setCells] = useState<ICell[]>(createCells())
  const currentWeekDiff = useAppSelector(state => state.currentWeek.currentWeekDiff)

  useEffect(() => {
    const currentWeek = getDaysOfWeek(currentWeekDiff)
    setCells(getCells(currentWeek))
  }, [currentWeekDiff])

  return (
    <Table>
      {cells.map((cell) => (
        <Cell key={cell.key} cell={cell}></Cell>
      ))}
    </Table>
  );
};

export default CalendarTable;
