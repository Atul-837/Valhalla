import React from "react";
import "./Player.css"

export default function PlayerDetails(props){
    return(
        <div className="c-player-details">
            <div className="details-img">
               <img src={props.song.image} alt="Image Not Found"/> 
               <h3 className="songName">{props.song.songName}</h3>
               <h4 className="artist">{props.song.artist}</h4>
            </div>
        </div>
    )
}