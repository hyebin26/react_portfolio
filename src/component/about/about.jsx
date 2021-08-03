import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.section`
  height: 100vh;
  padding: 0 2rem;
`;
const AboutContent = styled.p``;
const AboutTitle = styled.h1`
  color: #00eb7f;
  font-size: 2.2rem;
`;
const About = (props) => {
  return (
    <AboutWrapper>
      <AboutTitle>ABOUT ME</AboutTitle>
      <AboutContent>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, vero!
        Suscipit doloremque, maiores ex ut iure molestias dolorem tenetur
        mollitia quis quae excepturi deserunt eius non autem! Quidem, voluptatum
        officiis? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quia, vero! Suscipit doloremque, maiores ex ut iure molestias dolorem
        tenetur mollitia quis quae excepturi deserunt eius non autem! Quidem,
        voluptatum officiis?
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
