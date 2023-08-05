import { Header, Container, HeaderText } from "./styled";

const Section = ({ title, body, extraBodyContent, extraHeaderContent }) => (
  <section>
    <Header>
      <HeaderText>{title}</HeaderText>
      {extraHeaderContent}
    </Header>
    <Container>
      {body} {extraBodyContent}
    </Container>
  </section>
);

export default Section;
