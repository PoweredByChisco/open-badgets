import React from "react";
import "./styles/BadgeHero.css";

function BadgeHero(props) {
  return (
    <div className="Badges__hero">
      <div className="Badges__container">{props.children}</div>
    </div>
  );
}

export default BadgeHero;
