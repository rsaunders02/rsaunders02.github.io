import styled from "@emotion/styled";
import "./App.css";
import { Header } from "./Navigation/Main";
import { Card } from "./Projects";

//comment

export const App = () => {
  return (
    <Container>
      <Header />
      <CardContainer>
        <Card
          title="School Donation Site"
          description="helps teachers get supplies"
        />
        <Card title="Project X" description="Another placeholder project" />
        <Card title="Project Y" description="Another Cool Project" />
      </CardContainer>
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

const CardContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "2em",
});
