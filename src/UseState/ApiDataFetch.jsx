import React, { useState } from "react";
import NavbarForUseState from "./NavbarForUseState";

const ApiData = () => {
  const [api, setApi] = useState([]);

  const fetchUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((rs) => rs.json())
      .then((data) => setApi(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavbarForUseState />
      <div className="min-h-screen bg-[#f5fce8] flex flex-col items-center justify-start px-6 py-10 text-[#2d3a1f]">
        <h1 className="text-3xl font-bold mb-6">📡 User API Fetcher</h1>

        <button
          onClick={fetchUser}
          className="bg-[#e9f6cb] hover:bg-[#d8efb0] border-2 border-[#2d3a1f] text-[#2d3a1f] font-bold px-6 py-3 rounded-2xl shadow-sm transition mb-8"
        >
          Load Users
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {api.map((user) => (
            <div
              key={user.id}
              className="bg-white border-2 border-[#2d3a1f] rounded-3xl shadow-md hover:shadow-lg transition-all p-5 text-[#2d3a1f] font-medium"
            >
              <h2 className="text-xl font-bold mb-3">👤 {user.name}</h2>
              <p className="text-sm mb-1"><strong>📧 Email:</strong> {user.email}</p>
              <p className="text-sm mb-1"><strong>📍 City:</strong> {user.address.city}</p>
              <p className="text-sm mb-1"><strong>📞 Phone:</strong> {user.phone}</p>
              <p className="text-sm mb-1"><strong>🌐 Website:</strong> {user.website}</p>
              <p className="text-sm"><strong>🏢 Company:</strong> {user.company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ApiData;
