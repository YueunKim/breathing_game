import React, { useState, useEffect } from "react";
import style from "../styles/css/main.module.css";
import head from "../assets/images/1-1.png";
import body from "../assets/images/1-2.png";
import oxygen from "../assets/images/oxygen.png";

const Main = () => {
  const [bottomValue, setBottomValue] = useState(0);
  const [center, setCenter] = useState(false);

  const toggleBottomValue = () => {
    setBottomValue(bottomValue === 0 ? 280 : 0);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCenter(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style.container}>
      <img src={oxygen} alt="oxygen" className={style.oxygen} />
      <div className={`${style.people} ${center ? style.center : style.move}`}>
        <img
          src={body}
          alt="subway"
          className={style.peopleBody}
          onClick={toggleBottomValue}
        />
        <img
          src={head}
          alt="subway"
          className={style.peopleNeck}
          style={{ bottom: `${bottomValue}px` }}
        />
      </div>
    </div>
  );
};

export default Main;
