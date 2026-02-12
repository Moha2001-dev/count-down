
import React from 'react';
import { motion } from 'framer-motion';

const Sparkles = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0, 0.7, 0], 
          scale: [0, 1, 0],
          x: (Math.random() - 0.5) * 300,
          y: (Math.random() - 0.5) * 300 
        }}
        transition={{ 
          duration: 4 + i, 
          repeat: Infinity, 
          delay: i * 0.4 
        }}
        className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full blur-[1px]"
      />
    ))}
  </div>
);

// Variant 1: Original - Groom Left, Bride Right, Holding Hands
export const Illustration1: React.FC = () => (
  <div className="relative w-80 h-[480px] mx-auto flex justify-center items-end">
    <Sparkles />
    <svg viewBox="0 0 500 650" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
      <g transform="translate(60, 40)">
        <path d="M40,150 Q100,130 160,150 L185,560 Q100,585 15,560 Z" fill="#ffffff" />
        <path d="M85,155 L115,155 L115,175 L85,175 Z" fill="#fcfcfc" />
        <path d="M100,175 L100,380" fill="none" stroke="#f0f0f0" strokeWidth="1.5" />
        <path d="M160,330 Q200,430 220,440" fill="none" stroke="#d99b6b" strokeWidth="22" strokeLinecap="round" />
        <path d="M40,330 Q25,400 35,450" fill="none" stroke="#d99b6b" strokeWidth="20" strokeLinecap="round" opacity="0.8" />
        <ellipse cx="100" cy="100" rx="42" ry="52" fill="#d99b6b" />
        <path d="M45,60 Q100,20 155,60 L185,210 Q100,180 15,210 Z" fill="#ffffff" />
        <path d="M55,65 Q100,45 145,65" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round" />
        <path d="M57,78 Q100,58 143,78" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round" />
        <path d="M45,560 Q55,585 95,580" fill="#4e342e" />
        <path d="M105,560 Q145,585 155,580" fill="#4e342e" />
      </g>
      <g transform="translate(240, 60)">
        <path d="M40,60 Q90,30 140,60 L160,250 Q100,280 40,250 Z" fill="#2d1b17" />
        <path d="M30,220 Q100,190 170,220 L230,550 Q115,580 0,550 Z" fill="#ffffff" />
        <ellipse cx="90" cy="115" rx="40" ry="50" fill="#d99b6b" />
        <path d="M35,95 Q90,30 145,95 L180,420 Q90,380 0,420 Z" fill="#ffffff" opacity="0.3" />
        <path d="M170,330 Q190,450 175,510" fill="none" stroke="#d99b6b" strokeWidth="20" strokeLinecap="round" opacity="0.8" />
        <path d="M30,330 Q-20,430 40,440" fill="none" stroke="#d99b6b" strokeWidth="22" strokeLinecap="round" />
      </g>
      <g transform="translate(280, 480)">
         <circle cx="0" cy="0" r="14" fill="#d99b6b" />
      </g>
      <ellipse cx="250" cy="610" rx="160" ry="8" fill="#000" opacity="0.04" />
    </svg>
  </div>
);

// Variant 2: Intimate Side Pose - Groom Right, Bride Left
export const Illustration2: React.FC = () => (
  <div className="relative w-80 h-[480px] mx-auto flex justify-center items-end">
    <Sparkles />
    <svg viewBox="0 0 500 650" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
      {/* Bride (Left) */}
      <g transform="translate(80, 70)">
        <path d="M10,210 Q80,180 150,210 L190,540 Q95,570 0,540 Z" fill="#ffffff" />
        <ellipse cx="100" cy="110" rx="40" ry="50" fill="#d99b6b" />
        <path d="M40,60 Q100,25 160,60 L180,240 Q100,210 20,240 Z" fill="#3e2723" />
        <path d="M35,90 Q100,20 165,90 L200,430 Q100,380 0,430 Z" fill="#ffffff" opacity="0.25" />
      </g>
      {/* Groom (Right) */}
      <g transform="translate(240, 40)">
        <path d="M30,150 Q90,130 150,150 L175,560 Q90,585 5,560 Z" fill="#ffffff" />
        <ellipse cx="90" cy="100" rx="42" ry="52" fill="#d99b6b" />
        <path d="M35,60 Q90,20 145,60 L175,210 Q90,180 5,210 Z" fill="#ffffff" />
        <path d="M45,65 Q90,45 135,65" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round" />
        <path d="M47,78 Q90,58 133,78" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round" />
        <path d="M10,340 Q-40,400 40,430" fill="none" stroke="#d99b6b" strokeWidth="22" strokeLinecap="round" />
      </g>
      <circle cx="260" cy="470" r="14" fill="#d99b6b" />
      <ellipse cx="250" cy="610" rx="160" ry="8" fill="#000" opacity="0.04" />
    </svg>
  </div>
);

