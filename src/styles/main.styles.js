import styled, { createGlobalStyle, keyframes, css } from "styled-components";
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

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Border = styled.div`
  margin: 0;
  position: fixed;
  color: gray;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  border: 20px solid;
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
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  left: 0;
  color: gray;
`;

export const People = styled.div.attrs((props) => ({
  style: {
    left: `${props.$position}%`,
    animationDelay: `${props.$animationDelay}s`,
  },
}))`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 3;
  bottom: 0;

  opacity: ${({ $isBackground }) => ($isBackground ? 1 : 0)};

  animation: ${({ $isBackground, $position }) =>
    $isBackground
      ? "none"
      : css`
          ${fadeIn} 1s forwards, ${move($position)} 5s linear forwards
        `};
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
  width: 80%;
  display: flex;
  align-items: center;
`;

export const StatusBar = styled.div.attrs((props) => ({
  style: {
    width: `${props.$oxygenLevel}%`
  }
}))`
  height: 25px;
  border-radius: 10px;
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


export const Score = styled.div`
  position: fixed;
  top: 3%;
  right: 5%;
  font-size: 2rem;
  font-weight: 800;
  z-index: 6;
`;

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

