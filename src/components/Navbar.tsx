import React, { useState, useEffect } from 'react';
import { Heart, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { audio } from '../utils/audio';
import confetti from 'canvas-confetti';

interface NavbarProps {
  onOpenLetter: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLetter }) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    setIsPlayingMusic(audio.getIsAmbientPlaying());
  }, []);

  const handleToggleMusic = () => {
    const active = audio.toggleAmbient((state) => {
      setIsPlayingMusic(state);
    });
    setIsPlayingMusic(active);
    if (active) {
      audio.playChime(659.25);
    }
  };

  const triggerHeartBurst = (e: React.MouseEvent) => {
    audio.playChime(587.33);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 25,
      spread: 60,
      origin: { x, y },
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#fcd34d'],
      shapes: ['circle'],
      scalar: 0.9,
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#080911]/85 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single Brand element */}
        <a 
          href="#inicio" 
          className="flex items-center gap-2 text-base sm:text-lg font-serif tracking-wide text-rose-100 hover:text-white transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping inline-block"></span>
          <span>San Salvador <span className="text-rose-400 font-sans text-xs">🇸🇻</span> · Lima <span className="text-rose-400 font-sans text-xs">🇵🇪</span></span>
        </a>

        {/* Zone 2: Clean navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#historia" className="hover:text-rose-300 transition-colors">
            4 Meses
          </a>
          <a href="#certezas" className="hover:text-rose-300 transition-colors">
            Certezas
          </a>
          <a href="#juego" className="hover:text-rose-300 transition-colors">
            Juego en Pareja
          </a>
          <a href="#promesas" className="hover:text-rose-300 transition-colors">
            Caja de Deseos
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleToggleMusic}
            title={isPlayingMusic ? 'Pausar música ambiental' : 'Reproducir melodía suave'}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-rose-500/25 bg-rose-500/10 text-rose-200 hover:bg-rose-500/20 hover:border-rose-500/40 transition-all cursor-pointer"
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                <span className="hidden sm:inline">Música On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Música</span>
              </>
            )}
          </button>

          <button
            onClick={triggerHeartBurst}
            title="Enviar latido de amor"
            className="p-2 text-rose-400 hover:text-rose-300 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-rose-500/30" />
          </button>

          <button
            onClick={onOpenLetter}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 rounded-lg shadow-sm shadow-rose-950/40 transition-all cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Carta de Amor</span>
          </button>
        </div>

      </div>
    </header>
  );
};
