import {
  Container,
  Header,
  Link,
  List,
  ListItem,
  Subtitle,
  Title,
} from '../components';

export default () => (
  <Container>
    <Title>WPX</Title>
    <Subtitle>LIMITED</Subtitle>
    <Header>Full-Stack Software Development</Header>
    <List>
      <ListItem>JavaScript</ListItem>
      <ListItem>Node.js</ListItem>
      <ListItem>React</ListItem>
      <ListItem>C#</ListItem>
      <ListItem>.NET Core</ListItem>
    </List>
    <Header>Cyber Security Consultancy</Header>
    <List>
      <ListItem>DMARC</ListItem>
      <ListItem>SPF</ListItem>
      <ListItem> DKIM </ListItem>
      <ListItem> TLS</ListItem>
    </List>
    <Link href="mailto:hello@wpx.limited">hello@wpx.limited</Link>
  </Container>
);
