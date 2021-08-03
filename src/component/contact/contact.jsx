import React from "react";
import styled from "styled-components";

const ContactWrapper = styled.section`
  height: 100vh;
  padding: 0 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ContactText = styled.h1`
  color: ${(props) => props.textColor || "white"};
  -webkit-text-stroke: ${(props) => (props.three ? "1px dimgrey;" : "none")};
    font-size:${(props) =>
      props.one ? "3.5rem;" : props.two ? "2.8rem;" : "5rem;"};
    text-align:center;
    z-index: ${(props) => (props.three ? "-1;" : "0")}
    margin-top: ${(props) => (props.three ? "-60px" : "0")};
}
`;
const ContactLink = styled.a`
  color: #00eb7f;
  font-size: 1.2rem;
  border: 1px solid #00eb7f;
  border-left: none;
  border-right: none;
  padding: 0 0.3rem;
  &:hover {
    color: white;
    background: #00eb7f;
  }
`;
const ContactBox = styled.div`
  text-align: center;
  overflow: visible;
  margin-top: -40px;
`;

const Contact = (props) => {
  return (
    <ContactWrapper>
      <ContactText one>MINDING A PROJECT?</ContactText>
      <ContactText textColor="#00eb7f" two>
        LET'S TALK
      </ContactText>
      <ContactText textColor="#222831" three>
        HIRE ME
      </ContactText>
      <ContactBox>
        <ContactLink href="#">sksp4334@naver.com</ContactLink>
      </ContactBox>
    </ContactWrapper>
  );
};

export default Contact;
