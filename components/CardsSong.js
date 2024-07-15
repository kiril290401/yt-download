'use client'
import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

const CardSong = ({ song }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      params: { id: song.id.videoId },
      headers: {
        'X-RapidAPI-Key': '9eeaee03e9msh2f3d679486cf33fp1c2840jsne794dc7c26bb',
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      if (response.data.status === 'ok')
        return window.location = response.data.link;
    }).catch(function (error) {
      console.error(error);
    });
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className="bg-slate-900 p-3 rounded-md grid gap-3 justify-between items-center">
        <div className="m-auto">
          <Image
            src={song.snippet.thumbnails.medium.url}
            alt={`Image ${song.snippet.title}`}
            width={500}
            height={500}
            className="rounded-md"
          />
        </div>
        <div className="m-auto">
          <p className="font-bold">{song.snippet.title}</p>
        </div>
      </button>
      {isModalOpen && (
        <Modal song={song} onClose={() => setIsModalOpen(false)} handleDownload={handleDownload} />
      )}
    </>
  );
};

export default CardSong;
