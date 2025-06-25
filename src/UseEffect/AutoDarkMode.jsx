import React, { useEffect, useState } from 'react';
import NavbarForUseEffect from './NavbarForUseEffect';

const AutoDarkMode = () => {
  const [Dark, setDark] = useState(false);

  useEffect(() => {
    const hours = new Date().getHours();
    setDark(hours >= 19 || hours < 6); 
  }, []);

  const toggleMode = () => {
    setDark((prev) => !prev);
  };

  return (
    <>
      <NavbarForUseEffect />
      <div
        className={`min-h-screen flex flex-col items-center justify-center px-6 py-12 transition-all duration-500 ${
          Dark
            ? 'bg-gradient-to-br from-gray-900 to-black text-white'
            : 'bg-[#f5fce8] text-[#2d3a1f]'
        }`}
      >
        <div
          className={`p-8 rounded-3xl shadow-xl border-4 transition-all duration-300 ${
            Dark
              ? 'border-yellow-400 bg-[#1c1c1c]'
              : 'border-[#2d3a1f] bg-white'
          } text-center w-full max-w-md`}
        >
          <h1 className="text-4xl font-bold mb-4">
            {Dark ? '🌙 Night Mode' : '🌞 Day Mode'}
          </h1>
          <p className="text-lg font-medium mb-6">
            It's currently <span className="font-bold">{Dark ? 'night' : 'day'}</span> based on your system clock.
          </p>

          <button
            onClick={toggleMode}
            className={`px-6 py-3 rounded-3xl font-bold shadow-md transition-all duration-300 ${
              Dark
                ? 'bg-yellow-400 hover:bg-yellow-300 text-[#1c1c1c]'
                : 'bg-[#2d3a1f] hover:bg-green-900 text-white'
            }`}
          >
            Switch to {Dark ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    </>
  );
};

export default AutoDarkMode;
