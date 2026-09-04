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
    <div className="bg-[#F5F2EB] text-[#241D17] space-y-12 sm:space-y-16 md:space-y-20 pb-20 sm:pb-32">
      
      {/* 1. Header Banner */}
      <section className="pt-10 sm:pt-16 pb-8 sm:pb-12 border-b border-[#D4C5A9]/60 bg-[#FAF8F3]">
        <Container>
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECE6D8] text-[#8B5A2B] border border-[#D4C5A9] text-[11px] sm:text-xs font-serif font-bold uppercase tracking-widest">
              <Feather className="w-3.5 h-3.5 text-[#2E4F2B]" />
              <span>Sanctuary Journal • பதிவுகள்</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif-heading font-bold text-[#2E4F2B] tracking-tight leading-tight break-words">
              Chronicles, Stories & Reflections
            </h1>

            <p className="text-xs sm:text-sm font-tamil text-[#8B5A2B] font-semibold break-words">
              “இயல்வனத்தின் சிந்தனைகளும் கள அனுபவங்களும்”
            </p>

            <p className="text-sm sm:text-base md:text-lg text-[#5C5044] font-serif-body leading-relaxed max-w-2xl mx-auto break-words">
              Reflections on soil regeneration, non-artificial living, ancestral wisdom, and community milestones at Tenkasi.
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Editorial Filters & Search */}
      <Container>
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[#D4C5A9]/50 pb-6">
          
          {/* Categories — Editorial Metadata Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[36px] px-4 py-1.5 rounded-lg text-xs font-serif font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2E4F2B] text-[#FAF8F3] shadow-xs'
                    : 'bg-[#FAF8F3] text-[#5C5044] hover:text-[#2E4F2B] hover:bg-[#ECE6D8] border border-[#D4C5A9]/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input — Warm Paper Styling */}
          <form onSubmit={handleSearchSubmit} className="w-full md:w-80 relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search chronicles & topics..."
              className="w-full min-h-[42px] pl-10 pr-4 py-2 rounded-xl bg-[#FAF8F3] border border-[#D4C5A9] text-xs sm:text-sm text-[#241D17] placeholder:text-[#5C5044]/60 focus:outline-none focus:ring-1 focus:ring-[#2E4F2B] focus:border-[#2E4F2B]"
            />
            <Search className="w-4 h-4 text-[#8B5A2B] absolute left-3.5 top-3" />
          </form>

        </div>
      </Container>

      {/* 3. Articles Editorial Grid */}
      <Container>
        {loading ? (
          <div className="text-center py-16 text-sm text-[#8B5A2B] font-serif">Loading chronicles...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-16 bg-[#FAF8F3] rounded-3xl p-8 border border-[#D4C5A9]">
            <h3 className="text-xl font-serif-heading font-bold text-[#2E4F2B]">No chronicles found</h3>
            <p className="text-xs text-[#5C5044] mt-1">Try selecting a different topic or clearing your search query.</p>
          </div>
        ) : (
          <div className="space-y-10 sm:space-y-12">
            
            {/* Featured Article Composition (First Item when 'All' selected) */}
            {selectedCategory === 'All' && !search.trim() && posts[0] && (
              <div 
                onClick={() => navigate(`/blog/${posts[0].slug || posts[0].id}`)}
                className="p-6 sm:p-10 rounded-3xl bg-[#FAF8F3] border border-[#D4C5A9] hover:border-[#2E4F2B]/40 transition-colors shadow-xs cursor-pointer group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-serif font-bold text-[#8B5A2B]">
                    <span>Featured Chronicle</span>
                    <span>•</span>
                    <span className="text-[#2E4F2B]">{posts[0].category}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#2E4F2B] group-hover:text-[#1E351C] transition-colors leading-tight">
                    {posts[0].title}
                  </h2>

                  {posts[0].titleTamil && (
                    <p className="text-xs sm:text-sm font-tamil text-[#8B5A2B] font-semibold">
                      {posts[0].titleTamil}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-[#5C5044] font-serif-body leading-relaxed max-w-xl">
                    {posts[0].excerpt}
                  </p>

                  <div className="pt-2 flex items-center gap-4 text-xs font-serif text-[#5C5044]">
                    <span>By {posts[0].author}</span>
                    <span>•</span>
                    <span>{posts[0].readTime}</span>
                  </div>

                  <div className="pt-2 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-serif font-bold text-[#2E4F2B] group-hover:text-[#1E351C]">
                    <span>Read Full Chronicle</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <div className="lg:col-span-5 aspect-[16/10] overflow-hidden rounded-2xl border border-[#D4C5A9]/70 bg-[#ECE6D8]">
                  <img
                    src={posts[0].imageUrl || 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'}
                    alt={posts[0].title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {/* Grid for Remaining or Filtered Chronicles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {(selectedCategory === 'All' && !search.trim() ? posts.slice(1) : posts).map((post) => (
                <div
                  key={post.id}
                  onClick={() => navigate(`/blog/${post.slug || post.id}`)}
                  className="rounded-2xl overflow-hidden bg-[#FAF8F3] border border-[#D4C5A9]/80 shadow-xs hover:border-[#2E4F2B]/50 transition-all flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE6D8] border-b border-[#D4C5A9]/50">
                      <img
                        src={post.imageUrl || 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6 space-y-3">
                      {/* Subtle Uppercase Spaced Metadata Tag (No chunky pill) */}
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-serif font-bold text-[#8B5A2B]">
                        <span>{post.category}</span>
                        <span className="text-[#5C5044] font-normal lowercase">{post.readTime}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-serif-heading font-bold text-[#2E4F2B] group-hover:text-[#1E351C] transition-colors leading-snug break-words">
                        {post.title}
                      </h3>

                      {post.titleTamil && (
                        <p className="text-xs font-tamil text-[#8B5A2B] font-medium break-words">
                          {post.titleTamil}
                        </p>
                      )}

                      <p className="text-xs sm:text-sm text-[#5C5044] line-clamp-3 font-serif-body leading-relaxed pt-1">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[#D4C5A9]/40 flex items-center justify-between text-xs font-serif font-bold uppercase tracking-wider text-[#2E4F2B]">
                    <span>Read Chronicle</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}
      </Container>

    </div>
  );
};
