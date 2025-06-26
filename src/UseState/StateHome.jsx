import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReact, FaUserFriends, FaTwitter, FaWpforms } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlinePlusCircle } from "react-icons/ai";
import { BiCloudDownload } from "react-icons/bi";
import { MdPhotoLibrary } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";

const Home = () => {
  const navigate = useNavigate();

  const pages = [
    { label: "Most-visited Customer", path: "/cart", icon: <FaUserFriends className="text-xl mr-2" /> },
    { label: "API Data Fetch", path: "/apidatafetch", icon: <BiCloudDownload className="text-xl mr-2" /> },
    { label: "Art Gallery", path: "/artgallery", icon: <MdPhotoLibrary className="text-xl mr-2" /> },
    { label: "Tweet Box", path: "/tweet", icon: <FaTwitter className="text-xl mr-2" /> },
    { label: "Emoji Chat Box", path: "/emoji", icon: <BsEmojiSmile className="text-xl mr-2" /> },
    { label: "User Info Form", path: "/formvalidation", icon: <FaWpforms className="text-xl mr-2" /> },
    { label: "Counter", path: "/counter", icon: <AiOutlinePlusCircle className="text-xl mr-2" /> },
  ];

  return (
    <div className="min-h-screen bg-[#f5fce8] flex flex-col items-center justify-center p-6 text-[#2d3a1f]">
      <h1 className="text-4xl font-bold mb-10 drop-shadow-md flex items-center gap-3">
        <FaReact className="text-5xl animate-spin-slow" />
        Use-State Dashboard
      </h1>

      <div className="mb-10">
        <Link to="/" className="inline-block">
          <div className="bg-[#e9f6cb] hover:bg-[#d8efb0] p-3 rounded-full border-2 border-[#2d3a1f] shadow hover:scale-110 transition-all">
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
