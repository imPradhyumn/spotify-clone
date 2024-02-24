import React, { useEffect, useRef, useState } from "react";
import { millisToMinutes } from "@/utilities/millisToMinutes";
import { mapTimeRangeToPercentage } from "./Controller";

interface ProgressBarProps {
  player: HTMLAudioElement | null;
  audioDuration: number;
  isSongPlaying: any;
  pauseAudio: any;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  player,
  audioDuration,
  isSongPlaying,
  pauseAudio,
}) => {
  const rangeInputElementRef = useRef<any>(null);
  const progressBarElementRef = useRef<any>(null);
  const [currentAudioTime, setCurrentAudioTime] = useState(0);

  const onRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (player) {
      const progressBarValue = parseInt(e.target.value);
      if (parseInt(e.target.value) >= player.duration) return;

      player.currentTime = progressBarValue;
      const newWidth = mapTimeRangeToPercentage(
        progressBarValue,
        audioDuration
      );
      progressBarElementRef.current.style.width = newWidth + "%";
    }
  };

  const isSongEnded = function () {
    if (
      player &&
      Math.ceil(player?.currentTime) >= Math.floor(player?.duration)
    ) {
      return true;
    }
    return false;
  };

  const resetController = function () {
    rangeInputElementRef.current.value = 0;
    progressBarElementRef.current.style.width = 0;
  };

  useEffect(() => {
    let interval: number = 0;

    interval = window.setInterval(() => {
      if (player && isSongPlaying) {
        setCurrentAudioTime((prev) => prev + 1);

        const progressBarValue = ++rangeInputElementRef.current.value;
        const newWidth = mapTimeRangeToPercentage(
          progressBarValue,
          audioDuration
        );

        progressBarElementRef.current.style.width = newWidth + "%";
        setCurrentAudioTime(player.currentTime);

        if (isSongEnded()) {
          pauseAudio();
          resetController();
          setCurrentAudioTime(0);
        }
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isSongPlaying]);

  return (
    <div className="flex items-center gap-x-2 w-[85%] md:w-fit">
      <span className="text-xs">{millisToMinutes(currentAudioTime)}</span>

      <div className="relative w-[20rem] h-[0.25rem] bg-neutral-700 rounded-2xl">
        <div
          ref={progressBarElementRef}
          id="slider-pseudo-element"
          className="absolute z-[99] w-0 h-full rounded-2xl bg-green-500"
        ></div>
        <input
          ref={rangeInputElementRef}
          type="range"
          id="song-progress-range"
          className="absolute z-[999] w-full h-full"
          min={0}
          max={player?.duration ?? "0"}
          defaultValue={0}
          onChange={onRangeChange}
        />
      </div>
      <span className="text-xs">{millisToMinutes(audioDuration ?? 0)}</span>
    </div>
  );
};

export default ProgressBar;
