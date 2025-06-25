import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const pages = [
    { label: "📡 UseState", path: "/statehome" },
    { label: "⏰ UseEffect", path: "/effecthome" },
    { label: "💾 UseRef", path: "/refhome" },
    { label: "🌐 UseMemo", path: "/memohome" },
  ];

  return (
    <div className="min-h-screen bg-[#f5fce8] flex flex-col items-center justify-center p-6 text-[#2d3a1f] relative">
      <h1 className="text-4xl font-bold mb-10 drop-shadow-md flex items-center gap-3">
        <FaReact className="text-5xl" />
        React Hooks Dashboard
      </h1>

      <div className="relative grid grid-cols-2 gap-6 w-full max-w-3xl">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="p-1 bg-[#f5fce8] rounded-full border-2 border-[#2d3a1f] shadow-md">
            <FaReact className="text-2xl animate-spin-slow text-[#2d3a1f]" />
          </div>
        </div>

        {pages.map(({ label, path }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className="bg-[#e9f6cb] hover:bg-[#d8efb0] text-[#2d3a1f] font-semibold px-6 py-4 rounded-2xl shadow-md hover:scale-105 transition-all text-lg border border-[#2d3a1f]"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
