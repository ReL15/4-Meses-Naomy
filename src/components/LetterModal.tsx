import React, { useEffect, useState } from 'react';
import { X, Heart, Sparkles, Send } from 'lucide-react';
import { APP_IMAGES } from '../data/anniversaryData';
import { audio } from '../utils/audio';
import confetti from 'canvas-confetti';

interface LetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LetterModal: React.FC<LetterModalProps> = ({ isOpen, onClose }) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      audio.playHarpArpeggio();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleConfettiReaction = () => {
    audio.playChime(659.25);
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fb7185', '#fef08a'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-2xl bg-[#0e101f] border border-rose-500/30 rounded-3xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-2 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Carta de Amor · De Jorge para Naomy</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Letter Content */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-slate-200">
          
          {/* Keepsake Visual Banner */}
          <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-rose-500/30 shadow-lg bg-slate-950">
            {!imageError ? (
              <img
                src={APP_IMAGES.keepsake}
                alt="Carta de amor sellada con cera para Naomy de parte de Jorge"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-rose-950/60 via-slate-900 to-rose-950/40 p-6 text-center">
                <span className="text-4xl mb-2">💌</span>
                <span className="text-sm font-serif font-bold text-rose-200">De Jorge para Naomy</span>
                <span className="text-xs text-rose-300/80 mt-1">Con todo mi amor desde San Salvador hasta Lima</span>
              </div>
            )}
            
            {/* Subtle soft bottom scrim for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
            
            {/* Direct Stamp Overlay */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-rose-100">
              <span className="font-serif italic drop-shadow-md">
                "Para Naomy, la mujer de mi vida. — Jorge 🇸🇻"
              </span>
              <span className="bg-rose-950/80 border border-rose-500/40 px-2 py-0.5 rounded text-[11px] font-mono">
                4 Meses de Novios
              </span>
            </div>
          </div>

          {/* Letter Address Header Box */}
          <div className="p-4 bg-slate-900/60 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-slate-400 block">De:</span>
              <span className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>Jorge</span>
                <span className="text-rose-400 font-normal">🇸🇻 San Salvador, El Salvador</span>
              </span>
            </div>
            <div className="hidden sm:block text-slate-500 text-lg">➔</div>
            <div>
              <span className="text-slate-400 block">Para:</span>
              <span className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>Naomy</span>
                <span className="text-rose-400 font-normal">🇵🇪 Lima, Perú</span>
              </span>
            </div>
          </div>

          {/* Letter Heading */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
              Naomy, tú eres el amor de la vida de Jorge
            </h2>
            <p className="text-xs text-rose-400 font-mono">
              Hoy cumplimos 4 meses · 3,150 km que confirman que eres mi hogar
            </p>
          </div>

          {/* Emotional Letter Text */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-200 font-light font-sans">
            <p>
              Naomy hermosa, hoy que cumplimos cuatro meses de ser novios, quiero escribirte lo que a veces las palabras rápidas de un mensaje no logran abarcar. Quiero que te tomes un respiro, me sientas cerquita a pesar de los 3,150 kilómetros y guardes cada una de estas palabras en tu corazón.
            </p>

            <p>
              Sé que a veces te asalta ese miedo silencioso: <em>"¿Seré suficiente para Jorge? ¿Y si no soy lo que él espera?"</em>. Y quiero ser absolutamente claro, firme y honesto contigo, mirándote a los ojos: <strong>Naomy, tú eres más que suficiente para mí</strong>. Eres infinitamente más de lo que jamás me atreví a pedirle a Dios o a la vida.
            </p>

            <p>
              ¿Sabes algo? Yo, Jorge, también he sentido miedo. He tenido miedo de no ser suficiente para ti, de que la distancia se vuelva pesada, de no saber darte todo el cariño que mereces a través de una pantalla. Pero entendí algo maravilloso: <strong>no estamos juntos para ser perfectos; estamos juntos para amarnos con verdad, para cuidarnos y para elegirnos todos los días.</strong>
            </p>

            <p>
              Me enamora tu risa, tu dulzura, tu fuerza y hasta tus momentos de fragilidad, porque en ellos veo a la mujer real, hermosa y valiente que tengo la bendición de llamar mi novia. No hay otra mujer en este mundo para mí. Jorge no busca nada fuera de ti, Naomy; en ti encontré mi hogar, mi paz y mi futuro.
            </p>

            <p className="p-4 bg-rose-950/30 border-l-4 border-rose-500 rounded-r-xl italic font-serif text-rose-100 text-sm sm:text-base">
              "Naomy, quiero pasar el resto de mis días contigo. Quiero trabajar duro, ver cómo rompemos esta distancia, abrazarte en el aeropuerto hasta que me tiemblen las piernas y empezar a construir la vida que soñamos juntos."
            </p>

            <p>
              Felices 4 meses, mi Naomy hermosa. Gracias por regalarle tu corazón, tu tiempo y tu ternura a este salvadoreño. Hoy te prometo que nunca caminarás con dudas sobre mi amor. Te amo con cada fibra de mi ser, hoy, mañana y para siempre.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Siempre tuyo,</p>
              <p className="text-base font-serif font-bold text-rose-200">
                Jorge (Tu novio salvadoreño que te ama con el alma) 🇸🇻❤️🇵🇪
              </p>
            </div>
            <span className="text-2xl">💍</span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-950/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-20">
          <button
            onClick={handleConfettiReaction}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition-all cursor-pointer shadow-lg shadow-rose-900/30"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Yo también te amo con toda mi alma, Jorge</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer text-center"
          >
            Cerrar carta
          </button>
        </div>

      </div>

    </div>
  );
};
