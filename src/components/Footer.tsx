import React from 'react';
import { BookOpen, MapPin, Feather, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800 text-xs">
          
          {/* Col 1: Wordmark & Identity */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-white tracking-tight">
              Nísia Floresta · RN
            </h3>
            <p className="text-stone-400 leading-relaxed">
              Portal do Patrimônio Histórico, Cultural e Turismo Sustentável. Preservando a memória da pioneira Dionísia Gonçalves Pinto e valorizando os saberes das rendeiras e as belezas das lagoas e falésias.
            </p>
            <div className="text-[11px] font-mono text-stone-500 pt-1">
              Coordenadas: 6°05'28"S 35°12'31"W
            </div>
          </div>

          {/* Col 2: Patrimônio Catalogado */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-stone-100 text-sm mb-3">
              Monumentos & Sítios
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#patrimonio-catalogo" className="hover:text-amber-300 transition-colors">Igreja Matriz de Nossa Senhora do Ó (1702)</a></li>
              <li><a href="#patrimonio-catalogo" className="hover:text-amber-300 transition-colors">Baobá Centenário de Nísia Floresta (1877)</a></li>
              <li><a href="#patrimonio-catalogo" className="hover:text-amber-300 transition-colors">Museu e Mausoléu Nísia Floresta</a></li>
              <li><a href="#patrimonio-catalogo" className="hover:text-amber-300 transition-colors">Antiga Estação Ferroviária de Papary</a></li>
              <li><a href="#patrimonio-catalogo" className="hover:text-amber-300 transition-colors">Falésias e Mirante dos Golfinhos de Tabatinga</a></li>
            </ul>
          </div>

          {/* Col 3: Circuitos & Rotas */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-stone-100 text-sm mb-3">
              Circuitos Turísticos
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li><a href="#rotas-turisticas" className="hover:text-amber-300 transition-colors">Rota Histórico-Literária</a></li>
              <li><a href="#rotas-turisticas" className="hover:text-amber-300 transition-colors">Rota Sol, Falésias e Golfinhos</a></li>
              <li><a href="#rotas-turisticas" className="hover:text-amber-300 transition-colors">Rota das Lagoas e Tradição do Labirinto</a></li>
              <li><a href="#rotas-turisticas" className="hover:text-amber-300 transition-colors">Circuito Cicloturístico Caminhos de Nísia</a></li>
              <li><a href="#planejador-roteiro" className="hover:text-amber-300 transition-colors">Gerador de Roteiro Personalizado</a></li>
            </ul>
          </div>

          {/* Col 4: Compromisso com a Sustentabilidade */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-stone-100 text-sm mb-3">
              Salvaguarda & Comunidade
            </h4>
            <p className="text-stone-400 leading-relaxed">
              Desenvolvimento planejado com base nos Objetivos de Desenvolvimento Sustentável (ODS/ONU), priorizando a geração de renda para a Associação das Rendeiras de Alcaçuz e a conservação hídrica da APA Bonfim-Guaraíras.
            </p>
            <div className="pt-2 text-stone-500 text-[11px]">
              Rio Grande do Norte · Brasil
            </div>
          </div>

        </div>

        {/* Bottom Unboxed Metadata and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Município de Nísia Floresta</span>
            <span aria-hidden="true">·</span>
            <span>Patrimônio Histórico e Cultural Potiguar</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Turismo Sustentável</span>
            <span aria-hidden="true">·</span>
            <span>Acessibilidade Plena</span>
            <span aria-hidden="true">·</span>
            <span>Preservação da Memória</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
