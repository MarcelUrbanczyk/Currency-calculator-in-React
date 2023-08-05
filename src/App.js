import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Result from "./Result";
import Table from "./Table";
import Clock from "./Clock";
import { useState } from "react";
import { currencies } from "./Currencies";

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
        extraBodyContent={<Result result={result} />}
      />
      <Table currencies={currencies} />
    </main>
  );
}

export default App;
