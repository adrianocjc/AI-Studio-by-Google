import React from 'react';
import { Compass, BookOpen, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreRoutes: () => void;
  onOpenPlanner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreRoutes, onOpenPlanner }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-stone-200 bg-[#FBF9F5] overflow-hidden">
      {/* Delicate Archival Watermark Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#78350F 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Curatorial Header Tagline / Unboxed Metadata */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-sans mb-4">
          <span>Estado do Rio Grande do Norte</span>
          <span aria-hidden="true">·</span>
          <span>Antiga Vila Imperial de Papary</span>
          <span aria-hidden="true">·</span>
          <span>Terra de Nísia Floresta</span>
        </div>

        {/* Two-Column Grid: Editorial Text + Archival Heritage Vignette */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-stone-900 leading-[1.12] tracking-tight">
              Patrimônio histórico, memória viva e o futuro do turismo em Nísia Floresta
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-stone-700 font-serif leading-relaxed max-w-2xl">
              <span className="text-4xl font-serif font-bold float-left mr-3 mt-1 text-amber-900 leading-none">
                N
              </span>
              o litoral sul potiguar, as águas de 26 lagoas perenes encontram falésias coloridas esculpidas pelo Atlântico, guardadas por baobás seculares e pela indelével herança de Dionísia Gonçalves Pinto — a pioneira que ensinou o Brasil a conjugar emancipação, educação e liberdade.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#patrimonio-catalogo"
                className="px-5 py-3 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors whitespace-nowrap shadow-sm inline-flex items-center gap-2"
              >
                Explorar Catálogo do Patrimônio
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenPlanner}
                className="px-5 py-3 text-sm font-medium text-amber-950 bg-amber-100/80 hover:bg-amber-200/80 border border-amber-300/80 rounded-md transition-colors whitespace-nowrap inline-flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-amber-900" />
                Montar Roteiro Personalizado
              </button>
            </div>

            {/* Curatorial Adjacency Note */}
            <div className="mt-6 pt-6 border-t border-stone-200/80 flex items-center gap-3 text-xs text-stone-500">
              <span className="font-semibold text-stone-700">Iniciativa Municipal & Comunitária:</span>
              <span>Turismo sustentável, salvaguarda das rendeiras e preservação dos mananciais.</span>
            </div>
          </div>

          {/* Visual Showcase Box: Curated Heritage Framing (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#F4EFE6] border border-stone-300/80 rounded-lg p-6 shadow-sm">
              {/* Corner archival marks */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-stone-400" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-stone-400" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-stone-400" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-stone-400" />

              {/* Archival Artwork: Stylized Heritage Plate */}
              <div className="h-64 sm:h-72 w-full rounded border border-stone-300 bg-gradient-to-b from-[#FAF7F0] to-[#EFE8DC] p-5 flex flex-col justify-between relative overflow-hidden">
                {/* Sun and Coast SVG Motif */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-amber-900/80 block">
                      REGISTRO HISTÓRICO Nº 1810-1885
                    </span>
                    <span className="text-xs font-serif italic text-stone-700">
                      Vila Imperial de Papary · Rio Grande do Norte
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-amber-900/30 flex items-center justify-center bg-amber-50">
                    <Sparkles className="w-4 h-4 text-amber-800" />
                  </div>
                </div>

                {/* SVG Architectural & Botanical silhouette */}
                <div className="py-2 text-center my-auto">
                  <svg 
                    viewBox="0 0 280 90" 
                    className="w-full h-24 mx-auto text-stone-700" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.2"
                  >
                    {/* Church outline */}
                    <path d="M 40 75 L 40 45 L 60 25 L 80 45 L 80 75 Z" />
                    <line x1="60" y1="15" x2="60" y2="25" strokeWidth="1.8" />
                    <line x1="55" y1="18" x2="65" y2="18" strokeWidth="1.8" />
                    <path d="M 52 50 A 8 8 0 0 1 68 50 L 68 75 L 52 75 Z" />
                    {/* Baobab tree outline */}
                    <path d="M 140 75 C 135 60 135 48 128 42 C 122 36 120 28 125 22 C 132 14 148 14 155 22 C 160 28 158 36 152 42 C 145 48 145 60 140 75 Z" fill="#E2DAC9" fillOpacity="0.5" />
                    {/* Sea waves and cliffs */}
                    <path d="M 180 75 C 190 55 200 48 215 52 C 230 56 240 40 255 45 L 260 75 Z" />
                    <path d="M 10 75 Q 140 78 270 75" strokeDasharray="2 3" />
                  </svg>
                  <p className="text-xs font-serif italic text-stone-800 mt-1">
                    "A educação da mulher é o primeiro passo para a liberdade de um povo."
                  </p>
                  <span className="text-[11px] font-sans text-stone-500 uppercase tracking-wider block mt-0.5">
                    — Dionísia Gonçalves Pinto (Nísia Floresta)
                  </span>
                </div>

                <div className="flex justify-between items-center text-[11px] text-stone-600 border-t border-stone-300 pt-2 font-mono">
                  <span>6°05'S 35°12'W</span>
                  <span className="text-amber-900 font-sans font-medium">Circuito Potiguar Sul</span>
                </div>
              </div>

              {/* 3 Quick Highlight Tags */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 bg-white/70 rounded border border-stone-200">
                  <span className="font-serif font-bold text-stone-900 text-sm block">1º Livro</span>
                  <span className="text-stone-500 text-[11px]">Feminista BR (1832)</span>
                </div>
                <div className="p-2 bg-white/70 rounded border border-stone-200">
                  <span className="font-serif font-bold text-stone-900 text-sm block">1877</span>
                  <span className="text-stone-500 text-[11px]">Baobá Histórico</span>
                </div>
                <div className="p-2 bg-white/70 rounded border border-stone-200">
                  <span className="font-serif font-bold text-stone-900 text-sm block">26 Lagoas</span>
                  <span className="text-stone-500 text-[11px]">Mananciais Vivos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pattern A: Operational Utility Ribbon */}
        <div className="mt-14 pt-4 pb-4 px-5 bg-stone-900 text-stone-200 rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-medium uppercase tracking-wider text-[11px]">Localização:</span>
              <span>40 km ao sul de Natal (Acesso via BR-101 / RN-063)</span>
            </div>
            <span className="hidden md:inline text-stone-600" aria-hidden="true">|</span>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-medium uppercase tracking-wider text-[11px]">Patrimônio Tombado:</span>
              <span>Igreja Matriz (1702), Baobá (1877) e Renda Labirinto</span>
            </div>
            <span className="hidden md:inline text-stone-600" aria-hidden="true">|</span>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-medium uppercase tracking-wider text-[11px]">Acesso aos Atrativos:</span>
              <span>Centros culturais e praças públicas com visitação gratuita</span>
            </div>
          </div>
          <a
            href="#rotas-turisticas"
            onClick={onExploreRoutes}
            className="text-amber-300 hover:text-white transition-colors underline-offset-4 hover:underline whitespace-nowrap text-xs font-medium flex items-center gap-1 shrink-0"
          >
            Ver as 4 Rotas Temáticas →
          </a>
        </div>

      </div>
    </section>
  );
};
