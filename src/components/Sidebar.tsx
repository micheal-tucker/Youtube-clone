import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home, Compass, Clock, ThumbsUp, PlaySquare,
  Flame, Music2, Film, Gamepad2, Newspaper, Trophy, Lightbulb
} from 'lucide-react';

interface SidebarProps {
  expanded: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ expanded }) => {
  return (
    <aside
      className={`${
        expanded ? 'col-3' : 'col-1'
      } bg-white dark bg-dark h-100 overflow-auto d-flex flex-column`}
    >
      <div className="py-4">
        <nav>
          <SidebarItem icon={<Home size={20} />} label="Home" expanded={expanded} to="/" />
          <SidebarItem icon={<Compass size={20} />} label="Explore" expanded={expanded} to="/explore" />
          <SidebarItem icon={<PlaySquare size={20} />} label="Subscriptions" expanded={expanded} to="/subscriptions" />

          <div className="border-top my-2"></div>

          <SidebarItem icon={<Clock size={20} />} label="History" expanded={expanded} to="/history" />
          <SidebarItem icon={<ThumbsUp size={20} />} label="Liked videos" expanded={expanded} to="/liked" />

          <div className="border-top my-2"></div>

          <div className={`px-4 py-2 ${expanded ? 'd-block' : 'd-none'}`}>
            <h3 className="text-muted">Explore</h3>
          </div>

          <SidebarItem icon={<Flame size={20} />} label="Trending" expanded={expanded} to="/trending" />
          <SidebarItem icon={<Music2 size={20} />} label="Music" expanded={expanded} to="/music" />
          <SidebarItem icon={<Film size={20} />} label="Movies" expanded={expanded} to="/movies" />
          <SidebarItem icon={<Gamepad2 size={20} />} label="Gaming" expanded={expanded} to="/gaming" />
          <SidebarItem icon={<Newspaper size={20} />} label="News" expanded={expanded} to="/news" />
          <SidebarItem icon={<Trophy size={20} />} label="Sports" expanded={expanded} to="/sports" />
          <SidebarItem icon={<Lightbulb size={20} />} label="Learning" expanded={expanded} to="/learning" />
        </nav>
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  expanded: boolean;
  to: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, expanded, to }) => {
  return (
    <Link
      to={to}
      className="d-flex align-items-center px-4 py-3 text-dark text-decoration-none hover:bg-light"
    >
      <div className="flex-shrink-0">{icon}</div>
      {expanded && <span className="ms-3">{label}</span>}
    </Link>
  );
};

export default Sidebar;
