import styled from "styled-components";

export const StyledForm = styled.form`
  align-items: center;
  justify-content: center;
  text-align: center;
  display: grid;
  grid-column-gap: 10px;
  grid-template-rows: auto 1fr 50px 2fr auto;
  @media (max-width: 800px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(6, auto);
  }
`;

export const Label = styled.label`
  color: white;
  font-size: 24px;
  margin: 10px auto;
  grid-column: 1;
  grid-row: 1;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.313);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  margin: 10px auto;
  height: 50px;
  padding: 10px;
  transition: 0.3s;
  grid-row: 1;
  &::placeholder {
    color: white;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.552);
  }

  @media (max-width: 800px) {
    width: 330px;
    text-align: center;
    grid-column: 1;
    grid-row: 2;
  }
  @media (max-width: 440px) {
    width: 230px;
  }
`;

export const Button = styled.button`
  background: rgba(255, 255, 255, 0.313);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  margin: 10px auto;
  height: 50px;
  padding: 10px;
  transition: 0.3s;
  grid-row: 1;
  &:hover {
    background: rgba(255, 255, 255, 0.552);
  }
  @media (max-width: 800px) {
    width: 330px;
    text-align: center;
    grid-column: 1;
    grid-row: 4;
  }
  @media (max-width: 440px) {
    width: 230px;
  }
`;

export const Select = styled.select`
  background: rgba(255, 255, 255, 0.313);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  margin: 10px auto;
  height: 50px;
  padding: 10px;
  transition: 0.3s;
  grid-row: 1;
  &:hover {
    background: rgba(255, 255, 255, 0.552);
  }
  @media (max-width: 800px) {
    text-align: center;
    width: 330px;
    grid-column: 1;
    grid-row: 3;
  }
  @media (max-width: 440px) {
    width: 230px;
  }
`;

export const Option = styled.option`
  background: black;
`;
