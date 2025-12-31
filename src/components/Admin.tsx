import { useState } from 'react';
import { Article } from '../App';
import { Upload, Image as ImageIcon, FileText, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AdminProps {
  onAddArticle: (article: Omit<Article, 'id'>) => void;
}

export function Admin({ onAddArticle }: AdminProps) {
  const [headline, setHeadline] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!headline || !imageUrl || !excerpt || !content) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    const article: Omit<Article, 'id'> = {
      headline,
      image: imageUrl,
      excerpt,
      content,
      date: new Date().toISOString().split('T')[0]
    };

    onAddArticle(article);

    // Reset form
    setHeadline('');
    setImageUrl('');
    setExcerpt('');
    setContent('');
    setIsSubmitting(false);
    
    alert('Article published successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e161e] to-[#472b3f] py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#e18cc5]/10 border border-[#e18cc5]/30 rounded-full text-[#e18cc5] mb-4">
            <Upload className="size-5" />
            <span className="text-sm">Admin Panel</span>
          </div>
          <h1 className="text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#e18cc5] to-[#ba5c93]">
            Publish New Article
          </h1>
          <p className="text-xl text-gray-400">
            Add gaming news and updates for your readers
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#472b3f] to-[#1e161e] rounded-2xl border border-[#80496c] shadow-2xl p-8">
          <div className="space-y-6">
            {/* Headline Input */}
            <div>
              <label className="flex items-center gap-2 text-[#e18cc5] mb-3">
                <FileText className="size-5" />
                <span>Headline</span>
              </label>
              <input
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="Enter article headline..."
                className="w-full px-4 py-3 bg-[#1e161e] border border-[#80496c] rounded-lg text-white placeholder-gray-500 focus:border-[#e18cc5] focus:outline-none focus:ring-2 focus:ring-[#e18cc5]/20 transition-all"
                required
              />
            </div>

            {/* Image URL Input */}
            <div>
              <label className="flex items-center gap-2 text-[#e18cc5] mb-3">
                <ImageIcon className="size-5" />
                <span>Image URL</span>
              </label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 bg-[#1e161e] border border-[#80496c] rounded-lg text-white placeholder-gray-500 focus:border-[#e18cc5] focus:outline-none focus:ring-2 focus:ring-[#e18cc5]/20 transition-all"
                required
              />
              {imageUrl && (
                <div className="mt-4 rounded-lg overflow-hidden border border-[#80496c]">
                  <ImageWithFallback
                    src={imageUrl}
                    alt="Preview"
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
            </div>

            {/* Excerpt Input */}
            <div>
              <label className="flex items-center gap-2 text-[#e18cc5] mb-3">
                <FileText className="size-5" />
                <span>Excerpt (Short Description)</span>
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief summary of the article..."
                rows={3}
                className="w-full px-4 py-3 bg-[#1e161e] border border-[#80496c] rounded-lg text-white placeholder-gray-500 focus:border-[#e18cc5] focus:outline-none focus:ring-2 focus:ring-[#e18cc5]/20 transition-all resize-none"
                required
              />
            </div>

            {/* Content Input */}
            <div>
              <label className="flex items-center gap-2 text-[#e18cc5] mb-3">
                <FileText className="size-5" />
                <span>Full Article Content</span>
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write the full article content here..."
                rows={12}
                className="w-full px-4 py-3 bg-[#1e161e] border border-[#80496c] rounded-lg text-white placeholder-gray-500 focus:border-[#e18cc5] focus:outline-none focus:ring-2 focus:ring-[#e18cc5]/20 transition-all resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center gap-4 pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#e18cc5] to-[#ba5c93] text-[#1e161e] rounded-lg shadow-lg shadow-[#e18cc5]/50 hover:shadow-[#e18cc5]/70 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Upload className="size-5" />
                <span>{isSubmitting ? 'Publishing...' : 'Publish Article'}</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#e18cc5] bg-[#e18cc5]/10 border border-[#e18cc5]/30 rounded-lg p-4">
              <Calendar className="size-5" />
              <span>Article will be published with today's date automatically</span>
            </div>
          </div>
        </form>

        <div className="mt-8 p-6 bg-[#472b3f]/50 border border-[#80496c] rounded-xl">
          <h3 className="text-[#e18cc5] mb-3">Note:</h3>
          <p className="text-gray-400 text-sm">
            Currently, articles are stored in your browser's memory and will be lost when you refresh the page. 
            For persistent storage and secure admin authentication, consider connecting to a database solution.
          </p>
        </div>
      </div>
    </div>
  );
}