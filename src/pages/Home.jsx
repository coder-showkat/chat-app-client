import React, { useState } from "react";

import { BsPower } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Spinner from "../components/Spinner";
import useGetUser from "../hook/useGetUser";
import { logoutUser } from "../redux/features/userSlice";
import { toastError, toastSuccess } from "../utilities/toastify";

const Home = () => {
  const { user, loading } = useGetUser();
  const [redirect, setRedirect] = useState(false);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    setRedirect(true);
  };

  if (loading) return <Spinner />;
  if (!user) {
    if (redirect) toastSuccess("Logout successful!");
    else toastError("Please login first");
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div className="bg-base-100">
      <div className="flex space-x-6 container mx-auto">
        <SideBar user={user} />
        <div className="flex-1 min-h-screen relative">
          <div className="dropdown dropdown-bottom dropdown-end absolute top-4 right-4 z-50">
            <label tabIndex={0} className="btn m-1 btn-accent btn-square">
              <BsPower className="text-white" />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content bg-neutral/40 menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>{user.username}</a>
              </li>
              <li>
                <a onClick={logoutHandler}>Logout</a>
              </li>
            </ul>
          </div>
          <Outlet user={user} />
        </div>
      </div>
    </div>
  );
};

export default Home;
