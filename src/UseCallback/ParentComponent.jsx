import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';
import NavbarForUseCallback from './NavbarForUseCallback';
const NormalParent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button in Child Component was clicked");
    // You can also test updating state here:
    // setCount((prev) => prev + 1);
  }, []);

  return (
    <>
    <NavbarForUseCallback />
    <div className="min-h-screen bg-[#f5fce8] flex flex-col items-center justify-center p-6 text-[#2d3a1f]">
      <div className="bg-[#e9f6cb] border-2 border-[#2d3a1f] p-6 rounded-2xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Count: {count}</h1>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-[#d8efb0] hover:bg-[#cbe69a] text-[#2d3a1f] font-semibold px-6 py-2 mb-4 rounded-xl border border-[#2d3a1f] transition-all hover:scale-105"
        >
          Increment
        </button>
        <ChildComponent onClick={handleClick} />
      </div>
    </div>
    </>
  );
};

export default NormalParent;
