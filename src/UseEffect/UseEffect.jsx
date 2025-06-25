import React, { useEffect, useState } from 'react';
import NavbarForUseEffect from './NavbarForUseEffect';

const ApiDatafetch = () => {
  const [users, setUsers] = useState([]);
  const [inputdata, setInput] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log('✅ Data fetched successfully');
      })
      .catch((err) => console.error('❌ Fetch error:', err));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(inputdata.toLowerCase()) ||
    user.username.toLowerCase().includes(inputdata.toLowerCase()) ||
    user.email.toLowerCase().includes(inputdata.toLowerCase())
  );

  return (
    <>
      <NavbarForUseEffect />
      <div className="min-h-screen bg-gradient-to-br from-[#f5fce8] to-[#e9f6cb] flex flex-col items-center justify-start px-4 py-10 text-[#2d3a1f]">
        <h2 className="text-4xl font-extrabold mb-6 text-center">📋 User Data</h2>

        <input
          className="w-full max-w-md px-5 py-3 mb-8 border-2 border-[#2d3a1f] bg-white rounded-2xl shadow-inner placeholder-gray-500 text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          type="text"
          value={inputdata}
          onChange={(e) => setInput(e.target.value)}
          placeholder="🔍 Search by name, email, or username"
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <li
                key={user.id}
                className="bg-white border-2 border-[#2d3a1f] p-5 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              >
                <p className="text-xl font-bold mb-1">🧑 {user.name}</p>
                <p className="text-md text-gray-700">👤 @{user.username}</p>
                <p className="text-md text-gray-800 mt-1">📧 {user.email}</p>
                <p className="text-md text-gray-800">📍 {user.address.city}</p>
              </li>
            ))
          ) : (
            <p className="col-span-full text-gray-600 text-lg text-center">No matching users found.</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default ApiDatafetch;
