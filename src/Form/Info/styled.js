import styled from "styled-components";

export const StyledInfo = styled.p`
  color: white;
  margin: 10px;
  font-size: 16px;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row: 5;
  @media (max-width: 800px) {
    font-size: 12px;
    grid-column: 1;
    grid-row: 7;
  }
`;
