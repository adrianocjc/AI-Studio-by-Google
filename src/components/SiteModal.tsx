import React, { useEffect } from 'react';
import { X, MapPin, Clock, Ticket, Accessibility, Compass, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { HeritageSite } from '../types';

interface SiteModalProps {
  site: HeritageSite | null;
  onClose: () => void;
  onAddToPlanner: (siteId: string) => void;
  isAddedToPlanner: boolean;
}

export const SiteModal: React.FC<SiteModalProps> = ({
  site,
  onClose,
  onAddToPlanner,
  isAddedToPlanner
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (site) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [site, onClose]);

  if (!site) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#FAF7F0] border border-stone-300 rounded-lg shadow-xl my-8 overflow-hidden text-stone-900"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-site-title"
      >
        {/* Top Header Strip with Archival Accession Number */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-300 bg-[#F4EFE6]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-amber-900 px-2 py-0.5 border border-amber-900/30 rounded bg-amber-50">
              {site.catalogNumber}
            </span>
            <span className="text-xs text-stone-600 font-sans uppercase tracking-wider">
              {site.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-md hover:bg-stone-200 transition-colors"
            aria-label="Fechar ficha do patrimônio"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Title and Summary */}
          <div>
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
              <span>{site.century}</span>
              {site.yearEstablished && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>Fundação: {site.yearEstablished}</span>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-medium">{site.conservationStatus}</span>
            </div>
            <h2 id="modal-site-title" className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              {site.name}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-700 font-serif leading-relaxed italic border-l-2 border-amber-800 pl-4">
              "{site.summary}"
            </p>
          </div>

          {/* Accession Metadata Grid (Pattern B: dl with hairline dividers) */}
          <div className="bg-white rounded border border-stone-200 p-4 text-xs font-sans">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              <div className="border-b border-stone-100 pb-2">
                <dt className="text-stone-500 uppercase tracking-wider text-[10px]">Localização & Bairro</dt>
                <dd className="font-medium text-stone-800 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                  {site.location.district} ({site.location.coordinates})
                </dd>
              </div>

              <div className="border-b border-stone-100 pb-2">
                <dt className="text-stone-500 uppercase tracking-wider text-[10px]">Horário de Visitação</dt>
                <dd className="font-medium text-stone-800 flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-stone-600 shrink-0" />
                  {site.visitingInfo.hours}
                </dd>
              </div>

              <div className="border-b border-stone-100 pb-2">
                <dt className="text-stone-500 uppercase tracking-wider text-[10px]">Entrada / Ingresso</dt>
                <dd className="font-medium text-stone-800 flex items-center gap-1.5 mt-0.5">
                  <Ticket className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  {site.visitingInfo.admission}
                </dd>
              </div>

              <div className="border-b border-stone-100 pb-2">
                <dt className="text-stone-500 uppercase tracking-wider text-[10px]">Acessibilidade</dt>
                <dd className="font-medium text-stone-800 flex items-center gap-1.5 mt-0.5">
                  <Accessibility className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                  {site.visitingInfo.accessibility}
                </dd>
              </div>
            </dl>
          </div>

          {/* Full History / Memorial Context */}
          <div>
            <h3 className="text-base font-serif font-bold text-stone-900 mb-2">
              Contexto Histórico & Origem
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed font-sans">
              {site.fullHistory}
            </p>
          </div>

          {/* Highlights List */}
          <div>
            <h3 className="text-base font-serif font-bold text-stone-900 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-800" />
              Pontos de Destaque na Visita
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
              {site.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 bg-stone-100/70 p-2.5 rounded border border-stone-200">
                  <span className="text-amber-900 font-bold">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tourism Development Potential */}
          <div className="p-4 bg-amber-50/80 rounded border border-amber-200 text-xs">
            <h4 className="font-semibold text-amber-950 mb-1">
              Papel no Desenvolvimento Turístico de Nísia Floresta:
            </h4>
            <p className="text-amber-900 leading-relaxed font-sans">
              {site.tourismPotential}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-stone-300 bg-[#F4EFE6]">
          <span className="text-xs text-stone-500">
            Tempo sugerido: {site.visitingInfo.recommendedTime}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onAddToPlanner(site.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                isAddedToPlanner
                  ? 'bg-emerald-800 text-white'
                  : 'bg-amber-900 hover:bg-amber-950 text-white'
              }`}
            >
              {isAddedToPlanner ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Incluído no Meu Roteiro
                </>
              ) : (
                <>
                  <Compass className="w-3.5 h-3.5" />
                  Incluir no Meu Roteiro
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 rounded-md transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
