import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { PiChatsFill } from "react-icons/pi";
import Logo from "../Logo/Logo";
import profilePic from "../../assets/profilepic.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import noProfile from "../../pages/Profile/assets/user.png";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="h-[70px] w-full bg-customDarkViolet flex items-center sticky top-0">
      <div className="left" style={{ flex: 3 }}>
        <Link to={"/"}>
          <div className="logodiv cursor-pointer">
            <Logo />
          </div>
        </Link>
      </div>
      <div className="center" style={{ flex: 5 }}>
        <div className="searchBar w-full h-[30px] bg-white rounded-xl flex items-center">
          <IoSearch className=" text-xl ml-[10px]" />
          <input
            type="text"
            className="search w-full focus:outline-none bg-none m-[10px]"
            placeholder="Search..."
          />
        </div>
      </div>
      <div
        className="right flex items-center justify-around text-white"
        style={{ flex: 4 }}
      >
        <div className="tabLinks text-lg cursor-pointer flex gap-[10px] ">
          <Link to={"/"}>
            <span className="tabLink1 font-bold">Home</span>
          </Link>
          {/* <span className="tablink2 font-bold">Timeline</span> */}
        </div>
        <div className="tabIcons flex gap-5">
          <div className="tabIcon1 cursor-pointer relative">
            <IoPersonCircleSharp className="w-6 h-6" />
            <span className="w-[15px] h-[15px] bg-violet-400 rounded-full text-white absolute top-[-10px] right-[-10px] flex items-center justify-center text-sm">
              1
            </span>
          </div>
          <div className="tabIcon1 cursor-pointer relative">
            <PiChatsFill className="w-6 h-6" />
            <span className="w-[15px] h-[15px] bg-violet-400 rounded-full text-white absolute top-[-10px] right-[-10px] flex items-center justify-center text-sm">
              1
            </span>
          </div>
          <div className="tabIcon1 cursor-pointer relative">
            <IoNotificationsSharp className="w-6 h-6" />
            <span className="w-[15px] h-[15px] bg-violet-400 rounded-full text-white absolute top-[-10px] right-[-10px] flex items-center justify-center text-sm">
              1
            </span>
          </div>
        </div>
        <div className="profilePicDiv">
          <Link to={`/profile/${user?.username}`}>
            <img
              src={user?.profilePicture ? user?.profilePicture : noProfile}
              alt="A user Profile Picture"
              className="w-[32px] h-[32px] object-cover rounded-full cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
