import {
  AuthResponse,
  BlogPost,
  ContactInquiry,
  DashboardStats,
  Donation,
  InquiryStatus,
  MemberInquiry,
  User,
} from '../types';

const API_BASE = '/api';

function getAuthHeader(): HeadersInit {
  const token = localStorage.getItem('iyalvanam_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export const api = {
  // Auth
  async login(username: string, password: string): Promise<AuthResponse> {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: 'Login failed' }));
      throw new Error(err.error || 'Authentication failed');
    }
    return res.json();
  },

  async getMe(): Promise<User> {
    const res = await fetch(`${API_BASE}/auth/me`, {
      headers: getAuthHeader(),
    });
    if (!res.ok) {
      throw new Error('Failed to fetch user profile');
    }
    return res.json();
  },

  // Blog
  async getBlogPosts(params?: { category?: string; search?: string; includeUnpublished?: boolean }): Promise<BlogPost[]> {
    const query = new URLSearchParams();
    if (params?.category) query.append('category', params.category);
    if (params?.search) query.append('search', params.search);
    if (params?.includeUnpublished) query.append('includeUnpublished', 'true');

    const res = await fetch(`${API_BASE}/blog?${query.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch blog posts');
    return res.json();
  },

  async getBlogPost(idOrSlug: string): Promise<BlogPost> {
    const res = await fetch(`${API_BASE}/blog/${idOrSlug}`);
    if (!res.ok) throw new Error('Blog post not found');
    return res.json();
  },

  async createBlogPost(post: Partial<BlogPost>): Promise<BlogPost> {
    const res = await fetch(`${API_BASE}/blog`, {
      method: 'POST',
      headers: getAuthHeader(),
      body: JSON.stringify(post),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: 'Failed to create post' }));
      throw new Error(err.error || 'Failed to create post');
    }
    return res.json();
  },

  async updateBlogPost(id: string, post: Partial<BlogPost>): Promise<BlogPost> {
    const res = await fetch(`${API_BASE}/blog/${id}`, {
      method: 'PUT',
      headers: getAuthHeader(),
      body: JSON.stringify(post),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: 'Failed to update post' }));
      throw new Error(err.error || 'Failed to update post');
    }
    return res.json();
  },

  async deleteBlogPost(id: string): Promise<void> {
    const res = await fetch(`${API_BASE}/blog/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader(),
    });
    if (!res.ok) {
      throw new Error('Failed to delete blog post');
    }
  },

  // Member Inquiries (Join Us)
  async submitJoinInquiry(data: {
    name: string;
    email: string;
    phone: string;
    skills?: string;
    areaOfContribution?: string;
    numberOfMembers?: number;
    preferredInteractionMethod?: string;
    message: string;
  }): Promise<{ message: string; inquiry: MemberInquiry }> {
    const res = await fetch(`${API_BASE}/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: 'Submission failed' }));
      throw new Error(err.error || 'Failed to submit inquiry');
    }
    return res.json();
  },

  async getMemberInquiries(): Promise<MemberInquiry[]> {
    const res = await fetch(`${API_BASE}/inquiries/members`, {
      headers: getAuthHeader(),
    });
    if (!res.ok) throw new Error('Failed to fetch member inquiries');
    return res.json();
  },

  async updateMemberInquiryStatus(id: string, status: InquiryStatus, notes?: string): Promise<MemberInquiry> {
    const res = await fetch(`${API_BASE}/inquiries/members/${id}/status`, {
      method: 'PUT',
      headers: getAuthHeader(),
      body: JSON.stringify({ status, notes }),
    });
    if (!res.ok) throw new Error('Failed to update inquiry status');
    return res.json();
  },

  async deleteMemberInquiry(id: string): Promise<void> {
    const res = await fetch(`${API_BASE}/inquiries/members/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader(),
    });
    if (!res.ok) throw new Error('Failed to delete member inquiry');
  },

  // Contact Inquiries
  async submitContact(data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }): Promise<{ message: string; contact: ContactInquiry }> {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: 'Submission failed' }));
      throw new Error(err.error || 'Failed to submit message');
    }
    return res.json();
  },

  async getContactInquiries(): Promise<ContactInquiry[]> {
    const res = await fetch(`${API_BASE}/inquiries/contacts`, {
      headers: getAuthHeader(),
    });
    if (!res.ok) throw new Error('Failed to fetch contact inquiries');
    return res.json();
  },

  async deleteContactInquiry(id: string): Promise<void> {
    const res = await fetch(`${API_BASE}/inquiries/contacts/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader(),
    });
    if (!res.ok) throw new Error('Failed to delete contact inquiry');
  },

  // Donations & Pledges
  async submitDonation(data: {
    donorName: string;
    donorEmail: string;
    amount?: number;
    type: string;
    description?: string;
  }): Promise<{ message: string; donation: Donation }> {
    const res = await fetch(`${API_BASE}/donate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: 'Pledge submission failed' }));
      throw new Error(err.error || 'Failed to record donation pledge');
    }
    return res.json();
  },

  async getDonations(): Promise<Donation[]> {
    const res = await fetch(`${API_BASE}/donations`, {
      headers: getAuthHeader(),
    });
    if (!res.ok) throw new Error('Failed to fetch donations');
    return res.json();
  },

  async updateDonationStatus(id: string, status: 'PENDING' | 'RECEIVED'): Promise<Donation> {
    const res = await fetch(`${API_BASE}/donations/${id}/status`, {
      method: 'PUT',
      headers: getAuthHeader(),
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error('Failed to update donation status');
    return res.json();
  },

  async deleteDonation(id: string): Promise<void> {
    const res = await fetch(`${API_BASE}/donations/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader(),
    });
    if (!res.ok) throw new Error('Failed to delete donation');
  },

  // Admin Dashboard Stats
  async getDashboardStats(): Promise<DashboardStats> {
    const res = await fetch(`${API_BASE}/stats`, {
      headers: getAuthHeader(),
    });
    if (!res.ok) throw new Error('Failed to fetch dashboard statistics');
    return res.json();
  },
};
