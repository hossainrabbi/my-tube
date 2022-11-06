import React from 'react';
import useVideo from '../hooks/useVideo';
import Video from './Video';

const ChannelVideo = ({ channelId }) => {
  const { loading, videos } = useVideo(
    `search?part=snippet,id&order=date&maxResults=${'50'}&channelId=${channelId}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-7">
        {videos.length > 0 &&
          videos.map((video) => <Video {...video} key={video?.id?.videoId} />)}
      </div>
    </div>
  );
};

export default ChannelVideo;
