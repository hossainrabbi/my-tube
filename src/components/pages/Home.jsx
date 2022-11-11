import React, { Fragment } from 'react';
import { useSearchContext } from '../../contexts/SearchContext';
import useVideo from '../../hooks/useVideo';
import Channel from '../Channel';
import Loading from '../Loading';
import Playlist from '../Playlist';
import Video from '../Video';

const Home = () => {
  const { searchKeyword } = useSearchContext();
  const { loading, error, videos } = useVideo(
    `search?part=snippet,id&q=${
      searchKeyword || 'bangladesh'
    }&maxResults=${'50'}&regionCode=${'bd'}`
  );

  if (loading) {
    return <Loading className="mt-5" />;
  }

  if (error) {
    return (
      <div
        className="main-container mt-5 p-4 mb-4 text-base text-red-700 bg-red-100 rounded-lg dark:bg-red-200 text-center dark:text-red-800"
        role="alert"
      >
        {error}
      </div>
    );
  }

  return (
    <section className="mt-5">
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {videos.length > 0 &&
            videos.map((video) => (
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
      </div>
    </section>
  );
};

export default Home;
