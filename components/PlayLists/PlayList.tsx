"use client";

import { ISong } from "@/db/models/SongModel";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PlayListCard from "./PlayListCard";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SongCardSkeleton from "../skeletons/SongCardSkeleton/SongCardSkeleton";
import { URL_PREFIX } from "@/constants";

interface PlayListProps {
  children?: React.ReactNode;
  className?: string;
  name: string;
}

const PlayList: React.FC<PlayListProps> = ({ children, className, name }) => {
  const [songsList, setSongsList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
    axios
      .get(`https://spotify-clone-backend-cut9.onrender.com/song/get/all`)
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
        grid-rows-3 grid-cols-1
        gap-y-6
        md:grid-cols-4
        md:grid-rows-1
        max-[1200px]:!grid-cols-3
        max-[1200px]:!grid-rows-2
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
                    image="img"
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
