import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useVideo from '../../hooks/useVideo';
import { useEffect } from 'react';
import PlaylistItem from '../PlaylistItem';
import Loading from '../Loading';

const PlayPlaylist = () => {
  const { playlistId } = useParams();
  const [videoId, setVideoId] = useState('');

  const { loading, error, videos } = useVideo(
    `playlistItems?part=snippet&playlistId=${playlistId}&maxResults=1000`
  );

  useEffect(() => {
    setVideoId(videos[0]?.snippet?.resourceId?.videoId);
  }, [videos]);

  const handleSetVideoId = (item) => {
    setVideoId(item.snippet?.resourceId?.videoId);
  };

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
    <section className="main-container grid grid-cols-1 xl:grid-cols-3 gap-7 mt-5">
      {videoId && videos.length > 0 && (
        <PlaylistItem
          videoId={videoId || videos[0]?.snippet?.resourceId?.videoId}
          videos={videos}
          handleSetVideoId={handleSetVideoId}
        />
      )}
    </section>
  );
};

export default PlayPlaylist;
