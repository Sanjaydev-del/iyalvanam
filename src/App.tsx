import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

import { LandingPage } from './pages/LandingPage';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PrinciplesPage } from './pages/PrinciplesPage';
import { CommunityLifePage } from './pages/CommunityLifePage';
import { LandPage } from './pages/LandPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { FounderPage } from './pages/FounderPage';
import { CoFounderPage } from './pages/CoFounderPage';
import { JoinPage } from './pages/JoinPage';
import { SupportPage } from './pages/SupportPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { AdminPage } from './pages/AdminPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [toasts, setToasts] = useState<
    Array<{ id: string; type: 'success' | 'error' | 'info'; message: string; title?: string }>
  >([]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (type: 'success' | 'error' | 'info', message: string, title?: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, message, title }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Route Resolver
  const renderRoute = () => {
    if (currentPath === '/' || currentPath === '/landing' || currentPath === '/home') {
      return <LandingPage navigate={navigate} showToast={showToast} />;
    }
    if (currentPath === '/about') {
      return <AboutPage navigate={navigate} />;
    }
    if (currentPath === '/principles') {
      return <PrinciplesPage navigate={navigate} />;
    }
    if (currentPath === '/community-life') {
      return <CommunityLifePage navigate={navigate} />;
    }
    if (currentPath === '/land' || currentPath === '/projects') {
      return <LandPage navigate={navigate} />;
    }
    if (currentPath === '/leadership') {
      return <LeadershipPage navigate={navigate} />;
    }
    if (currentPath === '/leadership/founder') {
      return <FounderPage navigate={navigate} />;
    }
    if (currentPath === '/leadership/co-founder' || currentPath === '/leadership/cofounder') {
      return <CoFounderPage navigate={navigate} />;
    }
    if (currentPath === '/join') {
      return <JoinPage navigate={navigate} showToast={showToast} />;
    }
    if (currentPath === '/support') {
      return <SupportPage navigate={navigate} showToast={showToast} />;
    }
    if (currentPath === '/blog') {
      return <BlogPage navigate={navigate} />;
    }
    if (currentPath.startsWith('/blog/')) {
      const slugOrId = currentPath.replace('/blog/', '');
      return <BlogDetailPage slugOrId={slugOrId} navigate={navigate} showToast={showToast} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage navigate={navigate} showToast={showToast} />;
    }
    if (currentPath === '/admin/login') {
      return <AdminLoginPage navigate={navigate} showToast={showToast} />;
    }
    if (currentPath.startsWith('/admin')) {
      return <AdminPage navigate={navigate} showToast={showToast} />;
    }

    // Default fallback
    return <LandingPage navigate={navigate} showToast={showToast} />;
  };

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#241D17] font-sans antialiased selection:bg-[#2E4F2B] selection:text-[#F5F2EB]">
        {/* Navigation Component (Left Sidebar on Desktop lg+, Top Sticky on Mobile) */}
        <Navbar currentPath={currentPath} navigate={navigate} />

        {/* Main Content Layout Wrapper (Offset by sidebar on Desktop) */}
        <div className="flex-1 flex flex-col lg:pl-72 xl:pl-80 w-full min-w-0 transition-all duration-300">
          <main className="flex-grow w-full">
            {renderRoute()}
          </main>

          {/* Footer */}
          <Footer navigate={navigate} />
        </div>

        {/* Toast Container */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
          {toasts.map((toast) => (
            <div key={toast.id} className="pointer-events-auto">
              <Toast
                type={toast.type}
                title={toast.title}
                message={toast.message}
                onClose={() => removeToast(toast.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </AuthProvider>
  );
}
