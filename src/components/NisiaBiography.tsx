import React, { useState, useEffect } from 'react';
import { BookOpen, Volume2, VolumeX, Pause, Play, Award, Clock, MapPin, Feather, Quote } from 'lucide-react';
import { LITERARY_WORKS, NISIA_TIMELINE } from '../data/heritageData';
import { LiteraryWork } from '../types';

export const NisiaBiography: React.FC = () => {
  const [activeWork, setActiveWork] = useState<LiteraryWork>(LITERARY_WORKS[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSupported(true);
    }
  }, []);

  const handleToggleSpeech = (text: string) => {
    if (!speechSupported) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.92; // Slightly measured, respectful cadence

    // Attempt to pick a natural Portuguese voice if available
    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find(v => v.lang.startsWith('pt'));
    if (ptVoice) {
      utterance.voice = ptVoice;
    }

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  // Stop audio if active work changes
  const selectWork = (work: LiteraryWork) => {
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
    setActiveWork(work);
  };

  return (
    <section id="historia-nisia" className="py-20 bg-[#F4EFE6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-sans mb-2 font-semibold">
            <span>Memorial Biográfico & Literário</span>
            <span aria-hidden="true">·</span>
            <span>1810 – 1885</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 tracking-tight">
            Dionísia Gonçalves Pinto: A voz que desafiou impérios
          </h2>
          <p className="mt-4 text-stone-700 font-serif text-lg leading-relaxed">
            Sob o pseudônimo de <strong className="text-stone-900 font-semibold">Nísia Floresta Brasileira Augusta</strong>, a escritora nascida no Sítio Floresta, em Papary, desafiou o patriarcado do século XIX. Foi a primeira brasileira a publicar textos denunciando a opressão feminina, a escravidão e a dizimação dos povos indígenas.
          </p>
        </div>

        {/* Asymmetric 2-Column Layout (Pattern D): Left = Works & Speech Player; Right = Timeline & Heritage Significance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Literary Works & Audio Excerpt Reader (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#FAF7F0] p-6 sm:p-8 rounded-lg border border-stone-300 shadow-sm">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-stone-500">
                    Obras Fundamentais da Autora
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                    Tratados e Manifestos Pioneiros
                  </h3>
                </div>
                <Feather className="w-5 h-5 text-amber-900" />
              </div>

              {/* Work Selector Tabs (Functional Buttons) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {LITERARY_WORKS.map((work) => (
                  <button
                    key={work.title}
                    onClick={() => selectWork(work)}
                    className={`p-2.5 text-left rounded border transition-all text-xs ${
                      activeWork.title === work.title
                        ? 'bg-amber-900 text-white border-amber-950 shadow-sm font-semibold'
                        : 'bg-white/80 text-stone-700 border-stone-300 hover:bg-stone-100 hover:border-stone-400'
                    }`}
                  >
                    <span className="block font-mono text-[11px] opacity-80">{work.year}</span>
                    <span className="line-clamp-2 mt-0.5 leading-tight">{work.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Work Details */}
              <div className="bg-white p-6 rounded border border-stone-200">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 mb-3 font-sans">
                  <span className="font-semibold text-amber-900">{activeWork.genre}</span>
                  <span>Publicado em {activeWork.city} ({activeWork.year})</span>
                </div>

                <h4 className="text-2xl font-serif font-medium text-stone-900 mb-3">
                  "{activeWork.title}"
                </h4>

                <p className="text-xs text-stone-600 mb-4 leading-normal">
                  <strong className="text-stone-800">Impacto Histórico: </strong>
                  {activeWork.impact}
                </p>

                {/* Excerpt with Pullquote Styling */}
                <div className="relative pl-6 py-2 my-4 border-l-2 border-amber-800 bg-stone-50/60 rounded-r">
                  <Quote className="absolute top-1 left-1.5 w-3.5 h-3.5 text-amber-800/40" />
                  <p className="font-serif italic text-stone-800 text-base sm:text-lg leading-relaxed">
                    "{activeWork.excerpt}"
                  </p>
                </div>

                {/* Audio Narrator Button */}
                {speechSupported && (
                  <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between flex-wrap gap-3">
                    <button
                      onClick={() => handleToggleSpeech(activeWork.excerpt)}
                      className={`px-4 py-2 text-xs font-medium rounded-md transition-colors inline-flex items-center gap-2 ${
                        isPlayingAudio
                          ? 'bg-amber-800 text-white'
                          : 'bg-stone-900 text-white hover:bg-stone-800'
                      }`}
                      aria-label="Ouvir trecho da obra em voz alta"
                    >
                      {isPlayingAudio ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          Pausar Narração do Trecho
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                          Ouvir Citação em Voz Alta (pt-BR)
                        </>
                      )}
                    </button>
                    <span className="text-[11px] text-stone-500 italic">
                      {isPlayingAudio ? 'Reproduzindo trecho...' : 'Áudio-guia interativo'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Curatorial Context on Tourism Development */}
            <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-lg">
              <h4 className="text-sm font-serif font-bold text-amber-950 mb-1 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-900" />
                O Legado de Nísia como Vetor de Turismo Cultural
              </h4>
              <p className="text-xs text-amber-900/90 leading-relaxed font-sans">
                Emancipar o turismo em Nísia Floresta exige colocar sua patrona no centro das rotas pedagógicas. O Museu e Mausoléu recebem anualmente delegações de universidades e movimentos sociais, transformando o município em referência viva de turismo de memória e direitos humanos no Nordeste.
              </p>
            </div>
          </div>

          {/* Right Column: Historical Timeline (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF7F0] p-6 sm:p-7 rounded-lg border border-stone-300 shadow-sm">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-900" />
                <h3 className="text-base font-serif font-bold text-stone-900">
                  Cronologia: Da Vila de Papary à Eternidade
                </h3>
              </div>
              <span className="text-[11px] font-mono text-stone-500">1810 · 1954</span>
            </div>

            {/* Timeline Stream */}
            <div className="relative pl-5 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[1px] before:bg-stone-300">
              {NISIA_TIMELINE.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet */}
                  <div className="absolute -left-5 top-1.5 w-2 h-2 rounded-full bg-amber-900 group-hover:scale-125 transition-transform" />
                  
                  {/* Clean unboxed metadata */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-amber-900">
                      {item.year}
                    </span>
                    <span className="text-xs font-semibold text-stone-800 font-serif">
                      {item.event}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Visit the Mausoleum note */}
            <div className="mt-8 pt-4 border-t border-stone-200 text-xs text-stone-600 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
              <span>
                <strong>Visitação: </strong> O túmulo de Nísia Floresta e o Museu Municipal estão abertos gratuitamente no Centro Histórico de terça a domingo.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
