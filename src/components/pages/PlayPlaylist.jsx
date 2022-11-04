import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai';
import useVideo from '../../hooks/useVideo';
import PlayVideo from '../PlayVideo';
import VideoSuggest from '../VideoSuggest';
import { useEffect } from 'react';

const PlayPlaylist = () => {
  const { playlistId } = useParams();
  const [videoId, setVideoId] = useState('');

  const { videos } = useVideo(
    `playlistItems?part=snippet&playlistId=${playlistId}&maxResults=1000`
  );

  const { videos: channelDetails } = useVideo(
    `channels?part=snippet,statistics&id=${videos[0]?.snippet?.channelId}`
  );

  const { videos: SingleVideo } = useVideo(
    `videos?part=snippet,statistics&id=${videoId}`
  );

  useEffect(() => {
    setVideoId(videos[0]?.snippet?.resourceId?.videoId);
  }, [videos]);

  return (
    <section className="main-container grid grid-cols-3 gap-7">
      <div className="col-span-2">
        <PlayVideo
          videoId={videoId}
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
                <div className="text-lg w-8">
                  <AiFillCaretRight />
                </div>
              ) : (
                <div className="text-lg w-8">{i + 1}</div>
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
        <VideoSuggest videoId={videoId} />
      </div>
    </section>
  );
};

export default PlayPlaylist;
