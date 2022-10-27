import React from 'react';
import useVideo from '../hooks/useVideo';
import Video from './Video';

const VideoSuggest = ({ videoId }) => {
  const { loading, videos } = useVideo(
    `search?part=id,snippet&type=video&relatedToVideoId=${videoId}`
  );

  if (loading) {
    return <div>Loading....</div>;
  }

  // TODO:
  if (videos.length <= 0) {
    return <div>Video Not Found....</div>;
  }

  return (
    <div>
      {videos ? (
        <div className="grid grid-cols-1 gap-7">
          {videos.map((video) => (
            <Video {...video} key={video?.id?.videoId} />
          ))}
        </div>
      ) : (
        <h2>Video Not Found</h2>
      )}
    </div>
  );
};

export default VideoSuggest;
