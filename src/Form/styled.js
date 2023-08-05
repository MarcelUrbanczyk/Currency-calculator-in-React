import styled from "styled-components";

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.313);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  margin: 10px;
  max-width: 300px;
  height: 50px;
  padding: 10px;
  transition: 0.3s;
  &::placeholder {
    color: white;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.552);
  }
  @media (max-width: 520px) {
    max-width: 250px;
    text-align: center;
  }
`;

export const Button = styled.button`
  background: rgba(255, 255, 255, 0.313);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  margin: 10px;
  max-width: 300px;
  height: 50px;
  padding: 10px;
  transition: 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.552);
  }
  @media (max-width: 520px) {
    max-width: 250px;
    text-align: center;
  }
`;

export const Select = styled.select`
  background: rgba(255, 255, 255, 0.313);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  margin: 10px;
  max-width: 300px;
  height: 50px;
  padding: 10px;
  transition: 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.552);
  }
  @media (max-width: 520px) {
    max-width: 250px;
    text-align: center;
  }
`;

export const Option = styled.option`
  background: black;
`;
