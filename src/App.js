import { useEffect } from "react";
import { Header } from "./layout";
import { Container, Content } from "./styles";
import { Feeds, Sidebar } from "./components";

import "./index.css";
import { useStore } from "./store";
import { useLocation } from "react-router-dom";

function App() {
  const {
    actions: { fetchYTVideos },
  } = useStore();

  const localion = useLocation();

  useEffect(() => {
    fetchYTVideos(
      localion?.search.includes("?search_query")
        ? "/search?search=" + localion.search.split("=")[1]
        : ""
    );
  }, []);

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
