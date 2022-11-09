import React, { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { Interweave } from 'interweave';
import moment from 'moment';

const Comment = ({
  authorDisplayName,
  authorProfileImageUrl,
  likeCount,
  publishedAt,
  textDisplay,
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="flex gap-4 mt-5">
      <div className="w-14 h-14">
        <img
          src={authorProfileImageUrl || 'https://via.placeholder.com/150x150'}
          alt={authorDisplayName}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="w-full">
        <div className="flex items-center gap-3">
          <h3 className="text-xl dark:text-white/70 font-semibold">
            {authorDisplayName}
          </h3>
          <span className="text-gray-600 dark:text-white/60">-</span>
          <span className="text-gray-600 dark:text-white/60 text-base">
            {moment(publishedAt).startOf('hour').fromNow()}
          </span>
        </div>
        <p className="text-gray-600 dark:text-white/60 text-base my-1">
          {textDisplay.length > 250 ? (
            <>
              {readMore ? (
                <Interweave content={textDisplay} />
              ) : (
                <Interweave content={`${textDisplay.slice(0, 249)}...`} />
              )}
              <br />
              <button
                className="font-semibold hover:underline"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? 'Show less' : 'Read More'}
              </button>
            </>
          ) : (
            <Interweave content={textDisplay} />
          )}
        </p>
        <span className="flex items-center text-gray-600 dark:text-white/70">
          <AiFillLike className="mr-1 text-lg -mt-1" />
          {parseInt(likeCount).toLocaleString() || 0}
        </span>
      </div>
    </article>
  );
};

export default Comment;
