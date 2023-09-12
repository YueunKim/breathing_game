import React from "react";
import {
  ModalStyle,
  GameOverContent,
  GameOverTitleBox,
  Title,
  ScoreText,
  RestartBtn,
} from "../styles/gameOver.styles";
import { Oxygen } from "../styles/rule.styles";
import oxygen from "../assets/images/oxygen.png";

const GameOver = ({ handleRestart, score }) => {
  return(
    <ModalStyle>
      <GameOverContent>
        <GameOverTitleBox>
          <Oxygen src={oxygen} alt="oxygen"></Oxygen>
            <Title>Game Over</Title>
          <Oxygen src={oxygen} alt="oxygen"></Oxygen>
        </GameOverTitleBox>
        <ScoreText>Your score is {score} !!</ScoreText>
        <RestartBtn onClick={handleRestart}>Restart</RestartBtn>
      </GameOverContent>
    </ModalStyle>
  )
};

export default GameOver;
