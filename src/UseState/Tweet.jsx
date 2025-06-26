import React, { useState } from "react";
import { FiEdit3, FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { MdOutlineArticle } from "react-icons/md";
import NavbarForUseState from "./NavbarForUseState";

const Tweet = () => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [likesInfo, setLikesInfo] = useState([]);
  const maxLimit = 240;

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const handleTweet = () => {
    if (tweet.trim() !== "" && tweet.length <= maxLimit) {
      setTweets([...tweets, tweet]);
      setLikesInfo([...likesInfo, { like: 0, dislike: 0, liked: false, disliked: false }]);
      setTweet("");
    }
  };

  const handleDelete = (index) => {
    setTweets(tweets.filter((_, i) => i !== index));
    setLikesInfo(likesInfo.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(tweets[index]);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const saveEdit = () => {
    const updatedTweets = [...tweets];
    updatedTweets[editIndex] = editText;
    setTweets(updatedTweets);
    setEditIndex(null);
    setEditText("");
  };

  const handleLike = (index) => {
    const updatedLikes = [...likesInfo];
    if (!updatedLikes[index].liked) {
      updatedLikes[index].like += 1;
      updatedLikes[index].liked = true;
      updatedLikes[index].disliked = false;
      if (updatedLikes[index].dislike > 0) updatedLikes[index].dislike -= 1;
      setLikesInfo(updatedLikes);
    }
  };

  const handleDislike = (index) => {
    const updatedLikes = [...likesInfo];
    if (!updatedLikes[index].disliked) {
      updatedLikes[index].dislike += 1;
      updatedLikes[index].disliked = true;
      updatedLikes[index].liked = false;
      if (updatedLikes[index].like > 0) updatedLikes[index].like -= 1;
      setLikesInfo(updatedLikes);
    }
  };

  return (
    <>
      <NavbarForUseState />
      <div className="flex justify-center items-center min-h-screen bg-[#f5fce8] px-4 py-10 text-[#2d3a1f]">
        <div className="bg-white border-2 border-[#2d3a1f] rounded-3xl shadow-lg w-full max-w-xl p-6 space-y-5">
          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <FiEdit3 className="text-[#2d3a1f]" /> Write a Tweet
          </h2>

          <textarea
            className="w-full h-32 p-3 border border-[#2d3a1f] rounded-2xl resize-none font-medium"
            placeholder="What's happening?"
            value={tweet}
            onChange={handleChange}
          />

          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold">
              Characters: {tweet.length}/{maxLimit}
            </p>
            <button
              className={`px-5 py-2 rounded-2xl font-bold transition ${
                tweet.length > maxLimit || tweet.trim() === ""
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#e9f6cb] hover:bg-[#d8efb0] text-[#2d3a1f] border border-[#2d3a1f]"
              }`}
              disabled={tweet.length > maxLimit || tweet.trim() === ""}
              onClick={handleTweet}
            >
              Tweet
            </button>
          </div>

          <h2 className="text-xl font-bold text-center flex items-center justify-center gap-2">
            <MdOutlineArticle className="text-[#2d3a1f]" /> Your Tweets
          </h2>

          <ul className="space-y-4">
            {tweets.map((item, index) => (
              <li
                key={index}
                className="bg-[#fefee6] p-4 rounded-2xl border border-[#2d3a1f] shadow-md"
              >
                {editIndex === index ? (
                  <>
                    <textarea
                      value={editText}
                      onChange={handleEditChange}
                      className="w-full border border-[#2d3a1f] rounded-xl p-3 mb-3"
                    />
                    <div className="flex gap-3">
                      <button
                        onClick={saveEdit}
                        className="px-4 py-1 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditIndex(null)}
                        className="px-4 py-1 rounded-xl bg-gray-400 hover:bg-gray-500 text-white font-bold"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="mb-3 font-medium">{item}</p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        className="px-3 py-1 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                        onClick={() => handleEdit(index)}
                        title="Edit"
                      >
                        <FiEdit2 />
                      </button>

                      <button
                        className="px-3 py-1 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold"
                        onClick={() => handleDelete(index)}
                        title="Delete"
                      >
                        <RiDeleteBinLine />
                      </button>

                      <button
                        onClick={() => handleLike(index)}
                        className={`px-3 py-1 rounded-xl text-white font-semibold flex items-center gap-1 ${
                          likesInfo[index]?.liked ? "bg-green-700" : "bg-green-500"
                        }`}
                        title="Like"
                        disabled={likesInfo[index]?.liked}
                      >
                        <AiOutlineLike /> {likesInfo[index]?.like}
                      </button>

                      <button
                        onClick={() => handleDislike(index)}
                        className={`px-3 py-1 rounded-xl text-white font-semibold flex items-center gap-1 ${
                          likesInfo[index]?.disliked ? "bg-gray-700" : "bg-gray-500"
                        }`}
                        title="Dislike"
                        disabled={likesInfo[index]?.disliked}
                      >
                        <AiOutlineDislike /> {likesInfo[index]?.dislike}
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tweet;
