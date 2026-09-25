import React, { useState, useMemo } from 'react';
import { Search, Filter, Compass, Check, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { HERITAGE_SITES } from '../data/heritageData';
import { HeritageSite, HeritageCategory } from '../types';

interface HeritageCatalogProps {
  onSelectSite: (site: HeritageSite) => void;
  plannerSiteIds: string[];
  onTogglePlannerSite: (siteId: string) => void;
}

export const HeritageCatalog: React.FC<HeritageCatalogProps> = ({
  onSelectSite,
  plannerSiteIds,
  onTogglePlannerSite,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: string; label: string }[] = [
    { id: 'todos', label: 'Todos os Monumentos (8)' },
    { id: 'religioso', label: 'Religioso & Barroco' },
    { id: 'literario', label: 'Literário & Memorial' },
    { id: 'natural', label: 'Natural & Paisagístico' },
    { id: 'engenhos', label: 'Engenhos & Rural' },
    { id: 'imaterial', label: 'Artesanato & Imaterial' },
    { id: 'ferroviario', label: 'Ferroviário' },
  ];

  const filteredSites = useMemo(() => {
    return HERITAGE_SITES.filter((site) => {
      const matchesCategory =
        selectedCategory === 'todos' || site.category === selectedCategory;
      const matchesSearch =
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.location.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.catalogNumber.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="patrimonio-catalogo" className="py-20 bg-[#FBF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-sans mb-2 font-semibold">
              <span>Inventário Municipal de Salvaguarda</span>
              <span aria-hidden="true">·</span>
              <span>8 Sítios Catalogados</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 tracking-tight">
              Catálogo do Patrimônio Histórico & Cultural
            </h2>
            <p className="mt-3 text-stone-600 font-serif text-base sm:text-lg">
              Conheça os bens materiais, naturais e saberes imateriais que constituem a identidade de Nísia Floresta e fundamentam as diretrizes de desenvolvimento do turismo sustentável.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nome, bairro, século..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-amber-900 text-stone-900 placeholder:text-stone-400"
              aria-label="Buscar patrimônio"
            />
          </div>
        </div>

        {/* Category Filter Bar (Functional Buttons / Segmented Controls) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#F4EFE6] border border-stone-300 rounded-lg overflow-x-auto mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-amber-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-white/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredSites.length === 0 && (
          <div className="py-16 text-center bg-[#FAF7F0] border border-stone-200 rounded-lg">
            <p className="text-stone-600 font-serif text-base">
              Nenhum monumento encontrado com o termo "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('todos');
              }}
              className="mt-3 text-xs text-amber-900 font-semibold underline underline-offset-4"
            >
              Limpar filtros de busca
            </button>
          </div>
        )}

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSites.map((site) => {
            const isAdded = plannerSiteIds.includes(site.id);
            return (
              <div
                key={site.id}
                className="bg-[#FAF7F0] border border-stone-300 rounded-lg overflow-hidden flex flex-col justify-between hover:border-amber-800 transition-all hover:shadow-md group"
              >
                <div>
                  {/* Card Visual Header with Stylized Graphic Plate */}
                  <div className="h-40 bg-gradient-to-br from-[#F4EFE6] via-[#EBE4D5] to-[#E2D7C3] p-4 border-b border-stone-200 flex flex-col justify-between relative">
                    {/* Accession unboxed label */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold text-stone-700 bg-white/70 px-1.5 py-0.5 rounded border border-stone-300">
                        {site.catalogNumber}
                      </span>
                      <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50/90 px-2 py-0.5 rounded border border-emerald-200">
                        {site.conservationStatus}
                      </span>
                    </div>

                    {/* SVG Graphic Silhouette Representation */}
                    <div className="my-auto text-center opacity-85 group-hover:scale-105 transition-transform duration-300">
                      {site.category === 'religioso' && (
                        <div className="w-12 h-12 mx-auto rounded-full bg-amber-900/10 flex items-center justify-center text-amber-900">
                          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 2v20M7 8h10M4 22h16" />
                          </svg>
                        </div>
                      )}
                      {site.category === 'literario' && (
                        <div className="w-12 h-12 mx-auto rounded-full bg-amber-900/10 flex items-center justify-center text-amber-900">
                          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                            <path d="M6 6h10M6 10h10M6 14h6" />
                          </svg>
                        </div>
                      )}
                      {site.category === 'natural' && (
                        <div className="w-12 h-12 mx-auto rounded-full bg-emerald-900/10 flex items-center justify-center text-emerald-900">
                          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 2L3 17h18L12 2Z" />
                            <path d="M12 9v13M8 17h8" />
                          </svg>
                        </div>
                      )}
                      {site.category === 'ferroviario' && (
                        <div className="w-12 h-12 mx-auto rounded-full bg-blue-900/10 flex items-center justify-center text-blue-900">
                          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect width="16" height="16" x="4" y="4" rx="2" />
                            <path d="M4 11h16M12 4v7M8 16h.01M16 16h.01" />
                          </svg>
                        </div>
                      )}
                      {site.category === 'engenhos' && (
                        <div className="w-12 h-12 mx-auto rounded-full bg-amber-900/10 flex items-center justify-center text-amber-900">
                          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 21h18M6 21V9l6-6 6 6v12M9 14h6" />
                          </svg>
                        </div>
                      )}
                      {site.category === 'imaterial' && (
                        <div className="w-12 h-12 mx-auto rounded-full bg-rose-900/10 flex items-center justify-center text-rose-900">
                          <Sparkles className="w-6 h-6" />
                        </div>
                      )}
                    </div>

                    <div className="text-[11px] font-sans text-stone-500 flex justify-between items-center">
                      <span>{site.century}</span>
                      <span>{site.location.district}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    {/* Unboxed metadata with typographic separator */}
                    <div className="text-xs text-stone-500 mb-2 font-sans flex items-center gap-1.5">
                      <span>{site.categoryLabel.split('&')[0]}</span>
                      <span aria-hidden="true">·</span>
                      <span>{site.visitingInfo.admission}</span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug group-hover:text-amber-950 transition-colors">
                      {site.name}
                    </h3>

                    <p className="mt-2 text-xs text-stone-600 line-clamp-3 leading-relaxed font-sans">
                      {site.summary}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 pt-0 border-t border-stone-200/60 mt-2 space-y-2">
                  <button
                    onClick={() => onSelectSite(site)}
                    className="w-full py-2 px-3 text-xs font-medium text-stone-800 bg-white hover:bg-stone-100 border border-stone-300 rounded transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Ver Ficha Histórica</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
                  </button>

                  <button
                    onClick={() => onTogglePlannerSite(site.id)}
                    className={`w-full py-1.5 px-3 text-xs font-medium rounded transition-colors flex items-center justify-center gap-1.5 ${
                      isAdded
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        : 'text-amber-950 hover:bg-amber-100/60 border border-transparent'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-700" />
                        <span>No meu roteiro</span>
                      </>
                    ) : (
                      <>
                        <Compass className="w-3 h-3 text-amber-900" />
                        <span>Adicionar ao roteiro</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
