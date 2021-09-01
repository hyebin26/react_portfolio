import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

const GreetWrapper = styled.section`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
`;
const TextContainer = styled.div`
  flex: 1 0 55%;
  font-family: "Gowun Dodum", sans-serif;
`;
const ImgContainer = styled.div`
  flex: 1 0 45%;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const GreetImg = styled.img`
  width: 250px;
`;
const Text = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  &:hover .greetImg {
    transform: scale(1.3);
  }
`;
const ThumbImg = styled.img`
  width: 35px;
`;

const Greet = (props) => {
  return (
    <Element name="home">
      <GreetWrapper>
        <TextContainer>
          <Text>안녕하세요.</Text>
          <Text>저는 프론트엔드 개발자 황혜빈이라고 합니다.</Text>
          <Text>
            웹을 개발하고 배포하면서 프론트엔드에 대해 공부하고있습니다.
          </Text>
          <Text>
            페이지에 방문해주셔서 감사합니다.
            <ThumbImg
              className="greetImg"
              src="./img/thumb.png"
              alt="thumbs up"
            />
          </Text>
        </TextContainer>
        <ImgContainer>
          <GreetImg src="./img/me.jpg" alt="hyebin" />
        </ImgContainer>
      </GreetWrapper>
    </Element>
  );
};

export default Greet;
