import "./App.css";
import Greet from "./component/greet/greet";
import styled, { createGlobalStyle } from "styled-components";
import Nav from "./component/nav/nav";

const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
  body{
    font-family: 'Otomanopee One', sans-serif ;
  }
  a{
    text-decoration:none;
  }
  li{
    list-style:none;
  }
`;
const Section = styled.section`
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5rem;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
`;

function App() {
  return (
    <Section>
      <GlobalStyle />
      <Nav />
      <Greet />
    </Section>
  );
}

export default App;
