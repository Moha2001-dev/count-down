
import React, { useState, useEffect } from 'react';
import { Heart, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Types ---
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// --- Components ---

const ArabesquePattern: React.FC = () => (
  <div className="absolute inset-0 arabesque-pattern opacity-30 pointer-events-none" />
);

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'أيام', value: timeLeft.days },
    { label: 'ساعات', value: timeLeft.hours },
    { label: 'دقائق', value: timeLeft.minutes },
    { label: 'ثواني', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 w-full max-w-lg mx-auto" dir="rtl">
      {units.map((unit, index) => (
        <motion.div 
          key={unit.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/50 backdrop-blur-md rounded-xl p-3 md:p-6 border border-white/60 flex flex-col items-center justify-center shadow-lg relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-amber-400 to-yellow-600"></div>
          <span className="text-2xl md:text-4xl font-bold text-amber-900 group-hover:scale-110 transition-transform duration-300 leading-none">
            {unit.value.toLocaleString('ar-SA')}
          </span>
          <span className="text-xs md:text-sm font-arabic-style text-amber-700 mt-2 font-bold">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default function App() {
  const weddingDate = new Date('2026-04-03T18:00:00'); 

  return (
    <div className="h-[100dvh] w-full relative overflow-hidden bg-[#fdfaf4] text-amber-900 flex flex-col items-center justify-center" dir="rtl">
      <ArabesquePattern />

      <main className="relative z-10 px-4 flex flex-col items-center text-center w-full max-w-4xl h-full justify-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }} 
          className="mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-arabic-style mb-6 text-amber-700 opacity-90">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 mb-4">
            <h1 className="text-6xl md:text-9xl font-arabic-style font-bold gold-gradient pb-8 px-4 leading-tight">جمانة</h1>
            <Heart className="text-red-500 fill-red-500 animate-pulse my-4 md:my-0 scale-110 md:scale-150" size={48} />
            <h1 className="text-6xl md:text-9xl font-arabic-style font-bold gold-gradient pb-8 px-4 leading-tight">عبدالرحيم</h1>
          </div>
        </motion.div>

        <div className="w-full mb-8">
          <div className="flex flex-col items-center gap-2 mb-8">
            <p className="text-xl md:text-3xl font-bold flex items-center justify-center gap-3 text-amber-800 font-arabic-style leading-tight">
              <Calendar className="text-amber-600" size={28} />
              موعدنا يوم الجمعة: ٣ أبريل ٢٠٢٦ م
            </p>
            <p className="text-3xl md:text-6xl font-arabic-style text-amber-700 font-bold border-b-4 border-amber-200 pb-2 leading-tight">
              ١٥ شوال ١٤٤٧ هـ
            </p>
          </div>
          <CountdownTimer targetDate={weddingDate} />
        </div>

      </main>

      {/* Decorative Drifting Text - Fixed at bottom */}
      <div className="absolute bottom-8 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none">
        <div className="inline-block animate-[drift_25s_linear_infinite] text-5xl md:text-8xl font-arabic-style">
          بارك الله لكما وبارك عليكما وجمع بينكما في خير • بارك الله لكما وبارك عليكما وجمع بينكما في خير • بارك الله لكما وبارك عليكما وجمع بينكما في خير •
        </div>
      </div>
    </div>
  );
}
