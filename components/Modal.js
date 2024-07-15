import React from "react";

const Modal = ({ song, onClose, handleDownload }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-2">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative bg-slate-400  p-4 rounded-md shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-start mb-4 ">
          <h2 className="text-xl font-bold">{song.snippet.title}</h2>
          <button onClick={onClose} className="text-black font-extrabold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${song.id.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={handleDownload}
            className="bg-blue-500 transition duration-200 hover:bg-blue-600 text-white p-2 rounded-md"
          >
            Descargar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
