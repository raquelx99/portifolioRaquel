import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.module.css'; 

import styles from './MusicPlayer.module.css';
import musicSrc from '../assets/portifolio-music.mp3'

const imageDefault = "/bunny-default.png";
const imageAnim1 = "/bunny-anim1.png";
const imageAnim2 = "/bunny-anim2.png";

export default function MusicPlayer() {
  const [currentImage, setCurrentImage] = useState(imageDefault);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);
  const audioRef = useRef(new Audio(musicSrc));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
      setCurrentImage(imageDefault);
      setIsPlaying(false);
    } else {
      audioRef.current.currentTime = 0; 
      audioRef.current.play();
      setIsPlaying(true);

      intervalRef.current = setInterval(() => {
        setCurrentImage((prevImage) =>
          prevImage === imageAnim1 ? imageAnim2 : imageAnim1
        );
      }, 200);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    
    audio.loop = true;

    return () => {
      audio.pause();
      clearInterval(intervalRef.current);
    };
  }, []); 

  return (
    <div className={styles.playerContainer} onClick={togglePlay}>
      <img
        src={currentImage}
        alt="Player de música animado"
        className={styles.playerImage}
      />
    </div>
  );
}
