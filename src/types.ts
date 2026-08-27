export type InquiryStatus = 'PENDING' | 'CONTACTED' | 'JOINED';
export type DonationStatus = 'PENDING' | 'RECEIVED';
export type SupportType = 
  | 'Monetary support' 
  | 'Seeds' 
  | 'Saplings' 
  | 'Tools' 
  | 'Books' 
  | 'Volunteer contribution' 
  | 'Infrastructure-specific support' 
  | 'Other contributions';

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'SUPER_ADMIN' | 'ADMIN' | 'PROJECT_LEAD' | 'MEMBER' | 'GUEST';
  fullName?: string;
  phone?: string;
  createdAt: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface MemberInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  skills?: string;
  areaOfContribution?: string;
  numberOfMembers?: number;
  preferredInteractionMethod?: string;
  message: string;
  status: InquiryStatus;
  notes?: string;
  submittedAt: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  submittedAt: string;
  responded?: boolean;
}

export interface Donation {
  id: string;
  donorName: string;
  donorEmail: string;
  amount?: number;
  type: SupportType;
  description?: string;
  status: DonationStatus;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  titleTamil?: string;
  slug: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export type LeadershipDesignation = 'FOUNDER' | 'CO_FOUNDER';

export interface LeadershipProfile {
  id: string;
  designation: LeadershipDesignation;
  displayName: string;
  roleTitle: string;
  roleTitleTamil?: string;
  shortBio: string;
  fullBiography: string;
  profileImage: string;
  coverImage?: string;
  visionStatement: string;
  philosophy: string;
  quote: string;
  displayOrder: number;
  isPublished: boolean;
  projects?: string[];
  socialLinks?: {
    email?: string;
    phone?: string;
    website?: string;
    linkedin?: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface Project {
  id: string;
  name: string;
  nameTamil?: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  imageUrl: string;
  status: 'ACTIVE' | 'IN_PROGRESS' | 'COMPLETED' | 'PROPOSED';
  trustDomain: 'IYALVANAM_ASSET' | 'SEYON_OPERATIONAL';
  leadSteward?: string;
  location?: string;
  highlights?: string[];
}

export interface DashboardStats {
  totalBlogPosts: number;
  publishedPosts: number;
  pendingMemberInquiries: number;
  totalMemberInquiries: number;
  contactInquiries: number;
  donationRecords: number;
  totalPledgedAmount: number;
  receivedDonationsCount: number;
  totalLeadershipProfiles?: number;
}
