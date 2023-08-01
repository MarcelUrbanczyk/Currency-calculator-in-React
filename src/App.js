import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Result from "./Result";
import Table from "./Table";
import Clock from "./Section/Clock";
import { useState } from "react";
const currencies = [
  { name: "EUR", rate: 0.9 },
  { name: "PLN", rate: 4.0 },
  { name: "GBP", rate: 0.77 },
  { name: "JPY", rate: 140.54 },
  { name: "CAD", rate: 1.32 },
];

function App() {
  const [result, setResult] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  return (
    <main>
      <Header />
      <Section
        title="Calculate"
        body={
          <Form
            currencies={currencies}
            setSelectedCurrency={setSelectedCurrency}
            selectedCurrency={selectedCurrency}
            setResult={setResult}
          />
        }
        extraHeaderContent={<Clock />}
        extraBodyContent={
          <Result result={result} selectedCurrency={selectedCurrency} />
        }
      />
      <Table currencies={currencies} />
    </main>
  );
}

export default App;
