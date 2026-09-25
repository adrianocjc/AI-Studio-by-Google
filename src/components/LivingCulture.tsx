import React, { useState } from 'react';
import { Sparkles, Utensils, Heart, Scissors, Check, Users } from 'lucide-react';
import { CULINARY_TRADITIONS, ARTISAN_TRADITIONS } from '../data/heritageData';

export const LivingCulture: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'artesanato' | 'gastronomia' | 'folguedos'>('artesanato');

  return (
    <section id="cultura-viva" className="py-20 bg-[#F4EFE6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-sans mb-2 font-semibold">
            <span>Patrimônio Cultural Imaterial</span>
            <span aria-hidden="true">·</span>
            <span>Identidade Potiguar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 tracking-tight">
            Saberes Vivos: Rendas de Labirinto, Sabores e Tradições
          </h2>
          <p className="mt-3 text-stone-700 font-serif text-base sm:text-lg leading-relaxed">
            O turismo sustentável floresce quando valoriza as mãos que tecem a herança imaterial. Em Nísia Floresta, a renda não é apenas artefato; é história feminina, autonomia comunitária e memória viva.
          </p>
        </div>

        {/* Tab Controls (Functional Buttons) */}
        <div className="flex items-center gap-2 p-1.5 bg-[#FAF7F0] border border-stone-300 rounded-lg max-w-md mb-10">
          <button
            onClick={() => setActiveTab('artesanato')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'artesanato'
                ? 'bg-amber-900 text-white shadow-sm'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            <Scissors className="w-3.5 h-3.5" />
            Rendas & Labirinto
          </button>
          <button
            onClick={() => setActiveTab('gastronomia')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'gastronomia'
                ? 'bg-amber-900 text-white shadow-sm'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            Sabores da Terra
          </button>
          <button
            onClick={() => setActiveTab('folguedos')}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'folguedos'
                ? 'bg-amber-900 text-white shadow-sm'
                : 'text-stone-700 hover:text-stone-950'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            Festas & Folguedos
          </button>
        </div>

        {/* Tab 1: Artisan Traditions */}
        {activeTab === 'artesanato' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ARTISAN_TRADITIONS.map((artisan, index) => (
                <div
                  key={index}
                  className="bg-[#FAF7F0] border border-stone-300 rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-mono">
                      <span>COMUNIDADE: {artisan.community.toUpperCase()}</span>
                      <span className="text-rose-800 font-semibold">Herança Viva</span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                      {artisan.craft}
                    </h3>

                    <p className="text-sm text-stone-700 leading-relaxed font-sans mb-4">
                      {artisan.history}
                    </p>

                    <div className="bg-white p-4 rounded border border-stone-200 text-xs text-stone-600 font-sans space-y-2 mb-4">
                      <strong className="text-stone-800 block text-xs">Processo Artesanal Tradicional:</strong>
                      <p className="leading-relaxed">{artisan.process}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200 text-xs text-amber-950 bg-amber-50/70 p-3 rounded">
                    <strong>Salvaguarda Cultural: </strong>
                    {artisan.protection}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial / Curatorial Quote */}
            <div className="bg-[#FAF7F0] border border-stone-300 rounded-lg p-6 sm:p-8 relative">
              <p className="font-serif italic text-lg sm:text-xl text-stone-800 text-center max-w-3xl mx-auto leading-relaxed">
                "O labirinto não é apenas desfiar o tecido; é desfiar a saudade e tecer o sustento da família. Quando o turista valoriza a nossa toalha, ele está valorizando a história das nossas bisavós."
              </p>
              <div className="mt-4 text-center text-xs font-sans text-stone-500">
                — <strong className="text-stone-800">Dona Lindalva</strong>, Mestra Rendeira de Alcaçuz (82 anos)
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Gastronomy */}
        {activeTab === 'gastronomia' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CULINARY_TRADITIONS.map((dish, i) => (
              <div
                key={i}
                className="bg-[#FAF7F0] border border-stone-300 rounded-lg p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-amber-900 font-mono mb-1">
                    <span>{dish.origin}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed mb-4">
                    {dish.description}
                  </p>

                  <div className="bg-white p-3 rounded border border-stone-200 mb-4">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block mb-1">
                      Ingredientes Tradicionais
                    </span>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-700 font-sans">
                      {dish.ingredients.map((ing, idx) => (
                        <span key={idx} className="flex items-center gap-1">
                          <span className="text-amber-800">·</span>
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 text-xs text-stone-600">
                  <strong className="text-stone-800">Onde experimentar: </strong>
                  {dish.whereToFind}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Festivities & Folklore */}
        {activeTab === 'folguedos' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF7F0] border border-stone-300 rounded-lg p-6 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono text-amber-900 font-bold">DEZEMBRO (08 A 18)</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1 mb-2">
                  Festa da Padroeira Nossa Senhora do Ó
                </h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  Tradição de mais de 270 anos reunindo novenas, alvoradas festivas, procissão luminosa pelas ruas históricas, leilões e barracas de comidas típicas na praça central.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 mt-4">
                Local: Igreja Matriz e Praça Coronel José de Araújo.
              </div>
            </div>

            <div className="bg-[#FAF7F0] border border-stone-300 rounded-lg p-6 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono text-amber-900 font-bold">CICLO NATALINO</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1 mb-2">
                  Boi de Reis & Pastoril Potiguar
                </h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  Folguedo popular de dança dramática entoado com rabeca e pandeiro, onde os cordões azul e encarnado cantam loas de louvor e comédia no terreiro das comunidades.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 mt-4">
                Local: Comunidades de Campo de Santana, Alcaçuz e Barreta.
              </div>
            </div>

            <div className="bg-[#FAF7F0] border border-stone-300 rounded-lg p-6 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-mono text-amber-900 font-bold">12 DE OUTUBRO</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1 mb-2">
                  Semana Cultural Nísia Floresta
                </h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  Celebração do aniversário natalício da escritora, com colóquios acadêmicos, saraus de poesia no Baobá, cortejo literário com estudantes e feira de artesanato das rendeiras.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 mt-4">
                Local: Centro Cultural, Museu e Auditório Municipal.
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
