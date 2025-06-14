import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import VideoCard from '../components/VideoCard';

// Define types for video data
interface Video {
  id: string;
  title: string;
  channel: string;
  channelAvatar: string;
  views: string;
  timestamp: string;
  likes: string;
  subscribers: string;
  description: string;
}

interface RecommendedVideo {
  id: string;
  thumbnail: string;
  title: string;
  channel: string;
  channelAvatar: string;
  views: string;
  timestamp: string;
  duration: string;
}

// Updated video data with more diverse content
const VIDEO_DATA: { [key: string]: Video } = {
  '1': {
    id: '1',
    title: 'Summer Music Festival 2025 - Best Moments',
    channel: 'Music World',
    channelAvatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    views: '1.2M',
    timestamp: '2 weeks ago',
    likes: '85K',
    subscribers: '2.5M',
    description: 'Experience the highlights from the biggest music festival of 2025!',
  },
   '2': {
    id: '2',
    title: 'Top 10 Travel Destinations You Need to Visit in 2025',
    channel: 'Travel Explore',
    channelAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    views: '845K',
    timestamp: '1 month ago',
    likes: '45K',
    subscribers: '1.8M',
    description: 'Planning your next adventure? Here are the top 10 must-visit destinations for 2025! From hidden gems to reimagined classics, these locations offer unforgettable experiences for every type of traveler. We\'ve included budget estimates, best times to visit, and insider tips to help you plan the perfect trip. Whether you\'re looking for relaxation, adventure, or cultural immersion, these destinations have something special to offer.',
  },
  '3': {
    id: '3',
    title: 'Easy 30-Minute Recipes for Busy People',
    channel: 'Food Master',
    channelAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    views: '450K',
    timestamp: '3 weeks ago',
    likes: '32K',
    subscribers: '950K',
    description: 'No time to cook? These quick and delicious recipes take just 30 minutes from start to finish! Perfect for busy weeknights when you want a home-cooked meal without spending hours in the kitchen. All recipes use simple ingredients you probably already have in your pantry. We\'ve included options for various dietary preferences including vegetarian, gluten-free, and low-carb alternatives.',
  },
  '4': {
    id: '4',
    title: 'Incredible Sports Moments That Made History',
    channel: 'Sports Central',
    channelAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    views: '780K',
    timestamp: '5 days ago',
    likes: '56K',
    subscribers: '1.5M',
    description: 'Relive the most breathtaking sports moments that changed history! This compilation features incredible comebacks, record-breaking performances, and emotional victories that captivated fans worldwide. From Olympic triumphs to championship-winning plays, these unforgettable moments showcase the very best of athletic achievement and human spirit.',
  },
  '5': {
    id: '5',
    title: 'The Most Anticipated Movies of 2025',
    channel: 'Film Fanatic',
    channelAvatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    views: '1.5M',
    timestamp: '2 months ago',
    likes: '95K',
    subscribers: '3.2M',
    description: 'Get ready for an incredible year of cinema! This video previews the most anticipated films coming in 2025, including blockbuster sequels, original stories from acclaimed directors, and adaptations of beloved books. We discuss release dates, cast highlights, and why each film deserves a spot on your must-watch list. From superhero epics to intimate dramas, 2025 promises something for every movie lover.',
  },
  '6': {
    id: '6',
    title: 'Inside the World\'s Most Luxurious Mansions',
    channel: 'Luxury Living',
    channelAvatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    views: '320K',
    timestamp: '1 week ago',
    likes: '28K',
    subscribers: '750K',
    description: 'Take an exclusive tour inside the most extravagant mansions around the world! From Beverly Hills to Dubai, these architectural masterpieces feature amenities beyond imagination - underground garages filled with supercars, infinity pools with panoramic views, private theaters, and art collections worth millions. Discover the stories behind these incredible homes and the visionaries who created them.',
  },
  '7': {
    id: '7',
    title: 'How to Build Muscle Fast - Complete Workout Guide',
    channel: 'Fitness Pro',
    channelAvatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    views: '890K',
    timestamp: '3 months ago',
    likes: '67K',
    subscribers: '1.2M',
    description: 'Transform your physique with this comprehensive muscle-building program! This video covers everything you need to know: optimal training frequency, exercise selection, nutrition fundamentals, recovery strategies, and common mistakes to avoid. Whether you\'re a beginner or experienced lifter, these science-backed techniques will help you break through plateaus and achieve your fitness goals faster.',
  },
  '8': {
    id: '8',
    title: 'DIY Home Decor Ideas That Will Transform Your Space',
    channel: 'Home & Design',
    channelAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    views: '1.1M',
    timestamp: '2 weeks ago',
    likes: '78K',
    subscribers: '2.1M',
    description: 'Refresh your living space with these creative and budget-friendly DIY projects! From statement wall art to upcycled furniture, these ideas will add personality to any room without breaking the bank. Each project includes a complete materials list, step-by-step instructions, and design variations to suit different styles. No special skills required - these transformations are accessible for everyone!',
  },
};

// Updated recommended videos
const RECOMMENDED_VIDEOS: RecommendedVideo[] = [
  {
    id: '4',
    thumbnail: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    title: 'Incredible Sports Moments That Made History',
    channel: 'Sports Central',
    channelAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    views: '780K',
    timestamp: '5 days ago',
    duration: '12:18',
  },
  {
    id: '5',
    thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    title: 'The Most Anticipated Movies of 2025',
    channel: 'Film Fanatic',
    channelAvatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    views: '1.5M',
    timestamp: '2 months ago',
    duration: '18:05',
  },
  {
    id: '6',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    title: 'Inside the World\'s Most Luxurious Mansions',
    channel: 'Luxury Living',
    channelAvatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    views: '320K',
    timestamp: '1 week ago',
    duration: '32:47',
  },
  {
    id: '7',
    thumbnail: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    title: 'How to Build Muscle Fast - Complete Workout Guide',
    channel: 'Fitness Pro',
    channelAvatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    views: '890K',
    timestamp: '3 months ago',
    duration: '24:32',
  },
  {
    id: '8',
    thumbnail: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    title: 'DIY Home Decor Ideas That Will Transform Your Space',
    channel: 'Home & Design',
    channelAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    views: '1.1M',
    timestamp: '2 weeks ago',
    duration: '25:18',
  },
];

const VideoPage: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const video = VIDEO_DATA[videoId || '1'] || VIDEO_DATA['1'];

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Main Video Player */}
        <div className="col-lg-8 col-md-12">
          <VideoPlayer {...video} videoId={video.id} />
        </div>

        {/* Recommended Videos Section */}
        <div className="col-lg-4 col-md-12 p-4">
          <h2 className="h5 mb-4">Recommended</h2>
          <div className="d-flex flex-column gap-3">
            {RECOMMENDED_VIDEOS.map((video) => (
              <div key={video.id} className="d-flex">
                <div className="flex-shrink-0" style={{ width: '160px' }}>
                  <VideoCard {...video} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;