import React, { useRef, useState, useEffect } from 'react';
import Navbar from './Navbarforref';
import { FaArrowLeft, FaArrowRight, FaImages } from 'react-icons/fa';

const wallpapers = [
  {
    url: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg",
    quote: "Nature does not hurry, yet everything is accomplished.",
  },
  {
    url: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg",
    quote: "Peace begins with a smile.",
  },
  {
    url: "https://images.pexels.com/photos/17726838/pexels-photo-17726838.jpeg",
    quote: "Beauty lies in the eyes of the beholder.",
  },
  {
    url: "https://images.pexels.com/photos/16533507/pexels-photo-16533507.jpeg",
    quote: "Every sunset brings the promise of a new dawn.",
  },
];

const WallpaperCarousel = () => {
  const [index, setIndex] = useState(0);
  const imageRef = useRef(null);
  const intervalRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % wallpapers.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + wallpapers.length) % wallpapers.length);
  };

  const goToIndex = (i) => {
    setIndex(i);
  };

  useEffect(() => {
    // Scroll into view smoothly when index changes
    if (imageRef.current) {
      imageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [index]);

  useEffect(() => {
    intervalRef.current = setInterval(next, 4000); // Auto-slide every 4s
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f5fce8] flex flex-col items-center justify-center p-6 text-[#2d3a1f]">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <FaImages /> Wallpaper Carousel
        </h1>

        <div className="relative w-full max-w-3xl" ref={imageRef}>
          <img
            src={wallpapers[index].url}
            alt={`Wallpaper ${index + 1}`}
            className="rounded-2xl shadow-lg border-4 border-[#d1e8a1] w-full h-[400px] object-cover transition duration-300"
          />

          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={prev}
              className="bg-white text-[#2d3a1f] hover:bg-[#e3f3bc] border border-[#cde29f] px-4 py-3 rounded-full shadow-md transition"
              aria-label="Previous"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={next}
              className="bg-white text-[#2d3a1f] hover:bg-[#e3f3bc] border border-[#cde29f] px-4 py-3 rounded-full shadow-md transition"
              aria-label="Next"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-4 bg-[#fefee6] border-2 border-[#cce99c] px-6 py-3 rounded-full text-center shadow-md font-medium text-[#2d3a1f] max-w-2xl">
          “{wallpapers[index].quote}”
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-4">
          {wallpapers.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index
                  ? "bg-[#2d3a1f]"
                  : "bg-[#b4c68c] hover:bg-[#8eb85c]"
              }`}
              onClick={() => goToIndex(i)}
            />
          ))}
        </div>

        <p className="mt-3 text-sm font-semibold text-[#3e5030]">
          Image {index + 1} of {wallpapers.length}
        </p>
      </div>
    </>
  );
};

export default WallpaperCarousel;
