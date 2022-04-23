import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={props.img}
        className="card-img-top"
        alt="..."
      />

      <div className="card-header">{props.songName}</div>
      <div className="card-footer">{props.artist}</div>
    </div>
  );
}
