import React, { useState } from 'react';
import { Compass, Menu, X, BookOpen, MapPin, Printer } from 'lucide-react';

interface HeaderProps {
  onOpenPlanner: () => void;
  onOpenGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPlanner, onOpenGuide }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones */}
        <div className="flex items-center justify-between h-18">
          
          {/* Zone 1: Single text element wordmark */}
          <a 
            href="#" 
            className="text-lg md:text-xl font-serif font-bold tracking-tight text-stone-900 hover:text-amber-900 transition-colors whitespace-nowrap"
          >
            Nísia Floresta · Patrimônio & Turismo
          </a>

          {/* Zone 2: 4-6 nav links, single-line, subtle hover underlines */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a href="#historia-nisia" className="hover:text-stone-900 transition-colors underline-offset-4 hover:underline">
              História
            </a>
            <a href="#patrimonio-catalogo" className="hover:text-stone-900 transition-colors underline-offset-4 hover:underline">
              Patrimônio
            </a>
            <a href="#rotas-turisticas" className="hover:text-stone-900 transition-colors underline-offset-4 hover:underline">
              Rotas
            </a>
            <a href="#mapa-interativo" className="hover:text-stone-900 transition-colors underline-offset-4 hover:underline">
              Mapa
            </a>
            <a href="#cultura-viva" className="hover:text-stone-900 transition-colors underline-offset-4 hover:underline">
              Tradições
            </a>
            <a href="#plano-desenvolvimento" className="hover:text-stone-900 transition-colors underline-offset-4 hover:underline">
              Desenvolvimento
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenGuide}
              className="px-3.5 py-2 text-xs font-medium text-stone-700 hover:text-stone-950 border border-stone-300 rounded-md hover:bg-stone-100 transition-colors whitespace-nowrap flex items-center gap-1.5"
              aria-label="Abrir guia do visitante"
            >
              <BookOpen className="w-3.5 h-3.5 text-stone-500" />
              Guia Prático
            </button>
            <button
              onClick={onOpenPlanner}
              className="px-4 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 shadow-sm"
              aria-label="Montar roteiro turístico"
            >
              <Compass className="w-3.5 h-3.5" />
              Montar Roteiro
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenPlanner}
              className="p-2 text-xs font-medium text-amber-950 bg-amber-100/70 rounded-md"
              aria-label="Roteiro rápido"
            >
              <Compass className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-950 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FBF9F5] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-stone-700">
            <a 
              href="#historia-nisia" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-stone-100 rounded"
            >
              História de Nísia Floresta
            </a>
            <a 
              href="#patrimonio-catalogo" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-stone-100 rounded"
            >
              Catálogo de Patrimônio
            </a>
            <a 
              href="#rotas-turisticas" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-stone-100 rounded"
            >
              Rotas Turísticas
            </a>
            <a 
              href="#mapa-interativo" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-stone-100 rounded"
            >
              Mapa do Território
            </a>
            <a 
              href="#cultura-viva" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-stone-100 rounded"
            >
              Sabores & Artesanato
            </a>
            <a 
              href="#plano-desenvolvimento" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-stone-100 rounded"
            >
              Plano de Turismo Sustentável
            </a>
          </nav>
          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuide();
              }}
              className="w-full py-2.5 text-center text-xs font-medium text-stone-800 border border-stone-300 rounded-md"
            >
              Consultar Guia Prático do Visitante
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanner();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-amber-900 rounded-md"
            >
              Personalizar Meu Roteiro
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
