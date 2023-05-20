import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/rootReducer";
import { ICell } from "./Calendar";
import "./Cell.css";
import {
  dropEventToRemove,
  setEventToRemove,
} from "../utils/slices/removalStatusSlice";

interface ICellProps {
  cell: ICell;
}

type CellStatusType = "deleteEvent" | "hasEvent" | "null" | "test";

const Cell: React.FC<ICellProps> = ({ cell }) => {
  const dispatch = useAppDispatch();

  const events = useAppSelector((state) => state.events.events);
  const [cellStatus, setCellStatus] = useState<CellStatusType>("null");

  const getCellStatus = (cell: ICell, events: string[]): void => {
    events.forEach((event) => {
      const eventDate = new Date(event);
      if (
        cell.dayInMonth === eventDate.getDate() &&
        cell.dayInWeek === eventDate.getDay() &&
        cell.hour === eventDate.getHours() &&
        cell.month === eventDate.getMonth()
      ) {
        setCellStatus("hasEvent");
      }
    });
  };

  const choseForRemove = () => {
    if (cellStatus === "hasEvent") {
      setCellStatus("deleteEvent");
      events.forEach((event) => {
        const eventDate = new Date(event);
        if (
          cell.dayInMonth === eventDate.getDate() &&
          cell.dayInWeek === eventDate.getDay() &&
          cell.hour === eventDate.getHours() &&
          cell.month === eventDate.getMonth()
        ) {
          dispatch(setEventToRemove(event));
        }
      });
    } else if (cellStatus === "deleteEvent") {
      // console.log("deleteEvent registred. changing to hasEvent");
      setCellStatus("hasEvent");
      events.forEach((event) => {
        const eventDate = new Date(event);
        if (
          cell.dayInMonth === eventDate.getDate() &&
          cell.dayInWeek === eventDate.getDay() &&
          cell.hour === eventDate.getHours() &&
          cell.month === eventDate.getMonth()
        ) {
          dispatch(dropEventToRemove());
        }
      });
    }
  };

  useEffect(() => {
    setCellStatus('null')
    getCellStatus(cell, events);
  }, [events, cell]);

  return cell.isHourHeader ? (
    <div className="hourHeader">{`${cell.hour}:00`}</div>
  ) : (
    <div
      className={`cell ${cellStatus}`}
      onClick={() => choseForRemove()}
    ></div>
  );
};

export default Cell;
