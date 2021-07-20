import "./App.css";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
  
  body{
    font-family: 'Otomanopee One', sans-serif ;
    scroll-behavior: smooth;
    scrollbar-color: black;
    scrollbar-width: thin;
    scrollbar-track-color: #fff;
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

const Greeting = styled.div``;
const ImgBox = styled.div``;
const H2 = styled.h2``;

const Wrapper = styled.section`
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 5px; /*스크롤바의 너비*/
  }
  &::-webkit-scrollbar-thumb {
    background-color: black; /*스크롤바의 색상*/
  }
`;
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Greeting />
      <H2>h2</H2>
      <H2>h2</H2>
      <H2>h2</H2>
      <H2>h2</H2>
      <H2>h2</H2>
      <H2>h2</H2>
      <H2>h2</H2>
      <H2>h2</H2>
      <H2>h2</H2>
      <H2>h2</H2>
      <H2>h2</H2>
      <H2>h2</H2>
      <H2>h2</H2>
      <H2>h2</H2>
      <H2>h2</H2>
      <ImgBox />
    </Wrapper>
  );
}

export default App;
