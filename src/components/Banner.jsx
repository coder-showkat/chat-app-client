import Lottie from "lottie-react";
import React from "react";
import hello from "../assets/hello.json";

const Banner = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center text-white">
      <Lottie animationData={hello} className="w-96" />
      <h1 className="text-4xl font-bold mb-2">
        Welcome, <span className="text-accent">Showkat</span>
      </h1>
      <h3>Please select a chat to start messaging..</h3>
    </div>
  );
};

export default Banner;
