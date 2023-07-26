import "./style.css";
const Form = () => {
  return (
    <form className="form">
      <input
        className="form__input"
        min="0"
        placeholder="Amount (USD)"
        type="number"
      />
      <select className="form__select">
        <option className="select__option">EUR</option>
        <option className="select__option">PLN</option>
        <option className="select__option">GBP</option>
        <option className="select__option">JPY</option>
        <option className="select__option">CAD</option>
      </select>
      <button className="form__button">Count</button>
    </form>
  );
};
export default Form;
