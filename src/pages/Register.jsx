import React, { useState } from "react";
import { BsChatText } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
  };
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
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-primary outline-none focus:border-secondary border-[1.5px] rounded-lg p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border-primary outline-none focus:border-secondary border-[1.5px] rounded-lg p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-transparent border-primary outline-none focus:border-secondary border-[1.5px] rounded-lg p-3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
