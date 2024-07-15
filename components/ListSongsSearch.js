import React from "react";
import CardSong from "./CardsSong";

const ListSongsSearch = ({ songs }) => {
  return (
    <section className="container max-w-7xl m-auto my-20 px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {songs.length > 0 ? (
          songs.map((song) => (
            <CardSong key={song.id} song={song} />
          ))
        ) : (
          <p className="text-center text-gray-500">No se encontraron resultados</p>
        )}
      </div>
    </section>
  );
};

export default ListSongsSearch;
