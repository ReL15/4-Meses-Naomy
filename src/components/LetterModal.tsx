import React, { useEffect } from 'react';
import { X, Heart, Sparkles } from 'lucide-react';
import { APP_IMAGES } from '../data/anniversaryData';
import { audio } from '../utils/audio';
import confetti from 'canvas-confetti';

interface LetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LetterModal: React.FC<LetterModalProps> = ({ isOpen, onClose }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-2xl bg-[#0e101f] border border-rose-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-slate-900/60 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-2 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Nuestra Carta de 4 Meses</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Letter Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200">
          
          {/* Keepsake Visual Banner */}
          <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10">
            <img
              src={APP_IMAGES.keepsake}
              alt="Sobre de carta de amor lacrado"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e101f] via-[#0e101f]/30 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-xs font-serif italic text-rose-200">
              "Para la mujer que ilumina mi vida desde Lima, con todo el amor de San Salvador."
            </div>
          </div>

          {/* Letter Heading */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
              Mi amor, eres el amor de mi vida
            </h2>
            <p className="text-xs text-rose-400 font-mono">
              Hoy cumplimos 4 meses · De El Salvador a Perú
            </p>
          </div>

          {/* Emotional Letter Text */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-200 font-light font-sans">
            <p>
              Hoy que cumplimos cuatro meses de ser novios, quiero escribirte lo que a veces las palabras rápidas de un mensaje no logran abarcar. Quiero que te tomes un respiro, me sientas cerquita a pesar de los 3,150 kilómetros y guardes cada una de estas palabras en tu corazón.
            </p>

            <p>
              Sé que a veces te asalta ese miedo silencioso: <em>"¿Seré suficiente para él? ¿Y si no soy lo que espera?"</em>. Y quiero ser absolutamente claro, firme y honesto contigo: <strong>tú eres más que suficiente para mí</strong>. Eres más de lo que jamás me atreví a pedirle a Dios o a la vida.
            </p>

            <p>
              ¿Sabes algo? Yo también he sentido miedo. He tenido miedo de no ser suficiente para ti, de que la distancia se vuelva pesada, de no saber darte todo el cariño que mereces a través de una pantalla. Pero entendí algo maravilloso: <strong>no estamos juntos para ser perfectos; estamos juntos para amarnos con verdad, para cuidarnos y para elegirnos todos los días.</strong>
            </p>

            <p>
              Me enamora tu risa, tu dulzura, tu fuerza y hasta tus momentos de fragilidad, porque en ellos veo a la mujer real, hermosa y valiente que tengo la bendición de llamar mi novia. No hay otra mujer en este mundo para mí. No busco nada fuera de ti; en ti encontré mi hogar, mi paz y mi futuro.
            </p>

            <p className="p-4 bg-rose-950/30 border-l-4 border-rose-500 rounded-r-xl italic font-serif text-rose-100 text-sm sm:text-base">
              "Quiero pasar el resto de mis días contigo. Quiero trabajar duro, ver cómo rompemos esta distancia, abrazarte en el aeropuerto hasta que me tiemblen las piernas y empezar a construir la vida que soñamos juntos."
            </p>

            <p>
              Felices 4 meses, mi niña hermosa. Gracias por regalarme tu corazón, tu tiempo y tu ternura. Hoy te prometo que nunca caminarás con dudas sobre mi amor. Te amo con cada fibra de mi ser, hoy, mañana y para siempre.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400">Siempre tuyo,</p>
              <p className="text-base font-serif font-bold text-rose-200">
                Tu novio salvadoreño que te ama con el alma 🇸🇻❤️🇵🇪
              </p>
            </div>
            <span className="text-2xl">💍</span>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-950/70 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-0 z-20">
          <button
            onClick={handleConfettiReaction}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-xl transition-all cursor-pointer shadow-lg shadow-rose-900/30"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Yo también te amo con toda mi alma</span>
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
