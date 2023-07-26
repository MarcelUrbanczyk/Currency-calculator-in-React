import "./style.css";

const Section = ({ title, body, extraContent }) => (
  <section className="section">
    <div className="section__header">
      <h2 className="section__headerText">{title}</h2>
    </div>
    <div className="section__container">
      {body} {extraContent}
    </div>
  </section>
);

export default Section;
