import React from 'react';
import useVideo from '../hooks/useVideo';
import convertToInternationalCurrencySystem from '../utils/convertToInternationalCurrencySystem';
import Comment from './Comment';
import Loading from './Loading';

const Comments = ({ commentCount, videoId }) => {
  const { loading, videos: commentDetails } = useVideo(
    `commentThreads?part=snippet&videoId=${videoId}`
  );

  return (
    <div>
      <div className="mt-4">
        <h5 className="text-xl font-semibold text-gray-600 dark:text-white/70">
          {convertToInternationalCurrencySystem(commentCount)} Comments
        </h5>
      </div>
      {/* Comments */}
      {commentCount > 0 && (
        <div>
          {loading && <Loading className="mt-5 dark:bg-gray-900" />}
          {commentDetails.length > 0 &&
            commentDetails.map((comment) => (
              <Comment
                {...comment?.snippet?.topLevelComment?.snippet}
                key={comment?.snippet?.topLevelComment?.id}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
