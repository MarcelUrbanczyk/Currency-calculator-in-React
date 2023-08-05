import { useState } from "react";
import { Input, Select, Button, Option } from "./styled";

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
    <form>
      <Input
        value={amount}
        min="0"
        placeholder="Amount (USD)"
        type="number"
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      />
      <Select
        value={selectedCurrency}
        onChange={(event) => {
          setSelectedCurrency(event.target.value);
        }}
      >
        {currencies.map((currency) => (
          <Option className="select__option" key={currency.name}>
            {currency.name}
          </Option>
        ))}
      </Select>
      <Button type="button" onClick={updateResult}>
        Count
      </Button>
    </form>
  );
};
export default Form;
