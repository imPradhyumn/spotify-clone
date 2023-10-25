"use client";

import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { millisToMinutes } from "@/utilities/millisToMinutes";

interface ProgressBarProps {
  player: HTMLAudioElement | null;
  togglePlayer: () => void;
  currentDisplayTime: number;
}

let interval: number = 0; //setInterval return value;

const mapTimeRangeToPercentage = (
  currentTime: number,
  duration: number = 0
) => {
  return (100 * (currentTime - 0)) / (duration - 0);
};

const progressBar: React.FC<ProgressBarProps> = ({
  player,
  currentDisplayTime,
  togglePlayer,
}) => {
  const duration = player?.duration;

  const onRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (player) {
      player.currentTime = parseInt(e.target.value);

      const divElement = document.getElementById(
        "slider-pseudo-element"
      ) as HTMLElement;

      const newWidth = mapTimeRangeToPercentage(player.currentTime, duration);
      divElement.style.width = newWidth + "%";

      // if range equals end time of song then stop song play
      if (player.currentTime == Math.round(duration ?? 0)) {
        clearInterval(interval);
        togglePlayer();
      }
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <span className="text-xs">{millisToMinutes(currentDisplayTime)}</span>

      <div className="relative w-[20rem] h-[0.25rem] bg-neutral-700 rounded-2xl">
        <div
          id="slider-pseudo-element"
          className="absolute z-[99] w-0 h-full rounded-2xl bg-green-500"
        ></div>
        <input
          type="range"
          id="song-progress-range"
          className="absolute z-[999] w-full h-full"
          min={0}
          max={duration}
          defaultValue={0}
          onChange={onRangeChange}
        />
      </div>
      <span className="text-xs">{millisToMinutes(duration)}</span>
    </div>
  );
};

const Controller = () => {
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [player, setPlayer] = useState<HTMLAudioElement | null>(null);
  const [currentDisplayTime, setCurrentDisplayTime] = useState(0);

  let currentSongSrc = useSelector((state: RootState) => state.currentSong.url);

  if (currentSongSrc === "") {
    currentSongSrc = "/songs/main-rang-sharbaton-ka.mp3";
  }

  const togglePlayer = async () => {
    if (isSongPlaying) {
      player?.pause();
    } else {
      await player?.play();
    }
    setIsSongPlaying((prev) => !prev);
  };

  const songProgressEffect = (reset: boolean = false) => {
    const divElement = document.getElementById(
      "slider-pseudo-element"
    ) as HTMLElement;

    const rangeInput = document.getElementById(
      "song-progress-range"
    ) as HTMLInputElement;

    if (reset) {
      divElement.style.width = "0";
      rangeInput.value = "0";
      return;
    }

    const currentTime = player?.currentTime ?? 0;
    const duration = player?.duration ?? 0;

    const newWidth = mapTimeRangeToPercentage(currentTime, duration);

    //Map [0-endTime] into percentage [0-100] to use this val for div width
    divElement.style.width = newWidth + "%";
    rangeInput.value = Math.round(currentTime).toString();
  };

  // Change song audio 'src' everytime new song is selected
  useEffect(() => {
    setCurrentDisplayTime(0);
    songProgressEffect(true);

    const ele = document.getElementById("audio-source") as HTMLSourceElement;
    ele.src = currentSongSrc;
    player?.load();
    togglePlayer();
  }, [currentSongSrc]);

  useEffect(() => {
    // To create song progress animation by increasing width of div element
    if (isSongPlaying) {
      interval = window.setInterval(() => {
        songProgressEffect();
        setCurrentDisplayTime((prev) => prev + 1);
      }, 1000);
    } else window.clearInterval(interval);

    // Grab audio element everytime page renders else it will get null
    setPlayer(document.getElementById("audio-player") as HTMLAudioElement);

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
        >
          <source
            id="audio-source"
            type="audio/mpeg"
            src={currentSongSrc}
          />
        </audio>
      </div>

      <div className="flex flex-col items-center gap-y-2 py-2">
        <div className="flex items-center gap-x-4">
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
        </div>

        {progressBar({
          player,
          currentDisplayTime,
          togglePlayer,
        })}
      </div>
    </React.Fragment>
  );
};

export default Controller;
