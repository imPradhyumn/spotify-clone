"use client";

import React, { useEffect, useRef, useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { SlLoop } from "react-icons/sl";
import { RxShuffle } from "react-icons/rx";
import ProgressBar from "./ProgressBar";

let interval: number = 0; //setInterval function return value;

export const mapTimeRangeToPercentage = (
  currentTime: number,
  duration: number = 0
) => {
  return (100 * (currentTime - 0)) / (duration - 0);
};

const Controller = () => {
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [player, setPlayer] = useState<HTMLAudioElement | null>(null);
  const [currentDisplayTime, setCurrentDisplayTime] = useState(0);
  const [repeatSong, setRepeatSong] = useState(true);

  let currentSongSrc = useSelector((state: RootState) => state.player.songSrc);

  const rangeInputElementRef = useRef<any>(null);
  const progressBarElementRef = useRef<any>(null);
  const audioPlayerRef = useRef<any>(null);

  if (currentSongSrc === "") {
    currentSongSrc = "/songs/main-rang-sharbaton-ka.mp3";
  }

  const togglePlayer = async () => {
    if (player?.paused == false) {
      player?.pause();
    } else {
      await player?.play();
    }
    setIsSongPlaying((prev) => !prev);
  };

  const isSongEnded = () => {
    return (
      Math.round(player?.currentTime ?? 0) >=
      Math.round(player?.duration ?? 0) - 1
    );
  };

  const resetPlayer = () => {
    setCurrentDisplayTime(-1); //-1 because setInterval would call at last one more time so prev = prev+1 gets zero
    progressBarElementRef.current.style.width = "0";
    rangeInputElementRef.current.value = "0";
    if (!player?.loop) setIsSongPlaying(false);
  };

  const songProgressEffect = () => {
    const currentTime = player?.currentTime ?? 0;
    const duration = player?.duration ?? 0;

    //Map [0-endTime] into percentage [0-100] to use this val for progress-bar width
    const newWidth = mapTimeRangeToPercentage(currentTime, duration);

    progressBarElementRef.current.style.width = newWidth + "%";
    rangeInputElementRef.current.value = Math.round(currentTime).toString();

    //check if songs comes to end
    if (isSongEnded()) {
      resetPlayer();
    }
  };

  useEffect(() => {
    const audioPlayer = document.getElementById(
      "audio-player"
    ) as HTMLAudioElement;
    setPlayer(audioPlayer);
  }, []);

  // Change song audio 'src' everytime new song is selected
  useEffect(() => {
    resetPlayer();

    if (player) {
      player?.pause(); //can't toggle here, as play is asynchronous resulting in race condition b/w play and pause
      player.src = currentSongSrc;
      player?.play();
    }
  }, [currentSongSrc]);

  useEffect(() => {
    // To create song progress animation by increasing width of div element
    if (isSongPlaying) {
      interval = window.setInterval(() => {
        songProgressEffect();

        isSongEnded()
          ? setCurrentDisplayTime(0)
          : setCurrentDisplayTime((prev) => prev + 1); //condition needed or else currentDisplayTime would be set to 0+1 => 1
      }, 1000);
    } else window.clearInterval(interval);

    return () => {
      window.clearInterval(interval);
    };
  }, [isSongPlaying]);

  return (
    <React.Fragment>
      {/* To play the song but won't be rendered on UI*/}
      <div className="hidden">
        <audio
          controls
          id="audio-player"
          ref={audioPlayerRef}
          src={currentSongSrc}
          loop={repeatSong}
        ></audio>
      </div>

      <div className="flex flex-col items-center gap-y-2 py-2">
        <div className="flex items-center gap-x-4">
          <RxShuffle
            className="text-neutral-400 hover:text-white"
            size={16}
            title="Shuffle"
          />
          <AiFillStepBackward size={28} />

          <button
            id="play-pause-btn"
            className="bg-white rounded-full hover:scale-105"
            onClick={togglePlayer}
          >
            {!isSongPlaying ? (
              <BiPlay
                className="text-black pl-[0.15rem]"
                size={35}
              />
            ) : (
              <BiPause
                className="text-black"
                size={35}
              />
            )}
          </button>

          <AiFillStepForward size={28} />
          <SlLoop
            className={
              repeatSong
                ? "text-green-500"
                : "text-neutral-400 hover:text-white"
            }
            size={16}
            title="Loop"
            onClick={() => setRepeatSong((prev) => !prev)}
          />
        </div>

        <ProgressBar
          key={currentSongSrc}
          player={player}
          currentDisplayTime={currentDisplayTime}
          setCurrentDisplayTime={setCurrentDisplayTime}
          rangeInputElementRef={rangeInputElementRef}
          progressBarElementRef={progressBarElementRef}
        />
      </div>
    </React.Fragment>
  );
};

export default Controller;
