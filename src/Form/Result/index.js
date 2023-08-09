import { Strong } from "./styled";
const Result = ({ result }) => {
  const finalResult =
    result.calculation > 0
      ? result.calculation.toFixed(2) + result.selectedCurrency
      : "Invalid amount";
  return <Strong>Result: {finalResult}</Strong>;
};
export default Result;
