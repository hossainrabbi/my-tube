import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useVideo from '../../hooks/useVideo';
import { useEffect } from 'react';
import PlaylistItem from '../PlaylistItem';

const PlayPlaylist = () => {
  const { playlistId } = useParams();
  const [videoId, setVideoId] = useState('');

  const { loading, videos } = useVideo(
    `playlistItems?part=snippet&playlistId=${playlistId}&maxResults=1000`
  );

  useEffect(() => {
    setVideoId(videos[0]?.snippet?.resourceId?.videoId);
  }, [videos]);

  const handleSetVideoId = (item) => {
    setVideoId(item.snippet?.resourceId?.videoId);
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  console.log({
    loading,
    id: videoId || `---> ${videos[0]?.snippet?.resourceId?.videoId}`,
  });

  return (
    <section className="main-container grid grid-cols-3 gap-7">
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
