import React, { useState } from 'react';
import NavbarForUseState from "./NavbarForUseState";

const FormValidation = () => {
  const [name, setName] = useState('');
  const [father, setFather] = useState('');
  const [mother, setMother] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [formDataArray, setFormDataArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { name, father, mother, age, country };
    setFormDataArray((prev) => [...prev, newEntry]);
    setName('');
    setFather('');
    setMother('');
    setAge(0);
    setCountry('');
  };

  return (
    <>
      <NavbarForUseState />
      <div className="min-h-screen bg-[#f5fce8] p-6 flex flex-col items-center text-[#2d3a1f]">
        <h1 className="text-3xl font-bold mb-8">📝 User Information Form</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-[#2d3a1f] p-6 rounded-3xl shadow-xl w-full max-w-md space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-xl border border-[#2d3a1f] placeholder:text-[#777] font-medium"
            required
          />
          <input
            type="text"
            placeholder="Father's Name"
            value={father}
            onChange={(e) => setFather(e.target.value)}
            className="w-full p-3 rounded-xl border border-[#2d3a1f] placeholder:text-[#777] font-medium"
            required
          />
          <input
            type="text"
            placeholder="Mother's Name"
            value={mother}
            onChange={(e) => setMother(e.target.value)}
            className="w-full p-3 rounded-xl border border-[#2d3a1f] placeholder:text-[#777] font-medium"
            required
          />
          <input
            type="number"
            placeholder="Your Age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full p-3 rounded-xl border border-[#2d3a1f] placeholder:text-[#777] font-medium"
            required
          />
          <input
            type="text"
            placeholder="Your Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full p-3 rounded-xl border border-[#2d3a1f] placeholder:text-[#777] font-medium"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#e9f6cb] hover:bg-[#d8efb0] text-[#2d3a1f] font-bold py-3 rounded-xl border border-[#2d3a1f] transition"
          >
            Submit
          </button>

          <div className="mt-4 bg-[#fefee6] p-3 rounded-xl border border-[#2d3a1f] max-h-60 overflow-y-auto text-sm">
            <h2 className="font-bold mb-2">📦 JSON Output:</h2>
            <pre className="text-[#2d3a1f]">{JSON.stringify(formDataArray, null, 2)}</pre>
          </div>
        </form>

        {formDataArray.length > 0 && (
          <div className="mt-10 w-full max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">📄 Submitted Data</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {formDataArray.map((entry, index) => (
                <div
                  key={index}
                  className="bg-[#e9f6cb] text-[#2d3a1f] p-4 border border-[#2d3a1f] rounded-2xl shadow hover:scale-105 transition"
                >
                  <p><strong>Name:</strong> {entry.name}</p>
                  <p><strong>Father:</strong> {entry.father}</p>
                  <p><strong>Mother:</strong> {entry.mother}</p>
                  <p><strong>Age:</strong> {entry.age}</p>
                  <p><strong>Country:</strong> {entry.country}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FormValidation;
