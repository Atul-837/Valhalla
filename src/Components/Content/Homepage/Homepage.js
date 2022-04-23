import React, { useState, useEffect } from "react";
import MusicLibrary from "../Genre/MusicLibrary.js";
import Card from "../Genre/Card";
import "./Homepage.css";
import Player from "../../Player/Player.js";

export default function Homepage() {
  const [currentSongIndex, setCurrentSongIndex] = useState(6);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > MusicLibrary.length - 1){
        return  0;
      } else {
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex])


  return (
    <div className="page">
      <Player
        currentSongIndex = {currentSongIndex}
        setCurrentSongIndex = {setCurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        songs = {MusicLibrary}
      />
    </div>
  );
}
