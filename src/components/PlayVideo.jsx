import moment from 'moment';
import React from 'react';
import ReactPlayer from 'react-player';
import { AiFillLike } from 'react-icons/ai';
import Comments from './Comments';
import useVideo from '../hooks/useVideo';
import VideoChannelDetails from './VideoChannelDetails';
import convertToInternationalCurrencySystem from '../utils/convertToInternationalCurrencySystem';
import Loading from './Loading';

const PlayVideo = ({ videoId, videos }) => {
  const { loading, videos: channelDetails } = useVideo(
    `channels?part=snippet,statistics&id=${videos[0]?.snippet?.channelId}`
  );

  if (loading) {
    return <Loading className="mt-5" />;
  }

  return (
    <>
      <div className="w-full md:h-[25rem] xl:h-[555px]">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          playing
          width="100%"
          height="100%"
        />
      </div>
      <div className="mt-3">
        <h2 className="text-2xl text-gray-900 dark:text-white/90 font-semibold">
          {videos[0]?.snippet?.title}
        </h2>
        <div className="flex items-center justify-between text-gray-600 dark:text-white/50 mb-3">
          <p className="flex items-center gap-2">
            <span>
              {convertToInternationalCurrencySystem(
                videos[0]?.statistics?.viewCount
              ) || 0}{' '}
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
              {convertToInternationalCurrencySystem(
                videos[0]?.statistics?.likeCount
              ) || 0}
            </span>
          </p>
        </div>
        <hr />
        {/* Channel Info */}
        <div>
          <VideoChannelDetails
            videoDescription={videos[0]?.snippet?.description}
            channelDetails={channelDetails}
          />
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
