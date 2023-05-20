import styled from "styled-components";
import WeekDays from "./WeekDays";
import PickMonth from "./PickMonth";

export interface DayRangeProps {
  // changeChosenDay: (chosenDay: number) => void;
}

const Background = styled.div`
  font-size: 1.5rem;
  height: 16vh;
  display: grid;
  grid-template-columns: 1fr 7fr;
  background: var(--warm-grey);
  padding: 1rem 0;
  @media (max-width: 740px) {
    font-size: 1rem;
    padding: 0.2rem 0;
  }
  @media (max-height: 900px) {
    padding: 0;
    font-size: 0.9rem;
  }
  @media (max-height: 700px) {
    font-size: 0.8rem;
  }
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
