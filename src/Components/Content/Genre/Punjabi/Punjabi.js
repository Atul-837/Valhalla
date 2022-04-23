import React from "react";
import "./Punjabi.css";
import { useState } from "react";
import MusicLibrary from "../MusicLibrary";
import Card from "../Card";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle";

export default function Punjabi() {
  
      const song = MusicLibrary.map((card) => {
        const genre = card.genre
        if (genre === "Punjabi"){
          return (
            <Card
              img={card.image}
              songName={card.songName}
              key={card.songId}
              artist={card.artist}
            />
          )};
  });

  return <div> 
    <h1 className="pageHeading">PUNJABI</h1>
    {song}
  </div>;
}
