import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Result from "./Result";
import Table from "./Table";

function App() {
  return (
    <main>
      <Header />
      <Section title="Calculate" body={<Form />} extraContent={<Result />} />
      <Table />
    </main>
  );
}

export default App;
