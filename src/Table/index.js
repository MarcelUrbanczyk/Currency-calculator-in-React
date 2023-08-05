import { DesktopTable, MobileTable, Cell } from "./styled";
const Table = ({ currencies }) => (
  <>
    <DesktopTable>
      <thead>
        <tr>
          <Cell colSpan={currencies.length + 1}>
            Exchange rates against the dollar
          </Cell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Cell>Currency</Cell>
          {currencies.map((currency) => {
            return <Cell key={currency.name}>{currency.name}</Cell>;
          })}
        </tr>
        <tr>
          <Cell>Rate</Cell>
          {currencies.map((currency) => {
            return <Cell key={currency.name}>{currency.rate.toFixed(2)}</Cell>;
          })}
        </tr>
      </tbody>
    </DesktopTable>

    <MobileTable>
      <thead>
        <tr>
          <Cell colSpan="6">Exchange rates against the dollar</Cell>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Cell>Currency</Cell>
          <Cell>Rate</Cell>
        </tr>
        {currencies.map((currency) => {
          return (
            <tr key={currency.name}>
              <Cell>{currency.name}</Cell>
              <Cell>{currency.rate.toFixed(2)}</Cell>
            </tr>
          );
        })}
      </tbody>
    </MobileTable>
  </>
);
export default Table;
