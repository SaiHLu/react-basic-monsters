import React from "react";
import "./card.styles.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?size=180x180`}
        alt="Not Available"
      />
      <h3>{props.monster.name}</h3>
      <small>
        <i>{props.monster.email}</i>
      </small>
    </div>
  );
};
