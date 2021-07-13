import React from "react";
import styled from "styled-components";
import Link from "../link/link";

const Container = styled.section`
  padding: 2rem 5rem;
  display: flex;
  justify-content: space-between;
`;

const NavUl = styled.ul`
  display: flex;
`;

const NavLi = styled.li`
  padding-left: 1rem;
`;

const Nav = (props) => {
  const test = (e) => {
    e.preventDefault();
    alert("good");
  };
  return (
    <Container>
      <Link onClick={test}>Hyebin</Link>
      <NavUl>
        <NavLi>
          <Link>About Me</Link>
        </NavLi>
        <NavLi>
          <Link>Project</Link>
        </NavLi>
        <NavLi>
          <Link>Skils</Link>
        </NavLi>
        <NavLi>
          <Link>Contact</Link>
        </NavLi>
      </NavUl>
    </Container>
  );
};

export default Nav;
