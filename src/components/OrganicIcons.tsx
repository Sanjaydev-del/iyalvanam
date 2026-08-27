import React from 'react';

// 1. Iyalvanam Tree-with-Roots Emblem
export const IyalvanamEmblem: React.FC<{ className?: string; size?: number }> = ({ className = "w-12 h-12", size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer textured ring */}
    <circle cx="50" cy="50" r="46" stroke="#1f3d1f" strokeWidth="3" strokeDasharray="3 2" opacity="0.6" />
    <circle cx="50" cy="50" r="43" stroke="#1f3d1f" strokeWidth="1.5" />
    
    {/* Ground Horizon line */}
    <path d="M18 52 C32 50, 68 50, 82 52" stroke="#7a2e1a" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Tree Trunk */}
    <path d="M47 52 C47 40, 44 34, 42 26 C46 30, 49 32, 50 34 C51 32, 54 30, 58 26 C56 34, 53 40, 53 52 Z" fill="#7a2e1a" />
    
    {/* Tree Foliage Canopy */}
    <circle cx="50" cy="24" r="14" fill="#1f3d1f" opacity="0.9" />
    <circle cx="38" cy="28" r="11" fill="#2d5a2d" />
    <circle cx="62" cy="28" r="11" fill="#2d5a2d" />
    <circle cx="44" cy="18" r="9" fill="#3a733a" />
    <circle cx="56" cy="18" r="9" fill="#3a733a" />
    
    {/* Leaf accents inside canopy */}
    <path d="M48 20 Q50 15 52 20 Q50 25 48 20" fill="#f0e6d2" />
    <path d="M38 27 Q41 23 42 28 Q39 31 38 27" fill="#f0e6d2" />
    <path d="M62 27 Q61 23 58 28 Q61 31 62 27" fill="#f0e6d2" />

    {/* Deep Roots System */}
    <path d="M48 52 Q44 65 30 72 M48 56 Q41 72 38 82 M50 54 Q50 70 50 84 M52 56 Q59 72 62 82 M52 52 Q56 65 70 72" stroke="#7a2e1a" strokeWidth="2" strokeLinecap="round" />
    <path d="M34 68 Q24 74 20 80 M66 68 Q76 74 80 80" stroke="#7a2e1a" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
  </svg>
);

// 2. SEYON Sprout out of cupped soil/hands Emblem
export const SeyonEmblem: React.FC<{ className?: string; size?: number }> = ({ className = "w-12 h-12", size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer ring */}
    <circle cx="50" cy="50" r="46" stroke="#7a2e1a" strokeWidth="3" strokeDasharray="3 2" opacity="0.6" />
    <circle cx="50" cy="50" r="43" stroke="#7a2e1a" strokeWidth="1.5" />

    {/* Cupped soil / cradling hands */}
    <path d="M22 55 C22 75, 45 84, 50 84 C55 84, 78 75, 78 55 C74 58, 64 62, 50 62 C36 62, 26 58, 22 55 Z" fill="#7a2e1a" />
    <path d="M26 56 C34 68, 44 76, 50 76 C56 76, 66 68, 74 56" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" />

    {/* Sprout Stem */}
    <path d="M50 62 Q50 40 50 28" stroke="#1f3d1f" strokeWidth="3.5" strokeLinecap="round" />
    
    {/* Sprout Leaves */}
    {/* Left leaf */}
    <path d="M50 40 C36 38, 30 24, 40 22 C48 20, 50 34, 50 40 Z" fill="#2d5a2d" />
    <path d="M50 40 Q40 28 35 23" stroke="#f0e6d2" strokeWidth="1" />
    
    {/* Right leaf */}
    <path d="M50 32 C64 30, 70 16, 60 14 C52 12, 50 26, 50 32 Z" fill="#1f3d1f" />
    <path d="M50 32 Q60 20 65 15" stroke="#f0e6d2" strokeWidth="1" />

    {/* Rising Sun ray aura behind sprout */}
    <circle cx="50" cy="30" r="22" stroke="#d4af37" strokeWidth="1" strokeDasharray="2 3" opacity="0.5" />
  </svg>
);

