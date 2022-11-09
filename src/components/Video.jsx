import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Video = ({ id, snippet }) => {
  const navigate = useNavigate();

  const handleVideoNavigate = () => {
    navigate(`/videos/${id?.videoId}`);
  };

  const handleChannelNavigate = () => {
    navigate(`/channel/${id?.videoId}`);
  };

  return (
    <article className="rounded shadow transition block border border-transparent hover:border hover:border-gray-200 min-h-[19rem]">
      <div className="h-44 cursor-pointer" onClick={handleVideoNavigate}>
        <img
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.channelTitle}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4 py-3 flex gap-3">
        <div>
          <h3
            className="text-lg font-medium text-gray-800 cursor-pointer"
            onClick={handleVideoNavigate}
          >
            {snippet?.title?.length > 50
              ? `${snippet?.title?.slice(0, 50)}...`
              : snippet?.title}
          </h3>
          <h5
            className="text-base inline-block font-semibold cursor-pointer text-gray-500 select-none my-1"
            onClick={handleChannelNavigate}
          >
            {snippet?.channelTitle}
          </h5>
          <p
            className="text-sm cursor-pointer text-gray-500 select-none flex gap-3 items-center"
            onClick={handleVideoNavigate}
          >
            <span>
              {moment(snippet?.publishTime).startOf('hour').fromNow()}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Video;
