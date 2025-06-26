import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const NavbarForUseEffect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { label: "Parent Component", path: "/parentcomponent" },
    { label: "Coming soon...", path: "/callbackhome" },
    { label: "Coming Soon...", path: "/callbackhome" },
    { label: "Coming Soon...", path: "/callbackhome" },
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
            className={`cursor-pointer transition duration-200 hover:text-green-600 px-3 py-1 rounded-full ${
              location.pathname === path
                ? "border-2 border-green-700 bg-green-100"
                : ""
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
