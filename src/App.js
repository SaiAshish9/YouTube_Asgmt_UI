import { Header } from "./layout";
import { Container, Content } from "./styles";
import { Feeds, Sidebar } from "./components";

import "./index.css";

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <Feeds />
      </Content>
    </Container>
  );
}

export default App;
