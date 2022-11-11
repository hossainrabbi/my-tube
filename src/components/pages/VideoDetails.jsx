import React from 'react';
import { useParams } from 'react-router-dom';
import useVideo from '../../hooks/useVideo';
import VideoSuggest from '../VideoSuggest';
import PlayVideo from '../PlayVideo';
import Loading from '../Loading';

const VideoDetails = () => {
  const { videoId } = useParams();
  const { loading, error, videos } = useVideo(
    `videos?part=snippet,statistics&id=${videoId}`
  );

  if (loading) {
    return <Loading className="mt-5" />;
  }

  if (error) {
    return (
      <div
        className="main-container mt-5 p-4 mb-4 text-base text-red-700 bg-red-100 rounded-lg dark:bg-red-200 text-center dark:text-red-800"
        role="alert"
      >
        {error}
      </div>
    );
  }

  return (
    <section className="main-container grid grid-cols-1 xl:grid-cols-3 gap-7 mt-5">
      <div className="col-span-2">
        {videos.length > 0 && <PlayVideo videoId={videoId} videos={videos} />}
      </div>

      <VideoSuggest videoId={videoId} />
    </section>
  );
};

export default VideoDetails;
