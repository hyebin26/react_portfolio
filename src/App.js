import "./App.css";
import Greet from "./component/greet/greet";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
`;
const Section = styled.section``;

function App() {
  return (
    <Section>
      <GlobalStyle />
      <Greet />
    </Section>
  );
}

export default App;
