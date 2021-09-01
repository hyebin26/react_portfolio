import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiNotion } from "react-icons/si";
import styled from "styled-components";
import { Link } from "react-scroll";

const SocialWrapper = styled.section`
  .logo {
    position: fixed;
    font-size: 1.5rem;
    top: 20px;
    left: 30px;
    color: #e0dfd5;
    cursor: pointer;
    z-index: 999;
  }
  @media only screen and (max-width: 600px) {
    .logo {
      left: 15px;
      font-size: 1.1rem;
    }
  }
`;
const SocialLink = styled.a`
  display: block;
  transition: 0.3s;
  color: #e0dfd5;
  &:hover {
    color: #00eb7f;
  }
`;

const SocialUl = styled.ul`
  position: fixed;
  bottom: 50px;
  text-align: center;
  left: 30px;
  @media only screen and (max-width: 600px) {
    left: 15px;
  }
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
      <Link
        to="home"
        className="logo"
        smooth={true}
        spy={true}
        duration={1000}
        offset={-1000}
      >
        Hyebin
      </Link>
      <SocialUl>
        <SocialList>
          <SocialLink href="https://github.com/hyebin26">
            <AiFillGithub className="git" />
            <SoclaiTitle>Github</SoclaiTitle>
          </SocialLink>
        </SocialList>
        <SocialList>
          <SocialLink href="https://faint-vacuum-1d5.notion.site/801dea06859546f88c55fb963d7bc548">
            <SiNotion />
            <SoclaiTitle>Notion</SoclaiTitle>
          </SocialLink>
        </SocialList>
      </SocialUl>
    </SocialWrapper>
  );
};

export default SocialIcon;
