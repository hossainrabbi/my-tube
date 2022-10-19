import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import useVideo from '../../hooks/useVideo';

const VideoDetails = () => {
  const { videoId } = useParams();
  const { loading, error, videos } = useVideo(
    `videos?part=snippet,statistics&id=${videoId}`
  );

  console.log(videos);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <section className="main-container grid grid-cols-3 gap-7">
      <div className="col-span-2">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          playing
          width="100%"
          height="555px"
        />
        <div className="mt-3">
          <h2 className="text-2xl font-semibold">
            {videos[0]?.snippet?.title}
          </h2>
          <p className="flex items-center text-gray-600">
            <span>
              {parseInt(videos[0]?.statistics?.viewCount).toLocaleString()}{' '}
              views
            </span>
          </p>
        </div>
      </div>

      <div>ddfdsfsd</div>
    </section>
  );
};

export default VideoDetails;
