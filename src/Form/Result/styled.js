import styled from "styled-components";
export const Strong = styled.strong`
  color: white;
  margin: 10px;
  font-size: 28px;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row: 3;
  @media (max-width: 800px) {
    grid-column: 1;
    grid-row: 5;
  }
`;
