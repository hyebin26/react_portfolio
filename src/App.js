import "./App.css";
import Greet from "./component/greet/greet";
import styled, { createGlobalStyle } from "styled-components";
import Nav from "./component/nav/nav";
import { useRef } from "react";
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
`;
const H2 = styled.h2`
  text-align: center;
`;
function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const option = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const section1Intersection = useIntersection(section1Ref, option);
  const section2Intersection = useIntersection(section2Ref, option);
  const section3Intersection = useIntersection(section3Ref, option);

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };
  section1Intersection && section1Intersection.isIntersecting
    ? fadeIn(".text1")
    : fadeOut(".text1");
  section2Intersection && section2Intersection.isIntersecting
    ? fadeIn(".text2")
    : fadeOut(".text2");
  section3Intersection && section3Intersection.isIntersecting
    ? fadeIn(".text3")
    : fadeOut(".text3");
  return (
    <Wrapper>
      <Section ref={section1Ref}>
        <GlobalStyle />
        <Nav />
        <Greet />
      </Section>
      <Section color="orange" ref={section1Ref}>
        <H2 className="text1">
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
        </H2>
      </Section>
      <Section color="lightgray" ref={section2Ref}>
        <H2 className="text2">
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
        </H2>
      </Section>
      <Section color="violet" ref={section3Ref}>
        <H2 className="text3">
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
        </H2>
      </Section>
    </Wrapper>
  );
}

export default App;
