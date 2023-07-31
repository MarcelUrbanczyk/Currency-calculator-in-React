import "./style.css";
const Table = ({ currencies }) => (
  <>
    <table className="table desktopTable">
      <thead>
        <tr className="table__header">
          <th className="table__cell" colSpan={currencies.length + 1}>
            Exchange rates against the dollar
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="table__cell">Currency</th>
          {currencies.map((currency) => {
            return <th className="table__cell">{currency.name}</th>;
          })}
        </tr>
        <tr>
          <th className="table__cell">Rate</th>
          {currencies.map((currency) => {
            return <th className="table__cell">{currency.rate.toFixed(2)}</th>;
          })}
        </tr>
      </tbody>
    </table>

    <table className="table mobileTable">
      <thead>
        <tr className="table__header">
          <th className="table__cell" colSpan="6">
            Exchange rates against the dollar
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th className="table__cell">Currency</th>
          <th className="table__cell">Rate</th>
        </tr>
        {currencies.map((currency) => {
          return (
            <tr>
              <th className="table__cell">{currency.name}</th>
              <th className="table__cell">{currency.rate.toFixed(2)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
);
export default Table;
