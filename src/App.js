import "./App.css";
import Greet from "./component/greet/greet";
import styled, { createGlobalStyle } from "styled-components";
import Nav from "./component/nav/nav";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

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
  position: relative;
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  background: ${(props) => (props.color ? props.color : " white")};
  display: flex;
  align-items: center;
`;
const H2 = styled.h2`
  text-align: center;
`;
function App() {
  const sectionRef = useRef([]);

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -80,
      duration: 0.1,
    });
  };
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -50,
      ease: "power4.out",
    });
  };

  const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fadeIn(".text");
      } else {
        fadeOut(".text");
      }
    });
  };
  const option = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };
  const intersection = useIntersection((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fadeIn(".text");
      } else {
        fadeOut(".text");
      }
    });
  }, option);
  // intersection && intersection.isIntersecting
  //   ? fadeIn(".text")
  //   : fadeOut(".text");
  const test = () => {
    console.log(sectionRef.current[0]);
  };
  useEffect(() => {
    sectionRef.current.map((item) => intersection(item));
  }, []);
  return (
    <Wrapper>
      <Section>
        <GlobalStyle />
        <Nav />
        <Greet />
      </Section>
      <Section ref={(el, index) => (sectionRef.current[0] = el)} color="orange">
        <H2 className="text">
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
        </H2>
        <button onClick={test}>헳로</button>
      </Section>
      <Section color="lightgray" ref={(el) => (sectionRef.current[1] = el)}>
        <H2 className="text">
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
        </H2>
      </Section>
      <Section color="violet" ref={(el) => (sectionRef.current[2] = el)}>
        <H2 className="text">
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
        </H2>
      </Section>
    </Wrapper>
  );
}

export default App;
