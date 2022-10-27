import { useEffect, useState } from 'react';

const useVideo = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const BASE_URL = process.env.REACT_APP_YOUTUBE_API_BASE_URL;
    const options = {
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
      },
    };

    async function fetchFromApi() {
      setLoading(true);

      try {
        const res = await fetch(`${BASE_URL}/${url}`, options);
        const data = await res.json();

        setError(false);
        setVideos([...data.items]);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    }

    fetchFromApi();
  }, [url]);

  return { loading, error, videos };
};

export default useVideo;
