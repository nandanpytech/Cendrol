import React from "react";
import "./Card.css";

export default function Card({ categoryName, showJokesOn }) {
  return (
    <div className="white-card" onClick={() => showJokesOn(categoryName)}>
      <h1 className="categoryName">{categoryName}</h1>
      <p className="desc">Unlimited Jokes on {categoryName}</p>
    </div>
  );
}
