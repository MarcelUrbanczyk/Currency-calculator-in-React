import { Input, Select, Button, Option, StyledForm, Label } from "./styled";
import Result from "./Result";
import { Loading } from "./Loading";
import { Failure } from "./Failure";
import { useState } from "react";
import { useRatesData } from "../useRatesData";
import Info from "./Info";

const Form = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const ratesData = useRatesData();

  const calculateResult = () => {
    const rate = ratesData.rates[selectedCurrency];
    setResult({ calculation: amount * rate, selectedCurrency });
  };

  if (ratesData.status === "loading") {
    return <Loading />;
  } else if (ratesData.status === "failure") {
    return <Failure />;
  }
  return (
    <StyledForm>
      <Label>Amount (USD):</Label>
      <Input
        value={amount}
        min="0"
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
        {Object.keys(ratesData.rates).map((currency) => (
          <Option key={currency} value={currency}>
            {currency}
          </Option>
        ))}
      </Select>
      <Button type="button" onClick={calculateResult}>
        Count
      </Button>
      <br />
      {result !== null ? <Result result={result} /> : null}
      <Info date={ratesData.date} />
    </StyledForm>
  );
};
export default Form;
