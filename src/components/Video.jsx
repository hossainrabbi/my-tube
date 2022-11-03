import { Link } from 'react-router-dom';

const Video = ({ id, snippet }) => {
  return (
    <Link to={`/videos/${id?.videoId}`}>
      <article className="rounded shadow transition border border-transparent hover:border hover:border-gray-200 min-h-[17rem]">
        <div className="h-48">
          <img
            src={snippet?.thumbnails?.high?.url}
            alt={snippet?.channelTitle}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-4 py-3">
          <div className="channel-logo">
            <img src="" alt="" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              {snippet?.title?.length > 50
                ? `${snippet?.title?.slice(0, 50)}...`
                : snippet?.title}
            </h3>
            <p className="text-sm font-semibold text-gray-600">
              {snippet?.channelTitle}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Video;
