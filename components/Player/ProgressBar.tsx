import React from "react";
import { millisToMinutes } from "@/utilities/millisToMinutes";
import { mapTimeRangeToPercentage } from "./Controller";

interface ProgressBarProps {
  player: HTMLAudioElement | null;
  currentDisplayTime: number;
  setCurrentDisplayTime: React.Dispatch<React.SetStateAction<number>>;
  rangeInputElementRef: any;
  progressBarElementRef: any;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  player,
  currentDisplayTime,
  setCurrentDisplayTime,
  rangeInputElementRef,
  progressBarElementRef,
}) => {
  const onRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (player) {
      setCurrentDisplayTime(parseInt(e.target.value));
      player.currentTime = parseInt(e.target.value);

      const newWidth = mapTimeRangeToPercentage(
        parseInt(e.target.value),
        player?.duration
      );

      progressBarElementRef.current.style.width = newWidth + "%";
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <span className="text-xs">{millisToMinutes(currentDisplayTime)}</span>

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
          max={player?.duration ?? player?.duration.toString()}
          defaultValue={0}
          onChange={onRangeChange}
        />
      </div>
      <span className="text-xs">{millisToMinutes(player?.duration)}</span>
    </div>
  );
};

export default ProgressBar;
