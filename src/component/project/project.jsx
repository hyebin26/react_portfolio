import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "Hotel Page Clone Coding",
    content:
      "템플릿을 참고해서 만든 클론코딩 홈페이지입니다. Scss, 바닐라 자바스크립트, HTML을 사용했습니다. 페이지는 HOME, PROPERTY, PAGES 3페이지를 구현했습니다. 바닐라 자바스크립트로 이미지 슬라이더, 비디오 팝업, 햄버거 내비게이션, 썸네일 이미지 등을 구현하였습니다. 또한 PROPERTY페이지에서는 Google Maps API를 사용해서 지도를 구현했습니다.",
    link: "https://hyebin26.github.io/clone_coding/",
    sourceLink: "https://github.com/hyebin26/clone_coding",
    img: "./img/hotel.gif",
  },
  {
    title: "Review Page",
    content:
      "영화와 독서의 기록을 남기기 위해 만든 게시판 형식의 페이지 입니다. NodeJs, Express, Mysql, 바닐라 자바스크립트를 이용해서 만들었습니다. 게시글, 댓글, 로그인, 회원가입 등을 Mysql로 저장하여 관리하고 있습니다. 그리고 검색 부분은 검색을 하면 서버로 검색 내용을 전달하고 전달받은 내용 중 DB에 있는 제목, 내용과 일치하는 내용이 있으면 가져오는 것으로 구현했습니다. 또한 게시글이 점점 많아지면 페이지가 자동적으로 추가되는 페이지네이션을 추가했습니다. 또한 Cloudynary API를 통해 이미지를 업로드하는 기능을 추가했습니다. 서버는 Express를 사용해서 heroku에 배포하였고 어플리케이션 또한 js파일을 웹팩을 이용해 번들링 한 후 heroku에 배포하였습니다. * 페이지를 오래 방문하지 않을 시 서버가 잠기므로 새로고침을 누르고 잠시만 기다려주세요! *",
    link: "https://review-vanillajs.herokuapp.com/",
    sourceLink: "https://github.com/hyebin26/vanillaJs_review",
    img: "./img/review.gif",
  },
  {
    title: "Diet Calendar",
    content:
      "이 앱을 만든 이유는 다이어트를 할 때 자신의 키와 몸무게에 따른 권장 칼로리를 계산하고 그 권장 칼로리에 따른 결과를 기록하고 싶어서 만들었습니다. 우선 로그인은 firebase로 구현하였으며 firebase를 사용한 이유는 간단하게 로그인을 구현할 수 있고 firebase DB를 사용하기 편리하기 때문입니다. 메인페이지에서는 아침, 점심, 저녁 칼로리를 기록할 수 있으며, 권장 칼로리를 기준으로 더 많이 섭취할 시 칼로리를 표시하는 색을 빨간색으로 표시하게 했습니다. 그리고 사용자의 정보를 저장하고 관리하는 Database는 firebase에 realtime DB를 통해 구현하였습니다.",
    link: "https://hyebin26.github.io/react-dietCalendar/",
    sourceLink: "https://github.com/hyebin26/react-dietCalendar",
    img: "./img/calendar.gif",
  },
  {
    title: "StockGame",
    content:
      "이 앱의 이유는 StockGame으로 간단하게 할 수 있는 모의주식 게임입니다. 로그인은 firebase, Database는 firebase에 realtime database를 사용하여 구현했습니다. 상태관리를 간편하게 하기 위해 reudx-toolkit을 사용했으며, 그래프를 그리는 것은 chart.js를 사용했습니다.",
    link: "https://hyebin26.github.io/react_stockgame/",
    sourceLink: "https://github.com/hyebin26/react_stockgame",
    img: "./img/stockgame.gif",
  },
];

const BREAK_POINT_MOBILE = 768;

const ProjectWrapper = styled.section`
  position: relative;
`;
const ProjectUl = styled.ul`
  width: 400%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: block;
  }
`;
const ProjectLi = styled.li`
  width: 100%;
  display: flex;
  padding: 8rem 2rem;
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
  padding-left: 1.5rem;
  font-family: "Gowun Dodum", sans-serif;
  font-size: 1.1rem;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  color: white;
  text-transform: uppercase;
`;
const Content = styled.p`
  padding-top: 1.5rem;
  color: #e0dfd5;
`;
const Link = styled.a`
  text-decoration: underline;
  color: #e0dfd5;
  &:hover {
    color: #00eb7f;
  }
`;
const Category = styled.h1`
  font-size: 2.2rem;
  position: absolute;
  top: 3rem;
  left: 2rem;
  color: #00eb7f;
`;
const Span = styled.span``;
const TextSmallBox = styled.div`
  ${(props) => (props.link ? "margin-top:auto;" : "")}
`;
const Project = (props) => {
  const ulRef = useRef(null);
  const listRef = useRef([]);

  const createLinetRefs = (el, index) => {
    listRef.current[index] = el;
  };

  useEffect(() => {
    const element = ulRef.current;
    const totalLength = listRef.current.length;
    ScrollTrigger.saveStyles([element, listRef.current]);
    const tl = gsap.timeline();
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function () {
        gsap.to(listRef.current, {
          xPercent: -100 * (totalLength - 1),
          ease: "none",
          duration: 0.1,
          scrollTrigger: {
            trigger: element,
            pin: true,
            scrub: 1,
            snap: 1 / (totalLength - 1),
            end: () => "+=" + element.offsetWidth,
          },
        });
      },
      "(max-width:768px)": function () {},
      all: function () {
        listRef.current.map((el, index) => {
          gsap.to("body", {
            scrollTrigger: {
              trigger: element,
              start: "top center+=100",
              toggleActions: "play none none reverse",
            },
            backgroundColor: "#222831",
          });
        });
        listRef.current.map((el, index) => {
          gsap.fromTo(
            ".socialBox",
            { display: "none" },
            {
              scrollTrigger: {
                trigger: element,
                start: "top center+=100",
                toggleActions: "play none none reverse",
              },
              duration: 0.1,
              display: "block",
            }
          );
        });
        listRef.current.map((el, index) => {
          gsap.from(el, {
            duration: 1,
            opacity: 0,
            y: 60,
            scrollTrigger: {
              trigger: ulRef.current,
              start: "top bottom+=100",
              toggleActions: "play none none reverse",
            },
          });
        });
      },
    });
  }, [gsap]);
  useEffect(() => {}, []);

  return (
    <Element name="project">
      <ProjectWrapper>
        <ProjectUl ref={ulRef} className="itemBox">
          <Category>PROJECT</Category>
          {data.map((item, index) => {
            return (
              <ProjectLi
                ref={(e) => createLinetRefs(e, index)}
                className="project1"
              >
                <ProjectImgBox>
                  <ProjectImg src={item.img} />
                </ProjectImgBox>
                <ProjectTextBox>
                  <Title>{item.title}</Title>
                  <Content>{item.content}</Content>
                  <TextSmallBox link>
                    <Span>Link: </Span>
                    <Link href={item.link}>{item.link}</Link>
                  </TextSmallBox>
                  <TextSmallBox>
                    <Span>Source Link: </Span>
                    <Link href={item.sourceLink}>{item.sourceLink}</Link>
                  </TextSmallBox>
                </ProjectTextBox>
              </ProjectLi>
            );
          })}
        </ProjectUl>
      </ProjectWrapper>
    </Element>
  );
};

export default Project;
