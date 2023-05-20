import styled from "styled-components";

export const TimeTable = styled.div`
  * {
    text-align: end;
  }
  overflow: auto;
  max-height: 400px;
  padding-right: 0.5rem;
  font-size: 1.1rem;
  color: var(--warm-grey);
  margin-top: -5px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;
