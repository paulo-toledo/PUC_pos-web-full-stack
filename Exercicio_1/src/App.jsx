import React from "react";
import Cabecalho from "./components/Cabecalho";
import MenuNavegacao from "./components/MenuNavegacao";
import Artigo from "./components/Artigo";
import Sidebar from "./components/Sidebar";
import { Container, Content } from "./styles";

function App() {
  return (
    <Container>
      <Cabecalho />
      <MenuNavegacao />
      <Content>
        <Artigo />
        <Sidebar />
      </Content>
    </Container>
  );
}

export default App;
