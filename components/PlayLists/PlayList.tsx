"use client";

import { URL_PREFIX } from "@/constants";
import { ISong } from "@/db/models/SongModel";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PlayListCard from "./PlayListCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
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
    (async function fetchSongs() {
      const res = await axios("/api/search/song");
      setSongsList(res.data.songsList);
    })();
    setIsLoading(false);
  }, []);

  return (
    <SkeletonTheme
      baseColor="#202020"
      highlightColor="#444"
    >
      <div className="px-6 mb-10">
        <h2 className="text-white font-semibold text-2xl">{name}</h2>
        <div
          className="grid grid-rows-2
        grid-cols-2 gap-y-6
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
            : songsList.map((song: ISong) => {
                return (
                  <PlayListCard
                    key={song._id}
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
