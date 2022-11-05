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

  return (
    <section className="main-container grid grid-cols-3 gap-7">
      {loading && <div>Loading...</div>}
      <div className="col-span-2">
        {videos.length > 0 && <PlayVideo videoId={videoId} videos={videos} />}
      </div>

      <VideoSuggest videoId={videoId} />
    </section>
  );
};

export default VideoDetails;
