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
    <NavrbarForUseEffect/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-200 to-yellow-300 px-4 py-10">
      <div className="bg-yellow-400 border-2 border-black rounded-3xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">📮 Form Auto Saver</h2>

        <form onSubmit={handlePost} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 rounded-xl border-2 border-black text-lg"
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 rounded-xl border-2 border-black text-lg"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl font-semibold w-full transition"
          >
            Post ✉️
          </button>
        </form>

        <div className="mt-6 text-black bg-white rounded-xl p-4 border-2 border-black">
          <h3 className="font-bold">Current Saved Data:</h3>
          <p>👤 <strong>Name:</strong> {form.name || "Not entered"}</p>
          <p>📧 <strong>Email:</strong> {form.email || "Not entered"}</p>
        </div>
      </div>

      {messages.length > 0 && (
        <div className="w-full max-w-md mt-8 space-y-3">
          <h3 className="text-xl font-semibold text-black underline mb-3 text-center">📥 Submitted Entries</h3>
          {messages.map((msg, index) => (
            <div
              key={index}
              className="bg-white text-black px-4 py-3 rounded-xl border-2 border-black shadow-md"
            >
              <p><strong>👤 {msg.name}</strong></p>
              <p>📧 {msg.email}</p>
              <p className="text-sm text-gray-500">🕒 {msg.timestamp}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default FromAutoSever;
