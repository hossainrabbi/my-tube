import React from 'react';
import { Link } from 'react-router-dom';

const Channel = ({ id, snippet }) => {
  return (
    <Link to={`/channel/${id?.channelId}`}>
      <article className="rounded shadow transition border border-transparent hover:border hover:border-gray-200 min-h-[17rem]">
        <div className="h-40 flex justify-center items-center">
          <img
            src={snippet?.thumbnails?.high?.url}
            alt={snippet?.channelTitle}
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
        <div className="px-4 py-3">
          <h3 className="text-lg font-medium text-center text-gray-800">
            {snippet?.title?.length > 50
              ? `${snippet?.title?.slice(0, 50)}...`
              : snippet?.title}
          </h3>
        </div>
      </article>
    </Link>
  );
};

export default Channel;
