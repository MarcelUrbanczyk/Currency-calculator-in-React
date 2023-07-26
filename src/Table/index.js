import "./style.css";
const Table = () => (
  <table className="table">
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
        <th className="table__cell">EUR</th>
        <th className="table__cell">PLN</th>
        <th className="table__cell">GBP</th>
        <th className="table__cell">JPY</th>
        <th className="table__cell">CAD</th>
      </tr>
      <tr>
        <th className="table__cell">Rate</th>
        <th className="table__cell">0.90</th>
        <th className="table__cell">4.00</th>
        <th className="table__cell">0.77</th>
        <th className="table__cell">140.54</th>
        <th className="table__cell">1.32</th>
      </tr>
    </tbody>
  </table>
);
export default Table;
