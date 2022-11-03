import React from 'react';
import { useParams } from 'react-router-dom';
import useVideo from '../../hooks/useVideo';
import PlayVideo from '../PlayVideo';

const PlayPlaylist = () => {
  const { playlistId } = useParams();

  const { loading, error, videos } = useVideo(
    `playlistItems?part=snippet&playlistId=${playlistId}&maxResults=1000`
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

  console.log({ loading, error, videos });
  return (
    <section className="main-container grid grid-cols-3 gap-7">
      <div className="col-span-2">
        <PlayVideo
          videoId={videos[0]?.id}
          videos={videos}
          channelDetails={channelDetails}
        />
      </div>
      <div className="h-[555px] w-full overflow-y-scroll">
        {videos?.map((item, i) => (
          <div className="flex items-center gap-5 mb-5">
            <span>{i + 1}</span>
            <img
              className="w-20"
              src={item?.snippet?.thumbnails?.default?.url}
              alt=""
            />
            <div>{item?.snippet?.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlayPlaylist;
