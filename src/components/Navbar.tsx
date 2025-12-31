import { Gamepad2, Home, Newspaper, Info, Shield } from 'lucide-react';
import logo from 'figma:asset/2615e696de35815201986e1a4a71e06ac4fada10.png';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'news' | 'about' | 'admin') => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#1e161e] via-[#472b3f] to-[#1e161e] border-b-4 border-[#e18cc5] shadow-lg shadow-[#ba5c93]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <img src={logo} alt="GameVolve Logo" className="size-16" />
            <div>
              <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#e18cc5] to-[#ba5c93]">
                GameVolve
              </h1>
              <p className="text-xs text-[#e18cc5]">News & Updates</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <NavLink
              icon={<Home className="size-5" />}
              label="Home"
              active={currentPage === 'home'}
              onClick={() => onNavigate('home')}
            />
            <NavLink
              icon={<Newspaper className="size-5" />}
              label="News"
              active={currentPage === 'news'}
              onClick={() => onNavigate('news')}
            />
            <NavLink
              icon={<Info className="size-5" />}
              label="About Us"
              active={currentPage === 'about'}
              onClick={() => onNavigate('about')}
            />
            <NavLink
              icon={<Shield className="size-5" />}
              label="Admin"
              active={currentPage === 'admin'}
              onClick={() => onNavigate('admin')}
              isAdmin
            />
          </div>
        </div>
      </div>

      {/* Animated bottom glow */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#e18cc5] to-transparent animate-pulse"></div>
    </nav>
  );
}

interface NavLinkProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  isAdmin?: boolean;
}

function NavLink({ icon, label, active, onClick, isAdmin }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300
        ${active
          ? 'bg-[#e18cc5] text-[#1e161e] shadow-lg shadow-[#e18cc5]/50'
          : isAdmin
          ? 'text-[#e18cc5] hover:bg-[#e18cc5]/10 hover:shadow-lg hover:shadow-[#e18cc5]/30'
          : 'text-[#e18cc5] hover:bg-white/10 hover:shadow-lg hover:shadow-[#ba5c93]/30'
        }
      `}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}