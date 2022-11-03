import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai';
import useVideo from '../../hooks/useVideo';
import PlayVideo from '../PlayVideo';
import VideoSuggest from '../VideoSuggest';

const PlayPlaylist = () => {
  const { playlistId } = useParams();

  const [videoId, setVideoId] = useState('');

  const { loading, error, videos } = useVideo(
    `playlistItems?part=snippet&playlistId=${playlistId}&maxResults=1000`
  );

  const { loading: videoLoading, videos: SingleVideo } = useVideo(
    `videos?part=snippet,statistics&id=${
      videoId || videos[0]?.snippet?.resourceId?.videoId
    }`
  );

  const { loading: channelLoading, videos: channelDetails } = useVideo(
    `channels?part=snippet,statistics&id=${videos[0]?.snippet?.channelId}`
  );

  if (loading || channelLoading || videoLoading) {
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
          videoId={videoId || videos[0]?.snippet?.resourceId?.videoId}
          videos={SingleVideo}
          channelDetails={channelDetails}
        />
      </div>
      <div>
        <div className="h-[555px] w-full overflow-y-scroll mb-5">
          {videos?.map((item, i) => (
            <div
              className="flex items-center gap-5 mb-5 cursor-pointer"
              key={item?.id}
              onClick={() => setVideoId(item.snippet?.resourceId?.videoId)}
            >
              {videoId === item.snippet?.resourceId?.videoId ? (
                <div className="text-lg">
                  <AiFillCaretRight />
                </div>
              ) : (
                <span>{i + 1}</span>
              )}

              <img
                className="w-20"
                src={item?.snippet?.thumbnails?.default?.url}
                alt=""
              />
              <div>{item?.snippet?.title}</div>
            </div>
          ))}
        </div>
        <VideoSuggest
          videoId={videoId || videos[0]?.snippet?.resourceId?.videoId}
        />
      </div>
    </section>
  );
};

export default PlayPlaylist;
