import React, { useRef, useState } from 'react';
import Navbarforref from './Navbarforref';

function RenderCounter() {
  const countRef = useRef(0);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    countRef.current += 1;
    console.log("Input changed", countRef.current, "times");
  };

  return (
    <>
      <Navbarforref/>
      <div className="min-h-screen bg-[#f5fce8] flex flex-col justify-center items-center p-6 text-[#2d3a1f]">
        <div className="bg-[#e9f6cb] border border-[#cde2a3] rounded-2xl shadow-md p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-center">Render Counter 🔄</h2>

          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Type something..."
            className="w-full px-4 py-2 mb-4 rounded-xl border-2 border-[#b5d68a] focus:outline-none focus:ring-2 focus:ring-green-300 text-[#2d3a1f] bg-white shadow-sm"
          />

          <p className="text-md text-center italic">
            Type something and check <span className="font-semibold">console</span> to see how many times input changed.
          </p>
        </div>
      </div>
    </>
  );
}

export default RenderCounter;
