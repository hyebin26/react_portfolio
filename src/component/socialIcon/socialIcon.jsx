import React from "react";
import { FiGithub } from "react-icons/fi";
import { SiNotion } from "react-icons/si";
import styled from "styled-components";

const SocialDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: -25px;
  top: 45%;
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  background: #f5df4d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  .git {
    font-size: 1.7rem;
  }
  &:hover {
    box-shadow: 3px 0px 10px 0px #9c9c9c, 10px 0px 0px 0px rgb(0 0 3 / 0%);
  }
`;

const SocialIcon = (props) => {
  return (
    <SocialDiv>
      <SocialLink href="#">
        <FiGithub className="git" />
      </SocialLink>
      <SocialLink href="#">
        <SiNotion />
      </SocialLink>
    </SocialDiv>
  );
};

export default SocialIcon;
