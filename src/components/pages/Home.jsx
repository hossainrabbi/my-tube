import React, { Fragment } from 'react';
import { useSearchContext } from '../../contexts/SearchContext';
import useVideo from '../../hooks/useVideo';
import Channel from '../Channel';
import Playlist from '../Playlist';
import Video from '../Video';

const Home = () => {
  const { searchKeyword } = useSearchContext();

  const { loading, error, videos } = useVideo(
    `search?part=snippet,id&q=${searchKeyword}&maxResults=${'50'}&regionCode=${'bd'}`
  );

  if (loading) {
    return <h2 className="main-container">Loading...</h2>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <section>
      <div className="main-container">
        {videos.length > 0 ? (
          <div className="grid grid-cols-4 gap-7">
            {videos.map((video) => (
              <Fragment
                key={
                  video?.id?.channelId ||
                  video?.id?.playlistId ||
                  video?.id?.videoId
                }
              >
                {video?.id?.channelId && (
                  <Channel {...video} key={video?.id?.channelId} />
                )}
                {video?.id?.playlistId && (
                  <Playlist {...video} key={video?.id?.playlistId} />
                )}
                {video?.id?.videoId && (
                  <Video {...video} key={video?.id?.videoId} />
                )}
              </Fragment>
            ))}
          </div>
        ) : (
          <h2>Video Not Found</h2>
        )}
      </div>
    </section>
  );
};

export default Home;
