import React from "react";
import styled from "styled-components";

const GreetWrapper = styled.section`
  display: flex;
  padding-left: 1rem;
  height: 100vh;
  padding: 7rem 0;
`;
const TextContainer = styled.div`
  flex: 1 0 55%;
  font-family: "Do Hyeon", sans-serif;
`;
const ImgContainer = styled.div`
  flex: 1 0 45%;
`;
const GreetImg = styled.img`
  width: 250px;
`;
const TextFirst = styled.h1`
  font-size: 2rem;
`;
const ThumbImg = styled.img`
  width: 35px;
`;

const Greet = (props) => {
  return (
    <GreetWrapper>
      <TextContainer>
        <TextFirst>안녕하세요</TextFirst>
        <TextFirst>저는 프론트엔드 개발자 황혜빈이라고 합니다</TextFirst>
        <TextFirst>
          웹을 개발하고 배포하면서 프론트엔드에 대해 공부하고있습니다.
        </TextFirst>
        <TextFirst>
          또한 백엔드에도 관심을 가지고 전체적인 개발에 관심이 있습니다.
        </TextFirst>
        <TextFirst>
          페이지에 방문해주셔서 감사합니다.
          <ThumbImg src="./img/thumb.png" alt="thumbs up" />
        </TextFirst>
      </TextContainer>
      <ImgContainer>
        <GreetImg src="./img/d.jpg" alt="" />
      </ImgContainer>
    </GreetWrapper>
  );
};

export default Greet;
