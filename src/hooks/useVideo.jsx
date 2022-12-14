import { useEffect, useState } from 'react';

const useVideo = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

        if (data.items && data.items.length > 0) {
          setError(null);
          setLoading(false);
          setVideos([...data.items]);
        }
      } catch (err) {
        setLoading(false);
        setError(err?.response?.data?.message || err.message);
      }
    }

    fetchFromApi();
  }, [url]);

  return { loading, error, videos };
};

export default useVideo;
