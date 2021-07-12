import React from "react";
import styled from "styled-components";

const Container = styled.section``;

const H1 = styled.h1`
  color: blue;
`;

const Greet = (props) => {
  return (
    <Container>
      <H1>Hyebin Hwang</H1>
      <h1>Frontend Developer</h1>
    </Container>
  );
};

export default Greet;
