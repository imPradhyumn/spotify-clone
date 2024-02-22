"use client";

import React, { useEffect, useRef, useState } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { SlLoop } from "react-icons/sl";
import { RxShuffle } from "react-icons/rx";
import ProgressBar from "./ProgressBar";
import { LuLoader } from "react-icons/lu";

export const mapTimeRangeToPercentage = (
  currentTime: number,
  duration: number = 0
) => {
  return (100 * (currentTime - 0)) / (duration - 0);
};

const Controller = () => {
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [player, setPlayer] = useState<HTMLAudioElement | null>(null);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [repeatSong, setRepeatSong] = useState(true);
  const [isSongLoading, setIsSongLoading] = useState(false);

  const currentSongSrc = useSelector(
    (state: RootState) => state.player.songSrc
  );
  const audioPlayerRef = useRef<any>(null);

  const togglePlayer = () => {
    isSongPlaying === false ? playAudio() : pauseAudio();
    setIsSongPlaying((prev) => !prev);
  };

  const playAudio = async () => {
    await player?.play();
  };

  const pauseAudio = () => {
    player?.pause();
  };

  useEffect(() => {
    const audioPlayer = document.getElementById(
      "audio-player"
    ) as HTMLAudioElement;
    setPlayer(audioPlayer);
  }, []);

  const fetchAudioDuration = function () {
    return new Promise((resolve, reject) => {
      const audio = new Audio(currentSongSrc) as HTMLAudioElement;
      audio.addEventListener("loadedmetadata", () => {
        resolve(audio?.duration);
      });
    });
  };

  useEffect(() => {
    if (currentSongSrc.length === 0) return;

    setIsSongLoading(true);
    setIsSongPlaying(false);
    fetchAudioDuration().then((duration: any) => {
      playAudio();
      setAudioDuration(duration);
      setIsSongLoading(false);
      setIsSongPlaying(true);
      // console.log(duration);
    });
  }, [currentSongSrc]);

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
            {isSongLoading ? (
              <LuLoader
                className="text-black p-1"
                size={25}
              />
            ) : !isSongPlaying ? (
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
          audioDuration={audioDuration}
          isSongPlaying={isSongPlaying}
        />
      </div>
    </React.Fragment>
  );
};

export default Controller;
