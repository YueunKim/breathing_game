import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 12;
`;

export const GameOverContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const GameOverTitleBox = styled.div`
  display: flex;
  background: white;
  padding: 2rem;
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const RestartBtn = styled.button`
  padding: 2rem;
  color: whitesmoke;
  font-size: x-large;
  font-weight: 500;
  border-radius: 20px;
  border: none; 
  cursor: pointer;
  background-color: #526faa;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); 
  transition: all 0.3s ease;
  // hover
  &:hover {
    background-color: #405a80;
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.3); 
  }

  // 클릭 효과
  &:active {
    background-color: #405a80;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
    transform: translateY(4px);
  }
`;

export const ScoreText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
`;