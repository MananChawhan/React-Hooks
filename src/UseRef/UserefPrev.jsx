import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbarforref';
function StorePreviousCount() {
  const [input, setInput] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = input;
  }, [input]);

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-[#f5fce8] flex flex-col justify-center items-center p-6 text-[#2d3a1f]">
        <div className="bg-[#e9f6cb] border border-[#cde2a3] rounded-2xl shadow-md p-8 w-full max-w-md text-center">
          <h2 className="text-3xl font-bold mb-6">Previous Count Tracker 🔁</h2>

          <p className="text-xl mb-2 font-semibold">
            🔢 Current Value: <span className="text-[#385723]">{input}</span>
          </p>
          <p className="text-lg mb-6 italic">
            ⏪ Previous Value: <span className="text-gray-700">{prevCount.current ?? "N/A"}</span>
          </p>

          <button
            onClick={() => setInput((c) => c + 1)}
            className="bg-[#cde2a3] hover:bg-[#bddb8a] text-[#2d3a1f] font-semibold px-6 py-3 rounded-xl shadow transition-all"
          >
            Increment +
          </button>
        </div>
      </div>
    </>
  );
}

export default StorePreviousCount;
