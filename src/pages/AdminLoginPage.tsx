import React, { useState } from 'react';
import { Shield, Lock, User, AlertCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AdminLoginPageProps {
  navigate: (path: string) => void;
  showToast: (type: 'success' | 'error' | 'info', message: string, title?: string) => void;
}

export const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ navigate, showToast }) => {
  const { login } = useAuth();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('iyalvanam2026');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await login(username, password);
      showToast('success', 'Logged in successfully as Administrator.', 'Welcome');
      navigate('/admin');
    } catch (err: any) {
      setError(err.message || 'Invalid administrator credentials');
      showToast('error', err.message || 'Login failed. Please check credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-[#EBEBE3] rounded-3xl p-8 border border-[#5A5A40]/15 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#4A3728] text-white flex items-center justify-center mx-auto shadow-sm">
            <Shield className="w-6 h-6 text-[#B35C44]" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-[#4A3728]">
            Admin Sanctuary Portal
          </h1>
          <p className="text-xs text-[#5A5A40]">
            Iyalvanam Iyarkai Vazhviyal Koodam • நிர்வாக நுழைவு
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#4A3728] flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#B35C44]" /> Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-2.5 rounded-xl border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none bg-[#F5F5F0]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#4A3728] flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#B35C44]" /> Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2.5 rounded-xl border border-[#5A5A40]/20 text-xs focus:ring-2 focus:ring-[#5A5A40] focus:outline-none bg-[#F5F5F0]"
            />
          </div>

          {/* Quick Demo Credentials Info */}
          <div className="p-3 bg-[#F5F5F0] rounded-xl border border-[#5A5A40]/15 text-[11px] text-[#5A5A40] space-y-1">
            <div className="font-bold text-[#4A3728]">Default Administrator Credentials:</div>
            <div>Username: <code className="font-mono bg-[#EBEBE3] text-[#4A3728] px-1.5 py-0.5 rounded border border-[#5A5A40]/15">admin</code></div>
            <div>Password: <code className="font-mono bg-[#EBEBE3] text-[#4A3728] px-1.5 py-0.5 rounded border border-[#5A5A40]/15">iyalvanam2026</code></div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-[#B35C44] hover:bg-[#9B4F3B] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-sm shadow-[#B35C44]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? <span>Authenticating...</span> : <><span>Log In to Dashboard</span> <ArrowRight className="w-4 h-4" /></>}
          </button>
        </form>

        <div className="text-center pt-2">
          <button
            onClick={() => navigate('/')}
            className="text-xs text-[#5A5A40] hover:text-[#4A3728] hover:underline"
          >
            ← Return to Public Website
          </button>
        </div>
      </div>
    </div>
  );
};
