import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import useVideo from '../hooks/useVideo';
import PlayVideo from './PlayVideo';
import VideoSuggest from './VideoSuggest';

const PlaylistItem = ({ videoId, videos, handleSetVideoId }) => {
  const { loading: SingleVideoLoading, videos: SingleVideo } = useVideo(
    `videos?part=snippet,statistics&id=${videoId}`
  );

  if (SingleVideoLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="col-span-2">
        {SingleVideo.length > 0 && (
          <PlayVideo videoId={videoId} videos={SingleVideo} />
        )}
      </div>
      <div>
        <div className="h-[555px] w-full overflow-y-scroll mb-5">
          {videos.length > 0 &&
            videos.map((item, i) => (
              <div
                className="flex items-center gap-5 mb-5 cursor-pointer"
                key={item?.id}
                onClick={() => handleSetVideoId(item)}
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
    </>
  );
};

export default PlaylistItem;
