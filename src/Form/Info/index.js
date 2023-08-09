import { StyledInfo } from "./styled";

const Info = ({ date }) => {
  return (
    <StyledInfo>
      Exchange rates are taken from the European Central Bank. <br /> Currency
      rates on the day: {date}
    </StyledInfo>
  );
};

export default Info;
