import React from 'react';
import useVideo from '../hooks/useVideo';
import Loading from './Loading';
import Video from './Video';

const VideoSuggest = ({ videoId }) => {
  const { loading, videos } = useVideo(
    `search?part=id,snippet&type=video&relatedToVideoId=${videoId}`
  );

  if (loading) {
    return <Loading className="mt-5" />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-7">
        {videos.length > 0 &&
          videos.map((video) => <Video {...video} key={video?.id?.videoId} />)}
      </div>
    </div>
  );
};

export default VideoSuggest;
