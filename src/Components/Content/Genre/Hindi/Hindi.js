import React from "react";
import "./Hindi.css";
import { useState } from "react";
import MusicLibrary from "../MusicLibrary";
import Card from "../Card";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle";

export default function Hindi() {
  const song = MusicLibrary.map((card) => {
    const genre = card.genre
    if(genre === "Hindi"){
      return (     
        <Card
        img={card.image}
        songName={card.songName}
        key={card.songId}
        artist={card.artist}
      />
      )}
  });

  return (
    <div className="page">
      <h1 className="pageHeading">HINDI</h1>
      {song}
    </div>
  );
}
