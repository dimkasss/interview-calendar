import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/rootReducer";
import { removeEvent } from "../utils/slices/eventSlice";
import { useEffect, useState } from "react";
import { resetCurrentWeek } from "../utils/slices/currentWeekSlice";

interface IButton {
  eventPicked?: boolean;
}

const Button = styled.button<IButton>`
  border: none;
  background: var(--warm-grey);
  color: var(--red);
  font-size: 1.3rem;
  display: ${props => props.eventPicked !== undefined ? props.eventPicked ? 'block' : 'none' : 'block'};
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  @media (max-width: 300px) {
    font-size: 0.3rem;
  }
  :hover {
    cursor: pointer;
  }
  font-weight: 600;
`

export const StyledFooter = styled.div`
  height: 7vh;
  background-color: var(--warm-grey);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Footer = () => {
  const eventToRemove = useAppSelector(state => state.removalStatus.eventToRemove)
  const dispatch = useAppDispatch()

  const [eventPicked, setEventPicked] = useState(false)

  const checkForRemovalStatus = () => {
    if (eventToRemove !== null) {
      dispatch(removeEvent(eventToRemove))
      setEventPicked(false)
    }
  }

  useEffect(() => {
    if (eventToRemove !== null) {
      setEventPicked(true)
    }
    else {
      setEventPicked(false)
    }
  }, [eventToRemove])

  return ( 
    <StyledFooter>
      <Button onClick={() => dispatch(resetCurrentWeek())}>Today</Button><Button eventPicked={eventPicked} onClick={() => checkForRemovalStatus()}>Delete</Button>
    </StyledFooter>
   );
}
 
export default Footer;