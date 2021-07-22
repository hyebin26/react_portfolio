import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiNotion } from "react-icons/si";
import styled from "styled-components";

const SocialWrapper = styled.section`
  position: fixed;
`;
const SocialLink = styled.a`
  display: block;
  transition: 0.3s;
  &:hover {
    color: #00eb7f;
  }
`;
const H4 = styled.h2`
  padding: 1.5rem;
`;
const SocialUl = styled.ul`
  position: fixed;
  bottom: 50px;
  text-align: center;
  left: 30px;
`;
const SocialList = styled.li`
  padding-top: 0.8rem;
`;
const SoclaiTitle = styled.p`
  text-decoration: underline;
`;

const SocialIcon = (props) => {
  return (
    <SocialWrapper>
      <H4>Logo</H4>
      <SocialUl>
        <SocialList>
          <SocialLink href="#">
            <AiFillGithub className="git" />
            <SoclaiTitle>Github</SoclaiTitle>
          </SocialLink>
        </SocialList>
        <SocialList>
          <SocialLink href="#">
            <SiNotion />
            <SoclaiTitle>Notion</SoclaiTitle>
          </SocialLink>
        </SocialList>
      </SocialUl>
    </SocialWrapper>
  );
};

export default SocialIcon;
