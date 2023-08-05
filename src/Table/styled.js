import styled from "styled-components";

export const DesktopTable = styled.table`
  align-items: center;
  background: rgba(42, 42, 42, 0.6);
  border: 3px solid rgb(145, 142, 142);
  border-radius: 10px;
  border-spacing: 0;
  box-shadow: 0px 0px 4px 1px #212121;
  color: white;
  margin-top: 50px;
  width: 100%;
  @media (max-width: 520px) {
    display: none;
  }
`;

export const MobileTable = styled.table`
  align-items: center;
  background: rgba(42, 42, 42, 0.6);
  border: 3px solid rgb(145, 142, 142);
  border-radius: 10px;
  border-spacing: 0;
  box-shadow: 0px 0px 4px 1px #212121;
  color: white;
  margin-top: 50px;
  width: 100%;
  @media (max-width: 520px) {
    margin-top: 40px;
    width: 100%;
  }
  @media (min-width: 521px) {
    display: none;
  }
`;

export const Cell = styled.th`
  border: 1px solid rgb(145, 142, 142);
  padding: 5px;
  transition: 0.3s;
  &:hover {
    background: rgba(42, 42, 42, 0.8);
    cursor: default;
  }
`;
