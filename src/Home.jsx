import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { BsToggleOn } from "react-icons/bs"; // UseState
import { BiTimeFive } from "react-icons/bi"; // UseEffect
import { MdOutlineRemoveRedEye, MdCall } from "react-icons/md"; // UseRef + CallBack
import { SiDatabricks } from "react-icons/si"; // UseMemo

const Home = () => {
  const navigate = useNavigate();

  const pages = [
    { label: "UseState", path: "/statehome", icon: <BsToggleOn className="inline mr-2 text-xl" /> },
    { label: "UseEffect", path: "/effecthome", icon: <BiTimeFive className="inline mr-2 text-xl" /> },
    { label: "UseRef", path: "/refhome", icon: <MdOutlineRemoveRedEye className="inline mr-2 text-xl" /> },
    { label: "UseMemo", path: "/memohome", icon: <SiDatabricks className="inline mr-2 text-xl" /> },
    { label: "UseCallBack", path: "/callbackhome", icon: <MdCall className="inline mr-2 text-xl" /> },
  ];

  return (
    <div className="min-h-screen bg-[#f5fce8] flex flex-col items-center justify-center p-6 text-[#2d3a1f]">
      <h1 className="text-4xl font-bold mb-10 drop-shadow-md flex items-center gap-3">
        <FaReact className="text-5xl text-[#2d3a1f]" />
        React Hooks Dashboard
      </h1>

      <div className="relative grid grid-cols-2 gap-6 w-full max-w-3xl">
        <div className="absolute left-1/2 top-[56%] transform -translate-x-1/2 -translate-y-20 z-10">
          <div className="p-[6px] bg-[#f5fce8] rounded-full border-2 border-[#2d3a1f] shadow-md">
            <FaReact className="text-xl animate-spin-slow text-[#2d3a1f]" />
          </div>
        </div>

        {pages.map(({ label, path, icon }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className="bg-[#e9f6cb] hover:bg-[#d8efb0] text-[#2d3a1f] font-semibold px-6 py-4 rounded-2xl shadow-md hover:scale-105 transition-all text-lg border border-[#2d3a1f] flex items-center gap-2"
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
  