import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Clock from "./Clock";
import Info from "./Form/Info";

function App() {
  return (
    <main>
      <Header />
      <Section
        title="Calculate"
        body={<Form />}
        extraHeaderContent={<Clock />}
      />
    </main>
  );
}

export default App;
