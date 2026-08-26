import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title?: string;
  message: string;
}

interface SingleToastProps {
  type: 'success' | 'error' | 'info';
  title?: string;
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<SingleToastProps> = ({ type, title, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-[#5A5A40] shrink-0 mt-0.5" />,
    error: <AlertCircle className="w-5 h-5 text-[#B35C44] shrink-0 mt-0.5" />,
    info: <Info className="w-5 h-5 text-[#4A3728] shrink-0 mt-0.5" />,
  };

  const bgs = {
    success: 'bg-[#EBEBE3] border-[#5A5A40]/30 text-[#4A3728]',
    error: 'bg-[#F5EBE8] border-[#B35C44]/40 text-[#9B4F3B]',
    info: 'bg-[#F5F5F0] border-[#5A5A40]/20 text-[#1A1A1A]',
  };

  return (
    <div
      className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl border shadow-lg transition-all duration-300 animate-in slide-in-from-bottom-2 ${
        bgs[type]
      }`}
    >
      {icons[type]}
      <div className="flex-1 text-xs sm:text-sm">
        {title && <h5 className="font-bold mb-0.5">{title}</h5>}
        <p className="opacity-90">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-700 transition-colors p-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export const ToastContainer: React.FC<{ toasts: ToastMessage[]; onDismiss: (id: string) => void }> = ({
  toasts,
  onDismiss,
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-md w-full pointer-events-none">
      {toasts.map((t) => (
        <Toast
          key={t.id}
          type={t.type}
          title={t.title}
          message={t.message}
          onClose={() => onDismiss(t.id)}
        />
      ))}
    </div>
  );
};
