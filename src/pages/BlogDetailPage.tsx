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
  ChevronRight,
  Feather
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { BotanicalFlourish, LeafBullet } from '../components/OrganicIcons';
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
    window.scrollTo(0, 0);
    const loadPost = async () => {
      setLoading(true);
      try {
        const data = await api.getBlogPost(slugOrId);
        setPost(data);
        const all = await api.getBlogPosts();
        setRelatedPosts(all.filter((p) => p.id !== data.id).slice(0, 2));
      } catch (err) {
        console.warn('Failed to load blog detail', err);
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
      <Container size="narrow" className="py-20 space-y-6">
        <div className="h-6 w-32 bg-[#FAF8F3] rounded-lg animate-pulse" />
        <div className="h-12 w-3/4 bg-[#FAF8F3] rounded-xl animate-pulse" />
        <div className="h-96 w-full bg-[#FAF8F3] rounded-3xl animate-pulse" />
      </Container>
    );
  }

  if (!post) {
    return (
      <Container size="narrow" className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-serif-heading font-bold text-[#2E4F2B]">Chronicle Not Found</h2>
        <p className="text-sm text-[#5C5044]">The requested journal chronicle could not be located.</p>
        <Button variant="primary" size="md" onClick={() => navigate('/blog')}>
          Return to Sanctuary Journal
        </Button>
      </Container>
    );
  }

  return (
    <article className="bg-[#F5F2EB] text-[#241D17] space-y-8 sm:space-y-12 pb-20 sm:pb-32">
      
      {/* Top Header & Breadcrumb */}
      <section className="pt-6 sm:pt-8 pb-6 border-b border-[#D4C5A9]/60 bg-[#FAF8F3]">
        <Container size="narrow">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-serif font-bold text-[#2E4F2B] hover:text-[#8B5A2B] transition-colors py-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Chronicles</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-[#D4C5A9] text-xs font-serif font-bold uppercase tracking-wider text-[#8B5A2B] hover:bg-[#ECE6D8] transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </Container>
      </section>

      {/* Main Article Content */}
      <Container size="narrow">
        <div className="space-y-6 sm:space-y-8">
          
          <header className="space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-2.5 text-xs">
              <span className="text-[#8B5A2B] font-serif font-bold text-[11px] sm:text-xs uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-[#D4C5A9]">•</span>
              <span className="text-[#5C5044] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#8B5A2B]" />
                <span>{post.readTime || '5 min read'}</span>
              </span>
              <span className="text-[#D4C5A9]">•</span>
              <span className="text-[#5C5044]">By {post.author}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif-heading font-bold text-[#2E4F2B] tracking-tight leading-tight break-words">
              {post.title}
            </h1>

            {post.titleTamil && (
              <p className="text-sm sm:text-base font-tamil text-[#8B5A2B] font-semibold break-words">
                {post.titleTamil}
              </p>
            )}
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xs border border-[#D4C5A9] bg-[#ECE6D8]">
            <img
              src={post.imageUrl || 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="text-base sm:text-lg text-[#241D17] font-serif-body leading-relaxed space-y-5 whitespace-pre-line pt-2">
            {post.content}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-6 border-t border-[#D4C5A9]/50 flex flex-wrap items-center gap-2">
              <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#8B5A2B]">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-[#FAF8F3] border border-[#D4C5A9]/70 text-xs font-serif font-medium text-[#5C5044]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="pt-10 border-t border-[#D4C5A9]/50 space-y-6">
              <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#2E4F2B]">
                Related Chronicles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {relatedPosts.map((rp) => (
                  <div
                    key={rp.id}
                    onClick={() => navigate(`/blog/${rp.slug || rp.id}`)}
                    className="p-6 rounded-2xl bg-[#FAF8F3] border border-[#D4C5A9]/70 hover:border-[#2E4F2B]/40 shadow-xs cursor-pointer space-y-2 group"
                  >
                    <span className="text-[10px] uppercase font-serif font-bold text-[#8B5A2B]">{rp.category}</span>
                    <h4 className="text-base font-serif-heading font-bold text-[#2E4F2B] group-hover:text-[#1E351C] transition-colors leading-snug break-words">
                      {rp.title}
                    </h4>
                    <span className="text-xs font-serif font-bold text-[#2E4F2B] flex items-center gap-1 pt-1">
                      <span>Read Story</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </Container>

    </article>
  );
};
