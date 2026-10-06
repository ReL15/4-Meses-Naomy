import React, { useState } from 'react';
import { CERTAINTY_CARDS } from '../data/anniversaryData';
import { CertaintyCard } from '../types';
import { Shield, Sparkles, Shuffle, Heart, CheckCircle2 } from 'lucide-react';
import { audio } from '../utils/audio';
import confetti from 'canvas-confetti';

export const CertaintyVault: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCard, setActiveCard] = useState<CertaintyCard>(CERTAINTY_CARDS[0]);
  const [savedCount, setSavedCount] = useState<number>(0);
  const [showSavedFeedback, setShowSavedFeedback] = useState<boolean>(false);

  const filteredCards = selectedCategory === 'all'
    ? CERTAINTY_CARDS
    : CERTAINTY_CARDS.filter(c => c.category === selectedCategory);

  const handleSelectCard = (card: CertaintyCard) => {
    setActiveCard(card);
    audio.playChime(523.25);
  };

  const handleShuffle = () => {
    audio.playChime(659.25);
    const randomIndex = Math.floor(Math.random() * CERTAINTY_CARDS.length);
    setActiveCard(CERTAINTY_CARDS[randomIndex]);
  };

  const handleSaveToHeart = (e: React.MouseEvent) => {
    audio.playHarpArpeggio();
    setSavedCount(prev => prev + 1);
    setShowSavedFeedback(true);
    setTimeout(() => setShowSavedFeedback(false), 3000);

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 30,
      spread: 70,
      origin: { x, y },
      colors: ['#fda4af', '#f43f5e', '#fef08a'],
      scalar: 0.9,
    });
  };

  return (
    <section id="certezas" className="py-20 px-4 sm:px-6 relative bg-gradient-to-b from-[#080911] via-[#0d0f1d] to-[#080911]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest text-rose-400 font-semibold mb-3">
            <Shield className="w-4 h-4" />
            <span>El Frasco de las Certezas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Para Naomy: Cuando tengas miedo de no ser suficiente
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Naomy, mi niña hermosa: ambos hemos sentido ese temor silencioso. Aquí he dejado guardadas las verdades que destruyen cualquier duda. Lee una cada vez que tu mente quiera hacerte creer que no eres suficiente.
          </p>
        </div>

        {/* Interactive Filter Tabs & Random Drawer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Functional segmented category buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-white/10 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todas las Certezas
            </button>
            <button
              onClick={() => setSelectedCategory('insecurity')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'insecurity'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              "¿Seré suficiente?"
            </button>
            <button
              onClick={() => setSelectedCategory('distance')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'distance'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              La Distancia
            </button>
            <button
              onClick={() => setSelectedCategory('love')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'love'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Por Qué Te Amo
            </button>
            <button
              onClick={() => setSelectedCategory('future')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === 'future'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Nuestro Futuro
            </button>
          </div>

          {/* Random letter shuffle button */}
          <button
            onClick={handleShuffle}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-rose-200 bg-rose-950/40 border border-rose-500/30 hover:bg-rose-900/50 rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <Shuffle className="w-3.5 h-3.5 text-rose-400" />
            <span>Sacar una carta al azar</span>
          </button>
        </div>

        {/* Vault Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: List of Prompts / Envelopes */}
          <div className="lg:col-span-5 space-y-2.5">
            <p className="text-xs text-slate-400 font-medium px-1">
              Selecciona una duda o miedo para descubrir la verdad:
            </p>
            {filteredCards.map((card) => {
              const isSelected = activeCard.id === card.id;
              return (
                <button
                  key={card.id}
                  onClick={() => handleSelectCard(card)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-rose-950/60 to-slate-900 border-rose-500/50 shadow-md shadow-rose-950/30 translate-x-1'
                      : 'bg-slate-900/40 border-white/5 hover:border-white/15 hover:bg-slate-900/70 text-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">💌</span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {card.prompt}
                      </p>
                      <span className="text-xs text-rose-400/80 mt-1 block truncate">
                        {card.title}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: The Opened Parchment Letter */}
          <div className="lg:col-span-7 bg-gradient-to-br from-slate-900/90 via-[#151728]/90 to-slate-900/90 border border-rose-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl relative overflow-hidden">
            
            {/* Subtle watermark aura */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Letter Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-xs text-rose-400 font-medium uppercase tracking-wider">
                  Declaración de Mi Corazón
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
                  {activeCard.title}
                </h3>
              </div>
              <span className="text-2xl">✨</span>
            </div>

            {/* Letter Body */}
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line font-light">
                {activeCard.message}
              </p>
            </div>

            {/* Golden Solemn Promise Box */}
            <div className="bg-rose-950/30 border border-rose-500/30 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-rose-200 font-medium leading-relaxed italic">
                  {activeCard.promise}
                </p>
              </div>
            </div>

            {/* Interactive Feedback & Affirmation Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
              <button
                onClick={handleSaveToHeart}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-rose-100 bg-rose-600/80 hover:bg-rose-600 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Guardar esta certeza en mi corazón</span>
              </button>

              {showSavedFeedback && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-medium animate-fade-in">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>¡Grabado en tu corazón para siempre!</span>
                </div>
              )}

              {savedCount > 0 && !showSavedFeedback && (
                <span className="text-xs text-slate-400">
                  {savedCount} {savedCount === 1 ? 'certeza guardada' : 'certezas guardadas'} hoy
                </span>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
