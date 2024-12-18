import React, { useEffect, useRef, useState } from 'react'
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { FaRepeat } from "react-icons/fa6";
import { FaShuffle } from "react-icons/fa6";
import { Col, Row } from 'react-bootstrap'
import imageer from '../images/3.jpg'
import music from '../musicc/Burna-Boy-No-Fit-Vex.mp3'
import music2 from '../musicc/Burna-Boy-Kilometre-1-(TrendyBeatz.com).mp3'
import music3 from '../musicc/Burna-Boy-Its-Plenty-(TrendyBeatz.com).mp3'
import SingleMusic from './SingleMusic';
const LastesAlbum = () => {
    // const backgroundRef=useRef(null)

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState("0:00");
    const [duration, setDuration] = useState("0:00");
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isShuffle, setIsShuffle] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
  
    // List of songs
    const songs = [
      { title: 'No fit vex', src: music ,id:0,name:"kahlido"},
      { title: 'Kilometre', src: music2,id:1,name:"Baddo ft kahlido" },
      { title: 'isplenty', src: music3 ,id:2,name:"kahlido"},
      { title: 'No fit vex', src: music ,id:3,name:"kahlido ft wizkid"},
      { title: 'Kilometre', src: music2,id:4 ,name:"Davido ft kahlido"},
      { title: 'isplenty', src: music3 ,id:5,name:"kahlido"}
    ];
  
    const togglePlay = () => {
      const audio = audioRef.current;
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    };
  
    const playSong = () => {
      audioRef.current.play();
      setIsPlaying(true);
    };
  
    const handleNext = () => {
      const nextIndex = isShuffle
        ? Math.floor(Math.random() * songs.length)
        : (currentSongIndex + 1) % songs.length;
  
      setCurrentSongIndex(nextIndex);
      setTimeout(() => playSong(), 0); // Play the new song
    };
  
    const handlePrevious = () => {
      const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      setCurrentSongIndex(previousIndex);
      setTimeout(() => playSong(), 0); // Play the new song
    };
  
    const handleShuffle = () => {
      setIsShuffle(!isShuffle);
    };
  
    const handleRepeat = () => {
      setIsRepeat(!isRepeat);
    };
  
    const handleProgressChange = (e) => {
      const newProgress = e.target.value;
      setProgress(newProgress);
      audioRef.current.currentTime = newProgress * audioRef.current.duration;
    };
  
    const handleVolumeChange = (e) => {
      const newVolume = e.target.value;
      setVolume(newVolume);
      audioRef.current.volume = newVolume;
    };
  
    const updateProgress = () => {
      const audio = audioRef.current;
      setProgress(audio.currentTime / audio.duration);
      setCurrentTime(formatTime(audio.currentTime));
      setDuration(formatTime(audio.duration));
    };
  
    const handleEnd = () => {
      if (isRepeat) {
        playSong(); // Repeat the current song
      } else {
        handleNext(); // Automatically play the next song
      }
    };
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  
    useEffect(() => {
      const audio = audioRef.current;
      setDuration(formatTime(audio.duration));
    }, [currentSongIndex]);
  
    const playhandler=(id)=>{
      setCurrentSongIndex(id)
      setTimeout(()=>{
        const audio=audioRef.current
        audio.play()
        playSong()
      },0)
    }

  return (
    <section className='musicSection'>
      <Row className='musicRow'>
        <Col className='musicLeftCol'>
        <img src={imageer} className='imageer' alt="music" />
        <div className="audio-player">
          <div className='audio-player-top'>
            <div><h5>{songs[currentSongIndex].title}</h5></div>
            <div className='audio-player-top-right'>
            <FaShuffle onClick={handleShuffle} className={isShuffle ? 'shuffle active' : 'shuffle'} />
            <TbPlayerTrackPrevFilled onClick={handlePrevious} />
            <button className='toggleplaybtn' onClick={togglePlay}>
              {isPlaying ? <FaPause  className='pause'/>: <FaPlay className='pause'/>}
            </button>
            <TbPlayerTrackNextFilled onClick={handleNext}/>
            <input
              type="range"
              className="volume-control"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          
          <FaRepeat onClick={handleRepeat} className={isRepeat ? 'active' : ''}/>  
            </div>
          </div>
        <div>
          <audio
            ref={audioRef}
            src={songs[currentSongIndex].src}
            onTimeUpdate={updateProgress}
            onEnded={handleEnd}
          />

      

      <div className="time-info">
      <span>{currentTime}</span>
      <input
        type="range"
        className="progress-bar"
        min="0"
        max="1"
        step="0.01"
        value={progress}
        onChange={handleProgressChange}
      />
      <span>{duration ==='NaN:NaN'?'0:00':duration}</span>
    </div>

    
      </div>
        
    </div>
  </Col>
  <Col className='musicRightSection'>
  
    <h3>Latest album</h3>
    <h1>WHEN WE ALL FALL ASLEEP</h1>
    <div className='outer-music-container'>
    {songs.map((song)=>{
      return <SingleMusic key={song.id} song={song} playhandler={playhandler} />
    })}
    </div>
   
  </Col>
      </Row>
    </section>
    

  )
}

export default LastesAlbum
