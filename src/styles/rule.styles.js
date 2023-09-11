import styled, { createGlobalStyle, keyframes } from "styled-components";
import back from "../assets/images/back.png";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
  }
`;

export const BackImg = styled.div`
  background-image: url(${back});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 0.5;
  z-index: 0; // 변경
  height: 100vh; // 추가
  width: 100vw; // 추가
  position: absolute; // 추가
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;


export const Oxygen = styled.img`
  margin: 1rem;
  animation: ${rotateAnimation} 2s infinite ease-in-out;
`;

export const RuleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: whitesmoke;
  border-radius: 20px;
  text-align: left;
  padding: 2rem;
`;

export const RuleTitle = styled.h2`
  /* margin-top: 3rem; */
`;

export const RuleTextBox = styled.p`
  text-align: left;
`;

export const RuleText = styled.p`
  font-size: large;
  font-weight: 600;
`;

export const StartBtn = styled.button`
  padding: 2rem;
  color: whitesmoke;
  font-size: large;
  font-weight: 500;
  border-radius: 20px;
  border: none; // border를 없애고
  cursor: pointer;
  background-color: #526faa;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); // 그림자 추가
  transition: all 0.3s ease; // 모든 변화에 0.3초의 시간을 주고 ease 함수로 부드럽게 만들기

  // hover 효과 추가
  &:hover {
    background-color: #405a80; // 배경색 변경
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.3); // 그림자 크기 조절
  }

  // 클릭 효과 추가
  &:active {
    background-color: #405a80;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3); // 그림자 크기를 줄임
    transform: translateY(4px); // y축으로 약간 이동해서 눌림 효과를 줌
  }
`;