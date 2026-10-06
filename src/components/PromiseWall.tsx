import React, { useState, useEffect } from 'react';
import { INITIAL_WISHES } from '../data/anniversaryData';
import { ReunionWish } from '../types';
import { Check, Plus, Heart, MapPin, Sparkles } from 'lucide-react';
import { audio } from '../utils/audio';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'distance_love_reunion_wishes';

export const PromiseWall: React.FC = () => {
  const [wishes, setWishes] = useState<ReunionWish[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_WISHES;
  });

  const [filter, setFilter] = useState<'all' | 'pe' | 'sv' | 'both'>('all');
  const [newWishText, setNewWishText] = useState<string>('');
  const [newWishCountry, setNewWishCountry] = useState<'pe' | 'sv' | 'both'>('both');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    } catch {
      // ignore
    }
  }, [wishes]);

  const handleToggle = (id: string) => {
    audio.playChime(659.25);
    setWishes(prev =>
      prev.map(w => {
        if (w.id === id) {
          const nextState = !w.completed;
          if (nextState) {
            confetti({
              particleCount: 20,
              spread: 50,
              origin: { y: 0.7 },
              colors: ['#f43f5e', '#fcd34d'],
            });
          }
          return { ...w, completed: nextState };
        }
        return w;
      })
    );
  };

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWishText.trim()) return;

    audio.playHarpArpeggio();
    const newWish: ReunionWish = {
      id: `w_${Date.now()}`,
      text: newWishText.trim(),
      country: newWishCountry,
      completed: false,
    };

    setWishes(prev => [newWish, ...prev]);
    setNewWishText('');

    confetti({
      particleCount: 30,
      spread: 60,
      colors: ['#fda4af', '#f43f5e'],
    });
  };

  const filteredWishes = filter === 'all'
    ? wishes
    : wishes.filter(w => w.country === filter || w.country === 'both');

  return (
    <section id="promesas" className="py-20 px-4 sm:px-6 relative bg-[#080911]">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest text-rose-400 font-semibold mb-3">
            <Heart className="w-4 h-4 fill-rose-500/20" />
            <span>Nuestra Lista de Sueños</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Para Cuando Nos Abracemos
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Cada día a distancia es un paso más cerca de hacer realidad todas estas cosas. Agrega tus propios deseos para cuando rompamos el mapa.
          </p>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-900/80 border border-white/10 rounded-xl max-w-md mx-auto mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              filter === 'all' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Todos ({wishes.length})
          </button>
          <button
            onClick={() => setFilter('pe')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              filter === 'pe' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            🇵🇪 En Perú
          </button>
          <button
            onClick={() => setFilter('sv')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              filter === 'sv' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            🇸🇻 En El Salvador
          </button>
          <button
            onClick={() => setFilter('both')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
              filter === 'both' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            ❤️ Donde Sea Juntos
          </button>
        </div>

        {/* Form to add a new wish */}
        <form onSubmit={handleAddWish} className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 sm:p-5 mb-8 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Escribe un deseo que quieras cumplir conmigo..."
              value={newWishText}
              onChange={(e) => setNewWishText(e.target.value)}
              className="flex-1 bg-slate-950/60 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-rose-500/50"
            />
            
            <div className="flex gap-2">
              <select
                value={newWishCountry}
                onChange={(e) => setNewWishCountry(e.target.value as 'pe' | 'sv' | 'both')}
                className="bg-slate-950/60 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-rose-500/50"
              >
                <option value="both">❤️ Juntos</option>
                <option value="pe">🇵🇪 En Perú</option>
                <option value="sv">🇸🇻 En El Salvador</option>
              </select>

              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <Plus className="w-4 h-4" />
                <span>Agregar</span>
              </button>
            </div>
          </div>
        </form>

        {/* Wishes List */}
        <div className="space-y-3">
          {filteredWishes.map((wish) => {
            return (
              <div
                key={wish.id}
                onClick={() => handleToggle(wish.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  wish.completed
                    ? 'bg-rose-950/20 border-rose-500/30 opacity-75'
                    : 'bg-slate-900/40 border-white/10 hover:border-white/20 hover:bg-slate-900/70'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                      wish.completed
                        ? 'bg-rose-600 border-rose-600 text-white'
                        : 'border-white/30 text-transparent'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span
                    className={`text-sm ${
                      wish.completed
                        ? 'line-through text-slate-400'
                        : 'text-slate-200'
                    }`}
                  >
                    {wish.text}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs">
                    {wish.country === 'pe' ? '🇵🇪 Perú' : wish.country === 'sv' ? '🇸🇻 El Salvador' : '✈️ Ambos'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational Quote Box */}
        <div className="mt-12 text-center p-6 bg-slate-900/30 border border-white/5 rounded-2xl">
          <p className="text-xs sm:text-sm text-rose-200/90 font-serif italic max-w-xl mx-auto">
            "No importa cuántos kilómetros nos falten por recorrer: cada deseo tachado será un testimonio de que nuestro amor venció cualquier frontera."
          </p>
        </div>

      </div>
    </section>
  );
};
