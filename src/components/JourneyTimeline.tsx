import React, { useState } from 'react';
import { MILESTONES, APP_IMAGES } from '../data/anniversaryData';
import { Milestone } from '../types';
import { Calendar, Quote, Sparkles, ChevronRight, Heart } from 'lucide-react';
import { audio } from '../utils/audio';

export const JourneyTimeline: React.FC = () => {
  const [activeMonthIndex, setActiveMonthIndex] = useState<number>(3); // Default to current 4th month!
  const currentMilestone: Milestone = MILESTONES[activeMonthIndex];

  const handleSelectMonth = (idx: number) => {
    setActiveMonthIndex(idx);
    audio.playChime(523.25 + idx * 45);
  };

  return (
    <section id="historia" className="py-20 px-4 sm:px-6 relative bg-[#080911]">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest text-rose-400 font-semibold mb-3">
            <Calendar className="w-4 h-4" />
            <span>Nuestra Cronología</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Cuatro Meses, Cuatro Lunas
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Cada mes ha tenido su propio aprendizaje, su magia y la confirmación de que este amor no es casualidad; es destino.
          </p>
        </div>

        {/* 4 Months Interactive Tabs / Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {MILESTONES.map((m, idx) => {
            const isSelected = activeMonthIndex === idx;
            return (
              <button
                key={m.month}
                onClick={() => handleSelectMonth(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-b from-rose-950/70 to-slate-900 border-rose-500/60 shadow-lg shadow-rose-950/40'
                    : 'bg-slate-900/40 border-white/10 hover:border-white/20 hover:bg-slate-900/70'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-amber-400" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-rose-400">
                    Mes 0{m.month}
                  </span>
                  <span className="text-base">{m.symbol}</span>
                </div>
                <h4 className="text-sm font-semibold text-white truncate">
                  {m.theme}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                  {m.date}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Month Feature Display with Connection Artwork */}
        <div className="bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 backdrop-blur-sm">
          
          {/* Left: Romantic Connection Artwork */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
            <img
              src={APP_IMAGES.countries}
              alt="El Salvador y Perú unidos en amor"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900" />
            
            <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 text-xs text-rose-200">
              <span className="font-semibold block text-white mb-0.5">El Salvador 🇸🇻 & Perú 🇵🇪</span>
              Volcanes y cordilleras que miran al mismo Pacífico.
            </div>
          </div>

          {/* Right: Milestone Deep Dive */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-rose-400 font-semibold mb-2">
                <span>{currentMilestone.symbol}</span>
                <span className="uppercase tracking-wider">{currentMilestone.theme}</span>
                <span className="text-slate-400">· {currentMilestone.date}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                {currentMilestone.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-rose-200/90 font-medium mb-5 italic">
                {currentMilestone.subtitle}
              </p>

              {/* Romantic Quote */}
              <div className="relative pl-6 border-l-2 border-rose-500/60 my-5 bg-rose-950/20 py-2.5 pr-4 rounded-r-lg">
                <Quote className="w-4 h-4 text-rose-400 absolute left-1 top-2.5 opacity-60" />
                <p className="text-xs sm:text-sm text-rose-100/95 italic font-serif">
                  {currentMilestone.quote}
                </p>
              </div>

              {/* Heartfelt Letter */}
              <div className="prose prose-invert max-w-none text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                <p>{currentMilestone.letter}</p>
              </div>
            </div>

            {/* Stepper Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
              <span className="text-slate-400">
                Capítulo {activeMonthIndex + 1} de 4
              </span>
              
              {activeMonthIndex < 3 ? (
                <button
                  onClick={() => handleSelectMonth(activeMonthIndex + 1)}
                  className="flex items-center gap-1 text-rose-300 hover:text-white font-medium transition-colors cursor-pointer"
                >
                  <span>Siguiente Mes</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>¡Hoy cumplimos 4 meses juntos!</span>
                </span>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
