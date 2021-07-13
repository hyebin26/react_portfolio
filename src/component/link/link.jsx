import React from "react";
import styled from "styled-components";

const A = styled.a`
  font-size: 1.5rem;
  color: #222831;
  transition: 0.3s;
  &:hover {
    color: #f5df4d;
  }
`;

const Link = ({ children, ...rest }) => {
  console.log(rest);
  return (
    <A href="#" {...rest}>
      {children}
    </A>
  );
};

export default Link;
