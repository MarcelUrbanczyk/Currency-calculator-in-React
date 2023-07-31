import { useState } from "react";
import "./style.css";

const Form = ({
  setSelectedCurrency,
  selectedCurrency,
  currencies,
  setResult,
}) => {
  const [amount, setAmount] = useState("");

  const updateResult = () => {
    const selectedCurrencyObject = currencies.find(
      (currency) => selectedCurrency === currency.name
    );

    setResult(
      amount > 0
        ? (selectedCurrencyObject.rate * amount).toFixed(2) +
            selectedCurrencyObject.name
        : "Invalid amount"
    );
  };
  return (
    <form className="form">
      <input
        value={amount}
        className="form__input"
        min="0"
        placeholder="Amount (USD)"
        type="number"
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      />
      <select
        value={selectedCurrency}
        onChange={(event) => {
          setSelectedCurrency(event.target.value);
        }}
        className="form__select"
      >
        {currencies.map((currency) => (
          <option className="select__option" key={currency.name}>
            {currency.name}
          </option>
        ))}
      </select>
      <button type="button" className="form__button" onClick={updateResult}>
        Count
      </button>
    </form>
  );
};
export default Form;
