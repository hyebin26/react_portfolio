import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiNotion } from "react-icons/si";
import styled from "styled-components";

const SocialWrapper = styled.section``;
const SocialLink = styled.a`
  display: block;
  transition: 0.3s;
  color: #e0dfd5;
  &:hover {
    color: #00eb7f;
  }
`;
const Logo = styled.a`
  position: fixed;
  font-size: 1.5rem;
  font-weight: 800;
  top: 20px;
  left: 30px;
  color: #e0dfd5;
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
    <SocialWrapper className="socialBox">
      <Logo href="#">Logo</Logo>
      <SocialUl>
        <SocialList>
          <SocialLink href="https://github.com/hyebin26">
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
