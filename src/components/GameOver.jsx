import React from "react";
import {
  ModalStyle,
  GameOverContent,
  GameOverTitleBox,
  Title,
  RestartBtn,
} from "../styles/gameOver.styles";
import { Oxygen } from "../styles/rule.styles";
import oxygen from "../assets/images/oxygen.png";

const GameOver = ({ handleRestart }) => {
  return(
    <ModalStyle>
      <GameOverContent>
        <GameOverTitleBox>
          <Oxygen src={oxygen} alt="oxygen"></Oxygen>
            <Title>Game Over</Title>
          <Oxygen src={oxygen} alt="oxygen"></Oxygen>
        </GameOverTitleBox>

        <RestartBtn onClick={handleRestart}>Restart</RestartBtn>
      </GameOverContent>
    </ModalStyle>
  )
};

export default GameOver;
