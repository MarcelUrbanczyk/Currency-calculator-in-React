import { Strong } from "./styled";
const Result = ({ result, selectedCurrencyName }) => {
  const finalResult =
    result > 0 ? result.toFixed(2) + selectedCurrencyName : "Invalid amount";
  return <Strong>Result: {finalResult}</Strong>;
};
export default Result;
