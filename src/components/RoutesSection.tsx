import React, { useState } from 'react';
import { Compass, Clock, MapPin, Footprints, ChevronRight, CheckCircle2, Lightbulb } from 'lucide-react';
import { TOURIST_ROUTES } from '../data/heritageData';
import { TouristRoute } from '../types';

interface RoutesSectionProps {
  onLoadRouteToPlanner: (route: TouristRoute) => void;
}

export const RoutesSection: React.FC<RoutesSectionProps> = ({ onLoadRouteToPlanner }) => {
  const [selectedRoute, setSelectedRoute] = useState<TouristRoute>(TOURIST_ROUTES[0]);

  return (
    <section id="rotas-turisticas" className="py-20 bg-[#F4EFE6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-sans mb-2 font-semibold">
            <span>Roteiros Temáticos Oficiais</span>
            <span aria-hidden="true">·</span>
            <span>4 Circuitos Estruturados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 tracking-tight">
            Rotas Integradas de Desenvolvimento Turístico
          </h2>
          <p className="mt-3 text-stone-700 font-serif text-base sm:text-lg leading-relaxed">
            Circuitos desenhados para conectar o patrimônio edificado e a literatura às comunidades artesãs e às maravilhas ecológicas, promovendo a permanência prolongada do visitante e a economia local.
          </p>
        </div>

        {/* Route Selector Tabs (4 Clean Segmented Functional Buttons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {TOURIST_ROUTES.map((route) => {
            const isSelected = selectedRoute.id === route.id;
            return (
              <button
                key={route.id}
                onClick={() => setSelectedRoute(route)}
                className={`p-4 text-left rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-amber-900 text-white border-amber-950 shadow-md ring-1 ring-amber-900/40'
                    : 'bg-[#FAF7F0] text-stone-800 border-stone-300 hover:border-stone-400 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono opacity-80 mb-1">
                  <span>{route.duration}</span>
                  <span>{route.difficulty}</span>
                </div>
                <h3 className="font-serif font-bold text-sm leading-snug">
                  {route.name}
                </h3>
                <p className={`text-xs mt-1 line-clamp-2 ${isSelected ? 'text-stone-200' : 'text-stone-500'}`}>
                  {route.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Route Detailed Dossier */}
        <div className="bg-[#FAF7F0] border border-stone-300 rounded-lg p-6 sm:p-8 shadow-sm">
          {/* Header of Active Route */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-stone-200 gap-6">
            <div className="max-w-2xl">
              {/* Unboxed metadata */}
              <div className="flex items-center gap-2 text-xs text-stone-500 font-sans mb-1">
                <span>Duração: {selectedRoute.duration}</span>
                <span aria-hidden="true">·</span>
                <span>Distância: {selectedRoute.distance}</span>
                <span aria-hidden="true">·</span>
                <span>Nível: {selectedRoute.difficulty}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                {selectedRoute.name}
              </h3>
              <p className="mt-2 text-stone-600 text-sm font-sans leading-relaxed">
                {selectedRoute.description}
              </p>
              <div className="mt-3 text-xs text-amber-900 font-medium">
                <strong>Público recomendado: </strong>{selectedRoute.idealFor}
              </div>
            </div>

            {/* Action to send to planner */}
            <div className="shrink-0">
              <button
                onClick={() => onLoadRouteToPlanner(selectedRoute)}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-md transition-colors shadow-sm inline-flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4" />
                Adotar Esta Rota no Meu Roteiro
              </button>
            </div>
          </div>

          {/* Sequential Stops (Timeline flow) */}
          <div className="mt-8">
            <h4 className="text-sm font-serif font-bold text-stone-900 uppercase tracking-wider mb-6 flex items-center gap-2">
              <Footprints className="w-4 h-4 text-amber-900" />
              Etapas e Paradas Sequenciais do Circuito
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedRoute.stops.map((stop) => (
                <div
                  key={stop.order}
                  className="bg-white p-5 rounded-lg border border-stone-200 flex flex-col justify-between hover:border-amber-700 transition-colors"
                >
                  <div>
                    {/* Step number badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-mono text-xs font-bold flex items-center justify-center">
                        {stop.order}
                      </span>
                      <span className="text-[11px] font-mono text-stone-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {stop.duration}
                      </span>
                    </div>

                    <h5 className="font-serif font-bold text-stone-900 text-base mb-2">
                      {stop.title}
                    </h5>

                    <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4">
                      {stop.description}
                    </p>
                  </div>

                  {/* Practical local tip */}
                  <div className="pt-3 border-t border-stone-100 text-[11px] text-amber-950 bg-amber-50/60 p-2.5 rounded flex items-start gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                    <span><strong>Dica: </strong>{stop.tip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
