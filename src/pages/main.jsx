import React, { useState, useEffect } from 'react';
import {
  Border,
  Score,
  Container,
} from '../styles/main.styles';
import PeopleAvatar from '../components/PeopleAvatar';
import OxygenStatus from '../components/OxygenStatus';
import GameOver from '../components/GameOver';
import peopleData, { shuffleArray } from '../utils/peopleData';

const Main = () => {
  // 게임에 사용될 상태값들을 정의합니다.
  const [backgroundPeople, setBackgroundPeople] = useState([]);
  const [randomFivePeople, setRandomFivePeople] = useState([]);
  const [positions, setPositions] = useState([]);
  const [peopleState, setPeopleState] = useState([]);
  const [zeroOxygenCount, setZeroOxygenCount] = useState(0);
  const [score, setScore] = useState(0);
  const backgroundPositions = [8, 28, 50, 68, 80];

  // 게임 초기화
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // 사람을 무작위로 섞은 후 배경 사람과 등장 사람들로 5명씩 분배
    const shuffledPeople = shuffleArray([...peopleData]);
    setBackgroundPeople(shuffledPeople.slice(0, 5));
    setRandomFivePeople(shuffledPeople.slice(5, 10));
    
    // 랜덤 위치 설정
    selectRandomPositions();
    
    // 랜덤 5명의 산소 레벨과 위치 초기화
    const initialPeopleState = Array.from({ length: 5 }, () => ({
      bottomValue: 0,
      oxygenLevel: 100,
      showOxygen: false,
    }));
    setPeopleState(initialPeopleState);
  };

  const selectRandomPositions = () => {
    const availablePositions = [0, 20, 40, 60, 77];
    const selectedPositions = [];

    // 5개의 랜덤 위치 선택
    while (selectedPositions.length < 5) {
      const randomIndex = Math.floor(Math.random() * availablePositions.length);
      selectedPositions.push(availablePositions[randomIndex]);
      availablePositions.splice(randomIndex, 1);
    }

    setPositions(selectedPositions);
  };

  // 사람을 클릭했을 때
  const handleBodyClick = (index) => {
    if (peopleState[index].oxygenLevel > 0) {
      setScore(prevScore => prevScore + 10);
      toggleBottomValue(index);
    }
  };

  // 산소 게이지 5초 후 보임
  const handleAnimationEnd = (index) => {
    setTimeout(() => {
      setPeopleState(prevState => {
        const newState = [...prevState];
        newState[index].showOxygen = true;
        return newState;
      });
    }, 5000);
  };

  // 클릭한 사람의 목 길이와 산소 레벨 변경
  const toggleBottomValue = (index) => {
    setPeopleState(prevState => {
      const newState = [...prevState];
      newState[index] = {
        bottomValue: 200,
        oxygenLevel: 0,
        showOxygen: false,
      };
      return newState;
    });

    setTimeout(() => {
      setPeopleState(prevState => {
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

  // 산소 레벨 감소
  useEffect(() => {
    const timerForOxygenLevel = setInterval(() => {
      setPeopleState(prevState => {
        return prevState.map((state, index) => {
          if (state.oxygenLevel > 0 && state.showOxygen) {
            const newOxygenLevel = Math.max(state.oxygenLevel - 20, 0);
            if (newOxygenLevel === 0) {
              setZeroOxygenCount(prevCount => prevCount + 1);
            }
            return {
              ...state,
              oxygenLevel: newOxygenLevel,
            };
          }
          return state;
        });
      });
    }, 1000);

    return () => {
      clearInterval(timerForOxygenLevel);
    };
  }, [peopleState]);

  // 재시작
  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <>
      <Score>Score : {score}</Score>
      <Container>
        {backgroundPeople.map((person, index) => (
          <PeopleAvatar
            key={`bg-${index}`}
            person={person}
            position={backgroundPositions[index]}
            $isBackground={true}
          />
        ))}
        {randomFivePeople.map((person, index) => (
          <PeopleAvatar
            key={index}
            person={person}
            position={positions[index]}
            animationDelay={index * 3}
            onAnimationEnd={() => handleAnimationEnd(index)}
            bottomValue={peopleState[index].bottomValue}
            handleBodyClick={() => handleBodyClick(index)}
          >
            {peopleState[index].showOxygen && peopleState[index].oxygenLevel > 0 && (
              <OxygenStatus oxygenLevel={peopleState[index].oxygenLevel} />
            )}
          </PeopleAvatar>
        ))}
      </Container>
      {zeroOxygenCount >= 3 && <GameOver handleRestart={handleRestart} score={score}/>}
      <Border></Border>
    </>
  );
};

export default Main;
