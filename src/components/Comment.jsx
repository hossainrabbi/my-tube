import React, { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';

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
        <h3 className="text-xl font-semibold">{authorDisplayName}</h3>
        <p className="text-gray-600 text-base my-1">
          {textDisplay.length > 250 ? (
            <>
              {readMore ? textDisplay : `${textDisplay.slice(0, 249)}...`}
              <br />
              <button
                className="font-semibold hover:underline"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? 'Show less' : 'Read More'}
              </button>
            </>
          ) : (
            textDisplay
          )}
        </p>
        <span className="flex items-center text-gray-600">
          <AiFillLike className="mr-1 text-lg -mt-1" />
          {parseInt(likeCount).toLocaleString() || 0}
        </span>
      </div>
    </article>
  );
};

export default Comment;
