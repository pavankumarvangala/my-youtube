import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_URL } from "../utils/constants";
import { cacheResults } from "../utils/cacheSlice";
import { searchedFor } from "../utils/ResultSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sugesstions, setSuggesstions] = useState([]);
  const [showSuggesstions, setShowSuggesstions] = useState(false);

  const cacheValues = useSelector((store) => store.cache);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheValues[searchQuery]) setSuggesstions(cacheValues[searchQuery]);
      else getSearchSugesstions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, cacheValues]);

  const getSearchSugesstions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_URL + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggesstions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const dispatch = useDispatch();
  const toggleMenuBar = () => {
    dispatch(toggleMenu());
  };
  const searchHandler = () => {
    console.log("from search btn");
    if (!searchQuery) return null;
    dispatch(searchedFor(searchQuery));
  };
  return (
    <div className="grid grid-flow-col pb-4 m-2 h-12 shadow-lg">
      <div className="flex align-middle col-span-1">
        <img
          onClick={() => toggleMenuBar()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />

        <img
          className="h-8"
          alt="youtube"
          src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png"
        />
      </div>
      <div className="col-span-10">
        <div className="relative">
          <input
            className="h-10 w-1/2 px-3 border border-gray-200 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggesstions(true)}
            onBlur={() => setShowSuggesstions(false)}
          />
          <button
            className="h-10 border border-gray-200 rounded-r-full bg-gray-100 px-3"
            onClick={() => searchHandler()}
          >
            🔍
          </button>
          {showSuggesstions && searchQuery && (
            <div className="w-1/2 p-5 absolute top-11 border border-gray-100 rounded-lg bg-white">
              <ul>
                {sugesstions.map((s, index) => {
                  return (
                    <li
                      key={index}
                      className="shadow-sm px-1 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      {s}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
