"use client";
import { useState } from "react";
import searchSongs from "@/services/searchSong";
import ListSongsSearch from "./ListSongsSearch";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query) {
      const results = await searchSongs(query);
      setSongs(results);
      console.log(results)
    }
    
  };

  return (
    <>
      <form
        className="flex items-center justify-center w-full max-w-md mx-auto mt-5 px-3"
        onSubmit={handleSearch}
      >
        <div className="relative w-full">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border text-black border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
            placeholder="Find a song..."
            value={query}
            onChange={handleInputChange}
          />
          <div className="absolute top-0 left-0 flex items-center h-full pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M3.5 10a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
              ></path>
            </svg>
          </div>
        </div>
        <button
          type="submit"
          className="ml-2 px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        {/* <button
          type="submit"
          className="ml-2 px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
        </button> */}
      </form>
      <ListSongsSearch songs={songs}/>
    </>
  );
};

export default SearchBar;
