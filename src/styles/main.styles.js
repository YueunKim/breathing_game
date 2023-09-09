import styled, { createGlobalStyle, keyframes } from "styled-components";
import back from '../assets/images/back.png'

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

export const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 10px solid;
`;

export const People = styled.div.attrs((props) => ({
  style: {
    left: `${props.$position * 10}%`,
  },
}))`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  animation: ${({ position }) => move(position)} 5s linear forwards;
`;

export const PeopleBody = styled.img`
  z-index: 2;
  cursor: pointer;
`;

export const PeopleHead = styled.img.attrs((props) => ({
  style: {
    bottom: `${props.$bottomValue}px`
  },
}))`
  position: fixed;
  z-index: 1;
  transition: bottom 1s ease;
`;

export const Status = styled.div`
  position: relative;
  top: -50px;
  display: flex;
  align-items: center;
`;

export const StatusBar = styled.div.attrs((props) => ({
  style: {
    width: `${props.$oxygenLevel}%`
  }
}))`
  height: 40px;
  width: 100%;
  border-radius: 20px;
  background-color: skyblue;
  transition: width 1s ease;
`;

export const StatusOxygen = styled.img.attrs((props) => ({
  style: {
    right: `${90 - props.$oxygenLevel}%`
  },
}))`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: right 1s ease;
`;


// 동적으로 keyframes 생성
export const move = (position) => keyframes`
  0% {
    left: 0%;
    transform: translateY(0);
  }
  20% {
    transform: translateY(-10px);
  }
  40% {
    transform: translateY(10px);
  }
  60% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(10px);
  }
  100% {
    left: ${position}%;
    transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;