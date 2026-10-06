import React, { useState, useEffect } from 'react';
import { Compass, Clock, HeartHandshake, ShieldCheck, ChevronDown } from 'lucide-react';
import { APP_IMAGES, DISTANCE_STATS } from '../data/anniversaryData';

interface HeroSectionProps {
  onOpenLetter: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLetter }) => {
  const [salvadorTime, setSalvadorTime] = useState('');
  const [peruTime, setPeruTime] = useState('');

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      
      const svFormatter = new Intl.DateTimeFormat('es-SV', {
        timeZone: DISTANCE_STATS.salvadorTimezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      const peFormatter = new Intl.DateTimeFormat('es-PE', {
        timeZone: DISTANCE_STATS.peruTimezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      setSalvadorTime(svFormatter.format(now));
      setPeruTime(peFormatter.format(now));
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background artwork with dark romantic gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={APP_IMAGES.hero}
          alt="Conexión de amor entre El Salvador y Perú"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform animate-pulse-glow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080911]/80 via-[#080911]/70 to-[#080911]" />
        <div className="absolute inset-0 bg-radial at-center from-rose-950/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        
        {/* Subtle unboxed metadata kicker */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-rose-300/90 mb-5">
          <span>El Salvador 🇸🇻</span>
          <span aria-hidden="true" className="text-rose-500/60">·</span>
          <span>4 Meses de Amor Puro</span>
          <span aria-hidden="true" className="text-rose-500/60">·</span>
          <span>Perú 🇵🇪</span>
        </div>

        {/* Primary Hero Title with Cormorant font */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto text-balance mb-6">
          Tú eres <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-rose-200 to-amber-200">más que suficiente</span> para mí.
        </h1>

        {/* Emotionally grounded lead paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-9">
          Hoy cumplimos 4 meses. Sé que a veces la distancia pesa y los miedos nos hacen dudar de si somos suficientes el uno para el otro. Hoy quiero darte la certeza eterna: <strong className="text-white font-medium">yo te amo, te elijo a ti y quiero pasar el resto de mis días contigo.</strong>
        </p>

        {/* Dual Live Clocks & Distance Metrics (Real synchronization) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 text-left">
          
          {/* Clock: El Salvador */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl p-4 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <span>🇸🇻</span> San Salvador
              </span>
              <span className="font-mono text-[11px] text-slate-400">GMT-6</span>
            </div>
            <div className="text-xl sm:text-2xl font-mono tabular-nums font-semibold text-rose-200">
              {salvadorTime || 'Cargando...'}
            </div>
            <p className="text-xs text-slate-400 mt-1">Donde nace cada "buenos días mi amor"</p>
          </div>

          {/* Connection summary */}
          <div className="bg-rose-950/30 backdrop-blur-md border border-rose-500/25 rounded-xl p-4 flex flex-col justify-center text-center transition-transform hover:-translate-y-0.5">
            <div className="flex items-center justify-center gap-1 text-xs text-rose-300 font-medium mb-1">
              <Compass className="w-3.5 h-3.5 text-rose-400" />
              <span>3,150 Kilómetros</span>
            </div>
            <div className="text-base sm:text-lg font-serif font-bold text-white">
              1 sola hora de diferencia
            </div>
            <div className="text-xs text-rose-200/80 mt-1">
              0 distancia entre nuestros corazones
            </div>
          </div>

          {/* Clock: Perú */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-xl p-4 transition-transform hover:-translate-y-0.5">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <span>🇵🇪</span> Lima
              </span>
              <span className="font-mono text-[11px] text-slate-400">GMT-5</span>
            </div>
            <div className="text-xl sm:text-2xl font-mono tabular-nums font-semibold text-rose-200">
              {peruTime || 'Cargando...'}
            </div>
            <p className="text-xs text-slate-400 mt-1">Donde duerme la dueña de mi corazón</p>
          </div>

        </div>

        {/* Primary Interactive CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#certezas"
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 hover:from-rose-500 hover:to-rose-500 rounded-xl shadow-lg shadow-rose-900/30 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>El Frasco de Certezas (Para tus dudas)</span>
          </a>

          <a
            href="#juego"
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-white/15 rounded-xl transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <HeartHandshake className="w-4 h-4 text-rose-400" />
            <span>Jugar Nuestra Dinámica de Pareja</span>
          </a>

          <button
            onClick={onOpenLetter}
            className="w-full sm:w-auto px-5 py-3.5 text-sm font-medium text-rose-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors text-center cursor-pointer"
          >
            Leer mi carta de aniversario →
          </button>
        </div>

        {/* Soft scroll down hint */}
        <div className="mt-14 flex flex-col items-center gap-1 text-slate-400 text-xs">
          <span>Explora nuestro 4to aniversario</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-rose-400/80" />
        </div>

      </div>
    </section>
  );
};
