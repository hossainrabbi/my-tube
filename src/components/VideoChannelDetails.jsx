import { Interweave } from 'interweave';
import React from 'react';
import { Link } from 'react-router-dom';
import convertToInternationalCurrencySystem from '../utils/convertToInternationalCurrencySystem';

const VideoChannelDetails = ({ videoDescription, channelDetails }) => {
  return (
    <>
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
            {convertToInternationalCurrencySystem(
              channelDetails[0]?.statistics?.subscriberCount
            )}{' '}
            subscriber
          </p>
        </div>
      </div>
      <p className="text-gray-600 my-4 ml-20">
        <Interweave content={videoDescription} />
      </p>
    </>
  );
};

export default VideoChannelDetails;
