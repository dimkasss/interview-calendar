export interface IDaysOfTheWeek {
  shortName: string;
  longName: string;
  monthDay: number;
  weekDay: number;
  month: number;
  year: number;
  key: number;
}

export function getMonthName(date: Date): string;

export function getMonthName(monthNumber: number): string;

export function getMonthName(month: number | Date) {
  if (typeof month === "number") {
    const date = new Date();
    date.setMonth(month);
    return date.toLocaleString("en-US", { month: "long" });
  } else {
    return month.toLocaleDateString("en", { month: "long" });
  }
}

const getWeekDayName = (
  date: Date,
  locale: "en" | "ru",
  weekDayLength: "long" | "short" | "narrow"
) => {
  return date.toLocaleDateString(locale, { weekday: weekDayLength });
};

const transformToRussianWeek = (currentDay: number) => {
  if (currentDay < 1) {
    // check if current day is Sunday
    currentDay = 7;
  }
  return currentDay;
};

export const getDaysOfWeek = (diff = 0): IDaysOfTheWeek[] => {
  const date = new Date();
  let daysOfWeek = [];
  let key = 0;
  const day = transformToRussianWeek(date.getDay());
  for (let weekDay = 1; weekDay <= 7; weekDay++) {
    let diffInsideWeek = weekDay - day;
    let dateCopy = new Date();
    dateCopy.setDate(date.getDate() + diff * 7);
    dateCopy.setDate(dateCopy.getDate() + diffInsideWeek);
    daysOfWeek.push({
      shortName: getWeekDayName(dateCopy, "en", "narrow"),
      longName: getWeekDayName(dateCopy, "en", "long"),
      monthDay: dateCopy.getDate(),
      weekDay: weekDay === 7 ? 0 : weekDay,
      month: dateCopy.getMonth(),
      year: dateCopy.getFullYear(),
      key,
    });
    key++;
  }
  return daysOfWeek;
};
