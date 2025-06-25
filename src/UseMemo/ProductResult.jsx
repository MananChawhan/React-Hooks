import React, { useState, useMemo } from 'react';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import Navbarformemo from './Navbarformemo';

const products = [

  {
    id: 1,
    name: 'iPhone 14',
    category: 'Mobile',
    price: 79999,
    image: 'https://m.media-amazon.com/images/I/61bK6PMOC3L.AC_UF1000,1000_QL80.jpg',
    buyLink: 'https://www.apple.com/in/shop/buy-iphone/iphone-14',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23',
    category: 'Mobile',
    price: 74999,
    image: 'https://m.media-amazon.com/images/I/61RZDb2mQxL.AC_UF1000,1000_QL80.jpg',
    buyLink: 'https://www.samsung.com/in/smartphones/galaxy-s23/buy/',
  },
  {
    id: 3,
    name: 'iPhone 13',
    category: 'Mobile',
    price: 65999,
    image: 'https://m.media-amazon.com/images/I/61VuVU94RnL.AC_UF1000,1000_QL80.jpg',
    buyLink: 'https://www.apple.com/in/shop/buy-iphone/iphone-13',
  },
  {
    id: 4,
    name: 'MacBook Air M2',
    category: 'Laptop',
    price: 109999,
    image: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL.AC_UF1000,1000_QL80.jpg',
    buyLink: 'https://www.apple.com/in/shop/buy-mac/macbook-air/13-inch-m2',
  },
  {
    id: 5,
    name: 'Samsung Galaxy Book3',
    category: 'Laptop',
    price: 74999,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/2302/gallery/in-galaxy-book3-360-15-6-inch-with-s-pen-np750-447653-np750qfg-ka3in-534939534?$720_576_JPG$',
    buyLink: 'https://www.samsung.com/in/computers/galaxy-book/galaxy-book3/buy/',
  },
  {
    id: 6,
    name: 'MacBook Pro 14-inch M3',
    category: 'Laptop',
    price: 169999,
    image: 'https://www.aptronixindia.com/media/catalog/product/m/b/mbp14-m3-max-pro-spaceblack-gallery1-202310.jpeg',
    buyLink: 'https://www.apple.com/in/shop/buy-mac/macbook-pro/14-inch-m3',
  },
  {
    id: 7,
    name: 'AirPods Pro 2nd Gen',
    category: 'Accessory',
    price: 24999,
    image: 'https://m.media-amazon.com/images/I/61f1YfTkTDL.AC_UF1000,1000_QL80.jpg',
    buyLink: 'https://www.apple.com/in/shop/product/MQLK3HN/A/airpods-pro',
  },
  {
    id: 8,
    name: 'boAt Rockerz 450',
    category: 'Accessory',
    price: 1299,
    image: 'https://m.media-amazon.com/images/I/61WjZrbnqML.jpg',
    buyLink: 'https://www.boat-lifestyle.com/products/rockerz-450',
  },
  {
    id: 10,
    name: 'Apple Magic Keyboard',
    category: 'Accessory',
    price: 11999,
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861338000',
    buyLink: 'https://www.apple.com/in/shop/product/MK2A3HN/A/magic-keyboard-us-english',
  },
];

const ProductResult = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || product.category === category;
      return matchesSearch && matchesCategory;
    });

    if (sortBy === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === 'name-desc') filtered.sort((a, b) => b.name.localeCompare(a.name));
    if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);

    return filtered;
  }, [search, category, sortBy]);

  const handleAddToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <>
    <Navbarformemo/>
    <div className="min-h-screen bg-[#f5fce8] p-6 text-[#2d3a1f] relative">

      <div className="absolute top-4 right-4 z-50">
        <button className="relative" onClick={() => setShowCart((prev) => !prev)}>
          <FaShoppingCart className="text-3xl text-[#2d3a1f]" />
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cart.length}
          </span>
        </button>

        {showCart && (
          <div className="absolute right-0 mt-3 w-80 bg-[#e9f6cb] border-2 border-[#2d3a1f] rounded-3xl shadow-xl max-h-[400px] overflow-y-auto z-50 text-[#2d3a1f]">
            <div className="p-3 font-bold text-lg border-b border-[#2d3a1f]">🛍 Cart Items</div>
            {cart.length === 0 ? (
              <p className="p-4 text-gray-500 text-sm">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3 border-b border-[#2d3a1f] hover:bg-yellow-50"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-contain rounded-xl border border-[#2d3a1f]"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-gray-600 text-xs">₹ {item.price.toLocaleString()}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="p-2 bg-red-200 hover:bg-red-300 text-red-700 rounded-full transition"
                    title="Remove"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">🛒 Product Filter</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search any product..."
            className="flex-1 p-3 border border-[#2d3a1f] rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-300 font-medium"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 border border-[#2d3a1f] rounded-3xl font-medium"
          >
            <option value="All">All Categories</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Accessory">Accessory</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-3 border border-[#2d3a1f] rounded-3xl font-medium"
          >
            <option value="default">Sort by Default</option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border-2 border-[#2d3a1f] shadow-md rounded-3xl overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-center h-64 p-4 bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <p className="text-green-700 font-extrabold mb-3">₹ {product.price.toLocaleString()}</p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="px-4 py-2 bg-[#e9f6cb] hover:bg-[#d8efb0] text-[#2d3a1f] font-semibold rounded-2xl shadow-sm transition"
                  >
                    🛒 Add to Cart
                  </button>
                  <a
                    href={product.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-2xl transition"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center text-gray-500">No products found.</div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductResult;
