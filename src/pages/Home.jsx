import React from "react";

import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="bg-base-100">
      <div className="flex space-x-6 container mx-auto">
        <SideBar />
        <div className="flex-1 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
