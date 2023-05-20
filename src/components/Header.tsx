import styled from "styled-components";
import { addEvent } from "../utils/slices/eventSlice";
import { useAppDispatch } from "../app/rootReducer";
import moment from "moment";

interface IHeaderProps {
  children?: string | string[];
}

const plusImagePath = process.env.PUBLIC_URL + "/redplus.svg";
const NoTextDecorationLink = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderSection = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.3rem;

  @media (min-width: 400px) {
    font-size: 1.8rem;
    padding: 1rem 2.3rem;
  }

  @media (min-width: 740px) {
    font-size: 2.5rem;
    padding: 1rem 3rem; 
    justify-content: space-between;
  }
`;

const ImagePlus = styled.img`
  width: 30px;
  cursor: pointer;
  @media (min-width: 400px) {
    width: 40px;
  }
  @media (min-width: 740px) {
    width: 50px;
  }
`;

const Header: React.FC<IHeaderProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const AddEvent = () => {
    let event = prompt("Enter event time:\nYYYY-MM-DD HH:mm:ss");
    if (event) {
      event = event?.replace(" ", "T");
      const m = moment(event); // moment js для валидации :)
      if (m.isValid()) {
        dispatch(addEvent(event));
      }
      else {
        alert('Invalid date format. Try again!')
      }
    }
  };

  return (
    <HeaderSection>
      <NoTextDecorationLink href="/">{children}</NoTextDecorationLink>
      <ImagePlus
        alt="Add"
        src={plusImagePath}
        onClick={() => AddEvent()}
      ></ImagePlus>
    </HeaderSection>
  );
};

export default Header;
