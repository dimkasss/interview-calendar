export default function convertToRussianWeek(dayInWeek: number) {
  if (dayInWeek === 0) {
    return 6
  }
  return dayInWeek-1
}