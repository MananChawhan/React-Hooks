import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaUserAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { MdWifi, MdDarkMode } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const pages = [
    { label: "UserData", path: "/effect", icon: <FaUserAlt className="text-xl mr-2" /> },
    { label: "Live Clock", path: "/clock", icon: <BiTimeFive className="text-xl mr-2" /> },
    { label: "Internet Status", path: "/online", icon: <MdWifi className="text-xl mr-2" /> },
    { label: "Form Auto Saver", path: "/autosaver", icon: <BsFileEarmarkText className="text-xl mr-2" /> },
    { label: "Auto Dark Mode", path: "/autodark", icon: <MdDarkMode className="text-xl mr-2" /> },
  ];

  return (
    <div className="min-h-screen bg-[#f5fce8] flex flex-col items-center justify-center p-6 text-[#2d3a1f]">
      <h1 className="text-4xl font-bold mb-10 drop-shadow-md flex items-center justify-center gap-2">
        <FaReact className="text-5xl text-[#2d3a1f] animate-spin-slow" />
        Use-Effect Dashboard
      </h1>

      <div className="mb-10">
        <Link to="/" className="inline-block">
          <div className="bg-[#e9f6cb] hover:bg-[#d8efb0] border-2 border-[#2d3a1f] p-3 rounded-full shadow hover:scale-110 transition-all">
            <AiFillHome className="text-2xl text-[#2d3a1f]" />
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {pages.map(({ label, path, icon }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className="bg-[#e9f6cb] hover:bg-[#d8efb0] text-[#2d3a1f] font-bold px-6 py-4 rounded-2xl border-2 border-[#2d3a1f] shadow-md hover:scale-105 transition-all text-lg flex items-center"
          >
            {icon}
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
