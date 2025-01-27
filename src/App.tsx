import styled from "@emotion/styled";
import "./App.css";
import { Header } from "./Navigation/Main";
import { Card } from "./Projects";

export const App = () => {
  return (
    <Container>
      <Header />
      <Card />
    </Container>
  );
};

export default App;

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
});
