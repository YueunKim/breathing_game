import React from "react";
import { Status, StatusBar, StatusOxygen } from "../styles/main.styles";
import oxygen from "../assets/images/oxygen.png";

const OxygenStatus = ({ oxygenLevel }) => {
  return (
    <Status>
      <StatusBar $oxygenLevel={oxygenLevel}></StatusBar>
      <StatusOxygen src={oxygen} alt="oxygen" $oxygenLevel={oxygenLevel} />
    </Status>
  );
};

export default OxygenStatus;
