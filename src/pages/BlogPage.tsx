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
  TreePine
} from 'lucide-react';
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
    'Ecology & Land',
    'Conscious Living',
    'Community Governance',
    'Architecture & Land',
    'Community Updates',
  ];

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await api.getBlogPosts({
        category: selectedCategory === 'All' ? undefined : selectedCategory,
        search: search.trim() ? search : undefined,
      });
      setPosts(data);
    } catch (err) {
      console.error('Failed to load blog posts', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchPosts();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B35C44] bg-[#B35C44]/10 px-4 py-1 rounded-full">
          Community Chronicles • களச் செய்திகள்
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#4A3728]">
          Iyalvanam Journal & Updates
        </h1>
        <p className="text-lg text-[#4A3728]/80 max-w-3xl mx-auto leading-relaxed">
          Reflections on forest regeneration, ancestral health, consensus governance, and on-ground milestones at Dharmapuramadam, Tenkasi.
        </p>
      </section>

      {/* Search & Category Filter Bar */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#4A3728] text-white shadow-xs'
                    : 'bg-[#EBEBE3] text-[#4A3728]/80 hover:bg-[#dedecf] border border-[#5A5A40]/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="w-full md:w-80 relative order-1 md:order-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#EBEBE3]/60 border border-[#5A5A40]/20 text-xs focus:outline-none focus:ring-2 focus:ring-[#5A5A40] text-[#4A3728]"
            />
            <Search className="w-4 h-4 text-[#5A5A40] absolute left-3.5 top-3" />
          </form>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-96 rounded-3xl bg-[#EBEBE3] animate-pulse" />
            ))}
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                onClick={() => navigate(`/blog/${post.slug || post.id}`)}
                className="bg-[#EBEBE3] rounded-3xl overflow-hidden border border-[#5A5A40]/15 hover:border-[#5A5A40] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-[#4A3728]/90 backdrop-blur-xs text-[#F5F5F0] text-[11px] font-bold px-3 py-1 rounded-full border border-[#5A5A40]/30">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    {post.titleTamil && (
                      <p className="text-xs font-semibold text-[#5A5A40] font-tamil line-clamp-1">
                        {post.titleTamil}
                      </p>
                    )}
                    <h2 className="text-xl font-bold font-serif text-[#4A3728] leading-snug group-hover:text-[#B35C44] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-xs text-[#4A3728]/80 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3">
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#5A5A40]/15">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-[#F5F5F0] text-[#5A5A40] font-medium border border-[#5A5A40]/10">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-[#5A5A40] pt-2">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                    <span className="font-bold text-[#B35C44] flex items-center gap-1 group-hover:translate-x-1 transition-transform uppercase tracking-wider text-[11px]">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-16 text-center bg-[#EBEBE3] rounded-3xl border border-[#5A5A40]/15 space-y-3">
            <BookOpen className="w-10 h-10 text-[#5A5A40] mx-auto opacity-50" />
            <h3 className="text-lg font-bold font-serif text-[#4A3728]">No Chronicles Found</h3>
            <p className="text-xs text-[#5A5A40]">
              Try adjusting your category filter or search keywords.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedCategory('All');
              }}
              className="px-6 py-2.5 rounded-full bg-[#B35C44] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#9B4F3B] transition-colors shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
