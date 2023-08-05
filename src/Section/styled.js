import styled from "styled-components";
export const Header = styled.header`
  align-items: center;
  background: linear-gradient(
    to right bottom,
    rgb(90, 88, 88, 0.6),
    rgb(39, 39, 39, 0.6)
  );
  border-radius: 12px 12px 0 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.214);
  display: flex;
  justify-content: space-between;
  max-height: 80px;
  box-shadow: 0px 0px 4px 1px #212121;
  padding: 30px;
  width: 100%;
  @media (max-width: 520px) {
    display: grid;
    grid-template-rows: auto auto;
    justify-content: center;
    text-align: center;
    max-height: 160px;
  }
`;

export const Container = styled.div`
  background: linear-gradient(
    to right top,
    rgb(90, 88, 88, 0.6),
    rgb(37, 37, 37, 0.6)
  );
  min-height: 200px;
  border-radius: 0 0 12px 12px;
  box-shadow: 0px 0px 4px 1px #212121;
  padding: 30px;
  width: 100%;
  @media (max-width: 520px) {
    text-align: center;
  }
`;

export const HeaderText = styled.h2`
  color: white;
  @media (max-width: 520px) {
    margin: 5px;
    grid-row: 1;
  }
`;
