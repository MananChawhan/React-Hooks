import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const NavbarForUseEffect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: "Most-visited Customer", path: "/cart" },
    { label: "Api Data Fetch", path: "/apidatafetch" },
    { label: "Art Gallery", path: "/artgallery" },
    { label: "Tweet", path: "/tweet" },
    { label: "Emoji-Chat Box", path: "/emoji" },
    { label: "User Information Form", path: "/formvalidation" },
    { label: "UseState-Counter", path: "/counter" },
  ];

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
        {links.map(({ label, path }) => (
          <li
            key={path}
            onClick={() => navigate(path)}
            className={`cursor-pointer px-3 py-1 rounded-full transition duration-200 ${
              location.pathname === path
                ? "border-2 border-green-700 bg-green-100"
                : "hover:text-green-600"
            }`}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarForUseEffect;