// 3. Torn Paper Edge Dividers (SVG Path)
export const TornPaperDivider: React.FC<{
  position?: 'top' | 'bottom';
  fillColor?: string;
  className?: string;
}> = ({ position = 'top', fillColor = '#f0e6d2', className = '' }) => {
  if (position === 'top') {
    return (
      <div className={`w-full overflow-hidden leading-none select-none pointer-events-none -mt-[1px] ${className}`}>
        <svg
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 md:h-14 block"
        >
          <path
            d="M0,0 L1200,0 L1200,12 Q1140,24 1080,8 Q1020,32 960,14 Q900,28 840,9 Q780,30 720,11 Q660,26 600,8 Q540,30 480,12 Q420,28 360,10 Q300,32 240,14 Q180,26 120,8 Q60,30 0,14 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden leading-none select-none pointer-events-none -mb-[1px] ${className}`}>
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-12 md:h-14 block"
      >
        <path
          d="M0,40 L1200,40 L1200,28 Q1140,16 1080,32 Q1020,8 960,26 Q900,12 840,31 Q780,10 720,29 Q660,14 600,32 Q540,10 480,28 Q420,12 360,30 Q300,8 240,26 Q180,14 120,32 Q60,10 0,26 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

// 4. Botanical Leaf Flourish / Decorative Divider
export const BotanicalFlourish: React.FC<{ className?: string; color?: string }> = ({
  className = "w-48 h-6",
  color = "#1f3d1f"
}) => (
  <svg
    viewBox="0 0 200 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Left branch */}
    <path d="M10 12 L90 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 12 Q38 4 45 12" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.2" />
    <path d="M50 12 Q58 20 65 12" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.2" />
    <path d="M70 12 Q78 4 85 12" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.2" />

    {/* Center Leaf Jewel */}
    <circle cx="100" cy="12" r="4" fill={color} />
    <path d="M100 4 C96 8 96 16 100 20 C104 16 104 8 100 4 Z" fill={color} />

    {/* Right branch */}
    <path d="M110 12 L190 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M115 12 Q122 4 130 12" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.2" />
    <path d="M135 12 Q142 20 150 12" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.2" />
    <path d="M155 12 Q162 4 170 12" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.2" />
  </svg>
);

// 5. Leaf Bullet Marker
export const LeafBullet: React.FC<{ className?: string; color?: string }> = ({
  className = "w-4 h-4",
  color = "#1f3d1f"
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} shrink-0 animate-leaf-sway`}
  >
    <path
      d="M20 4C14 4 6 8 4 16C12 18 18 14 20 4Z"
      fill={color}
      fillOpacity="0.85"
      stroke={color}
      strokeWidth="1.5"
    />
    <path d="M4 16C8 13 13 9 20 4" stroke="#f0e6d2" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 6. Exit the Matrix & Custom Feature Icons
export const NoScreenIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="7" width="20" height="13" rx="2" />
    <path d="M17 2l-5 5-5-5" />
    <line x1="3" y1="3" x2="21" y2="21" stroke="#e5c05c" strokeWidth="2" />
  </svg>
);

export const NoFactoryIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 20h20" />
    <path d="M4 20V9l4 3V9l4 3V4l8 4v12" />
    <path d="M18 4h2" />
    <line x1="2" y1="2" x2="22" y2="22" stroke="#e5c05c" strokeWidth="2" />
  </svg>
);

export const HandSproutIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 10v6" />
    <path d="M9 13a4.5 4.5 0 0 1 3-3 4.5 4.5 0 0 1 3 3" />
    <path d="M12 7a3 3 0 0 1 3-3c0 2-1 3-3 3z" fill="currentColor" fillOpacity="0.2" />
    <path d="M2 18h4c2 0 3-1 4-2l2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2" />
  </svg>
);

export const HumanConnectionIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="7" r="3" />
    <circle cx="15" cy="7" r="3" />
    <path d="M3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6" />
    <path d="M9 14v4M15 14v4" />
  </svg>
);

export const CampShelterIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 21L12 3l8 18H4z" />
    <path d="M12 3v18" />
    <path d="M9 21l3-6 3 6" />
  </svg>
);

export const FootprintsGoldIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" fill="#d4af37" xmlns="http://www.w3.org/2000/svg" className={className}>
    <ellipse cx="8" cy="15" rx="3" ry="5" transform="rotate(-15 8 15)" />
    <circle cx="6" cy="7" r="1.2" />
    <circle cx="8" cy="6" r="1.2" />
    <circle cx="10" cy="7" r="1.2" />
    <ellipse cx="16" cy="11" rx="3" ry="5" transform="rotate(15 16 11)" opacity="0.85" />
    <circle cx="14" cy="3" r="1.2" />
    <circle cx="16" cy="2" r="1.2" />
    <circle cx="18" cy="3" r="1.2" />
  </svg>
);
