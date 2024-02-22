import React, { useEffect, useRef, useState } from "react";
import { millisToMinutes } from "@/utilities/millisToMinutes";
import { mapTimeRangeToPercentage } from "./Controller";
import { setInterval } from "timers/promises";

interface ProgressBarProps {
  player: HTMLAudioElement | null;
  audioDuration: number;
  isSongPlaying: any;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  player,
  audioDuration,
  isSongPlaying,
}) => {
  const rangeInputElementRef = useRef<any>(null);
  const progressBarElementRef = useRef<any>(null);
  const [currentAudioTime, setCurrentAudioTime] = useState(0);

  const onRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (player) {
      const progressBarValue = parseInt(e.target.value);
      player.currentTime = progressBarValue;

      const newWidth = mapTimeRangeToPercentage(
        progressBarValue,
        player?.duration
      );
      progressBarElementRef.current.style.width = newWidth + "%";
      setCurrentAudioTime(player.currentTime);
    }
  };

  useEffect(() => {
    let interval: number = 0;
    if (isSongPlaying) {
      interval = window.setInterval(() => {
        setCurrentAudioTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isSongPlaying]);

  return (
    <div className="flex items-center gap-x-2">
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
