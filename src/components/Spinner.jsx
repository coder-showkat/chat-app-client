import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-40px)] sm:h-screen">
      <span className="loader"></span>
    </div>
  );
};

export default Spinner;
