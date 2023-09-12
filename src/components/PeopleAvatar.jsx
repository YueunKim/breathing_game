import React from "react";
import { People, PeopleBody, PeopleHead } from "../styles/main.styles";

const PeopleAvatar = ({
  person,
  position,
  animationDelay,
  onAnimationEnd,
  bottomValue,
  handleBodyClick,
  $isBackground,
  children,
}) => {
  if (!person) return null;

  return (
    <People
      $position={position}
      $animationDelay={animationDelay}
      onAnimationEnd={onAnimationEnd}
      $isBackground={$isBackground}
    >
      {children}
      <PeopleBody src={person.body} alt="body" onClick={handleBodyClick} />
      <PeopleHead src={person.head} alt="head" $bottomValue={bottomValue} />
    </People>
  );
};

export default PeopleAvatar;
