import { Article } from '../App';
import { TrendingUp, Zap, Users } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: 'home' | 'news' | 'about' | 'admin') => void;
  articles: Article[];
  onArticleClick: (article: Article) => void;
}

function GamingDoodles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gamepad 1 */}
      <div className="absolute top-20 left-10 animate-float opacity-10">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M6 11h4m-2-2v4m8-1h.01M18 10h.01M8 5h8a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6v-2a6 6 0 0 1 6-6Z"/>
        </svg>
      </div>

      {/* Star 1 */}
      <div className="absolute top-32 right-20 animate-float-delayed opacity-15">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      {/* Joystick */}
      <div className="absolute top-1/3 right-1/4 animate-float-slow opacity-10">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <circle cx="12" cy="18" r="4"/>
          <path d="M12 14V6m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
        </svg>
      </div>

      {/* Trophy */}
      <div className="absolute bottom-1/4 left-1/4 animate-float opacity-12">
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18m-6 15v-4m-6 0h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1Zm5 4h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1Z"/>
        </svg>
      </div>

      {/* D-pad */}
      <div className="absolute top-1/2 left-16 animate-float-delayed opacity-10">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="white">
          <path d="M10 2h4v8h-4zm0 12h4v8h-4zm-8-2h8v4H2zm12 0h8v4h-8z"/>
        </svg>
      </div>

      {/* Star 2 */}
      <div className="absolute bottom-20 right-1/3 animate-float-slow opacity-15">
        <svg width="35" height="35" viewBox="0 0 24 24" fill="white">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      {/* Gamepad 2 */}
      <div className="absolute bottom-32 left-1/3 animate-float opacity-10">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M6 11h4m-2-2v4m8-1h.01M18 10h.01M8 5h8a6 6 0 0 1 6 6v2a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6v-2a6 6 0 0 1 6-6Z"/>
        </svg>
      </div>

      {/* Power Icon */}
      <div className="absolute top-40 right-1/3 animate-float-delayed opacity-12">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M12 2v10m-4.5-7A9 9 0 1 0 19 12a9 9 0 0 0-2.5-6.2"/>
        </svg>
      </div>

      {/* Coin/Circle */}
      <div className="absolute top-1/4 left-1/3 animate-float-slow opacity-15">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6" fill="none" stroke="#1e161e" strokeWidth="2"/>
        </svg>
      </div>

      {/* Heart/Life */}
      <div className="absolute bottom-40 right-20 animate-float opacity-12">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="white">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
    </div>
  );
}

export function Home({ onNavigate, articles, onArticleClick }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1e161e] via-[#472b3f] to-[#1e161e] py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZTE4Y2M1IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Animated Gaming Doodles */}
        <GamingDoodles />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#e18cc5]/10 border border-[#e18cc5]/30 rounded-full text-[#e18cc5] text-sm">
                Your Ultimate Gaming News Source
              </span>
            </div>
            <h1 className="text-6xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#e18cc5] via-[#ba5c93] to-[#80496c]">
              Stay Ahead of the Game
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Breaking news, exclusive updates, and in-depth coverage of the gaming world's biggest stories
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => onNavigate('news')}
                className="px-8 py-4 bg-gradient-to-r from-[#e18cc5] to-[#ba5c93] text-[#1e161e] rounded-lg shadow-lg shadow-[#e18cc5]/50 hover:shadow-[#e18cc5]/70 transition-all duration-300 hover:scale-105"
              >
                Explore Latest News
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-white/10 text-[#e18cc5] rounded-lg border border-[#e18cc5]/30 hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#1e161e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<TrendingUp className="size-12 text-[#e18cc5]" />}
              title="Breaking News"
              description="Get the latest gaming updates as they happen"
            />
            <FeatureCard
              icon={<Zap className="size-12 text-[#ba5c93]" />}
              title="Fast Updates"
              description="Real-time coverage of gaming events and releases"
            />
            <FeatureCard
              icon={<Users className="size-12 text-[#80496c]" />}
              title="Community Driven"
              description="Stories that matter to gamers worldwide"
            />
          </div>
        </div>
      </section>

      {/* Latest Articles Preview */}
      <section className="py-20 bg-gradient-to-b from-[#1e161e] to-[#472b3f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#e18cc5] to-[#ba5c93]">
              Latest Stories
            </h2>
            <button
              onClick={() => onNavigate('news')}
              className="px-6 py-3 text-[#e18cc5] border border-[#e18cc5]/30 rounded-lg hover:bg-[#e18cc5]/10 transition-all duration-300"
            >
              View All News
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} onClick={() => onArticleClick(article)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-8 bg-gradient-to-br from-[#472b3f] to-[#1e161e] border border-[#e18cc5]/20 rounded-xl hover:border-[#e18cc5]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#e18cc5]/20">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl text-[#e18cc5] mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

interface ArticleCardProps {
  article: Article;
  onClick: () => void;
}

function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-[#472b3f] rounded-xl overflow-hidden border border-[#80496c] hover:border-[#e18cc5]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#e18cc5]/20 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.image}
          alt={article.headline}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e161e] to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="text-xs text-[#e18cc5] mb-2">{article.date}</div>
        <h3 className="text-xl text-[#e18cc5] mb-3 group-hover:text-[#ba5c93] transition-colors">
          {article.headline}
        </h3>
        <p className="text-gray-400 line-clamp-2">{article.excerpt}</p>
      </div>
    </div>
  );
}