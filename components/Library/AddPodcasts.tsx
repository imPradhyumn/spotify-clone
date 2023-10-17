import React from "react";

const AddPodcasts = () => {
  return (
    <div className="bg-cardHover w-full rounded-lg p-5">
      <h3 className="font-bold">Create your first playlist</h3>
      <p className="mt-1 text-[0.85rem] font-bold">
        {"It's easy, we'll help you"}
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
        Create playlist
      </button>
    </div>
  );
};

export default AddPodcasts;
