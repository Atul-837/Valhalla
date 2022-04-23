import React, {useState, useRef, useEffect} from "react"
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
export default function Player(props){
    const audioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(()=>{
        if(isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
    })
    
  const SkipSong = (forward = true) => {       
        if (forward) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;
                
                if (temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp = temp - 1;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }
                return temp;
            });
        }
    }
   return (
     <div className="container-fluid d-flex justify-content-center">
       <div className="c-player col-5">
         <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}>
           {" "}
         </audio>
         <h5 className="playing">PLAYING NOW</h5>
         <PlayerDetails song={props.songs[props.currentSongIndex]} />
         <PlayerControls 
         isPlaying = {isPlaying}
         setIsPlaying = {setIsPlaying}
         SkipSong = {SkipSong}
         />
         <p className="next">
           <strong className="next">Next Up : </strong>
           {props.songs[props.nextSongIndex].songName} by {props.songs[props.nextSongIndex].artist}
         </p>
       </div>
     </div>
   ); 
}