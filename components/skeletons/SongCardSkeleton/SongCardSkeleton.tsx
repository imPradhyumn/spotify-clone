import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SongCardSkeleton = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className="flex item-center
      justify-center rounded-lg
      h-[18rem] w-[55%]
      md:w-[85%]
      max-w-[15rem]
      min-w-[10rem]
      border border-[#202020]"
    >
      <div className="flex flex-col gap-y-3 w-full p-4 rounded-lg">
        {/* Img */}
        <div className="w-full h-[11rem] rounded-lg">
          <Skeleton style={{ height: "100%" }} />
        </div>
        <h3 className="w-full h-[1rem] my-2">
          <Skeleton />
        </h3>
        <p className="w-full h-[1rem]">
          <Skeleton />
        </p>
      </div>
    </div>
  );
};

export default SongCardSkeleton;
