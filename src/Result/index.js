import "./style.css";
const Result = ({ result, selectedCurrency }) => {
  return (
    <strong className="strong">
      Result: {result}
      {result === null ? "" : selectedCurrency}
    </strong>
  );
};
export default Result;
