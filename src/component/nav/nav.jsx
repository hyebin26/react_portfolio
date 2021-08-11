import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const NavWrapper = styled.section`
  padding: 0 2rem;
`;
const NavUl = styled.ul`
  display: flex;
`;
const NavList = styled.li`
  padding: 1.5rem 0;
  padding-right: 4rem;
  & {
    cursor: pointer;
    color: black;
    transition: 0.2s;
    &:hover {
      color: #00eb7f;
    }
  }
`;
const NavLink = styled.a``;

const Nav = () => {
  return (
    <NavWrapper>
      <NavUl>
        <NavList>
          <Link to="home" smooth={true} spy={true} offset={-65}>
            Home
          </Link>
        </NavList>
        <NavList>
          <Link to="project" smooth={true} spy={true}>
            Project
          </Link>
        </NavList>
        <NavList>
          <Link to="about" smooth={true} spy={true} duration={1000}>
            About me
          </Link>
        </NavList>
        <NavList>
          <Link to="contact" smooth={true} spy={true} duration={1500}>
            Contact
          </Link>
        </NavList>
      </NavUl>
    </NavWrapper>
  );
};

export default Nav;
