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
        <div className="h-6 w-32 bg-[#f7f2e7] rounded-lg animate-pulse" />
        <div className="h-12 w-3/4 bg-[#f7f2e7] rounded-xl animate-pulse" />
        <div className="h-96 w-full bg-[#f7f2e7] rounded-3xl animate-pulse" />
      </Container>
    );
  }

  if (!post) {
    return (
      <Container size="narrow" className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-serif-display font-bold text-[#2d2013]">Article Not Found</h2>
        <p className="text-sm text-[#3d2f21]/70">The requested journal chronicle could not be located.</p>
        <Button variant="primary" size="md" onClick={() => navigate('/blog')}>
          Return to Blog
        </Button>
      </Container>
    );
  }

  return (
    <article className="bg-[#f0e6d2] text-[#2d2013] space-y-8 sm:space-y-12 pb-16 sm:pb-24">
      
      {/* Top Header & Breadcrumb */}
      <section className="pt-6 sm:pt-8 pb-6 border-b border-[#7a2e1a]/15 bg-[#f7f2e7]">
        <Container size="narrow">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#1f3d1f] hover:text-[#7a2e1a] transition-colors py-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Chronicles</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#7a2e1a]/30 text-xs font-serif font-bold uppercase tracking-wider text-[#7a2e1a] hover:bg-[#f0e6d2] transition-colors"
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
              <span className="bg-[#1f3d1f] text-[#f7f2e7] font-bold text-[10px] sm:text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-[#7a2e1a] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime || '5 min read'}</span>
              </span>
              <span className="text-[#3d2f21]/70">• By {post.author}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif-display font-bold text-[#2d2013] tracking-tight leading-tight break-words">
              {post.title}
            </h1>

            {post.titleTamil && (
              <p className="text-sm sm:text-base font-tamil text-[#7a2e1a] font-semibold break-words">
                {post.titleTamil}
              </p>
            )}
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border-2 border-[#1f3d1f]/20 bg-[#f7f2e7]">
            <img
              src={post.imageUrl || 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Content */}
          <div className="text-base sm:text-lg text-[#3d2f21] font-serif-body leading-relaxed space-y-5 whitespace-pre-line pt-2">
            {post.content}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-6 border-t border-[#7a2e1a]/15 flex flex-wrap items-center gap-2">
              <span className="text-xs font-serif font-bold uppercase tracking-widest text-[#7a2e1a]">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#f7f2e7] border border-[#7a2e1a]/20 text-xs font-serif font-medium text-[#2d2013]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="pt-10 border-t border-[#7a2e1a]/15 space-y-6">
              <h3 className="text-xl sm:text-2xl font-serif-display font-bold text-[#2d2013]">
                Related Chronicles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {relatedPosts.map((rp) => (
                  <div
                    key={rp.id}
                    onClick={() => navigate(`/blog/${rp.slug || rp.id}`)}
                    className="p-5 rounded-2xl bg-[#f7f2e7] border border-[#7a2e1a]/15 hover:border-[#1f3d1f] shadow-xs cursor-pointer space-y-2 group"
                  >
                    <span className="text-[10px] uppercase font-bold text-[#7a2e1a]">{rp.category}</span>
                    <h4 className="text-base font-serif-display font-bold text-[#2d2013] group-hover:text-[#1f3d1f] transition-colors leading-snug break-words">
                      {rp.title}
                    </h4>
                    <span className="text-xs font-serif font-bold text-[#1f3d1f] flex items-center gap-1 pt-1">
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
