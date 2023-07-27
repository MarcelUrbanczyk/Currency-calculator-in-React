import { useState } from "react";
import "./style.css";

const Form = ({ currencies, setResult }) => {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const updateResult = () => {
    const selectedCurrencyObject = currencies.find(
      (currency) => selectedCurrency === currency.name
    );
    setResult(selectedCurrencyObject.rate * amount);
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
          updateResult();
          console.log(amount);
        }}
      />
      <select
        value={selectedCurrency}
        onChange={(event) => setSelectedCurrency(event.target.value)}
        className="form__select"
      >
        {currencies.map((currency) => (
          <option className="select__option" key={currency.name}>
            {currency.name}
          </option>
        ))}
      </select>
    </form>
  );
};
export default Form;