// Variant 3: Elegant Standing - Bride with Bouquet
export const Illustration3: React.FC = () => (
  <div className="relative w-80 h-[480px] mx-auto flex justify-center items-end">
    <Sparkles />
    <svg viewBox="0 0 500 650" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
      {/* Groom (Left) */}
      <g transform="translate(60, 40)">
        <path d="M40,150 Q100,130 160,150 L185,560 Q100,585 15,560 Z" fill="#ffffff" />
        <ellipse cx="100" cy="100" rx="42" ry="52" fill="#d99b6b" />
        <path d="M45,60 Q100,20 155,60 L185,210 Q100,180 15,210 Z" fill="#ffffff" />
        <path d="M55,65 Q100,45 145,65" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round" />
        <path d="M57,78 Q100,58 143,78" fill="none" stroke="#1a1a1a" strokeWidth="10" strokeLinecap="round" />
        <path d="M140,330 Q160,400 135,450" fill="none" stroke="#d99b6b" strokeWidth="18" strokeLinecap="round" />
      </g>
      {/* Bride (Right) */}
      <g transform="translate(260, 60)">
        <path d="M30,220 Q100,190 170,220 L230,550 Q115,580 0,550 Z" fill="#ffffff" />
        <ellipse cx="100" cy="115" rx="40" ry="50" fill="#d99b6b" />
        <path d="M40,65 Q100,35 160,65 L180,420 Q90,380 0,420 Z" fill="#ffffff" opacity="0.3" />
        {/* Bouquet */}
        <g transform="translate(40, 340)">
          <path d="M0,0 L10,30 M10,0 L0,30 M5,-5 L5,35" stroke="#4caf50" strokeWidth="3" />
          <circle cx="5" cy="0" r="15" fill="#ffffff" stroke="#f0f0f0" />
          <circle cx="15" cy="5" r="15" fill="#ffffff" stroke="#f0f0f0" />
          <circle cx="-5" cy="5" r="15" fill="#ffffff" stroke="#f0f0f0" />
        </g>
      </g>
      <ellipse cx="250" cy="610" rx="160" ry="8" fill="#000" opacity="0.04" />
    </svg>
  </div>
);

// Variant 4: Walking - Groom Hand on Heart
export const Illustration4: React.FC = () => (
  <div className="relative w-80 h-[480px] mx-auto flex justify-center items-end">
    <Sparkles />
    <svg viewBox="0 0 500 650" className="w-full h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
      {/* Groom (Left) */}
      <g transform="translate(60, 40)">
        <path d="M40,150 Q100,130 160,150 L185,560 Q100,585 15,560 Z" fill="#ffffff" />
        <ellipse cx="100" cy="100" rx="42" ry="52" fill="#d99b6b" />
        <path d="M45,60 Q100,20 155,60 L185,210 Q100,180 15,210 Z" fill="#ffffff" />
        <path d="M55,65 Q100,45 145,65" fill="none" stroke="#1a1a1a" strokeWidth="11" strokeLinecap="round" />
        {/* Hand on heart */}
        <path d="M130,280 Q100,260 85,280" fill="none" stroke="#d99b6b" strokeWidth="18" strokeLinecap="round" />
      </g>
      {/* Bride (Right) */}
      <g transform="translate(240, 70)">
        <path d="M30,220 Q100,190 170,220 L230,550 Q115,580 0,550 Z" fill="#ffffff" />
        <ellipse cx="100" cy="115" rx="40" ry="50" fill="#d99b6b" />
        <path d="M35,95 Q100,30 165,95 L200,440 Q100,380 0,440 Z" fill="#ffffff" opacity="0.3" />
        <path d="M50,330 Q20,430 40,440" fill="none" stroke="#d99b6b" strokeWidth="20" strokeLinecap="round" />
      </g>
      <ellipse cx="250" cy="610" rx="160" ry="8" fill="#000" opacity="0.04" />
    </svg>
  </div>
);
