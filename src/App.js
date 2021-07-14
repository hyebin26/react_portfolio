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
  html{
    scroll-behavior: smooth;
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
  svg{
    color:white;
    font-size:1.5rem;
`;
const Wrapper = styled.section`
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
`;
const Section = styled.section`
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  background: ${(props) => (props.color ? props.color : " white")};
`;

function App() {
  return (
    <Wrapper>
      <Section>
        <GlobalStyle />
        <Nav />
        <Greet />
      </Section>
      <Section color="orange"></Section>
      <Section color="lightgray"></Section>
      <Section color="violet"></Section>
    </Wrapper>
  );
}

export default App;
