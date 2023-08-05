import { Input, Select, Button, Option } from "./styled";

const Form = ({
  setSelectedCurrency,
  selectedCurrency,
  currencies,
  setResult,
  updateResult,
  amount,
  setAmount,
}) => {
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
          <Option key={currency.name}>{currency.name}</Option>
        ))}
      </Select>
      <Button type="button" onClick={updateResult}>
        Count
      </Button>
    </form>
  );
};
export default Form;
