import React, { useEffect, useState } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  BookOpen, 
  Sparkles,
  TreePine,
  Feather
} from 'lucide-react';
import { Container } from '../components/common/Container';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { BotanicalFlourish, LeafBullet } from '../components/OrganicIcons';
import { BlogPost } from '../types';
import { api } from '../services/api';

interface BlogPageProps {
  navigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ navigate }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Agroforestry',
    'Conscious Living',
    'Land & Water',
    'Community Chronicles'
  ];

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await api.getBlogPosts();
      if (data && data.length > 0) {
        let filtered = data;
        if (selectedCategory !== 'All') {
          filtered = filtered.filter(p => p.category === selectedCategory || (p.tags && p.tags.includes(selectedCategory)));
        }
        if (search.trim()) {
          filtered = filtered.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase()));
        }
        setPosts(filtered);
      }
    } catch (err) {
      console.warn('Using default blog posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPosts();
  }, [selectedCategory]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPosts();
  };

  return (
    <div className="bg-[#f0e6d2] text-[#2d2013] space-y-12 sm:space-y-16 md:space-y-20 pb-16 sm:pb-24">
      
      {/* 1. Header Banner */}
      <section className="pt-10 sm:pt-16 pb-8 sm:pb-12 border-b border-[#7a2e1a]/15 bg-[#f7f2e7]">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1f3d1f]/10 text-[#1f3d1f] border border-[#1f3d1f]/20 text-[11px] sm:text-xs font-serif font-bold uppercase tracking-widest">
              <Feather className="w-3.5 h-3.5 text-[#7a2e1a]" />
              <span>Sanctuary Journal • பதிவுகள்</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif-display font-bold text-[#2d2013] tracking-tight leading-tight break-words">
              Chronicles, Stories & Reflections
            </h1>

            <p className="text-xs sm:text-sm font-tamil text-[#7a2e1a] font-semibold break-words">
              “இயல்வனத்தின் சிந்தனைகளும் கள அனுபவங்களும்”
            </p>

            <p className="text-sm sm:text-base md:text-lg text-[#3d2f21]/85 font-serif-body leading-relaxed max-w-2xl mx-auto break-words">
              Reflections on soil regeneration, non-artificial living, ancestral wisdom, and community milestones at Tenkasi.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Filters & Search */}
      <Container>
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[38px] px-3.5 py-1.5 rounded-full text-xs font-serif font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1f3d1f] text-[#f7f2e7] shadow-sm'
                    : 'bg-[#f7f2e7] text-[#2d2013]/70 hover:text-[#7a2e1a] border border-[#7a2e1a]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="w-full md:w-80 relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full min-h-[44px] pl-10 pr-4 py-2.5 rounded-full bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs sm:text-sm text-[#2d2013] focus:outline-none focus:ring-2 focus:ring-[#1f3d1f]"
            />
            <Search className="w-4 h-4 text-[#7a2e1a] absolute left-3.5 top-3.5" />
          </form>

        </div>
      </Container>

      {/* 3. Articles Grid */}
      <Container>
        {loading ? (
          <div className="text-center py-12 text-sm text-[#7a2e1a]">Loading articles...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16 bg-[#f7f2e7] rounded-3xl p-8 border border-[#7a2e1a]/15">
            <h3 className="text-xl font-serif-display font-bold text-[#2d2013]">No articles found</h3>
            <p className="text-xs text-[#3d2f21]/70 mt-1">Try selecting a different category or clearing your search term.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/blog/${post.slug || post.id}`)}
                className="rounded-2xl sm:rounded-3xl overflow-hidden bg-[#f7f2e7] border border-[#7a2e1a]/15 shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#f0e6d2]">
                    <img
                      src={post.imageUrl || 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-[#1f3d1f]/90 backdrop-blur-xs text-[#f7f2e7] text-[10px] font-serif font-bold uppercase tracking-widest shadow-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-[11px] text-[#7a2e1a] font-medium">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>By {post.author}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif-display font-bold text-[#2d2013] group-hover:text-[#1f3d1f] transition-colors leading-snug break-words">
                      {post.title}
                    </h3>

                    {post.titleTamil && (
                      <p className="text-xs font-tamil text-[#7a2e1a] font-semibold break-words">
                        {post.titleTamil}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-[#3d2f21]/80 line-clamp-3 font-serif-body leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 border-t border-[#7a2e1a]/10 flex items-center justify-between text-xs font-serif font-bold uppercase tracking-wider text-[#1f3d1f]">
                  <span>Read Full Chronicle</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>

    </div>
  );
};
