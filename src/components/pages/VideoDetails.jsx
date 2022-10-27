import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import moment from 'moment/moment';
import { AiFillLike } from 'react-icons/ai';
import useVideo from '../../hooks/useVideo';
import VideoSuggest from '../VideoSuggest';
import Comments from '../Comments';

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
                {parseInt(videos[0]?.statistics?.viewCount).toLocaleString() ||
                  0}{' '}
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
                {parseInt(videos[0]?.statistics?.likeCount).toLocaleString() ||
                  0}
              </span>
            </p>
          </div>
          <hr />
          {/* Channel Info */}
          <div>
            <div className="flex items-center gap-4 mt-4">
              <Link
                to={`/channel/${channelDetails[0]?.id}`}
                className="w-16 h-16 rounded-full"
              >
                <img
                  src={channelDetails[0]?.snippet?.thumbnails?.default?.url}
                  alt={channelDetails[0]?.snippet?.localized?.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </Link>
              <div>
                <Link to={`/channel/${channelDetails[0]?.id}`}>
                  <h3 className="text-xl font-semibold">
                    {channelDetails[0]?.snippet?.localized?.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm">
                  {channelDetails[0]?.statistics?.subscriberCount} subscriber
                </p>
              </div>
            </div>
            <p className="text-gray-600 my-4 ml-20">
              {channelDetails[0]?.snippet?.localized?.description}
            </p>
            {videos[0]?.statistics?.commentCount && (
              <>
                <hr />
                <Comments
                  commentCount={videos[0]?.statistics?.commentCount}
                  videoId={videoId}
                />
              </>
            )}
          </div>
        </div>
      </div>

      <VideoSuggest videoId={videoId} />
    </section>
  );
};

export default VideoDetails;
