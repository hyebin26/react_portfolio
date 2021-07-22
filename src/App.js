import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import Greet from "./component/greet/greet";
import Nav from "./component/nav/nav";
import SocialIcon from "./component/socialIcon/socialIcon";
import Project from "./component/project/project";

const GlobalStyle = createGlobalStyle`
  *{
    padding:0;
    margin:0;
    box-sizing:border-box;
    overflow-x:hidden;
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-thumb {
      background: black; 
      border-radius: 2px;
    };
  }
  body{
    font-family: 'Otomanopee One', sans-serif ;
   
  a{
    text-decoration:none;
    color:black;
  }
  li{
    list-style:none;
  }
  svg{
    font-size: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
`;
const SocialContainer = styled.div`
  flex: 1 0 10%;
`;
const ContentContainer = styled.div`
  flex: 1 0 90%;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <SocialContainer>
        <SocialIcon />
      </SocialContainer>
      <ContentContainer>
        <Nav />
        <Greet />
        <Project />
      </ContentContainer>
    </Wrapper>
  );
}

export default App;
