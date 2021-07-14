import React from "react";
import styled, { css, keyframes } from "styled-components";
import SocialIcon from "../socialIcon/socialIcon";

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 1.5rem 0;
`;

const H1 = styled.h1`
  color: ${(props) => props.color || "#222831"};
  font-size: 3.3rem;
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

const Text = styled.p`
  color: #939597;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Div = styled.div`
  padding: 2rem 0;
  text-align: center;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &::before {
    content: "";
    display: block;
    background: #f5df4d;
    width: 50px;
    height: 5px;
    margin-bottom: 2rem;
  }
`;

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
        <Text>Loasdlkasdlaksdlaskd laskdlaskdl askdlasdkalsdk</Text>
        <Text>Loasdlkasdlaksdlaskd laskdlaskdl.</Text>
        <Text>Loasdlkasdlaksdlaskd laskdlaskdl.</Text>
        <Text>Loasdlkasdlaksdlaskd laskdlaskdl.</Text>
      </TextDiv>
      <SocialIcon />
    </Container>
  );
};

export default Greet;
