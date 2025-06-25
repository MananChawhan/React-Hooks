import React, { useEffect, useState } from 'react';
import NavrbarForUseEffect from './NavbarForUseEffect';

const FromAutoSever = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedForm = localStorage.getItem('formData');
    const savedMsgs = localStorage.getItem('formMessages');
    if (savedForm) setForm(JSON.parse(savedForm));
    if (savedMsgs) setMessages(JSON.parse(savedMsgs));
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(form));
  }, [form]);

  useEffect(() => {
    localStorage.setItem('formMessages', JSON.stringify(messages));
  }, [messages]);

  const handlePost = (e) => {
    e.preventDefault();
    if (form.name.trim() && form.email.trim()) {
      const newMsg = { ...form, timestamp: new Date().toLocaleString() };
      setMessages((prev) => [...prev, newMsg]);
      setForm({ name: '', email: '' });
    }
  };

  return (
    <>
      <NavrbarForUseEffect />
      <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4 bg-gradient-to-br from-[#f5fce8] to-[#e9f6cb] text-[#2d3a1f] transition-all">
        
        <div className="bg-white border-2 border-[#2d3a1f] rounded-3xl p-6 w-full max-w-md shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-6">📮 Form Auto Saver</h2>

          <form onSubmit={handlePost} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 rounded-xl border-2 border-[#2d3a1f] text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 rounded-xl border-2 border-[#2d3a1f] text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <button
              type="submit"
              className="bg-[#2d3a1f] hover:bg-green-900 text-white p-3 rounded-3xl font-semibold w-full transition"
            >
              Post ✉️
            </button>
          </form>

          <div className="mt-6 bg-[#f0f4dc] rounded-2xl p-4 border-2 border-[#2d3a1f]">
            <h3 className="font-bold text-lg mb-2">📌 Currently Saved (Live):</h3>
            <p>👤 <strong>Name:</strong> {form.name || "Not entered"}</p>
            <p>📧 <strong>Email:</strong> {form.email || "Not entered"}</p>
          </div>
        </div>

        {messages.length > 0 && (
          <div className="w-full max-w-md mt-10 space-y-4">
            <h3 className="text-xl font-semibold underline text-center">📥 Submitted Entries</h3>
            {messages.map((msg, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#2d3a1f] px-5 py-4 rounded-2xl shadow-md"
              >
                <p className="font-bold text-lg">👤 {msg.name}</p>
                <p>📧 {msg.email}</p>
                <p className="text-sm text-gray-500 mt-1">🕒 {msg.timestamp}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FromAutoSever;
