import { Article } from '../App';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
}

export function ArticleView({ article, onBack }: ArticleViewProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e161e] to-[#472b3f]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#e18cc5] hover:text-[#ba5c93] mb-8 group transition-colors"
        >
          <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to News</span>
        </button>

        <article className="bg-gradient-to-br from-[#472b3f] to-[#1e161e] rounded-2xl overflow-hidden border border-[#80496c] shadow-2xl">
          <div className="relative h-96 overflow-hidden">
            <img
              src={article.image}
              alt={article.headline}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e161e] via-[#1e161e]/50 to-transparent"></div>
          </div>

          <div className="p-10">
            <div className="flex items-center gap-6 text-sm text-[#e18cc5] mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="size-4" />
                <span>5 min read</span>
              </div>
            </div>

            <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#e18cc5] to-[#ba5c93] mb-8">
              {article.headline}
            </h1>

            <div className="prose prose-invert prose-cyan max-w-none">
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="text-gray-400 leading-relaxed space-y-4">
                {article.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#80496c]">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Published on {article.date}
                </div>
                <button
                  onClick={onBack}
                  className="px-6 py-3 bg-[#e18cc5]/10 text-[#e18cc5] border border-[#e18cc5]/30 rounded-lg hover:bg-[#e18cc5]/20 transition-all duration-300"
                >
                  Read More Articles
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}