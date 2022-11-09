import React from 'react';
import { useNavigate } from 'react-router-dom';

const Channel = ({ id, snippet }) => {
  const navigate = useNavigate();

  const handleChannelNavigate = () => {
    navigate(`/channel/${id?.channelId}`);
  };

  return (
    <article
      className="rounded shadow transition block border border-transparent hover:border hover:border-gray-200 min-h-[19rem] cursor-pointer"
      onClick={handleChannelNavigate}
    >
      <div className="h-40 flex justify-center items-center">
        <img
          src={snippet?.thumbnails?.default?.url}
          alt={snippet?.channelTitle}
          className="w-36 h-36 object-cover rounded-full"
        />
      </div>
      <div className="px-4 pt-3 mt-5">
        <h3 className="text-2xl font-medium text-center text-gray-800 dark:text-white/90">
          {snippet?.title?.length > 50
            ? `${snippet?.title?.slice(0, 50)}...`
            : snippet?.title}
        </h3>
      </div>
    </article>
  );
};

export default Channel;
