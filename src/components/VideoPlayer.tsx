import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Share, Download, Flag, MoreHorizontal } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
  channel: string;
  channelAvatar: string;
  views: string;
  timestamp: string;
  likes: string;
  subscribers: string;
  description: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoId,
  title,
  channel,
  channelAvatar,
  views,
  timestamp,
  likes,
  subscribers,
  description,
}) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [likeStatus, setLikeStatus] = useState<'none' | 'liked' | 'disliked'>('none');
  const [likesCount, setLikesCount] = useState(parseInt(likes.replace(/[^\d]/g, ''), 10));
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleLike = () => {
    if (likeStatus === 'liked') {
      setLikeStatus('none');
      setLikesCount(likesCount - 1);
    } else {
      if (likeStatus === 'disliked') {
        setLikeStatus('liked');
        setLikesCount(likesCount + 1);
      } else {
        setLikeStatus('liked');
        setLikesCount(likesCount + 1);
      }
    }
  };

  const handleDislike = () => {
    if (likeStatus === 'disliked') {
      setLikeStatus('none');
    } else {
      if (likeStatus === 'liked') {
        setLikeStatus('disliked');
        setLikesCount(likesCount - 1);
      } else {
        setLikeStatus('disliked');
      }
    }
  };

  const formatLikesCount = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="ratio ratio-16x9 mb-4">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <h1 className="h4 fw-bold text-dark mb-2">{title}</h1>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <div className="text-muted small">
          {views} views • {timestamp}
        </div>

        <div className="d-flex align-items-center gap-3 mt-2 mt-md-0">
          <button
            className={`btn btn-link text-decoration-none p-0 d-flex align-items-center ${
              likeStatus === 'liked' ? 'text-primary' : 'text-muted'
            }`}
            onClick={handleLike}
          >
            <ThumbsUp size={18} className="me-1" />
            <span>{formatLikesCount(likesCount)}</span>
          </button>
          <button
            className={`btn btn-link text-decoration-none p-0 d-flex align-items-center ${
              likeStatus === 'disliked' ? 'text-primary' : 'text-muted'
            }`}
            onClick={handleDislike}
          >
            <ThumbsDown size={18} className="me-1" />
          </button>
          <button className="btn btn-link text-decoration-none p-0 d-flex align-items-center text-muted">
            <Share size={18} className="me-1" />
            <span>Share</span>
          </button>
          <button className="btn btn-link text-decoration-none p-0 d-flex align-items-center text-muted">
            <Download size={18} className="me-1" />
            <span>Download</span>
          </button>
          <button className="btn btn-link text-decoration-none p-0 text-muted">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      <div className="d-flex align-items-start border-top border-bottom py-4 mb-4">
        <img
          src={channelAvatar}
          alt={channel}
          className="rounded-circle me-3"
          style={{ width: '48px', height: '48px' }}
        />
        <div className="flex-grow-1">
          <h3 className="h6 fw-medium text-dark mb-1">{channel}</h3>
          <p className="text-muted small mb-2">{subscribers} subscribers</p>
          <p className={`text-dark small ${showFullDescription ? '' : 'text-truncate'}`}>
            {description}
          </p>
          <button
            className="btn btn-link p-0 text-decoration-none small fw-medium"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? 'SHOW LESS' : 'SHOW MORE'}
          </button>
        </div>
        <button
          className={`btn btn-sm ${
            isSubscribed ? 'btn-outline-secondary' : 'btn-danger'
          }`}
          onClick={handleSubscribe}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>

      <div className="mb-4">
        <h3 className="h6 fw-medium text-dark mb-4">Comments</h3>
        <div className="d-flex align-items-start mb-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
            alt="User"
            className="rounded-circle me-3"
            style={{ width: '40px', height: '40px' }}
          />
          <div>
            <div className="d-flex align-items-center">
              <h4 className="h6 fw-medium text-dark mb-0">John Doe</h4>
              <span className="text-muted small ms-2">2 days ago</span>
            </div>
            <p className="text-dark small mt-1">
              This is an amazing video! Thanks for sharing your knowledge.
            </p>
            <div className="d-flex align-items-center small text-muted mt-1">
              <button className="btn btn-link text-decoration-none p-0 d-flex align-items-center me-3">
                <ThumbsUp size={14} className="me-1" />
                <span>24</span>
              </button>
              <button className="btn btn-link text-decoration-none p-0 d-flex align-items-center me-3">
                <ThumbsDown size={14} className="me-1" />
              </button>
              <button className="btn btn-link text-decoration-none p-0">Reply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;