import React from 'react';
import { useParams } from 'react-router-dom';
import useVideo from '../../hooks/useVideo';
import VideoSuggest from '../VideoSuggest';
import PlayVideo from '../PlayVideo';

const VideoDetails = () => {
  const { videoId } = useParams();
  const { loading, videos } = useVideo(
    `videos?part=snippet,statistics&id=${videoId}`
  );

  const { loading: channelLoading, videos: channelDetails } = useVideo(
    `channels?part=snippet,statistics&id=${videos[0]?.snippet?.channelId}`
  );

  if (loading || channelLoading) {
    return <div>Loading...</div>;
  }

  // TODO:
  if (videos.length <= 0 || channelDetails.length <= 0) {
    return <div>Something is Error</div>;
  }

  return (
    <section className="main-container grid grid-cols-3 gap-7">
      <div className="col-span-2">
        <PlayVideo
          videoId={videoId}
          videos={videos}
          channelDetails={channelDetails}
        />
      </div>

      <VideoSuggest videoId={videoId} />
    </section>
  );
};

export default VideoDetails;
