import Header from "./Header";
import CalendarTable from "./CalendarTable";
import DayRange from "./dateRange/DayRange";
import Footer from "./Footer";
import styled from "styled-components";


export interface IEvent {
  dayInMonth: number;
  dayInWeek: number;
  hour: number;
  month: number;
}

export interface ICell extends IEvent {
  isHourHeader: boolean;
  pressedForRemove: boolean;
  key: number;
}

const StyledCalendar = styled.div`
  width: 100vw;
  @media (min-width: 740px) {
    max-width: 740px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
`;

const Calendar: React.FC = () => {
  return (
    <StyledCalendar>
      <Header>Interview Calendar</Header>
      <DayRange></DayRange>
      <CalendarTable></CalendarTable>
      <Footer></Footer>
    </StyledCalendar>
  );
};

export default Calendar; 
