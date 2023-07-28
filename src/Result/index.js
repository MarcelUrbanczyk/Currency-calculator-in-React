import "./style.css";
const Result = ({ result, selectedCurrency }) => {
  return (
    <strong className="strong">
      Result: {result}
      {selectedCurrency}
    </strong>
  );
};
export default Result;
