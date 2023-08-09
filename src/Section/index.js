import { Header, Container, HeaderText } from "./styled";

const Section = ({ title, body, extraHeaderContent, additionalContent }) => (
  <section>
    <Header>
      <HeaderText>{title}</HeaderText>
      {extraHeaderContent}
    </Header>
    <Container>{body}</Container>
  </section>
);

export default Section;
