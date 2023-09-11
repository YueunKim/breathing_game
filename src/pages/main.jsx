import React, { useState, useEffect } from "react";
import oxygen from "../assets/images/oxygen.png";
import {
  Border,
  Score,
  Container,
  People,
  PeopleBody,
  PeopleHead,
  Status,
  StatusBar,
  StatusOxygen,
} from "../styles/main.styles";

const imageContext = require.context("../assets/images", false, /\.png$/);

const peopleData = Array.from({ length: 10 }, (_, i) => ({
  head: imageContext(`./${i + 1}-1.png`),
  body: imageContext(`./${i + 1}-2.png`),
}));
console.log(peopleData);

const Main = () => {
  // 배경이 되는 사람들
  const [backgroundPeople, setBackgroundPeople] = useState([]);
  const backgroundPositions = [8, 28, 50, 68, 80];

  const selectRandomPeople = () => {
    const selectedRandomFivePeople = [];
    const randomIndices = [];
    while (randomIndices.length < 5) {
      const randomIndex = Math.floor(Math.random() * peopleData.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
        selectedRandomFivePeople.push(peopleData[randomIndex]);
      }
    }
    setRandomFivePeople(selectedRandomFivePeople);
  };

  // 점수
  const [score, setScore] = useState(0);

  const handleBodyClick = (index) => {
    if (peopleState[index].oxygenLevel > 0) {
      setScore((prevScore) => prevScore + 10);
      toggleBottomValue(index);
    } else {
      // 산소 게이지가 0인 경우 클릭을 무시
      return;
    }
  };

  // 랜덤 5명 불러오기
  const [peopleState, setPeopleState] = useState(
    Array.from({ length: 5 }, () => ({
      bottomValue: 0,
      oxygenLevel: 100,
      showOxygen: false,
    }))
  );

  const [randomFivePeople, setRandomFivePeople] = useState([]);
  const [positions, setPositions] = useState([]);

  const selectRandomPositions = () => {
    const availablePositions = [0, 20, 40, 60, 77];
    const selectedPositions = [];
    while (selectedPositions.length < 5) {
      const randomIndex = Math.floor(Math.random() * availablePositions.length);
      selectedPositions.push(availablePositions[randomIndex]);
      availablePositions.splice(randomIndex, 1); // 선택한 위치 제거
    }
    setPositions(selectedPositions);
  };

  // useEffect에서 초기 설정
  useEffect(() => {
    selectRandomPeople();
    selectRandomPositions();

    // 배경이 되는 사람들을 랜덤하게 5명 선택
    const backgroundPeople = [];
    const backgroundRandomIndices = [];
    while (backgroundRandomIndices.length < 5) {
      const randomIndex = Math.floor(Math.random() * peopleData.length);
      if (!backgroundRandomIndices.includes(randomIndex)) {
        backgroundRandomIndices.push(randomIndex);
        backgroundPeople.push(peopleData[randomIndex]);
      }
    }
    setBackgroundPeople(backgroundPeople);
  }, []);

  // 랜덤한 5명의 사람 선택
  useEffect(() => {
    const selectedRandomFivePeople = [];
    const randomIndices = [];
    while (randomIndices.length < 5) {
      const randomIndex = Math.floor(Math.random() * peopleData.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
        selectedRandomFivePeople.push(peopleData[randomIndex]);
      }
    }
    setRandomFivePeople(selectedRandomFivePeople);
  }, []);

  // 사람 등장 5초 후 산소게이지 보이기
  const handleAnimationEnd = (index) => {
    setTimeout(() => {
      setPeopleState((prevState) => {
        const newState = [...prevState];
        newState[index].showOxygen = true;
        return newState;
      });
    }, 5000);
  };

  const toggleBottomValue = (index) => {
    setPeopleState((prevState) => {
      const newState = [...prevState];
      newState[index] = {
        bottomValue: 200,
        oxygenLevel: 0,
        showOxygen: false,
      };
      return newState;
    });

    setTimeout(() => {
      setPeopleState((prevState) => {
        const newState = [...prevState];
        newState[index] = {
          bottomValue: 0,
          oxygenLevel: 100,
          showOxygen: true,
        };
        return newState;
      });
    }, 3000);
  };

  useEffect(() => {
    const timerForOxygenLevel = setInterval(() => {
      setPeopleState((prevState) => {
        return prevState.map((state, index) => {
          if (state.oxygenLevel > 0 && state.showOxygen) {
            return {
              ...state,
              oxygenLevel: Math.max(state.oxygenLevel - 20, 0),
            };
          }
          return state;
        });
      });
    }, 1000);

    return () => {
      clearInterval(timerForOxygenLevel);
    };
  }, []);

  // 게임 끝
  const [gameOver, setGameOver] = useState(false);

  // 산소게이지가 0인 사람의 수 계산
  useEffect(() => {
    const zeroOxygenCount = peopleState.filter(
      (person) => person.oxygenLevel === 0
    ).length;
    if (zeroOxygenCount >= 3) {
      setGameOver(true);
    }
  }, [peopleState]);

  // 다시하기 버튼 클릭 핸들러
  const handleRestart = () => {
    // 점수 초기화
    setScore(0);

    // 게임 오버 상태 초기화
    setGameOver(false);

    // peopleState 초기화
    const initialPeopleState = Array.from({ length: 5 }, () => ({
      bottomValue: 0,
      oxygenLevel: 100,
      showOxygen: false,
    }));
    setPeopleState(initialPeopleState);

    // 랜덤한 5명의 사람과 위치를 다시 설정
    selectRandomPeople();
    selectRandomPositions();
  };

  return (
    <>
      <Score>Score : {score}</Score>
      <Container>
        {backgroundPeople.map((person, index) => (
          <People
            key={`bg-${index}`}
            $position={backgroundPositions[index]}
            $isBackground={true}
          >
            <PeopleBody src={person.body} alt="background-body" />
            <PeopleHead src={person.head} alt="background-head" />
          </People>
        ))}

        {randomFivePeople.map((person, index) => (
          <People
            key={index}
            $position={positions[index]}
            $animationDelay={index * 3}
            onAnimationEnd={() => handleAnimationEnd(index)}
          >
            {peopleState[index].showOxygen &&
              peopleState[index].oxygenLevel > 0 && (
                <Status>
                  <StatusBar
                    $oxygenLevel={peopleState[index].oxygenLevel}
                  ></StatusBar>
                  <StatusOxygen
                    src={oxygen}
                    alt="oxygen"
                    $oxygenLevel={peopleState[index].oxygenLevel}
                  />
                </Status>
              )}
            <PeopleBody
              src={person.body}
              alt="body"
              onClick={() => handleBodyClick(index)}
            />
            <PeopleHead
              src={person.head}
              alt="head"
              $bottomValue={peopleState[index].bottomValue}
            />
          </People>
        ))}
      </Container>
      {gameOver && (
        <div>
          <h1>The End</h1>
          <button onClick={handleRestart}>다시하기</button>
        </div>
      )}
      <Border></Border>
    </>
  );
};

export default Main;
