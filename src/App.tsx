import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { News } from './components/News';
import { ArticleView } from './components/ArticleView';
import { Admin } from './components/Admin';
import { AdminLogin } from './components/AdminLogin';
import { AboutUs } from './components/AboutUs';

export interface Article {
  id: string;
  headline: string;
  image: string;
  excerpt: string;
  content: string;
  date: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'news' | 'about' | 'admin'>('home');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [articles, setArticles] = useState<Article[]>([
    {
      id: '1',
      headline: 'Next-Gen Console Wars Heat Up',
      image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800',
      excerpt: 'The battle for gaming supremacy continues as major players unveil their latest hardware.',
      content: 'The gaming industry is witnessing an intense competition as major console manufacturers push the boundaries of technology. With cutting-edge graphics, faster load times, and innovative features, gamers have more choices than ever before. Industry analysts predict this generation will redefine interactive entertainment.',
      date: '2025-12-30'
    },
    {
      id: '2',
      headline: 'Indie Game Takes Gaming World by Storm',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
      excerpt: 'A small studio\'s passion project becomes the year\'s biggest surprise hit.',
      content: 'Against all odds, a team of five developers has created one of the most talked-about games of the year. The indie title combines innovative gameplay mechanics with stunning pixel art, capturing the hearts of millions. The game\'s success proves that creativity and passion can triumph over big budgets.',
      date: '2025-12-29'
    },
    {
      id: '3',
      headline: 'Esports Tournament Breaks Viewership Records',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
      excerpt: 'Major championship draws unprecedented global audience across streaming platforms.',
      content: 'The latest international esports championship has shattered all previous viewership records, with over 50 million concurrent viewers across multiple platforms. Prize pools exceeded $40 million, and the finals showcased the incredible skill and dedication of professional gamers from around the world.',
      date: '2025-12-28'
    }
  ]);

  const handleAddArticle = (article: Omit<Article, 'id'>) => {
    const newArticle: Article = {
      ...article,
      id: Date.now().toString()
    };
    setArticles([newArticle, ...articles]);
    setCurrentPage('news');
  };

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleBackToNews = () => {
    setSelectedArticle(null);
  };

  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true);
  };

  const renderContent = () => {
    if (selectedArticle) {
      return <ArticleView article={selectedArticle} onBack={handleBackToNews} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} articles={articles.slice(0, 3)} onArticleClick={handleArticleClick} />;
      case 'news':
        return <News articles={articles} onArticleClick={handleArticleClick} />;
      case 'about':
        return <AboutUs />;
      case 'admin':
        return isAdminAuthenticated ? (
          <Admin onAddArticle={handleAddArticle} />
        ) : (
          <AdminLogin onLogin={handleAdminLogin} />
        );
      default:
        return <Home onNavigate={setCurrentPage} articles={articles.slice(0, 3)} onArticleClick={handleArticleClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1e161e]">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderContent()}
    </div>
  );
}