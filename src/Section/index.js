import "./style.css";

const Section = ({ title, body, extraBodyContent, extraHeaderContent }) => (
  <section className="section">
    <div className="section__header">
      <h2 className="section__headerText">{title}</h2>
      {extraHeaderContent}
    </div>
    <div className="section__container">
      {body} {extraBodyContent}
    </div>
  </section>
);

export default Section;
