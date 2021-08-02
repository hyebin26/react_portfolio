import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "Hotel Page Clone Coding",
    content:
      "템플릿을 참고해서 만든 클론코딩 홈페이지입니다. Scss,바닐라 자바스크립트,HTMl을 사용했습니다. 구현한 페이지는 HOME,PROPERTY,PAGES 이며 바닐라 자바스크립트로 이미지 슬라이더, 비디오 팝업, 햄버거 내비게이션, 썸네일 이미지 등을 구현하였습니다. PROPERTY에 Google Maps API를 사용해서 지도를 가져왔습니다.",
  },
  {
    title: "Review Page",
    content:
      "영화와 독서의 기록을 남기기 위해 만든 게시판 형식의 페이지 입니다. NodeJs, Express, Mysql, 바닐라 자바스크립트를 이용해서 만들었습니다. 작성한 글, 댓글을 Mysql로 저장하여 관리하고 있습니다. 그리고 검색 부분은 검색을 하면 서버로 검색 내용을 전달하고 전달받은 내용 중 DB에 있는 제목, 내용과 일치하는 내용이 있으면 가져오는 것으로 구현했습니다. 또한 게시글이 점점 많아지면 페이지가 자동적으로 추가되는 페이지네이션을 추가했습니다. 그리고 회원가입과 로그인 또한 DB를 통해 관리합니다. 또한 Cloudynary API를 통해 이미지를 업로드하는 기능을 추가했습니다. 서버는 Express를 사용해서 heroku에 배포하였고 어플리케이션 또한 js파일을 웹팩을 이용해 번들링 한 후 heroku에 배포하였습니다.",
  },
  {
    title: "Diet Calendar",
    content:
      "이 앱을 만든 이유는 다이어트를 할 때 자신의 키와 몸무게에 따른 권장 칼로리를 계산하고 그 권장 칼로리에 따른 결과를 기록하고 싶어서 만들었습니다. 우선 로그인은 firebase로 구현하였으며 firebase를 사용한 이유는 간단하게 로그인을 구현할 수 있고 firebase DB를 사용하기 편리하기 때문입니다. 메인페이지에서는 아침, 점심, 저녁 칼로리를 기록할 수 있으며, 권장 칼로리를 기준으로 더 많이 섭취할 시 칼로리를 표시하는 색을 빨간색으로 표시하게 했습니다. 그리고 사용자의 정보를 저장하고 관리하는 Database는 firebase에 realtime DB를 통해 구현하였습니다.",
  },
  {
    title: "StockGame",
    content:
      "이 앱의 이유는 StockGame으로 간단하게 할 수 있는 모의주식 게임입니다. 로그인은 firebase, Database는 firebase에 realtime database를 사용하여 구현했습니다. 상태관리를 간편하게 하기 위해 reudx-toolkit을 사용했으며, 그래프를 그리는 것은 chart.js를 사용했습니다.",
  },
];

const ProjectWrapper = styled.section``;
const ProjectUl = styled.ul`
  width: 400%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
`;
const ProjectLi = styled.li`
  width: 100%;
  display: flex;
  padding: 8rem 80px;
  color: #e0dfd5;
`;
const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
`;
const ProjectImgBox = styled.div`
  display: flex;
  flex: 1 0 55%;
  border-radius: 1% 0 0 1%;
`;
const ProjectTextBox = styled.div`
  flex: 1 0 45%;
  border-radius: 0 1% 1% 0;
`;
const ProjectText = styled.p``;

const Project = (props) => {
  const ulRef = useRef(null);
  const listRef = useRef([]);

  const createLinetRefs = (el, index) => {
    listRef.current[index] = el;
  };

  useEffect(() => {
    const element = ulRef.current;
    const totalLength = listRef.current.length;
    gsap.to(listRef.current, {
      xPercent: -100 * (totalLength - 1),
      ease: "none",
      duration: 0.1,
      scrollTrigger: {
        trigger: element,
        pin: true,
        scrub: 1,
        snap: 1 / (totalLength - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + element.offsetWidth,
      },
    });
  }, []);
  useEffect(() => {}, []);
  useEffect(() => {
    listRef.current.map((el, index) => {
      gsap.from(el, {
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: el,
          start: "center center+=100",
          toggleActions: "play none none reverse",
        },
      });
    });
    listRef.current.map((el, index) => {
      gsap.to("body", {
        scrollTrigger: {
          trigger: el,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
        backgroundColor: "#222831",
        color: "",
      });
    });
    listRef.current.map((el, index) => {
      gsap.fromTo(
        ".socialBox",
        { display: "none" },
        {
          scrollTrigger: {
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
          duration: 0.1,
          display: "block",
        }
      );
    });
  }, []);

  return (
    <ProjectWrapper>
      <ProjectUl ref={ulRef} className="itemBox">
        <ProjectLi ref={(e) => createLinetRefs(e, 0)} className="project1">
          <ProjectImgBox>
            <ProjectImg src="./img/hotel.gif" />
          </ProjectImgBox>
          <ProjectTextBox>
            <ProjectText className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              dolores doloremque voluptatem ex fugiat tempore mollitia quibusdam
              assumenda animi eaque sint molestiae veniam praesentium,
              repellendus asperiores quidem. Modi, debitis veniam?
            </ProjectText>
          </ProjectTextBox>
        </ProjectLi>
        <ProjectLi ref={(e) => createLinetRefs(e, 1)} className="project2">
          <ProjectImgBox>
            <ProjectImg src="./img/review.gif" />
          </ProjectImgBox>
          <ProjectTextBox>
            <ProjectText>Section2</ProjectText>
          </ProjectTextBox>
        </ProjectLi>
        <ProjectLi ref={(e) => createLinetRefs(e, 2)} className="project3">
          <ProjectImgBox>
            <ProjectImg src="./img/calendar.gif" />
          </ProjectImgBox>
          <ProjectTextBox>
            <ProjectText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio voluptatum pariatur rem voluptate rerum sed itaque
              ratione quam minima, tenetur laborum accusamus, excepturi
              explicabo quos cumque dolorem dignissimos at quisquam.
            </ProjectText>
          </ProjectTextBox>
        </ProjectLi>
        <ProjectLi ref={(e) => createLinetRefs(e, 3)} className="project4">
          <ProjectImgBox>
            <ProjectImg src="./img/stockgame.gif" />
          </ProjectImgBox>
          <ProjectTextBox>
            <ProjectText>Section4</ProjectText>
          </ProjectTextBox>
        </ProjectLi>
      </ProjectUl>
    </ProjectWrapper>
  );
};

export default Project;
