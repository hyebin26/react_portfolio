import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.section`
  padding: 0 2rem;
`;
const NavUl = styled.ul`
  display: flex;
`;
const NavList = styled.li`
  padding: 1.5rem 0;
  padding-right: 4rem;
`;
const NavLink = styled.a`
  cursor: pointer;
  color: black;
  transition: 0.2s;
  &:hover {
    color: #00eb7f;
  }
`;

const Nav = (props) => {
  return (
    <NavWrapper>
      <NavUl>
        <NavList>
          <NavLink href="#">Home</NavLink>
        </NavList>
        <NavList>
          <NavLink href="#">Project</NavLink>
        </NavList>
        <NavList>
          <NavLink href="#">About me</NavLink>
        </NavList>
        <NavList>
          <NavLink href="#">Contact</NavLink>
        </NavList>
      </NavUl>
    </NavWrapper>
  );
};

export default Nav;
