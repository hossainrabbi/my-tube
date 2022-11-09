import React from 'react';
import { useNavigate } from 'react-router-dom';

const Playlist = ({ id, snippet }) => {
  const navigate = useNavigate();
  const handlePlaylistNavigate = () => {
    navigate(`/playlist/${id?.playlistId}`);
  };

  return (
    <article className="rounded shadow transition block border border-transparent hover:border hover:border-gray-200 min-h-[19rem]">
      <div
        className="h-40 relative cursor-pointer"
        onClick={handlePlaylistNavigate}
      >
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.channelTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute w-6/12 bg-[#0e0e0ee0] h-full right-0 top-0 flex justify-center items-center text-center text-white z-10">
          Playlist
        </div>
      </div>
      <div className="px-4 py-3">
        <div>
          <h3
            className="text-lg font-medium text-gray-800 mb-3 cursor-pointer"
            onClick={handlePlaylistNavigate}
          >
            {snippet?.title?.length > 50
              ? `${snippet?.title?.slice(0, 50)}...`
              : snippet?.title}
          </h3>
          <p className="text-base font-semibold text-gray-600">
            {snippet?.channelTitle}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Playlist;
