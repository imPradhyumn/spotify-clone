"use client";

import { ISong } from "@/db/models/SongModel";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PlayListCard from "./PlayListCard";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SongCardSkeleton from "../skeletons/SongCardSkeleton/SongCardSkeleton";

interface PlayListProps {
  children?: React.ReactNode;
  className?: string;
  name: string;
}

const PlayList: React.FC<PlayListProps> = ({ children, className, name }) => {
  const [songsList, setSongsList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "https://spotify-clone-backend-cut9.onrender.com/song/get/all";
    axios
      .get(url)
      .then((res) => {
        setSongsList(res.data);
        setIsLoading(false);
        // console.log(songsList);
      })
      .catch((err) => console.log("Error :", err));
  }, []);

  return (
    <SkeletonTheme
      baseColor="#202020"
      highlightColor="#444"
    >
      <div className="px-6 mb-10">
        <h2 className="text-white font-semibold text-2xl">{name}</h2>
        <div
          className="grid
          grid-cols-2
          gap-x-6
          gap-y-6
          md:gap-x-0
          md:grid-cols-4
          md:grid-rows-1
          mt-4"
        >
          {isLoading
            ? [1, 2, 3, 4].map((item) => {
                return <SongCardSkeleton key={item} />;
              })
            : songsList?.map((song: ISong) => {
                return (
                  <PlayListCard
                    key={song.id}
                    title={song.title}
                    image={song.posterPath}
                    url={song.url}
                    artists={song.artists}
                  />
                );
              })}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default PlayList;
