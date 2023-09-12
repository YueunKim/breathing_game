import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Border,
  Score,
  Container,
} from "../styles/main.styles";
import PeopleAvatar from "../components/PeopleAvatar";
import OxygenStatus from "../components/OxygenStatus";
import GameOver from "../components/GameOver";
import peopleData, { shuffleArray } from "../utils/peopleData";

const Main = () => {
  const [backgroundPeople, setBackgroundPeople] = useState([]);
  const [randomFivePeople, setRandomFivePeople] = useState([]);
  const [positions, setPositions] = useState([]);
  const backgroundPositions = [8, 28, 50, 68, 80];
  const [zeroOxygenCount, setZeroOxygenCount] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const shuffledPeople = shuffleArray([...peopleData]);
    setBackgroundPeople(shuffledPeople.slice(0, 5));
    setRandomFivePeople(shuffledPeople.slice(5));
    selectRandomPositions();
  }, []);


  const handleBodyClick = (index) => {
    if (peopleState[index].oxygenLevel > 0) {
      setScore((prevScore) => prevScore + 10);
      toggleBottomValue(index);
    } else {
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

  // 사람 클릭시
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
            const newOxygenLevel = Math.max(state.oxygenLevel - 20, 0);

            // 산소 레벨이 0이 되면 zeroOxygenCount 증가
            if (newOxygenLevel === 0) {
              setZeroOxygenCount((prevCount) => prevCount + 1);
              console.log(zeroOxygenCount);
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
  }, [zeroOxygenCount]);

  // restart 버튼 클릭시
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
            {peopleState[index].showOxygen &&
              peopleState[index].oxygenLevel > 0 && (
                <OxygenStatus oxygenLevel={peopleState[index].oxygenLevel} />
              )}
          </PeopleAvatar>
        ))}
      </Container>
      {zeroOxygenCount >= 3 && <GameOver handleRestart={handleRestart} />}
      <Border></Border>
    </>
  );
};

export default Main;
