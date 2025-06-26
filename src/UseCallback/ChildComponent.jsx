import React from 'react';

const ChildComponent = ({ onClick }) => {
  console.log("Child component rendered");

  return (
    <div className="mt-4 p-4 bg-[#f5fce8] rounded-2xl border-2 border-[#2d3a1f] shadow-md">
      <h2 className="text-xl font-bold text-[#2d3a1f] mb-3">
        This is the Child Component
      </h2>
      <button
        onClick={() => {
          console.log('Button in Child Component clicked!');
          if (onClick) onClick();
        }}
        className="bg-[#e9f6cb] hover:bg-[#d8efb0] text-[#2d3a1f] font-semibold px-5 py-2 rounded-xl border border-[#2d3a1f] transition-all hover:scale-105"
      >
        Click Me
      </button>
    </div>
  );
};

export default ChildComponent;
