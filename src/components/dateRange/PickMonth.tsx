import styled from "styled-components";
import { getDaysOfWeek, getMonthName } from "../../utils/date-utils";
import { useAppDispatch, useAppSelector } from "../../app/rootReducer";
import { decreaseCurrentWeek, increaseCurrentWeek } from "../../utils/slices/currentWeekSlice";

const BRACKET_LEFT_URL = process.env.PUBLIC_URL + '/bracket-left.svg'
const BRACKET_RIGHT_URL = process.env.PUBLIC_URL + '/bracket-right.svg'

const ContainerSpaceBetween = styled.div`
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.3rem;
    @media (min-width: 740px) {
      padding: 0.5rem;
    }
  `

  const ClickableImg = styled.img`
    cursor: pointer;
  `

const PickYear: React.FC = () => {
  const currentWeekDiff = useAppSelector(state => state.currentWeek.currentWeekDiff)
  const currentWeek = getDaysOfWeek(currentWeekDiff)
  const dispatch = useAppDispatch()

  return ( 
    <ContainerSpaceBetween>
      <ClickableImg onClick={() => dispatch(decreaseCurrentWeek())} src={BRACKET_LEFT_URL} alt='brackets' width='25px'></ClickableImg>
      <div>{getMonthName(currentWeek[0].month)} {currentWeek[0].year}</div>
      <ClickableImg onClick={() => dispatch(increaseCurrentWeek())} src={BRACKET_RIGHT_URL} alt='brackets' width='25px'></ClickableImg>
    </ContainerSpaceBetween>
   );
}
 
export default PickYear;