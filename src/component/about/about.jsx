import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const AboutWrapper = styled.section`
  height: 100vh;
  max-width: 60rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  overflow: visible;
`;
const AboutContent = styled.p`
  font-family: "Gowun Dodum", sans-serif;
`;
const AboutTitle = styled.h1`
  color: #00eb7f;
  font-size: 2.2rem;
  text-align: center;
`;
const AboutContainer = styled.div`
  background: white;
  padding: 4rem 9rem;
  border-radius: 0.3%;
  font-size: 1.3rem;
  border-radius: 2rem;
`;
const AboutTextStrong = styled.strong`
  background: linear-gradient(to right, #00eb7f 0%, #330867 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const AboutBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem 0;
  overflow: visible;
`;

const AboutEmoziBox = styled.div`
  width: 10rem;
  height: 10rem;
  background: #00eb7f;
  font-size: 5rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
`;
const AboutEmozi = styled.p`
  overflow: hidden;
`;
const AboutEmoziText = styled.p`
  font-size: 1.2rem;
  background: rgb(57, 62, 70);
  padding: 0 0.8rem;
  color: white;
  border: 1px solid white;
`;
const AboutText = styled.p``;

const About = (props) => {
  const aboutWrapperRef = useRef(null);
  const aboutItemRef = useRef([]);

  const addAboutRef = (el, index) => {
    aboutItemRef.current[index] = el;
  };
  useEffect(() => {
    const wrapperCurrent = aboutWrapperRef.current;
    gsap.from(wrapperCurrent, {
      opacity: 0,
      x: 200,
      scrollTrigger: {
        trigger: wrapperCurrent,
        start: "center bottom",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <AboutWrapper ref={aboutWrapperRef}>
      <AboutContainer>
        <AboutTitle>ABOUT ME</AboutTitle>
        <AboutBox>
          <AboutEmoziBox>
            <AboutEmozi>👨</AboutEmozi>
            <AboutEmoziText>Developer</AboutEmoziText>
          </AboutEmoziBox>
        </AboutBox>
        <AboutContent>
          <AboutText>안녕하세요! 😁</AboutText>
          <AboutText>
            <AboutTextStrong>Frontend</AboutTextStrong>에 대해서 공부하고 있는
            주니어 개발자 황혜빈입니다.
          </AboutText>
          <AboutText>
            <AboutTextStrong>Javascript, React</AboutTextStrong>를 공부면서
            반응형 웹사이트, 웹 에플리케이션을 개발하면서 사용자 중심적으로
            생각하고 더 좋은 앱을 만들기 위해 노력하고 있습니다.
          </AboutText>
          <AboutText>
            새로운 프로젝트를 하면서 기존에 알고 있는 라이브러리가 아닌 새로운
            라이브러리를 도입하려고 노력했으며 새로운 지식을 배우는 것에 대한
            관심이 많습니다.
          </AboutText>
          <AboutText>
            그리고 웹을 스스로 배포하면서 웹에 대해서 이해하기 위해
            노력하였습니다. 또한 백엔드에도 관심을 가지고 서버도 배포하는 등
            개발 전반적으로 이해를 하기 위해 노력하고 있습니다.
          </AboutText>
        </AboutContent>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
