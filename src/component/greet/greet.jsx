import React from "react";
import styled, { css, keyframes } from "styled-components";
const Container = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap");
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Otomanopee One", sans-serif;
`;

const H1 = styled.h1`
  color: ${(props) => props.color || "#222831"};
  font-size: 3rem;
  font-weight: 900;
`;

const LoadingContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222831;
`;
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const animation = css`
  ${spin} 1.5s infinite linear;
`;

const Loading = styled.div`
  --clock-color: #F5dF4D;
  --clock-width: 3rem;
  --clock-radius: calc(var(--clock-width) / 2);
  --clock-minute-length: calc(var(--clock-width) * 0.4);
  --clock-hour-length: calc(var(--clock-width) * 0.2);
  --clock-thickness: 0.2rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--clock-width);
  height: var(--clock-width);
  border: 5px solid #F5dF4D;
  border-radius: 50%;
  animation:${animation}
  &::after {
    position: absolute;
    content: "";
    top: calc(var(--clock-radius) * 0.05);
    width: var(--clock-thickness);
    background: #F5dF4D;
    border-radius: 10px;
    transform-origin: center calc(100% - calc(var(--clock-thickness) / 2));
  }
  &::after {
    height: var(--clock-minute-length);
  }
`;

const P = styled.p`
  color: #939597;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  &::before {
    content: "";
    display: block;
    background: #f5df4d;
    width: 50px;
    height: 5px;
    left: 30%;
    margin-bottom: 2rem;
  }
`;
const Div = styled.div`
  padding: 2rem 0;
  text-align: center;
`;
const TextDiv = styled.div``;
const Greet = (props) => {
  if (false) {
    return (
      <LoadingContainer>
        <Loading></Loading>
      </LoadingContainer>
    );
  }
  return (
    <Container>
      <Div>
        <H1 color="#F5dF4D">2021</H1>
        <H1>Hyebin Hwang</H1>
        <H1>Frontend Developer</H1>
      </Div>
      <TextDiv>
        <P>안녕하세요 반갑습니다.</P>
      </TextDiv>
    </Container>
  );
};

export default Greet;
