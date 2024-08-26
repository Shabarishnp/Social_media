import React, { useState } from "react";
import { toast } from "react-toastify";
import { registerUser } from "../../utils/api/auth.api";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [auth, setAuth] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    if (auth.confirmPassword !== auth.password) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await registerUser({
          username: auth.username,
          email: auth.email,
          password: auth.password,
        });
        toast.success(res.data.message);
        navigate("/login");
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-customDarkViolet flex items-center justify-center">
      <div className="w-[70%] h-[70%] flex">
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
          <h1 className="font-extrabold text-3xl text-violet-500">
            Shake Hands
          </h1>
          <span className="text-lg font-semibold text-white">
            Connect With Friends On Shake Hands .....
          </span>
        </div>
        <div className="flex flex-col justify-center" style={{ flex: 1 }}>
          <form
            onSubmit={handleRegister}
            className="bg-white h-[400px] p-[20px] rounded-md flex flex-col justify-between shadow-lg"
          >
            <input
              type="name"
              placeholder="username"
              className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
              onChange={(e) => {
                setAuth({
                  ...auth,
                  username: e.target.value,
                });
              }}
              required
            />
            <input
              type="email"
              placeholder="email"
              className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
              onChange={(e) => {
                setAuth({
                  ...auth,
                  email: e.target.value,
                });
              }}
              required
            />
            <input
              type="password"
              placeholder="password"
              className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
              onChange={(e) => {
                setAuth({
                  ...auth,
                  password: e.target.value,
                });
              }}
              required
            />
            <input
              type="password"
              placeholder="confirm password"
              className="h-[50px] rounded-md border border-gray-200 text-lg p-[20px] focus:outline-none"
              onChange={(e) => {
                setAuth({
                  ...auth,
                  confirmPassword: e.target.value,
                });
              }}
              required
            />
            <button
              type="submit"
              className="h-[40px] w-1/2 rounded-lg text-white bg-[#7e61ef] hover:bg-hvbtnbgcolor hover:text-hvbtncolor transition text-lg font-bold self-center"
            >
              Sign Up
            </button>
            <span className="text-black text-center">
              Already have an account login here... |{" "}
              <Link
                className="transition text-blue-600 text-lg font-bold self-center"
                to={"/login"}
              >
                Login
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
