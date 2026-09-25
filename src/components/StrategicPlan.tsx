import React from 'react';
import { Target, TrendingUp, ShieldCheck, TreePine, Award, Users2, Landmark } from 'lucide-react';
import { STRATEGIC_PILLARS } from '../data/heritageData';

export const StrategicPlan: React.FC = () => {
  return (
    <section id="plano-desenvolvimento" className="py-20 bg-[#FBF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-sans mb-2 font-semibold">
            <span>Diretrizes Estruturantes de Gestão</span>
            <span aria-hidden="true">·</span>
            <span>2026 – 2032</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 tracking-tight">
            Plano Estratégico de Turismo e Preservação do Patrimônio
          </h2>
          <p className="mt-3 text-stone-600 font-serif text-base sm:text-lg leading-relaxed">
            Como converter o patrimônio histórico, a literatura e a natureza em desenvolvimento socioeconômico real, garantindo a salvaguarda dos bens culturais e a inclusão das comunidades tradicionais.
          </p>
        </div>

        {/* 5 Strategic Pillars Grid (Natural Editorial Numbering) */}
        <div className="space-y-6 mb-16">
          {STRATEGIC_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-[#FAF7F0] border border-stone-300 rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-amber-800 transition-colors shadow-sm"
            >
              <div className="flex items-start gap-5 max-w-3xl">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-amber-900/80 shrink-0 tabular-nums">
                  {pillar.number}.
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans mb-3">
                    {pillar.description}
                  </p>
                  <div className="text-xs text-amber-950 font-medium bg-amber-100/60 py-1.5 px-3 rounded inline-block">
                    <strong>Impacto Esperado: </strong>{pillar.impact}
                  </div>
                </div>
              </div>

              <div className="shrink-0 self-end md:self-center">
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 bg-white px-2 py-1 rounded border border-stone-200">
                  Eixo Prioritário
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quantitative Rigor & Target Metrics Box (Section 1.H) */}
        <div className="bg-stone-900 text-stone-100 rounded-lg p-8 sm:p-10 shadow-lg">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400 block mb-1">
              Metas e Indicadores de Impacto
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Resultados Projetados para o Turismo Sustentável
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 mt-2 font-sans">
              Metas estabelecidas para transformar Nísia Floresta de um polo de passagem rápida em um destino cultural consolidado de permanência.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-stone-800">
            <div className="border-l-2 border-amber-600 pl-4">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-white block tabular-nums">
                2,5 Dias
              </span>
              <span className="text-xs text-stone-300 font-sans mt-1 block">
                Permanência média do turista (anteriormente 0,5 dia em bate-volta).
              </span>
            </div>

            <div className="border-l-2 border-emerald-500 pl-4">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-white block tabular-nums">
                +300
              </span>
              <span className="text-xs text-stone-300 font-sans mt-1 block">
                Famílias de artesãs e condutores locais beneficiadas com renda direta.
              </span>
            </div>

            <div className="border-l-2 border-sky-500 pl-4">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-white block tabular-nums">
                100%
              </span>
              <span className="text-xs text-stone-300 font-sans mt-1 block">
                Dos 8 sítios com sinalização interpretativa bilíngue e QR code.
              </span>
            </div>

            <div className="border-l-2 border-amber-500 pl-4">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-white block tabular-nums">
                Zero
              </span>
              <span className="text-xs text-stone-300 font-sans mt-1 block">
                Impacto predatório em áreas de mananciais lacustres e falésias vivas.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
