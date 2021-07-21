import React from "react";
import styled from "styled-components";

const NavWrapper = styled.section``;
const NavUl = styled.ul`
  display: flex;
`;
const NavList = styled.li`
  padding: 1.5rem 1rem;
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
          <NavLink href="#">About me</NavLink>
        </NavList>
        <NavList>
          <NavLink href="#">Project</NavLink>
        </NavList>
        <NavList>
          <NavLink href="#">Contact</NavLink>
        </NavList>
      </NavUl>
    </NavWrapper>
  );
};

export default Nav;
