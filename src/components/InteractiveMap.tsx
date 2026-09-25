import React, { useState } from 'react';
import { MapPin, Navigation, Info, Eye, Compass } from 'lucide-react';
import { HERITAGE_SITES } from '../data/heritageData';
import { HeritageSite } from '../types';

interface InteractiveMapProps {
  onSelectSite: (site: HeritageSite) => void;
}

interface MapMarker {
  id: string;
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  type: 'patrimonio' | 'lagoa' | 'praia' | 'artesanato';
  siteId?: string;
  brief: string;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onSelectSite }) => {
  const [activeMarkerId, setActiveMarkerId] = useState<string>('matriz');

  const markers: MapMarker[] = [
    {
      id: 'matriz',
      name: 'Centro Histórico & Igreja Matriz',
      x: 38,
      y: 45,
      type: 'patrimonio',
      siteId: 'matriz-senhora-do-o',
      brief: 'Igreja barroca de 1702, Praça da Vila Imperial de Papary e casario histórico.'
    },
    {
      id: 'baoba',
      name: 'Baobá Centenário de Nísia Floresta',
      x: 42,
      y: 48,
      type: 'patrimonio',
      siteId: 'baoba-centenario',
      brief: 'Monumental árvore de 1877 com mais de 10m de circunferência.'
    },
    {
      id: 'museu',
      name: 'Museu & Mausoléu Nísia Floresta',
      x: 36,
      y: 48,
      type: 'patrimonio',
      siteId: 'museu-mausoleu-nisia',
      brief: 'Túmulo memorial e cartas históricas da patrona das letras.'
    },
    {
      id: 'estacao',
      name: 'Antiga Estação Ferroviária',
      x: 34,
      y: 38,
      type: 'patrimonio',
      siteId: 'estacao-ferroviaria-papary',
      brief: 'Estação da Great Western Railway inaugurada em 1881.'
    },
    {
      id: 'alcacuz',
      name: 'Comunidade de Alcaçuz (Rendas de Labirinto)',
      x: 46,
      y: 26,
      type: 'artesanato',
      siteId: 'rendas-labirinto-alcacuz',
      brief: 'Mestras bordadeiras e tradição têxtil secular do ponto labirinto.'
    },
    {
      id: 'bonfim',
      name: 'Lagoa do Bonfim (Parque Estadual)',
      x: 24,
      y: 30,
      type: 'lagoa',
      siteId: 'complexo-lacustre-bonfim',
      brief: 'A maior lagoa do Rio Grande do Norte, área de preservação e águas calmas.'
    },
    {
      id: 'arituba',
      name: 'Lagoa de Arituba',
      x: 68,
      y: 55,
      type: 'lagoa',
      brief: 'Lazer aquático, caiaques, tirolesa e restaurantes tradicionais.'
    },
    {
      id: 'carcara',
      name: 'Lagoa do Carcará',
      x: 28,
      y: 68,
      type: 'lagoa',
      brief: 'Águas cristalinas ideais para stand-up paddle e relaxamento.'
    },
    {
      id: 'tabatinga',
      name: 'Mirante dos Golfinhos & Barra de Tabatinga',
      x: 82,
      y: 50,
      type: 'praia',
      siteId: 'mirante-falesias-tabatinga',
      brief: 'Falésias vermelhas e observação diária de golfinhos de vida livre.'
    },
    {
      id: 'camurupim',
      name: 'Praia de Camurupim & Pedra Oca',
      x: 86,
      y: 65,
      type: 'praia',
      brief: 'Piscinas naturais de arrecifes e gruta esculpida pela maré.'
    },
    {
      id: 'barreta',
      name: 'Praia de Barreta',
      x: 89,
      y: 80,
      type: 'praia',
      brief: 'Vila costeira tradicional de pescadores e foz do rio Trairi.'
    }
  ];

  const activeMarker = markers.find((m) => m.id === activeMarkerId) || markers[0];
  const linkedSite = activeMarker.siteId 
    ? HERITAGE_SITES.find(s => s.id === activeMarker.siteId) 
    : null;

  return (
    <section id="mapa-interativo" className="py-20 bg-[#FBF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-sans mb-2 font-semibold">
            <span>Cartografia Cultural do Município</span>
            <span aria-hidden="true">·</span>
            <span>Território de 307 km²</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 tracking-tight">
            Mapa Territorial: Lagoas, Centro Histórico & Falésias
          </h2>
          <p className="mt-3 text-stone-600 font-serif text-base sm:text-lg">
            Navegue pelos pontos de interesse cultural e ambiental de Nísia Floresta. Clique nos marcos para visualizar detalhes geográficos e a relevância de cada localidade.
          </p>
        </div>

        {/* Map Container + Interactive Inspector Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SVG Map Canvas (8 cols) */}
          <div className="lg:col-span-8 bg-[#F4EFE6] border border-stone-300 rounded-lg p-4 sm:p-6 shadow-sm relative overflow-hidden">
            
            {/* Map Canvas Header with Compass */}
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-stone-200 text-xs font-sans text-stone-600">
              <span className="font-semibold text-stone-800">
                Visualização Geográfica de Nísia Floresta (RN)
              </span>
              <div className="flex items-center gap-1 text-[11px] font-mono text-stone-500">
                <Navigation className="w-3.5 h-3.5 text-amber-900" />
                <span>Norte para o Topo (Natal a 40 km)</span>
              </div>
            </div>

            {/* Stylized Vector Cartography Container */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#EDE5D6] rounded border border-stone-300 overflow-hidden select-none">
              
              {/* Background Geographic Land & Water Illustration */}
              <svg viewBox="0 0 1000 700" className="w-full h-full object-cover">
                {/* Atlantic Ocean (Right Side) */}
                <path 
                  d="M 720 0 C 740 150 710 300 760 450 C 790 550 820 620 840 700 L 1000 700 L 1000 0 Z" 
                  fill="#D8E8EC" 
                />

                {/* Reef Barriers in the ocean */}
                <path d="M 780 430 L 800 480 M 820 540 L 845 610" stroke="#94B7C5" strokeWidth="4" strokeDasharray="6 3" />
                <text x="890" y="320" fill="#6A8D9B" fontSize="18" fontFamily="Georgia" fontStyle="italic">
                  Oceano Atlântico
                </text>

                {/* Lagoons (Water bodies in land) */}
                {/* Lagoa do Bonfim */}
                <path 
                  d="M 220 180 C 260 170 300 190 310 240 C 290 280 240 270 210 240 Z" 
                  fill="#BFD8DF" 
                  stroke="#98BCC6" 
                  strokeWidth="2"
                />
                <text x="215" y="225" fill="#3D6874" fontSize="13" fontFamily="sans-serif" fontWeight="600">
                  Lagoa do Bonfim
                </text>

                {/* Lagoa de Alcaçuz */}
                <path 
                  d="M 440 160 C 470 150 490 170 480 200 C 450 210 430 190 440 160 Z" 
                  fill="#BFD8DF" 
                />
                <text x="430" y="150" fill="#3D6874" fontSize="11" fontFamily="sans-serif">
                  L. de Alcaçuz
                </text>

                {/* Lagoa de Arituba */}
                <path 
                  d="M 640 370 C 670 360 690 380 670 410 C 640 400 635 385 640 370 Z" 
                  fill="#BFD8DF" 
                />
                <text x="625" y="360" fill="#3D6874" fontSize="11" fontFamily="sans-serif">
                  L. de Arituba
                </text>

                {/* Lagoa do Carcará */}
                <path 
                  d="M 260 460 C 290 450 310 470 290 500 C 265 495 250 480 260 460 Z" 
                  fill="#BFD8DF" 
                />
                <text x="250" y="450" fill="#3D6874" fontSize="11" fontFamily="sans-serif">
                  L. do Carcará
                </text>

                {/* Historic Railroad (Great Western path) */}
                <path 
                  d="M 320 0 C 330 180 350 260 360 380 C 370 500 390 620 410 700" 
                  fill="none" 
                  stroke="#8B7B6B" 
                  strokeWidth="2.5" 
                  strokeDasharray="4 4" 
                />
                <text x="320" y="50" fill="#786655" fontSize="10" fontFamily="sans-serif">
                  Estrada de Ferro Papary (1881)
                </text>

                {/* Coastal Road (Rota do Sol / RN-063) */}
                <path 
                  d="M 680 0 C 700 180 710 320 740 460 C 760 560 780 650 800 700" 
                  fill="none" 
                  stroke="#C49B71" 
                  strokeWidth="3" 
                />

                {/* Trairi River & Estuary */}
                <path 
                  d="M 400 480 Q 550 520 780 640" 
                  fill="none" 
                  stroke="#98BCC6" 
                  strokeWidth="3.5" 
                />
                <text x="560" y="550" fill="#3D6874" fontSize="10" fontFamily="sans-serif" fontStyle="italic">
                  Rio Trairi
                </text>
              </svg>

              {/* Interactive Clickable Pins */}
              {markers.map((marker) => {
                const isSelected = activeMarkerId === marker.id;
                return (
                  <button
                    key={marker.id}
                    onClick={() => setActiveMarkerId(marker.id)}
                    style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all p-1 group z-10 focus:outline-none`}
                    aria-label={`Ver marco ${marker.name}`}
                  >
                    <div
                      className={`relative rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'w-7 h-7 bg-amber-900 text-white shadow-lg ring-4 ring-amber-300 scale-125'
                          : 'w-5 h-5 bg-white text-stone-800 border-2 border-amber-900 shadow hover:scale-110'
                      }`}
                    >
                      <MapPin className={`${isSelected ? 'w-4 h-4' : 'w-3 h-3'}`} />
                    </div>

                    {/* Tooltip Label on Map */}
                    <span 
                      className={`absolute left-1/2 -translate-x-1/2 top-7 whitespace-nowrap text-[10px] font-sans font-semibold px-2 py-0.5 rounded shadow pointer-events-none transition-all ${
                        isSelected 
                          ? 'bg-stone-900 text-white opacity-100 z-20' 
                          : 'bg-white/90 text-stone-700 opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {marker.name.split('(')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Map Legend */}
            <div className="mt-4 pt-3 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600 font-sans">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-900 inline-block" />
                  Patrimônio Histórico
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block" />
                  Complexo de Lagoas
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block" />
                  Costa e Falésias
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600 inline-block" />
                  Polo Artesanal
                </span>
              </div>
              <span className="text-[11px] text-stone-500">
                Fonte: Cadastro Municipal de Bens Culturais
              </span>
            </div>
          </div>

          {/* Inspector Panel (4 cols) */}
          <div className="lg:col-span-4 bg-[#FAF7F0] border border-stone-300 rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-900 font-semibold mb-1">
              <Info className="w-3.5 h-3.5" />
              <span>Inspetor do Local Selecionado</span>
            </div>

            <h3 className="text-xl font-serif font-bold text-stone-900 mt-2">
              {activeMarker.name}
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
              {activeMarker.brief}
            </p>

            {/* If linked to full heritage site */}
            {linkedSite ? (
              <div className="mt-6 pt-5 border-t border-stone-200 space-y-4">
                <div className="text-xs space-y-1.5 font-sans">
                  <div className="flex justify-between text-stone-600">
                    <span>Nº Tombamento:</span>
                    <span className="font-mono font-bold text-stone-800">{linkedSite.catalogNumber}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Século / Período:</span>
                    <span className="text-stone-800">{linkedSite.century}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Coordenadas:</span>
                    <span className="font-mono text-stone-800">{linkedSite.location.coordinates}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Visitação:</span>
                    <span className="text-emerald-800 font-medium">{linkedSite.visitingInfo.admission}</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectSite(linkedSite)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  Abrir Ficha Completa do Sítio
                </button>
              </div>
            ) : (
              <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-stone-500">
                Ponto de apoio e atrativo ambiental integrado às rotas costeiras e rurais.
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
