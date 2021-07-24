import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Scroll들어오면 배경색 바꾸고 => 호라이즌 슬라이드

const ProjectWrapper = styled.section``;
const ProjectUl = styled.ul`
  width: 600%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
`;
const ProjectLi = styled.li`
  width: 50%;
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
  const ulRef = useRef(null);
  const listRef = useRef([]);

  const createLinetRefs = (el, index) => {
    listRef.current[index] = el;
  };

  useEffect(() => {
    const element = ulRef.current;
    gsap.to(element.querySelector(".project2"), {
      scrollTrigger: {
        trigger: element.querySelector(".project2"),
        toggleActions: "restart pause restart reset",
      },
      duration: 0.5,
      backgroundColor: "black",
      ease: "none",
    });

    const totalLength = listRef.current.length;
    gsap.to(listRef.current, {
      xPercent: -100 * (totalLength - 1),
      ease: "none",
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
  return (
    <ProjectWrapper>
      <ProjectUl ref={ulRef} className="itemBox">
        <ProjectLi ref={(e) => createLinetRefs(e, 0)} className="project1">
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
        <ProjectLi ref={(e) => createLinetRefs(e, 1)} className="project2">
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
        <ProjectLi ref={(e) => createLinetRefs(e, 2)} className="project3">
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
        <ProjectLi ref={(e) => createLinetRefs(e, 3)} className="project4">
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
