import React from 'react';
import { Heart, Compass, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenLetter: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLetter }) => {
  return (
    <footer className="border-t border-white/10 bg-[#06070e] text-slate-400 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Romantic Dedication */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-white font-serif text-lg font-bold mb-1">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500/40" />
            <span>Nuestra Historia de Amor con Naomy</span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            4 meses juntos amándote, Naomy · San Salvador, El Salvador 🇸🇻 & Lima, Perú 🇵🇪.
          </p>
        </div>

        {/* Right: Quick actions & links */}
        <div className="flex items-center gap-4 text-xs">
          <a href="#historia" className="hover:text-rose-300 transition-colors">
            4 Meses
          </a>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <a href="#certezas" className="hover:text-rose-300 transition-colors">
            Certezas
          </a>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <a href="#juego" className="hover:text-rose-300 transition-colors">
            Juego
          </a>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <button
            onClick={onOpenLetter}
            className="text-rose-400 hover:text-rose-300 transition-colors cursor-pointer font-medium"
          >
            Nuestra Carta
          </button>
        </div>

      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-slate-400">
        "Para el resto de nuestros días. Te amo hoy y te amaré siempre."
      </div>
    </footer>
  );
};
