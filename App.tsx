
import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { Illustration1 } from './CoupleIllustrations';

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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          className="bg-white/40 backdrop-blur-lg rounded-2xl p-3 md:p-6 border border-amber-200/50 flex flex-col items-center justify-center shadow-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-amber-400 via-yellow-200 to-amber-600"></div>
          <span className="text-2xl md:text-5xl font-bold gold-gradient group-hover:scale-110 transition-transform duration-300 leading-none">
            {unit.value.toLocaleString('ar-SA')}
          </span>
          <span className="text-[10px] md:text-sm font-arabic-style text-amber-800 mt-2 font-bold tracking-wide">
            {unit.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default function App() {
  const weddingDate = new Date('2026-04-03T18:00:00'); 

  const handleSaveDate = () => {
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("زفاف جمانة وعبدالرحيم 💍")}&dates=20260403T180000Z/20260404T020000Z&details=${encodeURIComponent("بارك الله لهما وبارك عليهما وجمع بينهما في خير")}&location=${encodeURIComponent("قاعة الاحتفالات")}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden bg-[#fdfaf4] text-amber-900 flex flex-col items-center selection:bg-amber-200 selection:text-amber-900" dir="rtl">
      <ArabesquePattern />

      <main className="relative z-10 px-4 pt-16 pb-32 flex flex-col items-center text-center w-full max-w-4xl">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="mb-8 md:mb-12"
        >
          <h2 className="text-xl md:text-3xl font-arabic-style mb-6 text-amber-700/80 tracking-widest">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mb-6">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              className="text-6xl md:text-9xl font-arabic-style font-bold gold-gradient drop-shadow-sm leading-none"
            >
              جمانة
            </motion.h1>
            <div className="relative">
               <Heart className="text-red-500 fill-red-500 animate-pulse scale-110 md:scale-150 drop-shadow-md" size={48} />
               <motion.div 
                 animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="absolute inset-0 bg-red-400 rounded-full blur-xl"
               />
            </div>
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              className="text-6xl md:text-9xl font-arabic-style font-bold gold-gradient drop-shadow-sm leading-none"
            >
              عبدالرحيم
            </motion.h1>
          </div>
        </motion.div>

        {/* Illustration Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
          className="w-full max-w-[260px] md:max-w-md mb-12 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-b from-amber-100/20 to-transparent rounded-full blur-3xl -z-10" />
          <Illustration1 />
        </motion.div>

        <div className="w-full mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-4 mb-10"
          >
            <div className="flex items-center justify-center gap-4 text-amber-800">
              <div className="h-[1px] w-8 md:w-16 bg-amber-300" />
              <p className="text-xl md:text-3xl font-bold flex items-center gap-3 font-arabic-style">
                <Calendar className="text-amber-600" size={28} />
                يوم الجمعة، ٣ أبريل ٢٠٢٦ م
              </p>
              <div className="h-[1px] w-8 md:w-16 bg-amber-300" />
            </div>
            <p className="text-3xl md:text-6xl font-arabic-style text-amber-700 font-bold bg-amber-50/50 px-6 py-2 rounded-full border border-amber-100 shadow-inner">
              ١٥ شوال ١٤٤٧ هـ
            </p>
          </motion.div>

          <CountdownTimer targetDate={weddingDate} />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSaveDate}
          className="mt-8 px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-full font-bold flex items-center gap-3 shadow-2xl hover:shadow-amber-900/40 transition-all duration-300 group"
        >
          <Bell className="group-hover:rotate-12 transition-transform" size={20} />
          <span className="text-lg md:text-xl font-arabic-style">حفظ موعد الزفاف في تقويمي</span>
        </motion.button>

      </main>

      {/* Decorative Drifting Text - Fixed at bottom */}
      <div className="fixed bottom-6 left-0 w-full overflow-hidden whitespace-nowrap opacity-20 pointer-events-none z-0 border-t border-amber-200 pt-4">
        <div className="inline-block animate-[drift_30s_linear_infinite] text-3xl md:text-6xl font-arabic-style tracking-widest text-amber-800">
          بارك الله لكما وبارك عليكما وجمع بينكما في خير • اللهم بارك لهما وبارك عليهما • ألف مبروك للعروسين • بارك الله لكما وبارك عليكما وجمع بينكما في خير •
        </div>
      </div>
    </div>
  );
}
