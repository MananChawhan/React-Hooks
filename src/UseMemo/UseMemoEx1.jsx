import React, { useState, useMemo } from 'react';
import { FaSquareRootAlt } from 'react-icons/fa';
import Navbarformemo from './Navbarformemo';

const UseMemoExample = () => {
  const [number, setNumber] = useState('');
  const [dark, setDark] = useState(false);

  const squareNumber = useMemo(() => {
    console.log("Calculating square...");
    const num = parseFloat(number);
    return isNaN(num) ? 'Invalid Input' : num * num;
  }, [number]);

  const themeStyles = dark
    ? 'bg-[#2d3a1f] text-white border-white'
    : 'bg-[#e9f6cb] text-[#2d3a1f] border-[#2d3a1f]';

  return (
    <>
    <Navbarformemo/>
    <div className="min-h-screen bg-[#f5fce8] flex flex-col items-center justify-center p-6 text-[#2d3a1f]">
      
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2 drop-shadow-sm">
        <FaSquareRootAlt className="text-3xl" />
        Memoized Square Calculator
      </h1>

      <div className="w-full max-w-md bg-white border-4 border-[#2d3a1f] rounded-2xl shadow-lg p-6 space-y-6 transition-all duration-300">
        <input
          type="number"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-green-300 font-medium text-[#2d3a1f]"
        />

        <div className="flex gap-4">
          <button
            onClick={() => setDark(!dark)}
            className="w-1/2 px-4 py-2 bg-[#e9f6cb] hover:bg-[#d8efb0] text-[#2d3a1f] font-semibold rounded-2xl shadow-md hover:scale-105 transition-all"
          >
            Toggle Theme
          </button>
          <button
            onClick={() => setNumber('')}
            className="w-1/2 px-4 py-2 bg-red-200 hover:bg-red-300 text-[#2d3a1f] font-semibold rounded-2xl shadow-md hover:scale-105 transition-all"
          >
            Reset
          </button>
        </div>

        <div className={`p-4 rounded-xl text-center font-bold text-lg border-2 transition-all duration-300 ${themeStyles}`}>
          {number === '' ? (
            <span className="text-gray-500">Please enter a number</span>
          ) : (
            <span>Square: {squareNumber}</span>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default UseMemoExample;
