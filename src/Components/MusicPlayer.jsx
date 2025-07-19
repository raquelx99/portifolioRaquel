import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.module.css'; 

import styles from './MusicPlayer.module.css';

const imageDefault = "/bunny-default.png";
const imageAnim1 = "/bunny-anim1.png";
const imageAnim2 = "/bunny-anim2.png";
const musicSrc = "/portfolio-music.mp3";

export default function MusicPlayer() {
  const [currentImage, setCurrentImage] = useState(imageDefault);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);
  const audioRef = useRef(new Audio(musicSrc));
  audioRef.current.loop = false;

  const playMusicAndAnimate = () => {
    if (isPlaying) return;

    setIsPlaying(true);
    audioRef.current.currentTime = 0;
    audioRef.current.play();

    intervalRef.current = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === imageAnim1 ? imageAnim2 : imageAnim1
      );
    }, 200);
  };

  useEffect(() => {
    const audio = audioRef.current;
    const handleMusicEnd = () => {
      clearInterval(intervalRef.current);
      setCurrentImage(imageDefault);
      setIsPlaying(false);
    };
    audio.addEventListener("ended", handleMusicEnd);

    return () => {
      audio.removeEventListener("ended", handleMusicEnd);
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className={styles.playerContainer} onClick={playMusicAndAnimate}>
      <img
        src={currentImage}
        alt="Player de música animado"
        className={styles.playerImage}
      />
    </div>
  );
}