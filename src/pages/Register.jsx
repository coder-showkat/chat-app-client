import axios from "axios";
import React, { useState } from "react";
import { BsChatText } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import useGetUser from "../hook/useGetUser";
import { toastError, toastSuccess } from "../utilities/toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { user, loading } = useGetUser();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // username validation
      if (username.length < 3)
        throw new Error("Username should be minimum three characters");

      //  email validation
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false)
        throw new Error("Please input valid email address");

      // password validation
      if (password !== confirmPassword)
        throw new Error("Password did not match!");
      if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          password
        ) === false
      )
        throw new Error(
          "Password should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
        );

      const result = await axios.post("http://localhost:4001/user/register", {
        username,
        email,
        password,
      });

      if (result.data.status === 201) {
        toastSuccess(result.data.message + ". Please login now");
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        navigate("/login", {
          replace: true,
        });
      }
    } catch (error) {
      if (error.response) return toastError(error.response.data.error);
      else return toastError(error.message);
    }
  };

  if (loading) return <Spinner />;
  if (user) {
    toastError("Please logout first to register new account");
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
          onSubmit={handleRegister}
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
            type="email"
            placeholder="Email"
            className="bg-transparent border-primary outline-none focus:border-secondary border-[1.5px] rounded-lg p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-transparent border-primary outline-none focus:border-secondary border-[1.5px] rounded-lg p-3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="p-3 uppercase bg-secondary text-white active:bg-accent rounded-lg"
          >
            Register
          </button>
          <div>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-accent">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
