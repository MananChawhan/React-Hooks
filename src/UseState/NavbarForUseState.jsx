import React from "react";
import { useNavigate } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const NavbarForUseEffect = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-[#e9f6cb] text-[#2d3a1f] px-6 py-4 shadow-md flex items-center justify-between">
      <div
        className="flex items-center text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        <FaReact className="mr-2 text-[#61DBFB]" />
        React Hook Dashboard
      </div>

      <ul className="flex items-center gap-6 text-md font-semibold">
        <li
          className="hover:text-green-600 transition duration-200 cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          Most-visited Customer
        </li>
        <li
          className="hover:text-green-600 transition duration-200 cursor-pointer"
          onClick={() => navigate("/apidatafetch")}
        >
          Api Data Fetch
        </li>
        <li
          className="hover:text-green-600 transition duration-200 cursor-pointer"
          onClick={() => navigate("/artgallery")}
        >
          Art Gallery 
        </li>
        <li
          className="hover:text-green-600 transition duration-200 cursor-pointer"
          onClick={() => navigate("/tweet")}
        >
            Tweet
        </li>
        <li
          className="hover:text-green-600 transition duration-200 cursor-pointer"
          onClick={() => navigate("/emoji")}
        >
            Emoji-Chat Box
        </li>
        <li
          className="hover:text-green-600 transition duration-200 cursor-pointer"
          onClick={() => navigate("/formvalidation")}
        >
            User Information Form
        </li>
        <li
          className="hover:text-green-600 transition duration-200 cursor-pointer"
          onClick={() => navigate("/counter")}
        >
            UseState-Counter 
        </li>
      </ul>
    </nav>
  );
};

export default NavbarForUseEffect;
