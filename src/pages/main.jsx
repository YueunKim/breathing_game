import React, { useState, useEffect } from "react";
import oxygen from "../assets/images/oxygen.png";
import {
  Container,
  People,
  PeopleBody,
  PeopleHead,
  Status,
  StatusBar,
  StatusOxygen
} from "../styles/main.styles";

const imageContext = require.context("../assets/images", false, /\.png$/);

const peopleData = Array.from({ length: 10 }, (_, i) => ({
  head: imageContext(`./${i + 1}-1.png`),
  body: imageContext(`./${i + 1}-2.png`),
}));

console.log('peopleData=',peopleData);

const Main = () => {
  // 각 사람의 목 길이와 산소 레벨을 개별적으로 관리하기 위한 상태
  const [bottomValues, setBottomValues] = useState(Array(10).fill(0));
  const [oxygenLevels, setOxygenLevels] = useState(Array(10).fill(100));
  const [showOxygens, setShowOxygens] = useState(Array(10).fill(false));
  
  // 랜덤 위치를 저장하는 상태
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // 랜덤한 위치 설정
    const availablePositions = [0, 20, 40, 60, 80]; // 5등분된 위치
    const newPositions = Array(10).fill(null); // 처음에 null로 채움

    for (let i = 0; i < 5; i++) {
      // 5개만 랜덤 설정
      const randomIndex = Math.floor(Math.random() * availablePositions.length);
      const randomPosition = availablePositions[randomIndex];
      newPositions[randomPosition / 20] = randomPosition; // 랜덤 위치에 값 할당
      availablePositions.splice(randomIndex, 1);
    }

    setPositions(newPositions);
    console.log(newPositions);
  }, []);

  // 클릭하면 목 길어지기
  const toggleBottomValue = (index) => {
    const newBottomValues = [...bottomValues];
    const newOxygenLevels = [...oxygenLevels];
    const newShowOxygens = [...showOxygens];

    newBottomValues[index] = 200;
    newOxygenLevels[index] = 0;
    newShowOxygens[index] = false;

    setBottomValues(newBottomValues);
    setOxygenLevels(newOxygenLevels);
    setShowOxygens(newShowOxygens);

    setTimeout(() => {
      setBottomValues((prevValues) => {
        const newValues = [...prevValues];
        newValues[index] = 0;
        return newValues;
      });
      setOxygenLevels((prevLevels) => {
        const newLevels = [...prevLevels];
        newLevels[index] = 100;
        return newLevels;
      });
      setShowOxygens((prevShow) => {
        const newShow = [...prevShow];
        newShow[index] = true;
        return newShow;
      });
    }, 4000);
  };

  useEffect(() => {
    // 산소 레벨을 각 사람마다 줄어들게 설정
    let timerForOxygenLevel = setInterval(() => {
      setOxygenLevels((prevLevels) => {
        return prevLevels.map((level, index) => {
          if (level > 0 && showOxygens[index]) {
            return level - 20;
          }
          return level;
        });
      });
    }, 1000);

    return () => {
      clearInterval(timerForOxygenLevel);
    };
  }, [showOxygens, oxygenLevels]);

  return (
    <Container>
      {peopleData.map((person, index) => {
        if (positions[index] !== null) {
          return (
            <People
              key={index}
              $position={positions[index]}
              style={{ animationDelay: `${index * 3}s` }}
            >
              {showOxygens[index] && (
                <Status>
                  <StatusBar $oxygenLevel={oxygenLevels[index]}></StatusBar>
                  <StatusOxygen
                    src={oxygen}
                    alt="oxygen"
                    $oxygenLevel={oxygenLevels[index]}
                  />
                </Status>
              )}
              <PeopleBody
                src={person.body}
                alt="body"
                onClick={() => toggleBottomValue(index)}
              />
              <PeopleHead
                src={person.head}
                alt="head"
                $bottomValue={bottomValues[index]}
              />
            </People>
          );
        }
        return null;
      })}
    </Container>
  );
};

export default Main;
