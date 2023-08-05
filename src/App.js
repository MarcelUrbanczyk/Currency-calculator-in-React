import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Result from "./Result";
import Table from "./Table";
import Clock from "./Clock";
import { useState } from "react";
import { currencies } from "./Currencies";

function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [selectedCurrencyName, setSelectedCurrencyName] = useState(null);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const updateResult = () => {
    const selectedCurrencyObject = currencies.find(
      (currency) => selectedCurrency === currency.name
    );

    setResult(selectedCurrencyObject.rate * amount);
    setSelectedCurrencyName(selectedCurrencyObject.name);
  };

  return (
    <main>
      <Header />
      <Section
        title="Calculate"
        body={
          <Form
            amount={amount}
            setAmount={setAmount}
            currencies={currencies}
            setSelectedCurrency={setSelectedCurrency}
            selectedCurrency={selectedCurrency}
            setResult={setResult}
            updateResult={updateResult}
          />
        }
        extraHeaderContent={<Clock />}
        extraBodyContent={
          <Result result={result} selectedCurrencyName={selectedCurrencyName} />
        }
      />
      <Table currencies={currencies} />
    </main>
  );
}

export default App;
