import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Result from "./Result";
import Table from "./Table";
import { useState } from "react";

const currencies = [
  { name: "PLN", rate: 4.0 },
  { name: "EUR", rate: 0.9 },
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
        extraContent={
          <Result result={result} selectedCurrency={selectedCurrency} />
        }
      />
      <Table />
    </main>
  );
}

export default App;
