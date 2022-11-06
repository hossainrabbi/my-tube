import React from 'react';
import { useParams } from 'react-router-dom';
import useVideo from '../../hooks/useVideo';
import ChannelVideo from '../ChannelVideo';

const ChannelDetails = () => {
  const { channelId } = useParams();
  const { loading, videos: channelDetails } = useVideo(
    `channels?part=snippet,statistics&id=${channelId}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div
        className="h-52 relative bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url("/assets/img/placeholder.png")',
        }}
      >
        <div className="absolute left-2/4 -translate-x-2/4 -bottom-20 z-10 text-center">
          <img
            src={channelDetails[0]?.snippet?.thumbnails?.medium?.url}
            alt={channelDetails[0]?.snippet?.localized?.title}
            className="w-40 h-40 rounded-full"
          />
        </div>
        <div className="absolute right-5 bottom-5">
          <p>Total Video: {channelDetails[0]?.statistics?.videoCount}</p>
          <p>Total View: {channelDetails[0]?.statistics?.viewCount}</p>
        </div>
      </div>
      <div className="main-container ">
        <div className="text-center mt-24 mb-5">
          <h3 className="text-2xl font-semibold text-gray-800">
            {channelDetails[0]?.snippet?.localized?.title}
          </h3>
          <p className="text-gray-600">
            {channelDetails[0]?.statistics?.subscriberCount} subscribers
          </p>
          <p className="text-gray-600 text-sm mt-2">
            {channelDetails[0]?.snippet?.localized?.description}
          </p>
        </div>
        <ChannelVideo channelId={channelId} />
      </div>
    </section>
  );
};

export default ChannelDetails;
