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
  DollarSign
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { BlogPost, MemberInquiry, Donation, InquiryStatus, DonationStatus, DashboardStats } from '../types';
import { api } from '../services/api';
import { Modal } from '../components/Modal';

interface AdminPageProps {
  navigate: (path: string) => void;
  showToast: (type: 'success' | 'error' | 'info', message: string, title?: string) => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ navigate, showToast }) => {
  const { user, token, logout, isAuthenticated } = useAuth();

  const [activeTab, setActiveTab] = useState<'overview' | 'blog' | 'inquiries' | 'donations'>('overview');
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

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
    type: 'post' | 'inquiry' | 'donation';
    id: string;
    name: string;
  } | null>(null);

  // Load Admin Data
  const loadData = async () => {
    setLoading(true);
    try {
      const [statsData, postsData, inquiriesData, donationsData] = await Promise.all([
        api.getDashboardStats(),
        api.getBlogPosts({ includeUnpublished: true }),
        api.getMemberInquiries(),
        api.getDonations(),
      ]);
      setStats(statsData);
      setPosts(postsData);
      setInquiries(inquiriesData);
      setDonations(donationsData);
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

  // Open Post Form Modal
  const handleOpenPostModal = (post?: BlogPost) => {
    if (post) {
      setEditingPost(post);
      setPostFormData({
        title: post.title,
        titleTamil: post.titleTamil || '',
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        tags: post.tags ? post.tags.join(', ') : '',
        imageUrl: post.imageUrl,
        author: post.author,
        readTime: post.readTime,
        published: post.published,
      });
    } else {
      setEditingPost(null);
      setPostFormData({
        title: '',
        titleTamil: '',
        excerpt: '',
        content: '',
        category: 'Ecology & Land',
        tags: 'WesternGhats, Ecology, Community',
        imageUrl: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80',
        author: 'Iyalvanam Circle',
        readTime: '4 min read',
        published: true,
      });
    }
    setIsPostModalOpen(true);
  };

  // Delete Action Handlers
  const handleConfirmDelete = async () => {
    if (!deleteConfirm) return;
    try {
      if (deleteConfirm.type === 'post') {
        await api.deleteBlogPost(deleteConfirm.id);
        showToast('success', 'Chronicle deleted successfully.');
      } else if (deleteConfirm.type === 'inquiry') {
        await api.deleteMemberInquiry(deleteConfirm.id);
        showToast('success', 'Inquiry deleted successfully.');
      } else if (deleteConfirm.type === 'donation') {
        await api.deleteDonation(deleteConfirm.id);
        showToast('success', 'Donation record deleted successfully.');
      }
      setDeleteConfirm(null);
      loadData();
    } catch (err: any) {
      showToast('error', err.message || 'Deletion failed.');
    }
  };

  // Status Change Handlers
  const handleInquiryStatusChange = async (id: string, status: InquiryStatus) => {
    try {
      await api.updateMemberInquiryStatus(id, status);
      showToast('success', `Inquiry status updated to ${status}`);
      loadData();
    } catch (err: any) {
      showToast('error', 'Failed to update status');
    }
  };

  const handleDonationStatusChange = async (id: string, status: DonationStatus) => {
    try {
      await api.updateDonationStatus(id, status);
      showToast('success', `Pledge status updated to ${status}`);
      loadData();
    } catch (err: any) {
      showToast('error', 'Failed to update donation status');
    }
  };

  if (!isAuthenticated) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="bg-[#4A3728] text-[#F5F5F0] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl border border-[#5A5A40]/30">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#B35C44]" />
            <h1 className="text-2xl font-serif font-bold text-white">
              Iyalvanam Administration Portal
            </h1>
          </div>
          <p className="text-xs text-[#EBEBE3]/80">
            Logged in as <strong className="text-white font-semibold">{user?.username}</strong> ({user?.role}) • SEYON Operational Trust Desk
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
            className="p-2.5 rounded-full bg-[#3B2C20] hover:bg-[#32251B] text-[#EBEBE3] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors border border-[#5A5A40]/30"
            title="Refresh data"
          >
            <RefreshCw className="w-4 h-4 text-[#B35C44]" />
            <span className="hidden sm:inline">Refresh</span>
          </button>
          <button
            onClick={() => {
              logout();
              navigate('/admin/login');
            }}
            className="px-4 py-2.5 rounded-full bg-[#B35C44] hover:bg-[#9B4F3B] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm shadow-[#B35C44]/20"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-[#5A5A40]/15 pb-3">
        {[
          { id: 'overview', label: 'Overview & Metrics', icon: <LayoutDashboard className="w-4 h-4" /> },
          { id: 'inquiries', label: `Join Inquiries (${inquiries.length})`, icon: <Users className="w-4 h-4" /> },
          { id: 'donations', label: `Support Pledges (${donations.length})`, icon: <Heart className="w-4 h-4" /> },
          { id: 'blog', label: `Chronicles / Blog (${posts.length})`, icon: <BookOpen className="w-4 h-4" /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === tab.id
                ? 'bg-[#B35C44] text-white shadow-sm shadow-[#B35C44]/20'
                : 'bg-[#EBEBE3] text-[#4A3728] hover:bg-[#E0E0D6] border border-[#5A5A40]/15'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {loading ? (
        <div className="py-20 text-center space-y-3">
          <div className="w-8 h-8 border-3 border-[#B35C44] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-[#5A5A40]">Loading sanctuary database records...</p>
        </div>
      ) : (
        <>
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && stats && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Total Inquiries */}
                <div className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#5A5A40] font-semibold">
                    <span>Total Inquiries</span>
                    <Users className="w-4 h-4 text-[#B35C44]" />
                  </div>
                  <div className="text-3xl font-bold font-serif text-[#4A3728]">
                    {stats.totalMemberInquiries || 0}
                  </div>
                  <div className="text-[11px] text-[#B35C44] font-bold">
                    {stats.pendingMemberInquiries || 0} pending review
                  </div>
                </div>

                {/* Total Donations Pledged */}
                <div className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#5A5A40] font-semibold">
                    <span>Total Pledged</span>
                    <Heart className="w-4 h-4 text-[#B35C44]" />
                  </div>
                  <div className="text-3xl font-bold font-serif text-[#4A3728]">
                    ₹{(stats.totalPledgedAmount || 0).toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-[#5A5A40] font-semibold">
                    {stats.donationRecords || 0} pledges registered
                  </div>
                </div>

                {/* Published Articles */}
                <div className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#5A5A40] font-semibold">
                    <span>Published Chronicles</span>
                    <BookOpen className="w-4 h-4 text-[#5A5A40]" />
                  </div>
                  <div className="text-3xl font-bold font-serif text-[#4A3728]">
                    {stats.publishedPosts || 0}
                  </div>
                  <div className="text-[11px] text-[#5A5A40]">
                    {stats.totalBlogPosts - stats.publishedPosts} drafts in progress
                  </div>
                </div>

                {/* Target Progress */}
                <div className="p-6 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#5A5A40] font-semibold">
                    <span>₹25L Goal Progress</span>
                    <DollarSign className="w-4 h-4 text-[#B35C44]" />
                  </div>
                  <div className="text-3xl font-bold font-serif text-[#4A3728]">
                    {(((stats.totalPledgedAmount || 0) / 2500000) * 100).toFixed(1)}%
                  </div>
                  <div className="text-[11px] text-[#5A5A40]">
                    Target: ₹25,00,000 for permanent eco-infrastructure
                  </div>
                </div>
              </div>

              {/* Recent Inquiries Snippet */}
              <div className="bg-[#EBEBE3] rounded-3xl p-6 sm:p-8 border border-[#5A5A40]/15 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold font-serif text-[#4A3728]">
                    Recent Join & Alignment Inquiries
                  </h3>
                  <button
                    onClick={() => setActiveTab('inquiries')}
                    className="text-xs font-bold text-[#B35C44] hover:underline"
                  >
                    View All Inquiries →
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#F5F5F0] text-[#5A5A40]">
                      <tr>
                        <th className="p-3 rounded-l-xl font-bold">Applicant</th>
                        <th className="p-3 font-bold">Email & Phone</th>
                        <th className="p-3 font-bold">Contribution Area</th>
                        <th className="p-3 font-bold">Status</th>
                        <th className="p-3 rounded-r-xl font-bold">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#5A5A40]/10">
                      {inquiries.slice(0, 5).map((inq) => (
                        <tr key={inq.id} className="hover:bg-[#F5F5F0]/60">
                          <td className="p-3 font-bold text-[#4A3728]">{inq.name}</td>
                          <td className="p-3 text-[#4A3728]/80">{inq.email}</td>
                          <td className="p-3 text-[#4A3728]/80">{inq.areaOfContribution || inq.skills || 'General'}</td>
                          <td className="p-3">
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                                inq.status === 'PENDING'
                                  ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                  : inq.status === 'JOINED'
                                  ? 'bg-[#5A5A40]/15 text-[#4A3728] border border-[#5A5A40]/30'
                                  : 'bg-blue-100 text-blue-900 border border-blue-200'
                              }`}
                            >
                              {inq.status}
                            </span>
                          </td>
                          <td className="p-3 text-[#5A5A40]">
                            {new Date(inq.submittedAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INQUIRIES */}
          {activeTab === 'inquiries' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-full sm:w-80 relative">
                  <input
                    type="text"
                    value={inquirySearch}
                    onChange={(e) => setInquirySearch(e.target.value)}
                    placeholder="Search by name, email, phone..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#EBEBE3] border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none text-[#4A3728]"
                  />
                  <Search className="w-4 h-4 text-[#5A5A40] absolute left-3 top-2.5" />
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="text-xs text-[#5A5A40] font-semibold">Filter:</span>
                  <select
                    value={inquiryStatusFilter}
                    onChange={(e) => setInquiryStatusFilter(e.target.value)}
                    className="px-3 py-1.5 rounded-xl border border-[#5A5A40]/20 bg-[#EBEBE3] text-xs font-semibold text-[#4A3728]"
                  >
                    <option value="all">All Statuses</option>
                    <option value="PENDING">PENDING</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="JOINED">JOINED</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#EBEBE3] rounded-3xl border border-[#5A5A40]/15 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#F5F5F0] text-[#5A5A40] font-semibold">
                      <tr>
                        <th className="p-3.5">Applicant / Name</th>
                        <th className="p-3.5">Email & Phone</th>
                        <th className="p-3.5">Members</th>
                        <th className="p-3.5">Area & Skills</th>
                        <th className="p-3.5">Status</th>
                        <th className="p-3.5">Date</th>
                        <th className="p-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#5A5A40]/10">
                      {inquiries
                        .filter((item) => {
                          const matchesFilter = inquiryStatusFilter === 'all' || item.status === inquiryStatusFilter;
                          const matchesSearch =
                            item.name.toLowerCase().includes(inquirySearch.toLowerCase()) ||
                            item.email.toLowerCase().includes(inquirySearch.toLowerCase()) ||
                            (item.phone && item.phone.includes(inquirySearch));
                          return matchesFilter && matchesSearch;
                        })
                        .map((item) => (
                          <tr key={item.id} className="hover:bg-[#F5F5F0]/60">
                            <td className="p-3.5">
                              <div className="font-bold text-[#4A3728]">{item.name}</div>
                              <div className="text-[10px] text-[#5A5A40]">ID: {item.id}</div>
                            </td>
                            <td className="p-3.5 text-[#4A3728]/85">
                              <div>{item.email}</div>
                              <div className="text-[11px] text-[#5A5A40]">{item.phone}</div>
                            </td>
                            <td className="p-3.5 font-bold text-[#4A3728]">
                              {item.numberOfMembers || 1}
                            </td>
                            <td className="p-3.5 text-[#4A3728]/85 max-w-xs">
                              <div className="font-medium text-[#4A3728]">{item.areaOfContribution || 'General'}</div>
                              <div className="text-[11px] text-[#5A5A40] truncate">{item.skills || 'N/A'}</div>
                            </td>
                            <td className="p-3.5">
                              <select
                                value={item.status}
                                onChange={(e) => handleInquiryStatusChange(item.id, e.target.value as InquiryStatus)}
                                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border ${
                                  item.status === 'PENDING'
                                    ? 'bg-amber-50 text-amber-900 border-amber-300'
                                    : item.status === 'CONTACTED'
                                    ? 'bg-blue-50 text-blue-900 border-blue-300'
                                    : 'bg-[#5A5A40]/15 text-[#4A3728] border-[#5A5A40]/30'
                                }`}
                              >
                                <option value="PENDING">PENDING</option>
                                <option value="CONTACTED">CONTACTED</option>
                                <option value="JOINED">JOINED</option>
                              </select>
                            </td>
                            <td className="p-3.5 text-[#5A5A40]">
                              {new Date(item.submittedAt).toLocaleDateString()}
                            </td>
                            <td className="p-3.5 text-right space-x-2">
                              <button
                                onClick={() => setSelectedInquiry(item)}
                                className="p-1.5 rounded-lg bg-[#F5F5F0] text-[#4A3728] hover:bg-white border border-[#5A5A40]/15"
                                title="View details"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setDeleteConfirm({ type: 'inquiry', id: item.id, name: item.name })}
                                className="p-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 border border-red-200"
                                title="Delete record"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DONATIONS & PLEDGES */}
          {activeTab === 'donations' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <h2 className="text-xl font-bold font-serif text-[#4A3728]">
                  Support & Donation Registry
                </h2>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#5A5A40] font-semibold">Status:</span>
                  <select
                    value={donationStatusFilter}
                    onChange={(e) => setDonationStatusFilter(e.target.value)}
                    className="px-3 py-1.5 rounded-xl border border-[#5A5A40]/20 bg-[#EBEBE3] text-xs font-semibold text-[#4A3728]"
                  >
                    <option value="all">All Pledges</option>
                    <option value="PENDING">PENDING</option>
                    <option value="RECEIVED">RECEIVED</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#EBEBE3] rounded-3xl border border-[#5A5A40]/15 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#F5F5F0] text-[#5A5A40] font-semibold">
                      <tr>
                        <th className="p-3.5">Donor Name</th>
                        <th className="p-3.5">Email</th>
                        <th className="p-3.5">Support Type</th>
                        <th className="p-3.5">Amount (INR)</th>
                        <th className="p-3.5">Status</th>
                        <th className="p-3.5">Date</th>
                        <th className="p-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#5A5A40]/10">
                      {donations
                        .filter((d) => donationStatusFilter === 'all' || d.status === donationStatusFilter)
                        .map((item) => (
                          <tr key={item.id} className="hover:bg-[#F5F5F0]/60">
                            <td className="p-3.5 font-bold text-[#4A3728]">{item.donorName}</td>
                            <td className="p-3.5 text-[#4A3728]/85">{item.donorEmail}</td>
                            <td className="p-3.5 text-[#B35C44] font-semibold">{item.type}</td>
                            <td className="p-3.5 font-bold text-[#4A3728]">
                              {item.amount ? `₹${item.amount.toLocaleString('en-IN')}` : 'Non-monetary'}
                            </td>
                            <td className="p-3.5">
                              <select
                                value={item.status}
                                onChange={(e) => handleDonationStatusChange(item.id, e.target.value as DonationStatus)}
                                className={`px-2 py-1 rounded-lg text-[11px] font-bold border ${
                                  item.status === 'RECEIVED'
                                    ? 'bg-[#5A5A40]/15 text-[#4A3728] border-[#5A5A40]/30'
                                    : 'bg-amber-50 text-amber-900 border-amber-300'
                                }`}
                              >
                                <option value="PENDING">PENDING</option>
                                <option value="RECEIVED">RECEIVED</option>
                              </select>
                            </td>
                            <td className="p-3.5 text-[#5A5A40]">
                              {new Date(item.createdAt).toLocaleDateString()}
                            </td>
                            <td className="p-3.5 text-right space-x-2">
                              <button
                                onClick={() => setSelectedDonation(item)}
                                className="p-1.5 rounded-lg bg-[#F5F5F0] text-[#4A3728] hover:bg-white border border-[#5A5A40]/15"
                                title="View details"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setDeleteConfirm({ type: 'donation', id: item.id, name: item.donorName })}
                                className="p-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 border border-red-200"
                                title="Delete record"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: BLOG CHRONICLES */}
          {activeTab === 'blog' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <h2 className="text-xl font-bold font-serif text-[#4A3728]">
                  Chronicles & Publications Management
                </h2>
                <button
                  onClick={() => handleOpenPostModal()}
                  className="px-5 py-2.5 bg-[#B35C44] hover:bg-[#9B4F3B] text-white text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-sm shadow-[#B35C44]/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>Write New Chronicle</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="p-5 rounded-3xl bg-[#EBEBE3] border border-[#5A5A40]/15 space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                            post.published
                              ? 'bg-[#5A5A40]/15 text-[#4A3728] border border-[#5A5A40]/20'
                              : 'bg-stone-200 text-stone-700'
                          }`}
                        >
                          {post.published ? 'PUBLISHED' : 'DRAFT'}
                        </span>
                        <span className="text-[11px] text-[#5A5A40] font-medium">{post.category}</span>
                      </div>

                      <h3 className="font-bold font-serif text-[#4A3728] line-clamp-2">
                        {post.title}
                      </h3>
                      {post.titleTamil && (
                        <p className="text-xs text-[#B35C44] font-tamil truncate">
                          {post.titleTamil}
                        </p>
                      )}
                      <p className="text-xs text-[#4A3728]/80 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#5A5A40]/15 flex items-center justify-between text-xs">
                      <span className="text-[#5A5A40]">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => navigate(`/blog/${post.slug || post.id}`)}
                          className="p-1.5 rounded-lg bg-[#F5F5F0] text-[#4A3728] hover:bg-white border border-[#5A5A40]/15"
                          title="View on site"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleOpenPostModal(post)}
                          className="p-1.5 rounded-lg bg-[#F5F5F0] text-[#4A3728] hover:bg-white border border-[#5A5A40]/15"
                          title="Edit post"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirm({ type: 'post', id: post.id, name: post.title })}
                          className="p-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 border border-red-200"
                          title="Delete post"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Inquiry Detail Modal */}
      <Modal
        isOpen={!!selectedInquiry}
        onClose={() => setSelectedInquiry(null)}
        title="Join Inquiry Details"
      >
        {selectedInquiry && (
          <div className="space-y-4 text-xs text-[#4A3728]/85">
            <div className="p-4 bg-[#F5F5F0] rounded-2xl space-y-2 border border-[#5A5A40]/15">
              <div className="flex justify-between">
                <span className="text-[#5A5A40]">Applicant:</span>
                <strong className="text-[#4A3728] text-sm font-serif">{selectedInquiry.name}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5A40]">Email:</span>
                <a href={`mailto:${selectedInquiry.email}`} className="text-[#B35C44] font-bold hover:underline">
                  {selectedInquiry.email}
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5A40]">Phone / WhatsApp:</span>
                <a href={`tel:${selectedInquiry.phone}`} className="text-[#B35C44] font-bold hover:underline">
                  {selectedInquiry.phone}
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5A40]">Members Joining:</span>
                <strong className="text-[#4A3728]">{selectedInquiry.numberOfMembers || 1}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5A40]">Area of Contribution:</span>
                <strong className="text-[#4A3728]">{selectedInquiry.areaOfContribution}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5A40]">Skills:</span>
                <strong className="text-[#4A3728]">{selectedInquiry.skills || 'N/A'}</strong>
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-[#4A3728]">Message & Motivation:</label>
              <div className="p-3 rounded-xl bg-[#F5F5F0] border border-[#5A5A40]/15 leading-relaxed whitespace-pre-wrap text-[#4A3728]">
                {selectedInquiry.message}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedInquiry(null)}
                className="px-5 py-2 rounded-full bg-[#5A5A40]/20 text-[#4A3728] font-bold text-xs uppercase tracking-wider hover:bg-[#5A5A40]/30"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Donation Detail Modal */}
      <Modal
        isOpen={!!selectedDonation}
        onClose={() => setSelectedDonation(null)}
        title="Donation Pledge Details"
      >
        {selectedDonation && (
          <div className="space-y-4 text-xs text-[#4A3728]/85">
            <div className="p-4 bg-[#F5F5F0] rounded-2xl space-y-2 border border-[#5A5A40]/15">
              <div className="flex justify-between">
                <span className="text-[#5A5A40]">Donor:</span>
                <strong className="text-[#4A3728] text-sm font-serif">{selectedDonation.donorName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5A40]">Email:</span>
                <strong className="text-[#B35C44]">{selectedDonation.donorEmail}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5A5A40]">Support Type:</span>
                <strong className="text-[#4A3728]">{selectedDonation.type}</strong>
              </div>
              {selectedDonation.amount && (
                <div className="flex justify-between">
                  <span className="text-[#5A5A40]">Pledged Amount:</span>
                  <strong className="text-xl text-[#4A3728] font-bold font-serif">
                    ₹{selectedDonation.amount.toLocaleString('en-IN')}
                  </strong>
                </div>
              )}
            </div>

            {selectedDonation.description && (
              <div className="space-y-1">
                <label className="font-bold text-[#4A3728]">Details / Notes:</label>
                <div className="p-3 rounded-xl bg-[#F5F5F0] border border-[#5A5A40]/15 leading-relaxed whitespace-pre-wrap text-[#4A3728]">
                  {selectedDonation.description}
                </div>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedDonation(null)}
                className="px-5 py-2 rounded-full bg-[#5A5A40]/20 text-[#4A3728] font-bold text-xs uppercase tracking-wider hover:bg-[#5A5A40]/30"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Write / Edit Post Modal */}
      <Modal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        title={editingPost ? 'Edit Chronicle' : 'Publish New Chronicle'}
      >
        <form onSubmit={handleSavePost} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="font-bold text-[#4A3728]">Title (English) *</label>
              <input
                type="text"
                required
                value={postFormData.title}
                onChange={(e) => setPostFormData({ ...postFormData, title: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] bg-[#F5F5F0]"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-[#4A3728]">Title (Tamil)</label>
              <input
                type="text"
                value={postFormData.titleTamil}
                onChange={(e) => setPostFormData({ ...postFormData, titleTamil: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] bg-[#F5F5F0]"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-[#4A3728]">Category</label>
              <select
                value={postFormData.category}
                onChange={(e) => setPostFormData({ ...postFormData, category: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] bg-[#F5F5F0]"
              >
                <option value="Ecology & Land">Ecology & Land</option>
                <option value="Conscious Living">Conscious Living</option>
                <option value="Community Governance">Community Governance</option>
                <option value="Architecture & Land">Architecture & Land</option>
                <option value="Community Updates">Community Updates</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-[#4A3728]">Publication Status</label>
              <select
                value={postFormData.published ? 'true' : 'false'}
                onChange={(e) => setPostFormData({ ...postFormData, published: e.target.value === 'true' })}
                className="w-full px-3 py-2 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] bg-[#F5F5F0]"
              >
                <option value="true">Published</option>
                <option value="false">Draft</option>
              </select>
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="font-bold text-[#4A3728]">Featured Image URL</label>
              <input
                type="url"
                value={postFormData.imageUrl}
                onChange={(e) => setPostFormData({ ...postFormData, imageUrl: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] bg-[#F5F5F0]"
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="font-bold text-[#4A3728]">Short Excerpt *</label>
              <textarea
                required
                rows={2}
                value={postFormData.excerpt}
                onChange={(e) => setPostFormData({ ...postFormData, excerpt: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] bg-[#F5F5F0]"
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="font-bold text-[#4A3728]">Full Content *</label>
              <textarea
                required
                rows={8}
                value={postFormData.content}
                onChange={(e) => setPostFormData({ ...postFormData, content: e.target.value })}
                placeholder="Use markdown headers (## or ###) and double linebreaks for paragraphs..."
                className="w-full px-3 py-2 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] font-mono text-[11px] bg-[#F5F5F0]"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-[#4A3728]">Tags (comma separated)</label>
              <input
                type="text"
                value={postFormData.tags}
                onChange={(e) => setPostFormData({ ...postFormData, tags: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] bg-[#F5F5F0]"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-[#4A3728]">Author Name</label>
              <input
                type="text"
                value={postFormData.author}
                onChange={(e) => setPostFormData({ ...postFormData, author: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#5A5A40]/20 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] bg-[#F5F5F0]"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-[#5A5A40]/15">
            <button
              type="button"
              onClick={() => setIsPostModalOpen(false)}
              className="px-5 py-2 rounded-full bg-[#5A5A40]/20 text-[#4A3728] font-bold text-xs uppercase tracking-wider"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-[#B35C44] hover:bg-[#9B4F3B] text-white font-bold text-xs uppercase tracking-wider shadow-sm shadow-[#B35C44]/20"
            >
              {editingPost ? 'Update Chronicle' : 'Publish Chronicle'}
            </button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={!!deleteConfirm}
        onClose={() => setDeleteConfirm(null)}
        title="Confirm Permanent Deletion"
      >
        {deleteConfirm && (
          <div className="space-y-4 text-xs text-[#4A3728]/85">
            <p>
              Are you sure you want to permanently delete this {deleteConfirm.type}: <strong className="text-red-700">{deleteConfirm.name}</strong>?
            </p>
            <p className="text-[11px] text-[#5A5A40]">
              This action cannot be undone and will update the community records database immediately.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-5 py-2 rounded-full bg-[#5A5A40]/20 text-[#4A3728] font-bold text-xs uppercase tracking-wider"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-5 py-2 rounded-full bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
