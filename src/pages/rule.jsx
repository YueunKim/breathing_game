import React from "react";
import { Link } from "react-router-dom";
import oxygen from "../assets/images/oxygen.png";

import {
  BackImg,
  Container,
  TitleBox,
  Oxygen,
  Title,
  RuleBox,
  RuleTitle,
  RuleTextBox,
  RuleText,
  StartBtn,
} from "../styles/rule.styles";


const Rule = () => {

  return (
    <>
      <BackImg> </BackImg>
      <Container>
        <TitleBox>
          <Oxygen src={oxygen} alt="oxygen"></Oxygen>
          <Title>Breating Game</Title>
          <Oxygen src={oxygen} alt="oxygen"></Oxygen>
        </TitleBox>
        <RuleBox>
          <RuleTitle>[게임 설명]</RuleTitle>
          <RuleTextBox>
            <RuleText>
              1. 산소 게이지가 다 떨어지기 전에 사람을 클릭해 산소를 채워주세요!
            </RuleText>
            <RuleText>2. 사람을 클릭하면 점수는 10점씩 올라갑니다.</RuleText>
            <RuleText>
              3. 산소 게이지가 다 떨어진 사람은 더 이상 클릭이 불가합니다.
            </RuleText>
            <RuleText>
              4. 더 이상 산소 공급이 불가한 사람이 3명 이상이면 게임은 끝납니다.
            </RuleText>
            <RuleText>5. 아래의 start 버튼을 눌러 게임을 시작하세요!</RuleText>
          </RuleTextBox>
          <Link to="/game">
            <StartBtn>START</StartBtn>
          </Link>
        </RuleBox>
      </Container>
    </>
  );
};

export default Rule;
