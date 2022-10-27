import React from 'react';
import useVideo from '../../hooks/useVideo';
import Video from '../Video';

const Home = () => {
  const { loading, error, videos } = useVideo(
    `search?part=snippet,id&q=${'new'}&maxResults=${'50'}&regionCode=${'bd'}`
  );

  if (loading) {
    return <h2 className="main-container">Loading...</h2>;
  }

  if (error) {
    return <h2 className="main-container">Video Loading Fail!</h2>;
  }

  return (
    <section>
      <div className="main-container">
        {videos ? (
          <div className="grid grid-cols-4 gap-7">
            {videos.map((video) => (
              <Video {...video} key={video?.id?.videoId} />
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
