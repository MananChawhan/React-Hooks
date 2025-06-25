import React, { useState } from 'react';
import Navbar from './Navbarforref';

const wallpapers = [
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg",
  "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg",
  "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
  "https://images.pexels.com/photos/17726838/pexels-photo-17726838.jpeg",
  "https://images.pexels.com/photos/16533507/pexels-photo-16533507.jpeg",
];

const WallpaperCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % wallpapers.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + wallpapers.length) % wallpapers.length);
  };

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-[#f5fce8] flex flex-col items-center justify-center p-6 text-[#2d3a1f]">
        <h1 className="text-3xl font-bold mb-6">🖼️ Wallpaper Carousel</h1>

        <div className="relative w-full max-w-3xl">
          <img
            src={wallpapers[index]}
            alt="Wallpaper"
            className="rounded-2xl shadow-lg border-4 border-[#d1e8a1] w-full h-64 object-cover"
          />

          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={prev}
              className="bg-white text-[#2d3a1f] hover:bg-[#e3f3bc] border border-[#cde29f] px-4 py-2 rounded-full shadow-md"
            >
              ⬅️
            </button>
            <button
              onClick={next}
              className="bg-white text-[#2d3a1f] hover:bg-[#e3f3bc] border border-[#cde29f] px-4 py-2 rounded-full shadow-md"
            >
              ➡️
            </button>
          </div>
        </div>

        <p className="mt-4 text-lg text-[#3e5030]">Image {index + 1} of {wallpapers.length}</p>
      </div>
    </>
  );
};

export default WallpaperCarousel;
