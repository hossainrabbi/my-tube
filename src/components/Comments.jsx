import React from 'react';
import useVideo from '../hooks/useVideo';
import Comment from './Comment';

const Comments = ({ commentCount, videoId }) => {
  const { loading, videos: commentDetails } = useVideo(
    `commentThreads?part=snippet&videoId=${videoId}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mt-4">
        <h5 className="text-xl font-semibold text-gray-600">
          {parseInt(commentCount).toLocaleString()} Comments
        </h5>
      </div>
      {/* Comments */}
      <div>
        {commentDetails.length > 0 &&
          commentDetails.map((comment) => (
            <Comment
              {...comment?.snippet?.topLevelComment?.snippet}
              key={comment?.snippet?.topLevelComment?.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Comments;
