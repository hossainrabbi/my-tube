import moment from 'moment';
import React from 'react';
import ReactPlayer from 'react-player';
import { AiFillLike } from 'react-icons/ai';
import Comments from './Comments';
import useVideo from '../hooks/useVideo';
import VideoChannelDetails from './VideoChannelDetails';

const PlayVideo = ({ videoId, videos }) => {
  const { loading, videos: channelDetails } = useVideo(
    `channels?part=snippet,statistics&id=${videos[0]?.snippet?.channelId}`
  );
  return (
    <>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls
        playing
        width="100%"
        height="555px"
      />
      <div className="mt-3">
        <h2 className="text-2xl font-semibold">{videos[0]?.snippet?.title}</h2>
        <div className="flex items-center justify-between text-gray-600 mb-3">
          <p className="flex items-center gap-2">
            <span>
              {parseInt(videos[0]?.statistics?.viewCount).toLocaleString() || 0}{' '}
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
              {parseInt(videos[0]?.statistics?.likeCount).toLocaleString() || 0}
            </span>
          </p>
        </div>
        <hr />
        {/* Channel Info */}
        <div>
          {loading && <div>Loading...</div>}
          <VideoChannelDetails channelDetails={channelDetails} />
          <hr />
          <Comments
            commentCount={videos[0]?.statistics?.commentCount}
            videoId={videoId}
          />
        </div>
      </div>
    </>
  );
};

export default PlayVideo;
