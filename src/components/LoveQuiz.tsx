import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/anniversaryData';
import { Gamepad2, Award, Sparkles, Heart, RotateCcw, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { audio } from '../utils/audio';
import confetti from 'canvas-confetti';

export const LoveQuiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [partnerName, setPartnerName] = useState<string>('Naomy');

  const question = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOptionIndex(index);
    setIsAnswered(true);

    const isCorrect = question.options[index].isCorrect;
    if (isCorrect) {
      audio.playChime(659.25);
      setScore(prev => prev + 100);
      confetti({
        particleCount: 20,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#f43f5e', '#fcd34d'],
      });
    } else {
      audio.playChime(392.00);
    }
  };

  const handleNextQuestion = () => {
    audio.playChime(523.25);
    if (currentQuestionIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      audio.playHarpArpeggio();
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#e11d48', '#fda4af', '#fbbf24', '#ffffff'],
      });
    }
  };

  const handleRestart = () => {
    audio.playChime(440);
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <section id="juego" className="py-20 px-4 sm:px-6 relative bg-gradient-to-b from-[#080911] via-[#101222] to-[#080911]">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest text-rose-400 font-semibold mb-3">
            <Gamepad2 className="w-4 h-4" />
            <span>Dinámica de Pareja</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            El Desafío de Amor para Naomy: 🇸🇻 El Salvador & 🇵🇪 Perú
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Una dinámica divertida y romántica para nosotros. Responde cada pregunta, mi Naomy, y descubre los secretos y certezas de nuestro amor a través de las fronteras.
          </p>
        </div>

        {!isFinished ? (
          /* Active Game Card */
          <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
            
            {/* HUD Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold text-rose-400">
                  Pregunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}
                </span>
                {question.countryNote && (
                  <span className="text-[11px] bg-rose-950/60 text-rose-300 border border-rose-500/20 px-2 py-0.5 rounded-md">
                    {question.countryNote}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-xs text-amber-300 font-mono font-semibold">
                <Heart className="w-3.5 h-3.5 fill-amber-400" />
                <span>{score} Puntos de Amor</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-6">
              <div
                className="bg-gradient-to-r from-rose-500 to-amber-400 h-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* The Question */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white mb-6 leading-snug">
              {question.question}
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {question.options.map((opt, idx) => {
                const isSelected = selectedOptionIndex === idx;
                let optionStyle = 'bg-slate-800/60 border-white/10 hover:border-white/20 text-slate-200';

                if (isAnswered) {
                  if (opt.isCorrect) {
                    optionStyle = 'bg-emerald-950/60 border-emerald-500/60 text-emerald-100 shadow-sm shadow-emerald-950/40';
                  } else if (isSelected && !opt.isCorrect) {
                    optionStyle = 'bg-rose-950/60 border-rose-500/60 text-rose-100';
                  } else {
                    optionStyle = 'bg-slate-800/20 border-white/5 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${optionStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <div className="flex-1 text-sm font-medium leading-relaxed">
                      {opt.text}
                    </div>
                    {isAnswered && opt.isCorrect && (
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {isAnswered && isSelected && !opt.isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Feedback & Explanation */}
            {isAnswered && (
              <div className="bg-slate-800/70 border border-white/10 rounded-xl p-4 mb-6 animate-fade-in">
                <p className="text-sm font-semibold text-rose-300 mb-1">
                  {question.options[selectedOptionIndex!].reaction}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {question.explanation}
                </p>
              </div>
            )}

            {/* Next Question CTA */}
            {isAnswered && (
              <div className="flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  <span>
                    {currentQuestionIndex + 1 < QUIZ_QUESTIONS.length
                      ? 'Siguiente Pregunta'
                      : 'Ver Nuestro Certificado de Amor'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        ) : (
          /* Victory Certificate Screen */
          <div className="bg-gradient-to-b from-slate-900 via-[#15172b] to-slate-900 border-2 border-rose-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative text-center">
            
            {/* Certificate Header Badge */}
            <div className="w-16 h-16 mx-auto rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-300 mb-4 shadow-inner">
              <Award className="w-8 h-8" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-amber-300 font-semibold block mb-2">
              Certificado Oficial de Amor Incondicional
            </span>

            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-3">
              Constancia de Certeza Eterna
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto mb-6">
              Otorgado con toda la devoción del corazón por haber superado la trivia y por ser la reina absoluta de estos 4 meses de noviazgo.
            </p>

            {/* Interactive Partner Name editor */}
            <div className="max-w-md mx-auto mb-6 p-4 bg-slate-950/60 border border-white/10 rounded-2xl">
              <label className="block text-[11px] text-slate-400 mb-1.5">
                Nombre de la dueña de este certificado (¡puedes cambiarlo!):
              </label>
              <input
                type="text"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
                className="w-full text-center bg-transparent border-b border-rose-500/50 py-1 text-lg font-serif font-bold text-rose-200 focus:outline-none focus:border-rose-400 transition-colors"
              />
            </div>

            {/* Solemn Decree Box */}
            <div className="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-6 max-w-xl mx-auto mb-8 text-left space-y-3">
              <div className="flex items-center gap-2 text-rose-300 text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>DECLARACIÓN JURADA DEL CORAZÓN</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic font-serif">
                "Por medio de la presente, se hace constar que <strong>{partnerName}</strong> es y será por siempre <strong>MÁS QUE SUFICIENTE</strong> para su novio salvadoreño. Queda prohibido dudar de su valor, temer que él busque a otra persona o pensar que la distancia es más grande que su amor. Su lugar en su vida es para el resto de sus días."
              </p>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span>🇸🇻 San Salvador, El Salvador</span>
                <span>🇵🇪 Lima, Perú</span>
                <span>4 Meses de Novios</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Volver a Jugar la Trivia</span>
              </button>

              <button
                onClick={() => {
                  window.print();
                }}
                className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-xl shadow-lg transition-all cursor-pointer"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Guardar o Imprimir Nuestro Diploma</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
