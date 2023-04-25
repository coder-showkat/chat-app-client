import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-20px)] sm:h-screen">
      <div class="center">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  );
};

export default Spinner;
