import styled from "styled-components";
import { getDaysOfWeek } from "../../utils/date-utils";
import { useAppSelector } from "../../app/rootReducer";

interface DayCellProps {
  highlighted?: boolean;
}

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const CustomSpan = styled.span<DayCellProps>`
  color: ${(props) => (props.highlighted ? "white" : "black")};
  background: ${(props) => (props.highlighted ? "red" : "var(--light-gray)")};
  border: ${(props) => (props.highlighted ? "1px solid red" : "")};
  border-radius: ${(props) => (props.highlighted ? "100%" : "")};
  text-align: center;
  padding: 0.4rem;
  margin: 0 auto;
  @media (max-width: 308px) {
    padding: 0;
    margin: 0;
  }
`;

const FlexContainer = styled.div`
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DayNameStyles = {
  cell: {
    fontSize: "0.8rem",
    fontWeight: 600,
  },
} as const;

const WeekDays: React.FC = () => {
  const currentWeekDiff = useAppSelector(
    (state) => state.currentWeek.currentWeekDiff
  );
  const currentWeek = getDaysOfWeek(currentWeekDiff);

  return (
    <DaysContainer>
      {currentWeek.map((day) => (
        <div key={day.key}>
          <FlexContainer>
            <CustomSpan style={DayNameStyles.cell}>{day.shortName}</CustomSpan>
          </FlexContainer>
          {day.monthDay === new Date().getDate() &&
          day.month === new Date().getMonth() &&
          day.year === new Date().getFullYear() ? (
            <>
              <FlexContainer>
                <CustomSpan highlighted>{day.monthDay}</CustomSpan>
              </FlexContainer>
            </>
          ) : (
            <>
              <FlexContainer>
                <CustomSpan>{day.monthDay}</CustomSpan>
              </FlexContainer>
            </>
          )}
        </div>
      ))}
    </DaysContainer>
  );
};

export default WeekDays;
