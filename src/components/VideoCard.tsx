import React from 'react';
import { Link } from 'react-router-dom';

interface VideoCardProps {
  id: string;
  thumbnail: string;
  title: string;
  channel: string;
  channelAvatar: string;
  views: string;
  timestamp: string;
  duration: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  thumbnail,
  title,
  channel,
  channelAvatar,
  views,
  timestamp,
  duration,
}) => {
  return (
    <div className="d-flex flex-column">
      <Link to={`/video/${id}`} className="position-relative">
        {/* Thumbnail */}
        <img
          src={thumbnail}
          alt={title}
          className="w-100 object-fit-cover rounded"
          style={{ height: '12rem' }} // Adjust height as needed
        />
        {/* Duration overlay */}
        <span
          className="position-absolute bottom-0 end-0 bg-dark bg-opacity-75 text-white small px-2 py-1 rounded m-2"
          style={{ zIndex: 1 }} // Ensure it's above the thumbnail
        >
          {duration}
        </span>
      </Link>
      {/* Video details */}
      <div className="d-flex mt-2">
        <Link to={`/channel/${channel.toLowerCase().replace(/\s+/g, '')}`} className="flex-shrink-0 me-2">
          <img
            src={channelAvatar}
            alt={channel}
            className="rounded-circle"
            style={{ width: '36px', height: '36px' }}
          />
        </Link>
        <div>
          <Link to={`/video/${id}`} className="fw-medium text-dark text-decoration-none line-clamp-2">
            {title}
          </Link>
          <Link to={`/channel/${channel.toLowerCase().replace(/\s+/g, '')}`} className="text-muted small text-decoration-none d-block mt-1">
            {channel}
          </Link>
          <div className="text-muted small">
            {views} views • {timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;