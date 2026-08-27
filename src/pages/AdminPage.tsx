import React, { useEffect, useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Heart, 
  LogOut, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  Search, 
  RefreshCw, 
  Shield, 
  ExternalLink,
  DollarSign,
  TreePine,
  Sprout,
  CheckCircle2,
  XCircle,
  Quote,
  Compass
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { 
  BlogPost, 
  MemberInquiry, 
  Donation, 
  InquiryStatus, 
  DonationStatus, 
  DashboardStats,
  LeadershipProfile,
  LeadershipDesignation
} from '../types';
import { api } from '../services/api';
import { Modal } from '../components/Modal';

interface AdminPageProps {
  navigate: (path: string) => void;
  showToast: (type: 'success' | 'error' | 'info', message: string, title?: string) => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ navigate, showToast }) => {
  const { user, token, logout, isAuthenticated } = useAuth();

  const [activeTab, setActiveTab] = useState<'overview' | 'leadership' | 'blog' | 'inquiries' | 'donations'>('overview');
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  // Leadership Management State
  const [leadershipList, setLeadershipList] = useState<LeadershipProfile[]>([]);
  const [editingLeadership, setEditingLeadership] = useState<LeadershipProfile | null>(null);
  const [isLeadershipModalOpen, setIsLeadershipModalOpen] = useState(false);
  const [leadershipFormData, setLeadershipFormData] = useState({
    designation: 'FOUNDER' as LeadershipDesignation,
    displayName: '',
    roleTitle: '',
    roleTitleTamil: '',
    shortBio: '',
    fullBiography: '',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    coverImage: '',
    visionStatement: '',
    philosophy: '',
    quote: '',
    displayOrder: 1,
    isPublished: true,
    projects: 'Western Ghats Native Food Forest, Legal Asset Architecture, Heirloom Seed Bank'
  });

  // Blog State
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [postFormData, setPostFormData] = useState({
    title: '',
    titleTamil: '',
    excerpt: '',
    content: '',
    category: 'Ecology & Land',
    tags: 'WesternGhats, Nature, Forest',
    imageUrl: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80',
    author: 'Iyalvanam Circle',
    readTime: '4 min read',
    published: true,
  });

  // Inquiries State
  const [inquiries, setInquiries] = useState<MemberInquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<MemberInquiry | null>(null);
  const [inquirySearch, setInquirySearch] = useState('');
  const [inquiryStatusFilter, setInquiryStatusFilter] = useState<string>('all');

  // Donations State
  const [donations, setDonations] = useState<Donation[]>([]);
  const [selectedDonation, setSelectedDonation] = useState<Donation | null>(null);
  const [donationStatusFilter, setDonationStatusFilter] = useState<string>('all');

  // Delete confirmation
  const [deleteConfirm, setDeleteConfirm] = useState<{
    type: 'post' | 'inquiry' | 'donation' | 'leadership';
    id: string;
    name: string;
  } | null>(null);

  // Load Admin Data
  const loadData = async () => {
    setLoading(true);
    try {
      const [statsData, postsData, inquiriesData, donationsData, leadershipData] = await Promise.all([
        api.getDashboardStats().catch(() => null),
        api.getBlogPosts({ includeUnpublished: true }).catch(() => []),
        api.getMemberInquiries().catch(() => []),
        api.getDonations().catch(() => []),
        api.getLeadershipProfiles({ all: true }).catch(() => [])
      ]);
      setStats(statsData);
      setPosts(postsData);
      setInquiries(inquiriesData);
      setDonations(donationsData);
      setLeadershipList(leadershipData);
    } catch (err: any) {
      showToast('error', err.message || 'Failed to load dashboard data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }
    loadData();
  }, [isAuthenticated]);

  // ==================== LEADERSHIP ACTIONS ====================
  const handleOpenLeadershipModal = (profile?: LeadershipProfile) => {
    if (profile) {
      setEditingLeadership(profile);
      setLeadershipFormData({
        designation: profile.designation,
        displayName: profile.displayName,
        roleTitle: profile.roleTitle,
        roleTitleTamil: profile.roleTitleTamil || '',
        shortBio: profile.shortBio,
        fullBiography: profile.fullBiography,
        profileImage: profile.profileImage,
        coverImage: profile.coverImage || '',
        visionStatement: profile.visionStatement,
        philosophy: profile.philosophy,
        quote: profile.quote,
        displayOrder: profile.displayOrder,
        isPublished: profile.isPublished,
        projects: (profile.projects || []).join(', ')
      });
    } else {
      setEditingLeadership(null);
      setLeadershipFormData({
        designation: 'FOUNDER',
        displayName: '',
        roleTitle: 'Vision Steward',
        roleTitleTamil: '',
        shortBio: '',
        fullBiography: '',
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
        coverImage: '',
        visionStatement: '',
        philosophy: '',
        quote: '',
        displayOrder: leadershipList.length + 1,
        isPublished: true,
        projects: 'Sanctuary Reforestation, Soil Microbiology'
      });
    }
    setIsLeadershipModalOpen(true);
  };

  const handleSaveLeadership = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...leadershipFormData,
        projects: leadershipFormData.projects.split(',').map((p) => p.trim()).filter(Boolean)
      };

      if (editingLeadership) {
        await api.updateLeadershipProfile(editingLeadership.id, payload);
        showToast('success', 'Leadership profile updated successfully.');
      } else {
        await api.createLeadershipProfile(payload);
        showToast('success', 'New leadership profile added successfully.');
      }

      setIsLeadershipModalOpen(false);
      setEditingLeadership(null);
      loadData();
    } catch (err: any) {
      showToast('error', err.message || 'Failed to save leadership profile.');
    }
  };

  // Handle Post Save
  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...postFormData,
        tags: postFormData.tags.split(',').map((t) => t.trim()).filter(Boolean),
      };

      if (editingPost) {
        await api.updateBlogPost(editingPost.id, payload);
        showToast('success', 'Chronicle updated successfully.');
      } else {
        await api.createBlogPost(payload);
        showToast('success', 'New chronicle published successfully.');
      }

      setIsPostModalOpen(false);
      setEditingPost(null);
      loadData();
    } catch (err: any) {
      showToast('error', err.message || 'Failed to save blog post.');
    }
  };

  // Handle Inquiries & Status Updates
  const handleUpdateInquiryStatus = async (id: string, status: InquiryStatus, notes?: string) => {
    try {
      await api.updateMemberInquiryStatus(id, status, notes);
      showToast('success', `Inquiry marked as ${status}.`);
      loadData();
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry({ ...selectedInquiry, status, notes });
      }
    } catch (err: any) {
      showToast('error', 'Failed to update inquiry status.');
    }
  };

  const handleUpdateDonationStatus = async (id: string, status: DonationStatus) => {
    try {
      await api.updateDonationStatus(id, status);
      showToast('success', `Donation marked as ${status}.`);
      loadData();
      if (selectedDonation && selectedDonation.id === id) {
        setSelectedDonation({ ...selectedDonation, status });
      }
    } catch (err: any) {
      showToast('error', 'Failed to update donation status.');
    }
  };

  const executeDelete = async () => {
    if (!deleteConfirm) return;
    try {
      if (deleteConfirm.type === 'post') {
        await api.deleteBlogPost(deleteConfirm.id);
        showToast('success', 'Post removed.');
      } else if (deleteConfirm.type === 'inquiry') {
        await api.deleteMemberInquiry(deleteConfirm.id);
        showToast('success', 'Inquiry record removed.');
      } else if (deleteConfirm.type === 'donation') {
        await api.deleteDonation(deleteConfirm.id);
        showToast('success', 'Donation record removed.');
      } else if (deleteConfirm.type === 'leadership') {
        await api.deleteLeadershipProfile(deleteConfirm.id);
        showToast('success', 'Leadership profile removed.');
      }
      setDeleteConfirm(null);
      loadData();
    } catch (err: any) {
      showToast('error', 'Delete operation failed.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f0e6d2] text-[#2d2013] py-8">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Ribbon */}
        <div className="p-6 rounded-3xl bg-[#1f3d1f] text-[#f7f2e7] shadow-xl border border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#d4af37] text-[#2d2013] flex items-center justify-center font-serif font-bold text-xl shadow-md">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold">
                IYALVANAM & SEYON • GOVERNANCE PORTAL
              </span>
              <h1 className="text-2xl font-serif-display font-bold">
                Sanctuary Management Dashboard
              </h1>
              <p className="text-xs text-[#f0e6d2]/80">
                Logged in as <strong className="text-[#d4af37]">{user?.username}</strong> ({user?.role || 'SUPER_ADMIN'})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              className="p-2.5 rounded-full bg-[#f0e6d2]/10 hover:bg-[#f0e6d2]/20 text-[#f7f2e7] transition-colors"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 rounded-full bg-[#f0e6d2] hover:bg-white text-[#1f3d1f] text-xs font-serif font-bold uppercase tracking-wider transition-colors shadow-xs flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Live Website</span>
            </button>
            <button
              onClick={logout}
              className="px-4 py-2 rounded-full bg-[#7a2e1a] hover:bg-[#9e3d23] text-[#f7f2e7] text-xs font-serif font-bold uppercase tracking-wider transition-colors shadow-xs flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#7a2e1a]/20 gap-2 sm:gap-4 overflow-x-auto pb-1 text-xs uppercase tracking-widest font-serif font-bold">
          {[
            { id: 'overview', name: 'Overview', icon: LayoutDashboard },
            { id: 'leadership', name: 'Leadership Management', icon: Users },
            { id: 'blog', name: 'Chronicles & Blog', icon: BookOpen },
            { id: 'inquiries', name: 'Member Inquiries', icon: Users },
            { id: 'donations', name: 'Support & Pledges', icon: Heart },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-3 px-4 flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'border-[#1f3d1f] text-[#1f3d1f]'
                    : 'border-transparent text-[#2d2013]/60 hover:text-[#7a2e1a]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* ==================== 1. OVERVIEW TAB ==================== */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 shadow-sm space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7a2e1a]">
                  Member Inquiries
                </span>
                <div className="text-3xl font-serif-display font-bold text-[#1f3d1f]">
                  {stats?.pendingMemberInquiries || 0} <span className="text-xs text-[#2d2013]/50 font-normal">pending</span>
                </div>
                <p className="text-xs text-[#2d2013]/70">
                  {stats?.totalMemberInquiries || inquiries.length} total seekers registered
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 shadow-sm space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1f3d1f]">
                  Published Articles
                </span>
                <div className="text-3xl font-serif-display font-bold text-[#7a2e1a]">
                  {stats?.publishedPosts || posts.filter(p => p.published).length}
                </div>
                <p className="text-xs text-[#2d2013]/70">
                  {stats?.totalBlogPosts || posts.length} total drafts & stories
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 shadow-sm space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7a2e1a]">
                  Infrastructure Pledges
                </span>
                <div className="text-3xl font-serif-display font-bold text-[#1f3d1f]">
                  ₹{(stats?.totalPledgedAmount || 0).toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-[#2d2013]/70">
                  {stats?.donationRecords || donations.length} records in registry
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 shadow-sm space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1f3d1f]">
                  Leadership Stewards
                </span>
                <div className="text-3xl font-serif-display font-bold text-[#7a2e1a]">
                  {leadershipList.length}
                </div>
                <p className="text-xs text-[#2d2013]/70">
                  Founder & Co-Founder Profiles Live
                </p>
              </div>

            </div>

            {/* Quick Actions Card */}
            <div className="p-8 rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 shadow-sm space-y-4">
              <h3 className="text-xl font-serif-display font-bold text-[#2d2013]">
                Quick Administrative Actions
              </h3>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => handleOpenLeadershipModal()}
                  className="px-5 py-2.5 rounded-full bg-[#1f3d1f] hover:bg-[#2d5a2d] text-[#f7f2e7] text-xs font-serif font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4 text-[#d4af37]" />
                  <span>Add Leadership Steward</span>
                </button>
                <button
                  onClick={() => {
                    setEditingPost(null);
                    setPostFormData({
                      title: '',
                      titleTamil: '',
                      excerpt: '',
                      content: '',
                      category: 'Ecology & Land',
                      tags: 'WesternGhats, Nature',
                      imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
                      author: 'Iyalvanam Circle',
                      readTime: '4 min read',
                      published: true,
                    });
                    setIsPostModalOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#7a2e1a] hover:bg-[#9e3d23] text-[#f7f2e7] text-xs font-serif font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
                >
                  <Plus className="w-4 h-4 text-[#d4af37]" />
                  <span>Write New Blog Story</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================== 2. LEADERSHIP MANAGEMENT TAB ==================== */}
        {activeTab === 'leadership' && (
          <div className="space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-serif-display font-bold text-[#1f3d1f]">
                  Leadership Profile Management
                </h2>
                <p className="text-xs text-[#7a2e1a] font-semibold font-tamil">
                  இயல்வனம் & சேயோன் வழிகாட்டிகள் விவரங்கள் நிர்வாகம்
                </p>
              </div>

              <button
                onClick={() => handleOpenLeadershipModal()}
                className="px-5 py-2.5 rounded-full bg-[#1f3d1f] hover:bg-[#2d5a2d] text-[#f7f2e7] text-xs font-serif font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
              >
                <Plus className="w-4 h-4 text-[#d4af37]" />
                <span>Add Leadership Profile</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadershipList.map((lead) => (
                <div
                  key={lead.id}
                  className="p-6 rounded-3xl bg-[#f7f2e7] border-2 border-[#7a2e1a]/20 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-serif font-bold uppercase tracking-widest ${
                        lead.designation === 'FOUNDER'
                          ? 'bg-[#1f3d1f] text-[#f7f2e7]'
                          : 'bg-[#7a2e1a] text-[#f7f2e7]'
                      }`}>
                        {lead.designation}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        lead.isPublished ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {lead.isPublished ? 'PUBLISHED' : 'DRAFT'}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <img
                        src={lead.profileImage}
                        alt={lead.displayName}
                        className="w-20 h-24 rounded-2xl object-cover border border-[#7a2e1a]/20"
                      />
                      <div className="space-y-1">
                        <h3 className="text-xl font-serif-display font-bold text-[#2d2013]">
                          {lead.displayName}
                        </h3>
                        <p className="text-xs font-bold text-[#7a2e1a]">
                          {lead.roleTitle}
                        </p>
                        {lead.roleTitleTamil && (
                          <p className="text-xs font-tamil text-[#1f3d1f]">
                            {lead.roleTitleTamil}
                          </p>
                        )}
                        <p className="text-[11px] text-[#2d2013]/60">
                          Display Order: #{lead.displayOrder}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-[#3d2f21] font-serif-body leading-relaxed line-clamp-3">
                      {lead.shortBio}
                    </p>

                    <blockquote className="border-l-2 border-[#7a2e1a] pl-3 text-xs italic text-[#7a2e1a]">
                      {lead.quote}
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-[#7a2e1a]/15 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenLeadershipModal(lead)}
                        className="px-3.5 py-1.5 rounded-lg bg-[#f0e6d2] hover:bg-[#1f3d1f] hover:text-[#f7f2e7] text-xs font-bold transition-colors flex items-center gap-1.5 border border-[#7a2e1a]/20"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => setDeleteConfirm({ type: 'leadership', id: lead.id, name: lead.displayName })}
                        className="p-1.5 rounded-lg hover:bg-rose-100 text-rose-700 transition-colors"
                        title="Delete Profile"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => navigate(lead.designation === 'FOUNDER' ? '/leadership/founder' : '/leadership/co-founder')}
                      className="text-xs font-serif font-bold uppercase tracking-wider text-[#1f3d1f] hover:underline"
                    >
                      View Live Page →
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ==================== 3. BLOG MANAGEMENT TAB ==================== */}
        {activeTab === 'blog' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-2xl font-serif-display font-bold text-[#1f3d1f]">
                Articles & Chronicles ({posts.length})
              </h2>
              <button
                onClick={() => {
                  setEditingPost(null);
                  setPostFormData({
                    title: '',
                    titleTamil: '',
                    excerpt: '',
                    content: '',
                    category: 'Ecology & Land',
                    tags: 'WesternGhats, Nature',
                    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
                    author: 'Iyalvanam Circle',
                    readTime: '4 min read',
                    published: true,
                  });
                  setIsPostModalOpen(true);
                }}
                className="px-5 py-2.5 rounded-full bg-[#1f3d1f] hover:bg-[#2d5a2d] text-[#f7f2e7] text-xs font-serif font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
              >
                <Plus className="w-4 h-4 text-[#d4af37]" />
                <span>Write New Article</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 shadow-sm space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#7a2e1a] font-bold">
                      <span>{post.category}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] ${post.published ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                        {post.published ? 'PUBLISHED' : 'DRAFT'}
                      </span>
                    </div>
                    <h3 className="text-lg font-serif-display font-bold text-[#2d2013]">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#3d2f21]/80 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#7a2e1a]/15 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingPost(post);
                          setPostFormData({
                            title: post.title,
                            titleTamil: post.titleTamil || '',
                            excerpt: post.excerpt,
                            content: post.content,
                            category: post.category,
                            tags: (post.tags || []).join(', '),
                            imageUrl: post.imageUrl,
                            author: post.author,
                            readTime: post.readTime,
                            published: post.published,
                          });
                          setIsPostModalOpen(true);
                        }}
                        className="px-3 py-1 rounded-lg bg-[#f0e6d2] text-xs font-bold text-[#2d2013] hover:bg-[#1f3d1f] hover:text-[#f7f2e7] transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => setDeleteConfirm({ type: 'post', id: post.id, name: post.title })}
                        className="p-1 rounded-lg hover:bg-rose-100 text-rose-700 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => navigate(`/blog/${post.slug || post.id}`)}
                      className="text-xs font-serif font-bold text-[#1f3d1f] hover:underline"
                    >
                      View Live Article →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== 4. MEMBER INQUIRIES TAB ==================== */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif-display font-bold text-[#1f3d1f]">
              Community Member Inquiries ({inquiries.length})
            </h2>

            <div className="space-y-4">
              {inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="p-6 rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 shadow-sm space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#7a2e1a]/15 pb-3">
                    <div>
                      <h4 className="text-lg font-serif-display font-bold text-[#2d2013]">
                        {inq.name}
                      </h4>
                      <p className="text-xs text-[#7a2e1a]">
                        {inq.email} • {inq.phone}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={inq.status}
                        onChange={(e) => handleUpdateInquiryStatus(inq.id, e.target.value as InquiryStatus)}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-[#f0e6d2] border border-[#7a2e1a]/30 focus:outline-none"
                      >
                        <option value="PENDING">PENDING</option>
                        <option value="CONTACTED">CONTACTED</option>
                        <option value="JOINED">JOINED</option>
                      </select>
                      <button
                        onClick={() => setDeleteConfirm({ type: 'inquiry', id: inq.id, name: inq.name })}
                        className="p-1 rounded-lg hover:bg-rose-100 text-rose-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#3d2f21] font-serif-body leading-relaxed">
                    {inq.message}
                  </p>

                  <div className="text-[11px] text-[#2d2013]/60 flex items-center justify-between pt-1">
                    <span>Interest: {inq.areaOfContribution || 'General'}</span>
                    <span>Received: {new Date(inq.submittedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== 5. DONATIONS TAB ==================== */}
        {activeTab === 'donations' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif-display font-bold text-[#1f3d1f]">
              Infrastructure & Material Pledges ({donations.length})
            </h2>

            <div className="space-y-4">
              {donations.map((don) => (
                <div
                  key={don.id}
                  className="p-6 rounded-3xl bg-[#f7f2e7] border border-[#7a2e1a]/15 shadow-sm space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#7a2e1a]/15 pb-3">
                    <div>
                      <h4 className="text-lg font-serif-display font-bold text-[#2d2013]">
                        {don.donorName}
                      </h4>
                      <p className="text-xs text-[#7a2e1a]">
                        {don.donorEmail} • {don.type}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {don.amount && (
                        <span className="text-lg font-serif font-bold text-[#1f3d1f]">
                          ₹{Number(don.amount).toLocaleString('en-IN')}
                        </span>
                      )}
                      <select
                        value={don.status}
                        onChange={(e) => handleUpdateDonationStatus(don.id, e.target.value as DonationStatus)}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-[#f0e6d2] border border-[#7a2e1a]/30 focus:outline-none"
                      >
                        <option value="PENDING">PENDING</option>
                        <option value="RECEIVED">RECEIVED</option>
                      </select>
                      <button
                        onClick={() => setDeleteConfirm({ type: 'donation', id: don.id, name: don.donorName })}
                        className="p-1 rounded-lg hover:bg-rose-100 text-rose-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {don.description && (
                    <p className="text-xs sm:text-sm text-[#3d2f21] font-serif-body">
                      {don.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ==================== LEADERSHIP EDIT / CREATE MODAL ==================== */}
      {isLeadershipModalOpen && (
        <Modal
          isOpen={isLeadershipModalOpen}
          onClose={() => setIsLeadershipModalOpen(false)}
          title={editingLeadership ? 'Edit Leadership Profile' : 'Add Leadership Steward'}
        >
          <form onSubmit={handleSaveLeadership} className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                  Designation *
                </label>
                <select
                  value={leadershipFormData.designation}
                  onChange={(e) => setLeadershipFormData({ ...leadershipFormData, designation: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
                >
                  <option value="FOUNDER">FOUNDER (Iyalvanam Asset Trust)</option>
                  <option value="CO_FOUNDER">CO_FOUNDER (Seyon Operational Trust)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                  Display Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sanjay Dev"
                  value={leadershipFormData.displayName}
                  onChange={(e) => setLeadershipFormData({ ...leadershipFormData, displayName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                  Role Title (English) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Founder & Vision Steward"
                  value={leadershipFormData.roleTitle}
                  onChange={(e) => setLeadershipFormData({ ...leadershipFormData, roleTitle: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                  Role Title (Tamil)
                </label>
                <input
                  type="text"
                  placeholder="e.g. நிறுவனர் & தொலைநோக்கு வழிகாட்டி"
                  value={leadershipFormData.roleTitleTamil}
                  onChange={(e) => setLeadershipFormData({ ...leadershipFormData, roleTitleTamil: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                Profile Image URL (4:5 Portrait) *
              </label>
              <input
                type="url"
                required
                value={leadershipFormData.profileImage}
                onChange={(e) => setLeadershipFormData({ ...leadershipFormData, profileImage: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                Short Bio (for Cards & Previews) *
              </label>
              <textarea
                required
                rows={2}
                value={leadershipFormData.shortBio}
                onChange={(e) => setLeadershipFormData({ ...leadershipFormData, shortBio: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                Full Detailed Biography *
              </label>
              <textarea
                required
                rows={4}
                value={leadershipFormData.fullBiography}
                onChange={(e) => setLeadershipFormData({ ...leadershipFormData, fullBiography: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                  Vision Statement *
                </label>
                <textarea
                  required
                  rows={2}
                  value={leadershipFormData.visionStatement}
                  onChange={(e) => setLeadershipFormData({ ...leadershipFormData, visionStatement: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                  Living Philosophy *
                </label>
                <textarea
                  required
                  rows={2}
                  value={leadershipFormData.philosophy}
                  onChange={(e) => setLeadershipFormData({ ...leadershipFormData, philosophy: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                Inspiring Quote *
              </label>
              <input
                type="text"
                required
                placeholder="“We do not create a new life system; we simply return to nature...”"
                value={leadershipFormData.quote}
                onChange={(e) => setLeadershipFormData({ ...leadershipFormData, quote: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                Key Initiatives / Projects (comma separated)
              </label>
              <input
                type="text"
                value={leadershipFormData.projects}
                onChange={(e) => setLeadershipFormData({ ...leadershipFormData, projects: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
              />
            </div>

            <div className="flex items-center gap-6 pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-[#2d2013]">
                <input
                  type="checkbox"
                  checked={leadershipFormData.isPublished}
                  onChange={(e) => setLeadershipFormData({ ...leadershipFormData, isPublished: e.target.checked })}
                  className="rounded text-[#1f3d1f]"
                />
                <span>Publish to Public Website</span>
              </label>

              <div className="flex items-center gap-2">
                <label className="text-xs font-bold text-[#7a2e1a]">Display Order:</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={leadershipFormData.displayOrder}
                  onChange={(e) => setLeadershipFormData({ ...leadershipFormData, displayOrder: Number(e.target.value) })}
                  className="w-16 px-2 py-1 rounded-lg bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs text-center"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-[#7a2e1a]/20">
              <button
                type="button"
                onClick={() => setIsLeadershipModalOpen(false)}
                className="px-5 py-2.5 rounded-full bg-[#f0e6d2] text-[#2d2013] text-xs font-bold uppercase tracking-wider"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#1f3d1f] hover:bg-[#2d5a2d] text-[#f7f2e7] text-xs font-serif font-bold uppercase tracking-widest shadow-md"
              >
                Save Profile
              </button>
            </div>

          </form>
        </Modal>
      )}

      {/* ==================== BLOG MODAL ==================== */}
      {isPostModalOpen && (
        <Modal
          isOpen={isPostModalOpen}
          onClose={() => setIsPostModalOpen(false)}
          title={editingPost ? 'Edit Chronicle' : 'Publish New Story'}
        >
          <form onSubmit={handleSavePost} className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                Article Title (English) *
              </label>
              <input
                type="text"
                required
                value={postFormData.title}
                onChange={(e) => setPostFormData({ ...postFormData, title: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                Article Title (Tamil)
              </label>
              <input
                type="text"
                value={postFormData.titleTamil}
                onChange={(e) => setPostFormData({ ...postFormData, titleTamil: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                Image URL *
              </label>
              <input
                type="url"
                required
                value={postFormData.imageUrl}
                onChange={(e) => setPostFormData({ ...postFormData, imageUrl: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                Excerpt (Brief summary) *
              </label>
              <textarea
                required
                rows={2}
                value={postFormData.excerpt}
                onChange={(e) => setPostFormData({ ...postFormData, excerpt: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#7a2e1a] mb-1">
                Full Content (Markdown supported) *
              </label>
              <textarea
                required
                rows={6}
                value={postFormData.content}
                onChange={(e) => setPostFormData({ ...postFormData, content: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#f7f2e7] border border-[#7a2e1a]/30 text-xs font-mono"
              />
            </div>

            <div className="flex items-center gap-4 pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-[#2d2013]">
                <input
                  type="checkbox"
                  checked={postFormData.published}
                  onChange={(e) => setPostFormData({ ...postFormData, published: e.target.checked })}
                  className="rounded text-[#1f3d1f]"
                />
                <span>Published to Live Site</span>
              </label>
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-[#7a2e1a]/20">
              <button
                type="button"
                onClick={() => setIsPostModalOpen(false)}
                className="px-5 py-2.5 rounded-full bg-[#f0e6d2] text-[#2d2013] text-xs font-bold uppercase tracking-wider"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#1f3d1f] hover:bg-[#2d5a2d] text-[#f7f2e7] text-xs font-serif font-bold uppercase tracking-widest shadow-md"
              >
                Save Story
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* ==================== DELETE CONFIRMATION MODAL ==================== */}
      {deleteConfirm && (
        <Modal
          isOpen={!!deleteConfirm}
          onClose={() => setDeleteConfirm(null)}
          title="Confirm Delete"
        >
          <div className="space-y-4">
            <p className="text-sm text-[#2d2013]">
              Are you sure you want to permanently delete <strong>{deleteConfirm.name}</strong>? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3 pt-4 border-t border-[#7a2e1a]/20">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-5 py-2.5 rounded-full bg-[#f0e6d2] text-[#2d2013] text-xs font-bold uppercase tracking-wider"
              >
                Cancel
              </button>
              <button
                onClick={executeDelete}
                className="px-6 py-2.5 rounded-full bg-[#7a2e1a] text-[#f7f2e7] text-xs font-bold uppercase tracking-wider"
              >
                Delete Record
              </button>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
};
