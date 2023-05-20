import styled from "styled-components";
import WeekDays from "./WeekDays";
import PickMonth from "./PickMonth";

export interface DayRangeProps {
  // changeChosenDay: (chosenDay: number) => void;
}

const Background = styled.div`
  height: 16vh;
  display: grid;
  grid-template-columns: 1fr 7fr;
  background: var(--warm-grey);
  padding: 1rem 0;
`;

const Section = styled.div`
`

const DayRange: React.FC<DayRangeProps> = () => {

  return (
    <Background>
      <Section></Section>
      <Section>
        <WeekDays></WeekDays>
        <PickMonth></PickMonth>
      </Section>
    </Background>
  );
};

export default DayRange;
