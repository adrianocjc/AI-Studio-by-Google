import React, { useEffect } from 'react';
import { X, Navigation, AlertTriangle, ShieldCheck, Sun, Compass, HeartHandshake, PhoneCall } from 'lucide-react';

interface VisitorGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitorGuideModal: React.FC<VisitorGuideModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
        aria-labelledby="visitor-guide-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-300 bg-[#F4EFE6]">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-900" />
            <h2 id="visitor-guide-title" className="text-lg font-serif font-bold text-stone-900">
              Guia Prático do Visitante · Nísia Floresta (RN)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-md hover:bg-stone-200 transition-colors"
            aria-label="Fechar guia do visitante"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans text-xs sm:text-sm">
          
          {/* Section 1: Como Chegar */}
          <div>
            <h3 className="text-base font-serif font-bold text-stone-900 mb-2 flex items-center gap-1.5">
              <Navigation className="w-4 h-4 text-amber-800" />
              Como Chegar a Nísia Floresta
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-stone-700">
              <div className="bg-white p-3.5 rounded border border-stone-200">
                <strong className="block text-stone-900 text-xs mb-1">Saindo de Natal (Centro / Sul)</strong>
                <p className="text-xs leading-relaxed">
                  Aproximadamente 40 km. Siga pela BR-101 Sul até São José de Mipibu e entre na RN-063, ou siga pela Rota do Sol costeira (Ponta Negra → Cotovelo → Pirangi → Búzios → Tabatinga).
                </p>
              </div>

              <div className="bg-white p-3.5 rounded border border-stone-200">
                <strong className="block text-stone-900 text-xs mb-1">Saindo da Praia da Pipa</strong>
                <p className="text-xs leading-relaxed">
                  Cerca de 35 km ao norte via balsa de Tibau do Sul / bacia de Guaraíras e orla de Barreta/Camurupim, ou pela BR-101.
                </p>
              </div>

              <div className="bg-white p-3.5 rounded border border-stone-200">
                <strong className="block text-stone-900 text-xs mb-1">Aeroporto Aluízio Alves (NAT)</strong>
                <p className="text-xs leading-relaxed">
                  Cerca de 55 km via anel viário e BR-101 Sul. Tempo médio estimado de 50 a 60 minutos de automóvel.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Melhor Época & Marés */}
          <div>
            <h3 className="text-base font-serif font-bold text-stone-900 mb-2 flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-amber-800" />
              Clima, Melhor Época e Tábua de Marés
            </h3>
            <div className="bg-white p-4 rounded border border-stone-200 space-y-2 text-stone-700 text-xs leading-relaxed">
              <p>
                <strong>Estação Seca (Setembro a Março): </strong> Sol constante, águas das lagoas e do mar no ápice da transparência e marés calmas, perfeito para roteiros costeiros e banhos em Camurupim.
              </p>
              <p>
                <strong>Pedra Oca & Piscinas Naturais: </strong> Para entrar na caverna da Pedra Oca com segurança, consulte a tábua de marés da Marinha e visite com maré baixa igual ou inferior a 0.4 metros.
              </p>
            </div>
          </div>

          {/* Section 3: Código de Conduta e Preservação */}
          <div>
            <h3 className="text-base font-serif font-bold text-stone-900 mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-700" />
              Segurança e Preservação do Patrimônio Natural
            </h3>
            <div className="bg-rose-50 border border-rose-200 p-4 rounded text-rose-950 text-xs leading-relaxed space-y-2">
              <p>
                <strong>Atenção nas Falésias de Tabatinga: </strong> Nunca ultrapasse as cercas de segurança nem caminhe rente à borda superior das falésias de argila; a erosão natural contínua cria risco real de desprendimento geológico.
              </p>
              <p>
                <strong>Proteção das Lagoas: </strong> Proibido descarte de resíduos ou lavagem de veículos nas margens das 26 lagoas. O ecossistema abriga espécies ameaçadas e abastece a população local.
              </p>
            </div>
          </div>

          {/* Section 4: Valorização das Rendeiras */}
          <div>
            <h3 className="text-base font-serif font-bold text-stone-900 mb-2 flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-emerald-800" />
              Turismo Comunitário Consciente
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed bg-white p-3.5 rounded border border-stone-200">
              Ao adquirir toalhas de labirinto ou peças de renda de bilro em Alcaçuz e Barreta, priorize a compra direta com as artesãs ou em suas associações registradas. O preço justo retém o valor na comunidade e garante que as jovens gerações continuem a aprender a arte.
            </p>
          </div>

          {/* Section 5: Telefones de Apoio */}
          <div className="pt-2 border-t border-stone-200">
            <h4 className="font-semibold text-stone-900 text-xs mb-2 flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-stone-700" />
              Contatos Úteis & Informações Institucionais
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600 font-mono">
              <div className="bg-stone-100 p-2 rounded">
                Secretaria de Turismo & Cultura: (84) 3277-2244
              </div>
              <div className="bg-stone-100 p-2 rounded">
                Centro Cultural Nísia Floresta: (84) 3277-2380
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end px-6 py-3 border-t border-stone-300 bg-[#F4EFE6]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded transition-colors"
          >
            Entendido, Fechar Guia
          </button>
        </div>
      </div>
    </div>
  );
};
