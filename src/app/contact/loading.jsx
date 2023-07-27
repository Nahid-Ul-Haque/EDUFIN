import React from "react";

const Loading = () => {
  return (
    <>
      <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-36 w-36"></div>
      </div>
    </>
  );
};

export default Loading;
