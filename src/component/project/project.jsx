import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";

// Scroll들어오면 배경색 바꾸고 => 호라이즌 슬라이드

const ProjectWrapper = styled.section``;
const ProjectUl = styled.ul``;
const ProjectLi = styled.li`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const ProjectImg = styled.img`
  width: 100%;
`;
const ProjectImgBox = styled.div`
  flex: 1 0 45%;
`;
const ProjectTextBox = styled.div`
  flex: 1 0 55%;
`;
const ProjectText = styled.p``;

const Project = (props) => {
  const ulRef = useRef();
  let sections = gsap.utils.toArray(".item");
  useEffect(() => {
    gsap.to(".project2", {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: "project2",
      },
    });
  }, []);
  useEffect(() => {}, [
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".itemBox",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + ulRef.current.offsetWidth,
      },
    }),
  ]);
  return (
    <ProjectWrapper>
      <ProjectUl ref={ulRef} className="itemBox">
        <ProjectLi className="item project1">
          <ProjectImgBox>
            <ProjectImg src="./img/d.jpg" />
          </ProjectImgBox>
          <ProjectTextBox>
            <ProjectText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              dolores doloremque voluptatem ex fugiat tempore mollitia quibusdam
              assumenda animi eaque sint molestiae veniam praesentium,
              repellendus asperiores quidem. Modi, debitis veniam?
            </ProjectText>
          </ProjectTextBox>
        </ProjectLi>
        <ProjectLi className="item project2">
          <ProjectImgBox>
            <ProjectImg src="./img/d.jpg" />
          </ProjectImgBox>
          <ProjectTextBox>
            <ProjectText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              dolores doloremque voluptatem ex fugiat tempore mollitia quibusdam
              assumenda animi eaque sint molestiae veniam praesentium,
              repellendus asperiores quidem. Modi, debitis veniam?
            </ProjectText>
          </ProjectTextBox>
        </ProjectLi>
        <ProjectLi className="item project3">
          <ProjectImgBox>
            <ProjectImg src="./img/d.jpg" />
          </ProjectImgBox>
          <ProjectTextBox>
            <ProjectText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              dolores doloremque voluptatem ex fugiat tempore mollitia quibusdam
              assumenda animi eaque sint molestiae veniam praesentium,
              repellendus asperiores quidem. Modi, debitis veniam?
            </ProjectText>
          </ProjectTextBox>
        </ProjectLi>
        <ProjectLi className="item project4">
          <ProjectImgBox>
            <ProjectImg src="./img/d.jpg" />
          </ProjectImgBox>
          <ProjectTextBox>
            <ProjectText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              dolores doloremque voluptatem ex fugiat tempore mollitia quibusdam
              assumenda animi eaque sint molestiae veniam praesentium,
              repellendus asperiores quidem. Modi, debitis veniam?
            </ProjectText>
          </ProjectTextBox>
        </ProjectLi>
      </ProjectUl>
    </ProjectWrapper>
  );
};

export default Project;
