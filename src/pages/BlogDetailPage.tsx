import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  Bookmark, 
  TreePine, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { BlogPost } from '../types';
import { api } from '../services/api';

interface BlogDetailPageProps {
  slugOrId: string;
  navigate: (path: string) => void;
  showToast: (type: 'success' | 'error' | 'info', message: string, title?: string) => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ slugOrId, navigate, showToast }) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      try {
        const data = await api.getBlogPost(slugOrId);
        setPost(data);
        // Load some related posts
        const all = await api.getBlogPosts();
        setRelatedPosts(all.filter((p) => p.id !== data.id).slice(0, 2));
      } catch (err) {
        console.error('Failed to load blog detail', err);
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, [slugOrId]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('success', 'Article link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 space-y-6">
        <div className="h-6 w-32 bg-[#EBEBE3] rounded-lg animate-pulse" />
        <div className="h-12 w-3/4 bg-[#EBEBE3] rounded-xl animate-pulse" />
        <div className="h-96 w-full bg-[#EBEBE3] rounded-3xl animate-pulse" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-serif font-bold text-[#4A3728]">Article Not Found</h2>
        <p className="text-sm text-[#5A5A40]">The requested journal chronicle could not be located.</p>
        <button
          onClick={() => navigate('/blog')}
          className="px-6 py-2.5 rounded-full bg-[#B35C44] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#9B4F3B] transition-colors"
        >
          Return to Blog
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Back Button */}
      <button
        onClick={() => navigate('/blog')}
        className="inline-flex items-center gap-2 text-xs font-bold text-[#4A3728] hover:text-[#B35C44] transition-colors uppercase tracking-wider"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Chronicles</span>
      </button>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="bg-[#4A3728] text-white font-bold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-[#5A5A40] flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="text-[#5A5A40] flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        {post.titleTamil && (
          <p className="text-base sm:text-lg font-bold text-[#5A5A40] font-tamil">
            {post.titleTamil}
          </p>
        )}

        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#4A3728] leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-between pt-4 border-t border-[#5A5A40]/15">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EBEBE3] border border-[#5A5A40]/20 flex items-center justify-center font-bold text-sm text-[#4A3728]">
              {post.author[0]}
            </div>
            <div>
              <div className="text-xs font-bold text-[#4A3728]">{post.author}</div>
              <div className="text-[11px] text-[#5A5A40]">Iyalvanam Community Steward</div>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="p-2.5 rounded-full bg-[#EBEBE3] hover:bg-[#dedecf] text-[#4A3728] text-xs font-bold flex items-center gap-1.5 transition-colors border border-[#5A5A40]/20 uppercase tracking-wider"
            title="Share article"
          >
            <Share2 className="w-4 h-4 text-[#B35C44]" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </header>

      {/* Featured Image */}
      <div className="rounded-3xl overflow-hidden shadow-lg border border-[#5A5A40]/20 max-h-[460px]">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Body */}
      <div className="prose prose-stone max-w-none text-[#1A1A1A] space-y-6 text-base sm:text-lg leading-relaxed font-sans font-normal">
        {post.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={index} className="text-2xl font-bold font-serif text-[#4A3728] pt-4">
                {paragraph.replace('### ', '')}
              </h3>
            );
          }
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={index} className="text-3xl font-bold font-serif text-[#4A3728] pt-6 border-b border-[#5A5A40]/15 pb-2">
                {paragraph.replace('## ', '')}
              </h2>
            );
          }
          if (paragraph.startsWith('> ')) {
            return (
              <blockquote key={index} className="p-6 bg-[#EBEBE3] rounded-2xl border-l-4 border-[#B35C44] italic text-lg text-[#4A3728] font-serif">
                {paragraph.replace('> ', '')}
              </blockquote>
            );
          }
          return (
            <p key={index} className="text-[#1A1A1A]/85 leading-relaxed">
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="pt-6 border-t border-[#5A5A40]/15 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-[#5A5A40] flex items-center gap-1 uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5 text-[#B35C44]" /> Topics:
          </span>
          {post.tags.map((tag, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#EBEBE3] border border-[#5A5A40]/15 text-[#4A3728] font-semibold">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="pt-10 border-t border-[#5A5A40]/15 space-y-6">
          <h3 className="text-xl font-bold font-serif text-[#4A3728]">
            Related Chronicles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  navigate(`/blog/${rel.slug || rel.id}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-5 rounded-2xl bg-[#EBEBE3] border border-[#5A5A40]/15 hover:border-[#5A5A40] transition-all cursor-pointer space-y-2 group"
              >
                <span className="text-[10px] font-bold text-[#B35C44] bg-[#B35C44]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {rel.category}
                </span>
                <h4 className="font-bold text-sm font-serif text-[#4A3728] group-hover:text-[#B35C44] transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#4A3728]/80 line-clamp-2">
                  {rel.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};
