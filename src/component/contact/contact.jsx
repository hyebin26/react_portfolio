import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { SiNotion } from "react-icons/si";
import { gsap } from "gsap";
import { Element } from "react-scroll";

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
      props.one ? "5rem;" : props.two ? "3.5rem;" : "9rem;"};
    text-align:center;
    z-index: ${(props) => (props.three ? "-1;" : "0")}
    margin-top: ${(props) => (props.three ? "-150px" : "0")};
    @media only screen and (max-width: 800px) {
      font-size:${(props) =>
        props.one ? "3rem;" : props.two ? "2rem;" : "6rem;"};
    }
    @media only screen and (max-width: 600px) {
      font-size:${(props) =>
        props.one ? "2rem;" : props.two ? "2.5rem;" : "5rem;"};
        margin-top: ${(props) => (props.three ? "-90px" : "0")};
    }
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
  @media only screen and (max-width: 800px) {
    margin-top: 15px;
  }
`;
const ContactSocialBox = styled.ul`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;
const ContactSocial = styled.li`
  margin: 0 1rem;
`;
const ContactSocialLink = styled.a`
  color: white;
  &:hover {
    color: #00eb7f;
  }
`;

const Contact = (props) => {
  const contactRef = useRef([]);
  const wrapperRef = useRef(null);
  const addRefs = (el, index) => {
    contactRef.current[index] = el;
  };
  useEffect(() => {
    gsap.from(contactRef.current, {
      opacity: 0,
      stagger: 0.8,
      y: 50,
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "bottom bottom+=100",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <Element name="contact">
      <ContactWrapper ref={wrapperRef}>
        <ContactText one ref={(e) => addRefs(e, 0)}>
          MINDING A PROJECT?
        </ContactText>
        <ContactText textColor="#00eb7f" two ref={(e) => addRefs(e, 1)}>
          LET'S TALK
        </ContactText>
        <ContactText textColor="#222831" three>
          HIRE ME
        </ContactText>
        <ContactBox ref={(e) => addRefs(e, 2)}>
          <ContactLink href="mailto:sksp4334@naver.com">
            sksp4334@naver.com
          </ContactLink>
        </ContactBox>
        <ContactSocialBox ref={(e) => addRefs(e, 3)}>
          <ContactSocial>
            <ContactSocialLink href="mailto:sksp4334@naver.com">
              <HiOutlineMail />
            </ContactSocialLink>
          </ContactSocial>
          <ContactSocial>
            <ContactSocialLink href="https://github.com/orgs/hyebin26">
              <AiFillGithub />
            </ContactSocialLink>
          </ContactSocial>
          <ContactSocial>
            <ContactSocialLink href="#">
              <SiNotion />
            </ContactSocialLink>
          </ContactSocial>
        </ContactSocialBox>
      </ContactWrapper>
    </Element>
  );
};

export default Contact;
