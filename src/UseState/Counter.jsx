import React, { useState } from 'react';
import NavbarForUseState from "./NavbarForUseState";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputvalue, setInputValue] = useState('');
  const [stdobj] = useState([
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit...'
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae...'
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure...'
    },
    {
      userId: 1,
      id: 4,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis...'
    }
  ]);

  return (
    <>
      <NavbarForUseState />
      <div className="min-h-screen bg-[#f5fce8] flex flex-col items-center p-6 text-[#2d3a1f]">
        <div className="bg-white border-2 border-[#2d3a1f] rounded-3xl shadow-lg p-6 w-full max-w-md flex flex-col gap-4 text-center">
          <h2 className="text-3xl font-bold">🔢 Count: {count}</h2>

          <input
            type="number"
            value={inputvalue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a number"
            className="w-full p-3 rounded-xl border border-[#2d3a1f] placeholder:text-gray-600 text-[#2d3a1f] font-semibold"
          />

          <div className="flex flex-col gap-2">
            <button
              className="bg-[#e9f6cb] hover:bg-[#d8efb0] text-[#2d3a1f] py-2 rounded-xl font-bold border border-[#2d3a1f] transition"
              onClick={() => setCount(count + parseInt(inputvalue || 0))}
            >
              ➕ Increment
            </button>

            <button
              className="bg-[#e9f6cb] hover:bg-[#d8efb0] text-[#2d3a1f] py-2 rounded-xl font-bold border border-[#2d3a1f] transition"
              onClick={() => setCount(count - parseInt(inputvalue || 0))}
            >
              ➖ Decrement
            </button>

            <button
              className="bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-xl font-bold transition"
              onClick={() => setCount(0)}
            >
              🔃 Reset
            </button>
          </div>

          <p className="font-medium mt-2">
            Current Input: {parseInt(inputvalue) || 0}
          </p>
        </div>

        <div className="mt-10 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-4">🗂 Sample Data (stdobj)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {stdobj.map((item) => (
              <div
                key={item.id}
                className="bg-[#e9f6cb] text-[#2d3a1f] border border-[#2d3a1f] rounded-2xl p-5 shadow hover:scale-105 transition"
              >
                <h3 className="font-semibold text-lg mb-1">📌 Title</h3>
                <p className="mb-3">{item.title}</p>
                <h4 className="font-semibold text-lg mb-1">📝 Body</h4>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
