"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const AudioElement = () => {
  const currentSongSrc = useSelector(
    (state: RootState) => state.currentSong.url
  );

  return (
    <div className="hidden">
      <audio
        controls
        id="audio-player1"
      >
        <source
          id="audio-source1"
          type="audio/mpeg"
          src={currentSongSrc}
        />
      </audio>
    </div>
  );
};

export default AudioElement;
