import { ICell } from "../components/Calendar"
import { IDaysOfTheWeek } from "./date-utils"

export const createCells = () => {
  let cells: ICell[] = []
  const date = new Date()
  const currentDayInWeek = date.getDay() 
  let key = 0;
  for (let hour = 0; hour <= 23; hour++) {
    cells.push({
      isHourHeader: true,
      dayInMonth: -1,
      dayInWeek: -1,
      hour: hour,
      month: 0,
      pressedForRemove: false,
      key: key,
    })
    key++;
    for (let dayInWeek = 1; dayInWeek <= 7; dayInWeek++) {
      let daysWeekDifference = dayInWeek - currentDayInWeek
      let dateCopy = new Date()
      let iterationDate = new Date()
      iterationDate.setDate(dateCopy.getDate() + daysWeekDifference)
      cells.push({
        isHourHeader: false,
        dayInMonth: iterationDate.getDate(),
        dayInWeek: iterationDate.getDay(),
        hour: hour,
        month: iterationDate.getMonth(),
        pressedForRemove: false,
        key: key,
      })
      key++;
    }
  }
  return cells
}

export const getCells = (daysOfCurrentWeek: IDaysOfTheWeek[]) => {
  let cells: ICell[] = []
  let key = 0;
  for (let hour = 0; hour <= 23; hour++) {
    cells.push({
      isHourHeader: true,
      dayInMonth: 0,
      dayInWeek: 0,
      hour: hour,
      month: 0,
      pressedForRemove: false,
      key: key,
    })
    key++;
    for (let dayInWeek = 1; dayInWeek <= 7; dayInWeek++) {
      const currentDay = daysOfCurrentWeek[dayInWeek-1]
      cells.push({
        isHourHeader: false,
        dayInMonth: currentDay.monthDay,
        dayInWeek: currentDay.weekDay,
        hour: hour,
        month: currentDay.month,
        pressedForRemove: false,
        key: key,
      })
      key++;
    }
  }
  return cells
}