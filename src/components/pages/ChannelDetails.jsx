import moment from 'moment';
import React from 'react';
import { useParams } from 'react-router-dom';
import useVideo from '../../hooks/useVideo';
import convertToInternationalCurrencySystem from '../../utils/convertToInternationalCurrencySystem';
import ChannelVideo from '../ChannelVideo';
import Loading from '../Loading';

const ChannelDetails = () => {
  const { channelId } = useParams();
  const { loading, videos: channelDetails } = useVideo(
    `channels?part=snippet,statistics&id=${channelId}`
  );

  if (loading) {
    return <Loading className="mt-5" />;
  }

  return (
    <section>
      <div
        className="h-56 relative bg-cover bg-no-repeat bg-center bg-blend-overlay"
        style={{
          backgroundImage: `url(${
            channelDetails[0]?.brandingSettings?.image?.bannerExternalUrl ||
            '/assets/img/placeholder.png'
          }),linear-gradient(rgba(0, 0, 0, 0.500),rgba(0, 0, 0, 0.500))`,
        }}
      >
        <div className="absolute left-2/4 -translate-x-2/4 -bottom-20 z-10 text-center">
          <img
            src={channelDetails[0]?.snippet?.thumbnails?.default?.url}
            alt={channelDetails[0]?.snippet?.localized?.title}
            className="w-40 h-40 rounded-full"
          />
        </div>
        <div className="absolute right-5 bottom-5 text-white">
          <p>
            Joined:{' '}
            {moment(channelDetails[0]?.snippet?.publishedAt).format(
              'MMM D, YYYY'
            )}
          </p>
          <p>
            Total Video:{' '}
            {convertToInternationalCurrencySystem(
              channelDetails[0]?.statistics?.videoCount
            )}
          </p>
          <p>
            Total View:{' '}
            {convertToInternationalCurrencySystem(
              channelDetails[0]?.statistics?.viewCount
            )}
          </p>
        </div>
      </div>
      <div className="main-container ">
        <div className="text-center mt-24 mb-5">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white/90">
            {channelDetails[0]?.snippet?.localized?.title}
          </h3>
          <p className="text-gray-600 dark:text-white/70">
            {convertToInternationalCurrencySystem(
              channelDetails[0]?.statistics?.subscriberCount
            )}{' '}
            subscribers
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
