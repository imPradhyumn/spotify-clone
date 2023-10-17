import React from "react";

const CreatePlayList = () => {
  return (
    <div className="bg-cardHover w-full rounded-lg p-5">
      <h3 className="font-bold">{"Let's find some podcasts to follow"}</h3>
      <p className="mt-1 text-[0.85rem] font-bold">
        {"We'll keep you updated on new episodes"}
      </p>
      <button
        className="box-border text-black
        text-sm mt-4
        shadow-blackA4 hover:bg-mauve3
        inline-flex h-[35px] font-bold
        items-center justify-center
        rounded-full bg-white
        px-[15px] leading-none
        focus:shadow-[0_0_0_2px]
        focus:shadow-black focus:outline-none hover:scale-105"
      >
        Browse podcasts
      </button>
    </div>
  );
};

export default CreatePlayList;
