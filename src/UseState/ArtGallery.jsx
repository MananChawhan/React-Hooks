import React, { useState } from 'react';
import NavbarForUseState from "./NavbarForUseState";

const ArtGallery = () => {
  const [artData, setArtData] = useState([]);

  const fetchArtData = () => {
    fetch('https://api.artic.edu/api/v1/artworks?page=2&limit=100')
      .then((res) => res.json())
      .then((data) => setArtData(data.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavbarForUseState />
      <div className="min-h-screen bg-[#f5fce8] flex flex-col items-center px-6 py-10 text-[#2d3a1f]">
        <h1 className="text-3xl font-bold mb-6">🎨 Art Gallery API</h1>

        <button
          onClick={fetchArtData}
          className="bg-[#e9f6cb] hover:bg-[#d8efb0] border-2 border-[#2d3a1f] text-[#2d3a1f] font-bold px-6 py-3 rounded-2xl shadow-sm transition mb-10"
        >
          Load Artworks
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center">
          {artData.map((art) => (
            <div
              key={art.id}
              className="bg-white border-2 border-[#2d3a1f] rounded-3xl shadow-md hover:shadow-lg p-4 w-[300px] transition-all text-[#2d3a1f] font-medium"
            >
              {art.image_id ? (
                <div className="h-48 flex items-center justify-center mb-3 overflow-hidden rounded-xl border border-[#2d3a1f] bg-white">
                  <img
                    src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                    alt={art.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-gray-300 border border-[#2d3a1f] rounded-xl flex items-center justify-center text-gray-600 text-sm mb-3">
                  No Image Available
                </div>
              )}
              <h2 className="text-lg font-bold mb-1">{art.title || "Untitled"}</h2>
              <p className="text-sm mb-1">
                <strong>👨‍🎨 Artist:</strong> {art.artist_display || "Unknown"}
              </p>
              <p className="text-sm mb-1">
                <strong>🖌️ Medium:</strong> {art.medium_display || "N/A"}
              </p>
              <p className="text-sm">
                <strong>📅 Date:</strong> {art.date_display || "N/A"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArtGallery;
