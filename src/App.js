import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import Greet from "./component/greet/greet";
import Nav from "./component/nav/nav";
import SocialIcon from "./component/socialIcon/socialIcon";
import Project from "./component/project/project";
import About from "./component/about/about";
import Contact from "./component/contact/contact";

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
    ::selection{
      background:#00eb7f;
      color:white;
    } 
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
        <About />
        <Contact />
      </ContentContainer>
    </Wrapper>
  );
}

export default App;
