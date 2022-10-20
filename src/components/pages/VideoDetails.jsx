import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import moment from 'moment/moment';
import { AiFillLike } from 'react-icons/ai';
import { MdModeComment } from 'react-icons/md';
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
          <div className="flex items-center justify-between text-gray-600 mb-3">
            <p className="flex items-center gap-2">
              <span>
                {parseInt(videos[0]?.statistics?.viewCount).toLocaleString()}{' '}
                views
              </span>
              <span>.</span>
              <span>
                {moment(videos[0]?.snippet?.publishedAt).format('MMM D, YYYY')}
              </span>
            </p>
            <p className="flex items-center gap-4">
              <span className="flex items-center">
                <AiFillLike className="mr-1" />
                {parseInt(videos[0]?.statistics?.likeCount).toLocaleString()}
              </span>
              <span className="flex items-center">
                <MdModeComment className="mr-1" />
                {parseInt(videos[0]?.statistics?.commentCount).toLocaleString()}
              </span>
            </p>
          </div>
          <hr />
        </div>
      </div>

      <div>ddfdsfsd</div>
    </section>
  );
};

export default VideoDetails;
