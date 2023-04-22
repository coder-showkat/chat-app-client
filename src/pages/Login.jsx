import axios from "axios";
import React, { useState } from "react";
import { BsChatText } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import useGetUser from "../hook/useGetUser";
import { setUser } from "../redux/features/userSlice";
import { toastError, toastSuccess } from "../utilities/toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { user, loading } = useGetUser();

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:4001/user/login", {
        username,
        password,
      });

      if (result.status === 200) {
        setRedirect(true);
        const token = result.data.token;
        const user = result.data.user;
        dispatch(setUser({ token, user }));
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      toastError(error.response.data.error);
    }
  };

  if (loading) return <Spinner />;
  if (user) {
    if (redirect) toastSuccess("Login successful!");
    else toastError("You are already logged in");
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="p-4 sm:p-12 min-h-screen flex flex-col">
      <div className="border-2 border-neutral max-w-lg w-full rounded-3xl p-14 m-auto">
        <h1 className="w-fit mx-auto text-4xl text-white flex items-center gap-x-6 font-bold mb-8">
          <span className="flex justify-center items-center w-12 h-12 bg-accent p-3 rounded-xl">
            <BsChatText className="text-white" />
          </span>
          SAM
        </h1>

        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center gap-y-6"
        >
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent border-primary outline-none focus:border-secondary border-[1.5px] rounded-lg p-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border-primary outline-none focus:border-secondary border-[1.5px] rounded-lg p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="p-3 uppercase bg-secondary text-white active:bg-accent rounded-lg"
          >
            Login
          </button>
          <div>
            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-accent">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
