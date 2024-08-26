import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginAuth } from "../../utils/api/auth.api";
import { Link } from "react-router-dom";

const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    loginAuth({ email: auth.email, password: auth.password }, dispatch);
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
          <form onSubmit={handleLogin}>
            <div className="bg-white h-[300px] p-[20px] rounded-md flex flex-col justify-between shadow-lg">
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
                minLength={3}
              />
              <button className="h-[40px] w-1/2 rounded-lg text-white bg-[#7e61ef] hover:bg-hvbtnbgcolor hover:text-hvbtncolor transition text-lg font-bold self-center">
                {isFetching ? "Logging In" : "Login"}
              </button>
              <span className="text-center text-violet-500 cursor-pointer">
                forgot password ... ?
              </span>
              <span className="text-center">
                If you are new user{" "}
                <Link
                  to={"/Register"}
                  className="text-blue-600 text-md font-semibold self-center"
                >
                  Click here
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
