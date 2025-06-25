import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Home = () => {
  const navigate = useNavigate();

  const pages = [
    { label: "📡 Input & Toggle", path: "/usememoex1" },
    { label: "⏰ Shop Products", path: "/usememoex2" },
    { label: "💾 Coming Soon...", path: "/useref" },
    { label: "🌐 Coming Soon...", path: "/OnlineStatus" },
  ];

  return (
    <div className="min-h-screen bg-[#f5fce8] flex flex-col items-center justify-center p-6 text-[#2d3a1f]">
      <h1 className="text-4xl font-bold mb-10 drop-shadow-md flex items-center gap-3">
        <FaReact className="text-5xl animate-spin-slow" />
        Use-Memo Dashboard
      </h1>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-3xl">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Link to="/" className="inline-block">
            <div className="bg-[#e9f6cb] hover:bg-[#d8efb0] p-2 rounded-full border-2 border-[#2d3a1f] shadow hover:scale-110 transition-all">
              <AiFillHome className="text-base text-[#2d3a1f]" />
            </div>
          </Link>
        </div>

        {pages.map(({ label, path }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className="bg-[#e9f6cb] hover:bg-[#d8efb0] text-[#2d3a1f] font-bold px-6 py-4 rounded-2xl border-2 border-[#2d3a1f] shadow-md hover:scale-105 transition-all text-lg"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
