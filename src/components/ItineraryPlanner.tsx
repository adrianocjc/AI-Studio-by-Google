import React, { useState, useMemo } from 'react';
import { Compass, Calendar, Clock, MapPin, Copy, Printer, Check, Trash2, Sparkles, Car, Bike } from 'lucide-react';
import { HERITAGE_SITES, TOURIST_ROUTES } from '../data/heritageData';
import { HeritageSite } from '../types';

interface ItineraryPlannerProps {
  selectedSiteIds: string[];
  onToggleSite: (siteId: string) => void;
  onClearPlanner: () => void;
}

export const ItineraryPlanner: React.FC<ItineraryPlannerProps> = ({
  selectedSiteIds,
  onToggleSite,
  onClearPlanner,
}) => {
  const [duration, setDuration] = useState<'1dia' | '2dias' | '3dias'>('1dia');
  const [profile, setProfile] = useState<'historico' | 'ecoturismo' | 'familiar' | 'aventura'>('historico');
  const [transport, setTransport] = useState<'carro' | 'buggy' | 'bike'>('carro');
  const [copied, setCopied] = useState(false);

  // Selected sites objects
  const selectedSites = useMemo(() => {
    return HERITAGE_SITES.filter((site) => selectedSiteIds.includes(site.id));
  }, [selectedSiteIds]);

  // Dynamic day-by-day itinerary generation
  const itinerarySchedule = useMemo(() => {
    if (duration === '1dia') {
      return [
        {
          day: 'Dia 1: O Essencial de Nísia Floresta',
          slots: [
            {
              time: '08:30 – 10:00',
              period: 'Manhã',
              title: 'Centro Histórico & Igreja Matriz de N. Sra. do Ó',
              desc: 'Visita ao templo colonial do século XVIII e caminhada pelo calçamento da antiga Vila de Papary.',
              loc: 'Centro'
            },
            {
              time: '10:00 – 11:30',
              period: 'Manhã',
              title: 'Mausoléu de Nísia Floresta & Baobá Centenário',
              desc: 'Reverência à patrona feminista no memorial, seguida de pausa poética sob a copa do Baobá de 1877.',
              loc: 'Centro Urbano'
            },
            {
              time: '12:00 – 14:00',
              period: 'Almoço',
              title: 'Almoço Típico com Peixada ou Carne de Sol',
              desc: 'Parada gastronômica com ingredientes frescos e tapioca tradicional da terra.',
              loc: 'Centro / Margens da Lagoa'
            },
            {
              time: '14:30 – 16:30',
              period: 'Tarde',
              title: 'Polo das Rendeiras de Alcaçuz & Renda Labirinto',
              desc: 'Conheça as mestras do bordado secular e adquira peças autênticas diretamente de quem produz.',
              loc: 'Comunidade de Alcaçuz'
            },
            {
              time: '17:00 – 18:00',
              period: 'Fim de Tarde',
              title: 'Mirante dos Golfinhos em Tabatinga',
              desc: 'Contemplação do pôr do sol no alto das falésias com avistamento de golfinhos na enseada.',
              loc: 'Barra de Tabatinga'
            }
          ]
        }
      ];
    } else if (duration === '2dias') {
      return [
        {
          day: 'Dia 1: Letras, Memória e Artesanato Tradicional',
          slots: [
            {
              time: '09:00 – 10:30',
              period: 'Manhã',
              title: 'Igreja Matriz & Antiga Vila de Papary',
              desc: 'Exploração da história barroca e fundação da cidade.',
              loc: 'Centro Histórico'
            },
            {
              time: '10:45 – 12:00',
              period: 'Manhã',
              title: 'Museu e Mausoléu de Nísia Floresta',
              desc: 'Visita mediada ao acervo e livros originais de Dionísia Gonçalves Pinto.',
              loc: 'Centro'
            },
            {
              time: '12:30 – 14:00',
              period: 'Almoço',
              title: 'Degustação de Culinária Rural & Alambique',
              desc: 'Cachaças artesanais, rapadura quente e pratos tradicionais da várzea.',
              loc: 'Zona dos Engenhos'
            },
            {
              time: '14:30 – 17:00',
              period: 'Tarde',
              title: 'Comunidade de Alcaçuz & Tradição do Labirinto',
              desc: 'Oficina de observação com as rendeiras e visita à Lagoa de Alcaçuz.',
              loc: 'Alcaçuz'
            }
          ]
        },
        {
          day: 'Dia 2: Lagoas Cristalinas, Falésias e Golfinhos',
          slots: [
            {
              time: '08:30 – 11:30',
              period: 'Manhã',
              title: 'Parque Estadual e Lagoa do Bonfim',
              desc: 'A maior lagoa potiguar: banho revigorante de água doce e trilha de mata atlântica.',
              loc: 'Bonfim'
            },
            {
              time: '12:00 – 14:00',
              period: 'Almoço',
              title: 'Praia de Camurupim & Almoço de Frutos do Mar',
              desc: 'Gingado com tapioca, peixada e banho nas piscinas calmas do arrecife.',
              loc: 'Camurupim'
            },
            {
              time: '14:30 – 16:30',
              period: 'Tarde',
              title: 'Exploração da Pedra Oca (Maré Baixa) & Lagoa de Arituba',
              desc: 'Passeio pela caverna de arenito costeira e lazer na Lagoa de Arituba.',
              loc: 'Camurupim / Arituba'
            },
            {
              time: '16:45 – 18:00',
              period: 'Pôr do Sol',
              title: 'Mirante de Tabatinga',
              desc: 'Encerramento no espetacular mirante das falésias observando golfinhos-rotadores.',
              loc: 'Tabatinga'
            }
          ]
        }
      ];
    } else {
      return [
        {
          day: 'Dia 1: Raízes Literárias e História Imperial',
          slots: [
            { time: '09:00 – 12:00', period: 'Manhã', title: 'Circuito Central: Matriz, Museu Nísia Floresta e Baobá', desc: 'Imersão no berço da primeira feminista brasileira.', loc: 'Centro' },
            { time: '14:00 – 17:00', period: 'Tarde', title: 'Antiga Estação Ferroviária & Engenho Papary', desc: 'Memória da Great Western Railway e civilização da cana.', loc: 'Área Rural' }
          ]
        },
        {
          day: 'Dia 2: Tradição Viva e Ecoturismo nas Lagoas',
          slots: [
            { time: '08:30 – 12:30', period: 'Manhã', title: 'Lagoa do Bonfim & Trilhas da APA Guaraíras', desc: 'Caiaque, banho de água doce e observação de aves nativas.', loc: 'Bonfim' },
            { time: '14:00 – 17:00', period: 'Tarde', title: 'Mestras Rendeiras de Alcaçuz & Lagoa do Carcará', desc: 'Turismo comunitário autêntico e águas transparentes.', loc: 'Alcaçuz' }
          ]
        },
        {
          day: 'Dia 3: Costa Oceânica, Falésias Vivas e Pescadores',
          slots: [
            { time: '08:00 – 11:30', period: 'Manhã', title: 'Mirante dos Golfinhos & Falésias de Tabatinga', desc: 'Observação dos golfinhos nas primeiras horas do dia.', loc: 'Tabatinga' },
            { time: '12:00 – 15:30', period: 'Almoço', title: 'Praia de Camurupim, Pedra Oca e Lagoa de Arituba', desc: 'Piscinas de recife e gastronomia marítima potiguar.', loc: 'Camurupim' },
            { time: '16:00 – 18:00', period: 'Pôr do Sol', title: 'Vila Tradicional de Barreta & Foz do Trairi', desc: 'Encontro com mestres de pesca e pôr do sol inesquecível.', loc: 'Barreta' }
          ]
        }
      ];
    }
  }, [duration, profile, transport]);

  const handleCopy = () => {
    let text = `ROTEIRO PERSONALIZADO EM NÍSIA FLORESTA (RN)\n`;
    text += `Duração: ${duration === '1dia' ? '1 Dia (Express)' : duration === '2dias' ? '2 Dias (Fim de Semana)' : '3 Dias (Imersão)'}\n`;
    text += `Transporte Sugerido: ${transport.toUpperCase()}\n\n`;

    itinerarySchedule.forEach((d) => {
      text += `=== ${d.day} ===\n`;
      d.slots.forEach((s) => {
        text += `[${s.time}] ${s.title} (${s.loc})\n  ${s.desc}\n`;
      });
      text += `\n`;
    });

    if (selectedSites.length > 0) {
      text += `Sítios Históricos Marcados como Prioridade:\n`;
      selectedSites.forEach((s) => {
        text += `- ${s.name} (${s.catalogNumber}) - ${s.location.district}\n`;
      });
    }

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="planejador-roteiro" className="py-20 bg-[#FAF7F0] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Curatorial Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-900 font-sans mb-2 font-semibold">
            <span>Planejador Interativo do Visitante</span>
            <span aria-hidden="true">·</span>
            <span>Turismo Consciente & Sustentável</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-stone-900 tracking-tight">
            Monte Seu Roteiro Cultural e Natural
          </h2>
          <p className="mt-3 text-stone-600 font-serif text-base sm:text-lg">
            Personalize seu itinerário conforme seu tempo disponível, interesse temático e estilo de viagem. Exporte, imprima ou compartilhe seu plano sob medida.
          </p>
        </div>

        {/* Configuration Bar */}
        <div className="bg-white border border-stone-300 rounded-lg p-6 mb-8 shadow-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Control 1: Duration */}
            <div>
              <label className="text-xs uppercase font-mono tracking-wider text-stone-500 block mb-2 font-semibold">
                1. Duração da Sua Estadia
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDuration('1dia')}
                  className={`flex-1 py-2 px-3 text-xs font-semibold rounded border transition-colors ${
                    duration === '1dia'
                      ? 'bg-amber-900 text-white border-amber-950'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  1 Dia (Express)
                </button>
                <button
                  onClick={() => setDuration('2dias')}
                  className={`flex-1 py-2 px-3 text-xs font-semibold rounded border transition-colors ${
                    duration === '2dias'
                      ? 'bg-amber-900 text-white border-amber-950'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  2 Dias (Fim de Semana)
                </button>
                <button
                  onClick={() => setDuration('3dias')}
                  className={`flex-1 py-2 px-3 text-xs font-semibold rounded border transition-colors ${
                    duration === '3dias'
                      ? 'bg-amber-900 text-white border-amber-950'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  3 Dias (Imersão)
                </button>
              </div>
            </div>

            {/* Control 2: Focus Profile */}
            <div>
              <label className="text-xs uppercase font-mono tracking-wider text-stone-500 block mb-2 font-semibold">
                2. Foco da Experiência
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setProfile('historico')}
                  className={`py-2 px-2 text-xs font-semibold rounded border text-center transition-colors ${
                    profile === 'historico'
                      ? 'bg-amber-900 text-white border-amber-950'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  História & Nísia
                </button>
                <button
                  onClick={() => setProfile('ecoturismo')}
                  className={`py-2 px-2 text-xs font-semibold rounded border text-center transition-colors ${
                    profile === 'ecoturismo'
                      ? 'bg-amber-900 text-white border-amber-950'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  Lagoas & Natureza
                </button>
              </div>
            </div>

            {/* Control 3: Transportation */}
            <div>
              <label className="text-xs uppercase font-mono tracking-wider text-stone-500 block mb-2 font-semibold">
                3. Meio de Deslocamento
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTransport('carro')}
                  className={`flex-1 py-2 px-2 text-xs font-semibold rounded border transition-colors flex items-center justify-center gap-1 ${
                    transport === 'carro'
                      ? 'bg-amber-900 text-white border-amber-950'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  Carro
                </button>
                <button
                  onClick={() => setTransport('buggy')}
                  className={`flex-1 py-2 px-2 text-xs font-semibold rounded border transition-colors flex items-center justify-center gap-1 ${
                    transport === 'buggy'
                      ? 'bg-amber-900 text-white border-amber-950'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Buggy
                </button>
                <button
                  onClick={() => setTransport('bike')}
                  className={`flex-1 py-2 px-2 text-xs font-semibold rounded border transition-colors flex items-center justify-center gap-1 ${
                    transport === 'bike'
                      ? 'bg-amber-900 text-white border-amber-950'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  <Bike className="w-3.5 h-3.5" />
                  Bicicleta
                </button>
              </div>
            </div>

          </div>

          {/* User selected sites badge list */}
          {selectedSites.length > 0 && (
            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-stone-800">Sítios selecionados no catálogo ({selectedSites.length}):</span>
                {selectedSites.map((s) => (
                  <span
                    key={s.id}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-stone-100 rounded text-stone-800 border border-stone-300"
                  >
                    <span>{s.name}</span>
                    <button
                      onClick={() => onToggleSite(s.id)}
                      className="text-stone-400 hover:text-stone-900 ml-1"
                      aria-label={`Remover ${s.name}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>

              <button
                onClick={onClearPlanner}
                className="text-xs text-rose-800 hover:text-rose-950 font-medium flex items-center gap-1 underline underline-offset-2"
              >
                <Trash2 className="w-3 h-3" />
                Limpar seleção
              </button>
            </div>
          )}
        </div>

        {/* Generated Schedule Grid */}
        <div className="space-y-8">
          {itinerarySchedule.map((dayGroup, idx) => (
            <div
              key={idx}
              className="bg-[#F4EFE6] border border-stone-300 rounded-lg p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-stone-300 pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase font-mono text-amber-900 font-bold tracking-wider">
                    PLANEJAMENTO CRONOLÓGICO
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                    {dayGroup.day}
                  </h3>
                </div>
                <Calendar className="w-5 h-5 text-stone-500" />
              </div>

              <div className="space-y-4">
                {dayGroup.slots.map((slot, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-white p-4 sm:p-5 rounded-lg border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-28 shrink-0 font-mono text-xs font-semibold text-amber-950 bg-amber-50 p-2 rounded border border-amber-200 text-center">
                        <Clock className="w-3.5 h-3.5 mx-auto mb-1 text-amber-800" />
                        <span>{slot.time}</span>
                      </div>
                      <div>
                        <span className="text-[11px] font-sans uppercase tracking-wider text-stone-400 font-semibold block mb-0.5">
                          {slot.period} · {slot.loc}
                        </span>
                        <h4 className="text-base font-serif font-bold text-stone-900">
                          {slot.title}
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 font-sans leading-relaxed">
                          {slot.desc}
                        </p>
                      </div>
                    </div>

                    <div className="sm:text-right shrink-0">
                      <span className="text-[11px] font-sans text-emerald-800 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                        Recomendado
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar (Print / Copy / Export) */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 bg-white p-5 rounded-lg border border-stone-300 shadow-sm">
          <div className="text-xs text-stone-600 font-sans">
            Roteiro estruturado conforme diretrizes de capacidade de carga e turismo de base comunitária.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="px-4 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded transition-colors inline-flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  Roteiro Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-600" />
                  Copiar Roteiro em Texto
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded transition-colors inline-flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              Imprimir / Salvar PDF
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
