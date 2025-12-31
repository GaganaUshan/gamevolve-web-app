import { Article } from '../App';
import { Calendar } from 'lucide-react';

interface NewsProps {
  articles: Article[];
  onArticleClick: (article: Article) => void;
}

export function News({ articles, onArticleClick }: NewsProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e161e] to-[#472b3f] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#e18cc5] to-[#ba5c93]">
            Gaming News
          </h1>
          <p className="text-xl text-gray-400">
            All the latest updates from the gaming world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} onClick={() => onArticleClick(article)} />
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No articles available yet</p>
          </div>
        )}
      </div>
    </div>
  );
}

interface NewsCardProps {
  article: Article;
  onClick: () => void;
}

function NewsCard({ article, onClick }: NewsCardProps) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer bg-gradient-to-br from-[#472b3f] to-[#1e161e] rounded-xl overflow-hidden border border-[#80496c] hover:border-[#e18cc5]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#e18cc5]/20 hover:-translate-y-2"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={article.image}
          alt={article.headline}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e161e] via-[#1e161e]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 text-xs text-[#e18cc5] mb-2">
            <Calendar className="size-4" />
            <span>{article.date}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="text-2xl text-[#e18cc5] mb-3 group-hover:text-[#ba5c93] transition-colors">
          {article.headline}
        </h2>
        <p className="text-gray-400 line-clamp-3 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center text-[#e18cc5] group-hover:gap-3 gap-2 transition-all">
          <span className="text-sm">Read Full Article</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </article>
  );
}