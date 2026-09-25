import { HeritageSite, TouristRoute, LiteraryWork, CulinaryTradition, ArtisanTradition } from '../types';

export const HERITAGE_SITES: HeritageSite[] = [
  {
    id: 'matriz-senhora-do-o',
    catalogNumber: 'PAT-NF-01',
    name: 'Igreja Matriz de Nossa Senhora do Ó',
    category: 'religioso',
    categoryLabel: 'Patrimônio Religioso & Arquitetônico',
    century: 'Século XVIII',
    yearEstablished: '1702–1755',
    summary: 'Edificação colonial barroca e centro fundador da antiga Vila de Papary, abrigando séculos de fé, memória e devoção popular.',
    fullHistory: 'Erguida na primeira metade do século XVIII no ponto mais elevado da então freguesia de Papary, a Igreja Matriz é dedicada a Nossa Senhora do Ó. Sua arquitetura colonial barroca de frontão curvilíneo preserva elementos singulares da expansão colonial portuguesa no litoral sul potiguar. No seu entorno estabeleceu-se a vida cívica, o comércio e as primeiras festividades da comunidade. Passou por restauro preservacionista para manter sua alvenaria em pedra e cal e seus retábulos sacros.',
    significance: 'Marco fundacional do município de Nísia Floresta e sede da secular Festa da Padroeira, celebrada anualmente desde o período imperial.',
    tourismPotential: 'Ponto focal para turismo religioso, caminhadas históricas no centro antigo e eventos culturais na praça cívica.',
    location: {
      district: 'Centro Histórico',
      coordinates: '6°05\'28"S 35°12\'31"W',
      access: 'Praça Coronel José de Araújo, Centro de Nísia Floresta. Acesso asfaltado via RN-063.',
    },
    visitingInfo: {
      hours: 'Terça a Domingo, das 08h às 17h (Missas aos sábados 19h e domingos 08h e 19h)',
      admission: 'Gratuita',
      recommendedTime: '45 minutos',
      accessibility: 'Rampa de acesso lateral e calçadas rebaixadas na praça',
    },
    highlights: [
      'Frontão colonial barroco original do século XVIII',
      'Imagem histórica de Nossa Senhora do Ó talhada em madeira policromada',
      'Praça circundante com calçamento tradicional e casarios de época',
      'Sino histórico em bronze de fundição imperial'
    ],
    conservationStatus: 'Preservado',
    accentColor: '#9A3412',
  },
  {
    id: 'baoba-centenario',
    catalogNumber: 'PAT-NF-02',
    name: 'Baobá de Nísia Floresta',
    category: 'natural',
    categoryLabel: 'Monumento Natural & Simbólico',
    century: 'Século XIX',
    yearEstablished: '1877',
    summary: 'Monumento botânico de origem africana com mais de 10 metros de circunferência, símbolo da ancestralidade e da poesia potiguar.',
    fullHistory: 'Plantado em 1877 pelo farmacêutico e agrônomo local José de Guimarães, o Baobá (Adansonia digitata) é uma das árvores mais icônicas de todo o Nordeste brasileiro. Testemunha do século XIX e XX, a árvore gerou poemas, lendas e tornou-se patrimônio protegido. O baobá conecta o Rio Grande do Norte à diáspora africana e simboliza a longevidade da memória dos povos que ergueram a região.',
    significance: 'Um dos maiores e mais antigos espécimes de baobá registrados no Brasil, tombado como patrimônio histórico e ambiental.',
    tourismPotential: 'Atrativo imperdível para turismo botânico, pedagógico e fotográfico, integrado ao circuito de caminhada do centro.',
    location: {
      district: 'Centro Urbano',
      coordinates: '6°05\'35"S 35°12\'22"W',
      access: 'Rua do Baobá, a apenas 300 metros da Igreja Matriz. Espaço com praça e sinalização interpretativa.',
    },
    visitingInfo: {
      hours: 'Acesso público contínuo (aberto 24h, melhor iluminação diurna)',
      admission: 'Gratuita',
      recommendedTime: '30 minutos',
      accessibility: 'Praça plana com calçamento e bancos para descanso',
    },
    highlights: [
      'Circunferência de tronco superior a 10 metros',
      'Placa comemorativa com poema histórico de 1880',
      'Sombra acolhedora e feira de artesanato comunitário aos fins de semana',
      'Ponto central para fotografias memoráveis'
    ],
    conservationStatus: 'Tombado',
    accentColor: '#15803D',
  },
  {
    id: 'museu-mausoleu-nisia',
    catalogNumber: 'PAT-NF-03',
    name: 'Museu e Mausoléu de Nísia Floresta',
    category: 'literario',
    categoryLabel: 'Patrimônio Literário & Memorial',
    century: 'Século XIX–XXI',
    yearEstablished: 'Memorial: 1954 / Museu: Modernizado 2010',
    summary: 'Espaço sagrado de reverência à pioneira dos direitos da mulher no Brasil, guardando seus restos mortais e sua monumental produção intelectual.',
    fullHistory: 'Dionísia Gonçalves Pinto (Nísia Floresta Brasileira Augusta) nasceu no Sítio Floresta em Papary em 1810 e faleceu na França em 1885. Em agosto de 1954, seus restos mortais foram solenemente transladados do cemitério de Bonsecours (Ruão, França) para sua terra natal, repousando hoje no Mausoléu Municipal. O museu contíguo expõe primeiras edições, ensaios, correspondências com intelectuais como Auguste Comte e reconstitui os passos de sua corajosa jornada emancipadora.',
    significance: 'O único memorial fúnebre e museológico dedicado à primeira escritora e educadora abolicionista/feminista das Américas.',
    tourismPotential: 'Epicentro do turismo cultural, educacional e acadêmico nacional e internacional, atraindo pesquisadores e entusiastas dos direitos humanos.',
    location: {
      district: 'Centro Histórico',
      coordinates: '6°05\'31"S 35°12\'28"W',
      access: 'Avenida Coronel José de Araújo, junto ao Centro Cultural.',
    },
    visitingInfo: {
      hours: 'Segunda a Sexta das 08h às 16h; Sábados das 09h às 14h',
      admission: 'Gratuita (visitas guiadas escolares mediante agendamento)',
      recommendedTime: '1 hora e 15 minutos',
      accessibility: 'Total acessibilidade física no piso térreo e expositores táteis',
    },
    highlights: [
      'Cripta histórica com a lápide trazida da França',
      'Exemplares fac-similares de "Direitos das Mulheres e Injustiça dos Homens" (1832)',
      'Painéis cronológicos com a trajetória entre Brasil, França e Itália',
      'Sala de leitura com produções sobre a escritora'
    ],
    conservationStatus: 'Preservado',
    accentColor: '#78350F',
  },
  {
    id: 'estacao-ferroviaria-papary',
    catalogNumber: 'PAT-NF-04',
    name: 'Antiga Estação Ferroviária de Papary',
    category: 'ferroviario',
    categoryLabel: 'Patrimônio Industrial & Ferroviário',
    century: 'Século XIX',
    yearEstablished: '1881',
    summary: 'Marco da arquitetura de ferro e da integração comercial potiguar operada pela histórica Great Western Railway.',
    fullHistory: 'Inaugurada em 1881 durante o Segundo Reinado, a Estação de Papary integrou a linha férrea Natal a Nova Cruz, fundamental para o escoamento da produção dos engenhos de cana-de-açúcar, do algodão e de passageiros do sertão e litoral. O prédio preserva o alpendre em madeira rendilhada, elementos de ferro fundido britânico e as antigas bilheterias, documentando a revolução nos transportes no século XIX.',
    significance: 'Testemunho do ápice econômico da agroindústria canavieira e das transformações urbanas trazidas pelo vapor.',
    tourismPotential: 'Ponto chave para rotas de cicloturismo sobre o antigo leito ferroviário e futura sede de polo gastronômico e cultural.',
    location: {
      district: 'Bairro da Estação',
      coordinates: '6°05\'10"S 35°12\'45"W',
      access: 'Rua da Linha Velha, saída norte para Pium e São José de Mipibu.',
    },
    visitingInfo: {
      hours: 'Visitação externa diurna permanente; área interna em programação cultural',
      admission: 'Gratuita',
      recommendedTime: '30 minutos',
      accessibility: 'Piso térreo nivelado com a antiga plataforma de embarque',
    },
    highlights: [
      'Alpendre colonial em madeira talhada e relógio de estação',
      'Plataforma original de embarque e desembarque do século XIX',
      'Painéis informativos sobre a Great Western no Rio Grande do Norte',
      'Ponto de encontro para grupos de cicloturismo de aventura'
    ],
    conservationStatus: 'Em Restauração',
    accentColor: '#1E3A8A',
  },
  {
    id: 'engenhos-ruinas-coloniais',
    catalogNumber: 'PAT-NF-05',
    name: 'Rota dos Engenhos e Casarões Coloniais',
    category: 'engenhos',
    categoryLabel: 'Patrimônio Agroindustrial & Rural',
    century: 'Séculos XVIII e XIX',
    yearEstablished: '1740–1890',
    summary: 'Vestígios dos antigos engenhos de açúcar que moldaram a paisagem, a economia e as relações sociais na várzea do rio Papary.',
    fullHistory: 'A bacia do rio Trairi e as lagoas de Nísia Floresta abrigaram alguns dos mais produtivos engenhos de banguê da capitania do Rio Grande. Engenhos como Papary, Ilha Bela e Santana viveram o ciclo da cana, a escravização e, posteriormente, a transição para cachaças artesanais e rapadura. Ainda hoje permanecem chaminés de tijolo maciço, moendas centenárias, casarões senhoriais com varandas de azulejo e memórias transmitidas por gerações de trabalhadores rurais.',
    significance: 'Expressão material do ciclo açucareiro nordestino e da história do trabalho na formação do território potiguar.',
    tourismPotential: 'Turismo rural de vivência, degustação de cachaças premiadas, visita a alambiques artesanais e cavalgadas ecológicas.',
    location: {
      district: 'Zona Rural / Várzeas',
      coordinates: '6°06\'15"S 35°14\'08"W',
      access: 'Estradas vicinais bem sinalizadas a partir da RN-063, entre Nísia Floresta e Campo de Santana.',
    },
    visitingInfo: {
      hours: 'Quinta a Domingo, das 09h às 16h (em propriedades produtoras abertas à visitação)',
      admission: 'Varia conforme o alambique/engenho (R$ 10 a R$ 25 com degustação inclusa)',
      recommendedTime: '1 hora e 30 minutos',
      accessibility: 'Acesso rural térreo com áreas de pastagem e calçamento rústico',
    },
    highlights: [
      'Chaminés históricas em alvenaria de tijolo do século XIX',
      'Alambiques de cobre em operação contínua com cachaças envelhecidas',
      'Degustação de melado quente, rapadura e tapioca fresca na folha de bananeira',
      'Contação de histórias com descendentes de mestres de açúcar'
    ],
    conservationStatus: 'Preservado',
    accentColor: '#B45309',
  },
  {
    id: 'mirante-falesias-tabatinga',
    catalogNumber: 'PAT-NF-06',
    name: 'Mirante dos Golfinhos e Falésias de Tabatinga',
    category: 'natural',
    categoryLabel: 'Patrimônio Natural & Geológico',
    century: 'Geologia Viva / Barreira Cretácea',
    yearEstablished: 'Formação Geológica Barreiras',
    summary: 'Imponentes falésias coloridas debruçadas sobre o mar azul, onde golfinhos-rotadores brindam visitantes com espetáculos diários.',
    fullHistory: 'A costa de Nísia Floresta é guardiã das impressionantes falésias de Tabatinga, esculpidas pela ação dos ventos alísios e das marés sobre a Formação Barreiras. Do alto do mirante natural, a água cristalina permite avistar a olho nu grupos de golfinhos (Sotalia guianensis) caçando sardinhas nas primeiras horas da manhã e no fim da tarde. O local reúne história de pescadores artesanais que se orientam pelas falésias há séculos.',
    significance: 'Um dos mais emblemáticos pontos de observação costeira de cetáceos de vida livre da América do Sul.',
    tourismPotential: 'Ícone internacional do litoral potiguar, contemplação da paisagem, fotografia e trilhas de falésia com condutores locais.',
    location: {
      district: 'Barra de Tabatinga',
      coordinates: '6°03\'54"S 35°05\'48"W',
      access: 'Acesso asfaltado pela Rota do Sol (RN-063) com estacionamento organizado.',
    },
    visitingInfo: {
      hours: 'Aberto permanentemente (melhor visualização de golfinhos entre 07h-10h e 15h-17h)',
      admission: 'Gratuita',
      recommendedTime: '1 hora',
      accessibility: 'Deck do mirante com rampa acessível e quiosques de água de coco',
    },
    highlights: [
      'Avistamento garantido de golfinhos sem necessidade de embarcação',
      'Cores vibrantes das falésias variando do branco ao ocre e vermelho',
      'Pôr do sol panorâmico sobre o oceano e as dunas',
      'Artesanato local de areias coloridas e rendas marinhas'
    ],
    conservationStatus: 'Protegido por APA',
    accentColor: '#0284C7',
  },
  {
    id: 'complexo-lacustre-bonfim',
    catalogNumber: 'PAT-NF-07',
    name: 'Complexo Lacustre: Lagoa do Bonfim e Arituba',
    category: 'natural',
    categoryLabel: 'Patrimônio Hídrico & Ecológico',
    century: 'Quaternário',
    yearEstablished: 'Área de Proteção Ambiental Bonfim-Guaraíras',
    summary: 'O maior manancial de águas doces do Rio Grande do Norte, cercado por remanescentes de Mata Atlântica e dunas preservadas.',
    fullHistory: 'O município de Nísia Floresta conta com 26 lagoas perenes de água doce límpida, das quais a Lagoa do Bonfim é a maior do estado, com espelho d’água superior a 8 km². Além de importância hidrológica vital para o abastecimento e ecossistemas da fauna lacustre, as lagoas sempre foram fonte de subsistência para pescadores tradicionais de cará, traíra e camarão pitú. A Lagoa de Arituba complementa o circuito com excelente balneabilidade e lazer familiar.',
    significance: 'Reserva estratégica de biodiversidade protegida pelo Parque Estadual das Dunas e APA Bonfim-Guaraíras.',
    tourismPotential: 'Esportes náuticos não motorizados (stand-up paddle, caiaque), ecoturismo, banho de água doce e gastronomia à beira da lagoa.',
    location: {
      district: 'Bonfim e Arituba',
      coordinates: '6°02\'12"S 35°11\'45"W',
      access: 'Entradas sinalizadas a partir da RN-063 e da Rota do Sol.',
    },
    visitingInfo: {
      hours: 'Diariamente das 08h às 17h30',
      admission: 'Gratuita (atividades esportivas e aluguel de equipamentos sob consulta prévia)',
      recommendedTime: '2 a 4 horas',
      accessibility: 'Restaurantes e acessos à margem com decks nivelados',
    },
    highlights: [
      'Águas mornas e transparentes ideais para nado e famílias',
      'Trilhas ecológicas guiadas de interpretação botânica da Mata Atlântica',
      'Aluguel de caiaques, pedalinhos e pranchas de SUP',
      'Restaurantes rústicos com peixes frescos da lagoa'
    ],
    conservationStatus: 'Protegido por APA',
    accentColor: '#0D9488',
  },
  {
    id: 'rendas-labirinto-alcacuz',
    catalogNumber: 'PAT-NF-08',
    name: 'Polo Cultural das Rendeiras de Alcaçuz',
    category: 'imaterial',
    categoryLabel: 'Patrimônio Cultural Imaterial',
    century: 'Tradição Sesquicentenária',
    yearEstablished: 'Século XIX até a atualidade',
    summary: 'A arte ancestral do bordado em labirinto e renda de bilro, transmitida de mães para filhas sob os ventos da costa potiguar.',
    fullHistory: 'Na comunidade tradicional de Alcaçuz e distritos vizinhos de Nísia Floresta, o ofício de "desfiar e tecer o labirinto" constitui uma das manifestações mais ricas do patrimônio imaterial brasileiro. As artesãs preparam o linho, retiram fios cirurgicamente e tecem delicados arabescos, flores e grafismos com agulhas finas. Essa prática secular garantiu a autonomia financeira de mulheres e hoje é reconhecida como herança viva da identidade potiguar.',
    significance: 'Registro de salvaguarda cultural e expressão máxima do artesanato têxtil autêntico do Rio Grande do Norte.',
    tourismPotential: 'Turismo criativo, oficinas de aprendizagem com mestras rendeiras, comércio justo diretamente com as produtoras e valorização feminina.',
    location: {
      district: 'Comunidade de Alcaçuz',
      coordinates: '6°01\'48"S 35°10\'12"W',
      access: 'Entrada pelo trevo de Alcaçuz, 8 km a partir da rodovia principal.',
    },
    visitingInfo: {
      hours: 'Segunda a Sábado, das 09h às 16h',
      admission: 'Gratuita (peças artesanais disponíveis para compra direta)',
      recommendedTime: '1 hora',
      accessibility: 'Espaço comunitário térreo e acolhedor',
    },
    highlights: [
      'Demonstração ao vivo da técnica de desfiamento e tecelagem',
      'Peças exclusivas: toalhas, caminhos de mesa, vestuário e adornos finos',
      'Histórias de vida das mestras bordadeiras octogenárias',
      'Certificado de autenticidade emitido pela associação local'
    ],
    conservationStatus: 'Preservado',
    accentColor: '#BE185D',
  }
];

export const LITERARY_WORKS: LiteraryWork[] = [
  {
    title: 'Direitos das Mulheres e Injustiça dos Homens',
    year: 1832,
    city: 'Recife / Rio de Janeiro',
    genre: 'Manifesto Filosófico e Social',
    impact: 'Considerada a pedra fundamental do pensamento feminista e dos direitos civis das mulheres no Brasil e na América Latina.',
    excerpt: 'Os homens têm-se atribuído, por sua exclusiva autoridade, o privilégio de legisladores, e têm feito leis que só a eles favorecem, enquanto mantêm a outra metade do gênero humano sob o mais vergonhoso jugo da ignorância e da servidão.'
  },
  {
    title: 'Conselhos a Minha Filha',
    year: 1842,
    city: 'Rio de Janeiro',
    genre: 'Tratado de Pedagogia e Moral',
    impact: 'Obra pioneira que defendeu a formação moral, intelectual e científica da mulher muito além do mero confinamento doméstico.',
    excerpt: 'Que tua instrução não consista somente na leitura de livros frívolos; aprende a raciocinar, a instruir teu espírito nas ciências e na verdade, pois uma mulher esclarecida é o sustentáculo mais nobre da sociedade.'
  },
  {
    title: 'Opúsculo Humanitário',
    year: 1853,
    city: 'Rio de Janeiro',
    genre: 'Ensaio Crítico e Educacional',
    impact: 'Severa crítica ao sistema educacional imperial brasileiro, condenando o modelo jesuítico arcaico e defendendo o ensino laico e universal.',
    excerpt: 'Onde o povo jaz na ignorância, impera a tirania; onde a mulher é degradada, as nações definham em costumes corrompidos. Educar a mulher é emancipar a pátria inteira.'
  },
  {
    title: 'Itinéraire d\'un voyage en Allemagne',
    year: 1857,
    city: 'Paris',
    genre: 'Literatura de Viagem e Crítica Filosófica',
    impact: 'Publicado na Europa, estabeleceu seu diálogo com pensadores iluministas e com o positivista Auguste Comte, pioneirismo absoluto para uma mulher sul-americana.',
    excerpt: 'Viajar com olhos atentos é ler o grande livro da humanidade, onde cada monumento narra a vitória do pensamento livre sobre os grilhões do preconceito.'
  }
];

export const TOURIST_ROUTES: TouristRoute[] = [
  {
    id: 'rota-historico-literaria',
    name: 'Rota Histórico-Literária Nísia Floresta',
    slug: 'historico-literaria',
    tagline: 'Passos da Pioneira: Da antiga Vila de Papary à memória dos livros',
    duration: '4 a 5 horas',
    distance: '6 km (circuito central e periférico)',
    difficulty: 'Leve',
    idealFor: 'Apaixonados por história, estudantes, famílias e amantes da literatura',
    description: 'Um mergulho fascinante nas raízes de Nísia Floresta. O visitante percorre os edifícios e monumentos onde Dionísia Gonçalves Pinto nasceu, ouviu as primeiras histórias e de onde partiu para transformar a história do pensamento brasileiro.',
    stops: [
      {
        order: 1,
        title: 'Igreja Matriz de Nossa Senhora do Ó',
        siteId: 'matriz-senhora-do-o',
        description: 'Ponto de partida. Aprecie a fachada barroca colonial e a história da fundação da Vila de Papary.',
        duration: '40 min',
        tip: 'Observe a pia batismal e a acústica da nave central; converse com a comunidade paroquial.'
      },
      {
        order: 2,
        title: 'Museu e Mausoléu de Nísia Floresta',
        siteId: 'museu-mausoleu-nisia',
        description: 'Imersão nos textos, correspondências e no túmulo memorial com cinzas trazidas da França.',
        duration: '60 min',
        tip: 'Peça a mediação dos guias locais para escutar trechos inéditos de suas cartas aos pensadores europeus.'
      },
      {
        order: 3,
        title: 'Monumento ao Baobá Centenário',
        siteId: 'baoba-centenario',
        description: 'Caminhada sombreada até a majestosa árvore africana de 1877.',
        duration: '30 min',
        tip: 'Tire uma foto coletiva abraçando o tronco e adquira doces de frutas nativas com doceiras do entorno.'
      },
      {
        order: 4,
        title: 'Antiga Estação Ferroviária de Papary',
        siteId: 'estacao-ferroviaria-papary',
        description: 'Visita à histórica linha férrea de 1881 e memória dos trilhos que cruzavam o município.',
        duration: '40 min',
        tip: 'Ótimo local para pausa com água de coco fresca e contemplação da arquitetura de ferro.'
      },
      {
        order: 5,
        title: 'Sítio Floresta e Almoço Regional',
        description: 'Local de nascimento da escritora, seguido de almoço com a famosa Peixada ou Carne de Sol da terra.',
        duration: '90 min',
        tip: 'Experimente a autêntica tapioca de forno com queijo coalho tostado.'
      }
    ]
  },
  {
    id: 'rota-sol-falesias-golfinhos',
    name: 'Rota do Litoral, Falésias e Golfinhos',
    slug: 'falesias-golfinhos',
    tagline: 'Onde o mar límpido encontra arrecifes de corais e mirantes infinitos',
    duration: '6 a 7 horas',
    distance: '24 km pela orla',
    difficulty: 'Fácil',
    idealFor: 'Turistas que buscam paisagens paradisíacas, banho de mar calmo e contato com a vida marinha',
    description: 'A costa de Nísia Floresta é célebre por suas praias de águas tranquilas protegidas por arrecifes de arenito e imponentes falésias avermelhadas. Este circuito combina o lazer praiano com a preservação marinha.',
    stops: [
      {
        order: 1,
        title: 'Mirante dos Golfinhos em Tabatinga',
        siteId: 'mirante-falesias-tabatinga',
        description: 'Chegada nas primeiras horas para avistar os golfinhos brincando na enseada cristalina.',
        duration: '60 min',
        tip: 'Traga binóculos ou câmera com zoom; entre 8h e 10h a maré costuma favorecer os saltos.'
      },
      {
        order: 2,
        title: 'Praia de Camurupim e a Pedra Oca',
        description: 'Piscinas naturais calmas formadas pelo arrecife e visita à gruta submarina de arenito na maré baixa.',
        duration: '120 min',
        tip: 'Consulte a tábua de marés: com maré abaixo de 0.4m é possível entrar na lendária gruta da Pedra Oca com segurança.'
      },
      {
        order: 3,
        title: 'Lagoa de Arituba',
        siteId: 'complexo-lacustre-bonfim',
        description: 'Transição da água salgada para a doce. Refúgio de águas límpidas cercado por dunas.',
        duration: '90 min',
        tip: 'Aproveite os passeios de caiaque e tirolesa; excelente cardápio de peixes grelhados.'
      },
      {
        order: 4,
        title: 'Praia de Barreta e Pôr do Sol',
        description: 'Vila autêntica de pescadores tradicionais onde o rio encontra o oceano com pôr do sol inesquecível.',
        duration: '60 min',
        tip: 'Converse com os pescadores artesanais no desembarque dos barcos de madeira.'
      }
    ]
  },
  {
    id: 'rota-aguas-sabores-alcacuz',
    name: 'Rota das Lagoas, Engenhos e Tradição do Labirinto',
    slug: 'aguas-sabores',
    tagline: 'Artesanato secular, águas doces e os sabores doces da cana de açúcar',
    duration: '5 a 6 horas',
    distance: '32 km (circuito interiorano)',
    difficulty: 'Leve',
    idealFor: 'Famílias, amantes de artesanato manual, gastronomia tradicional e ecoturismo sereno',
    description: 'Uma jornada pelo coração do patrimônio imaterial e ambiental de Nísia Floresta, unindo a maior lagoa do estado aos saberes ancestrais das mestras do labirinto e aos alambiques da várzea canavieira.',
    stops: [
      {
        order: 1,
        title: 'Parque Estadual e Lagoa do Bonfim',
        siteId: 'complexo-lacustre-bonfim',
        description: 'Aprecie a grandiosidade da maior lagoa potiguar, com banho refrescante e brisa constante.',
        duration: '90 min',
        tip: 'Contrate guias comunitários para a trilha interpretativa da mata ciliar.'
      },
      {
        order: 2,
        title: 'Polo das Rendeiras de Alcaçuz',
        siteId: 'rendas-labirinto-alcacuz',
        description: 'Convivência direta com as artesãs que bordam o famoso e delicado ponto labirinto.',
        duration: '75 min',
        tip: 'Compre peças diretamente das bordadeiras para apoiar a salvaguarda dessa arte sesquicentenária.'
      },
      {
        order: 3,
        title: 'Alambique e Engenho Artesanal de Rapadura',
        siteId: 'engenhos-ruinas-coloniais',
        description: 'Visita à moagem, aos tachos de cobre fervente e degustação de caldo de cana fresco e alfenins.',
        duration: '60 min',
        tip: 'Leve para casa as garrafas de cachaça de alambique premiadas e doces artesanais de caju.'
      },
      {
        order: 4,
        title: 'Lagoa do Carcará',
        description: 'Encerramento em uma das lagoas mais cristalinas do Nordeste, cercada por areias finas e brancas.',
        duration: '90 min',
        tip: 'Perfeita para praticar stand-up paddle ou simplesmente relaxar com águas mornas.'
      }
    ]
  },
  {
    id: 'rota-cicloturismo-patrimonial',
    name: 'Circuito Cicloturístico Caminhos de Nísia',
    slug: 'caminhos-de-nisia',
    tagline: 'Pedalando entre trilhas históricas, fazendas coloniais e dunas preservadas',
    duration: '3 a 4 horas de pedal',
    distance: '38 km de percurso misto',
    difficulty: 'Moderado',
    idealFor: 'Ciclistas de mountain bike e gravel, entusiastas de turismo de aventura sustentável',
    description: 'Percurso desenhado para integrar atrativos históricos e belezas naturais com emissão zero de carbono, valorizando pequenas vendas rurais e a hospitalidade do povo nisia-florestense.',
    stops: [
      {
        order: 1,
        title: 'Largada: Praça da Matriz',
        siteId: 'matriz-senhora-do-o',
        description: 'Briefing e foto em frente ao templo do século XVIII.',
        duration: '15 min',
        tip: 'Abasteça as caramanholas nos comércios locais do centro.'
      },
      {
        order: 2,
        title: 'Trecho dos Antigos Trilhos de Papary',
        siteId: 'estacao-ferroviaria-papary',
        description: 'Pedal plano e fluido margeando a antiga rota férrea até a zona dos canaviais.',
        duration: '45 min',
        tip: 'Trecho sombreado com terra batida firme e visual rural.'
      },
      {
        order: 3,
        title: 'Contorno das Três Lagoas (Bonfim, Alcaçuz e Boa Água)',
        description: 'Single tracks e estradas vicinais com vista contínua para os espelhos d’água.',
        duration: '90 min',
        tip: 'Parada obrigatória para hidratação e banho rápido de lagoa.'
      },
      {
        order: 4,
        title: 'Chegada triunfal nas Falésias de Tabatinga',
        siteId: 'mirante-falesias-tabatinga',
        description: 'Subida panorâmica com visão deslumbrante do oceano e repouso revigorante.',
        duration: '45 min',
        tip: 'Celebre o fim do pedal com água de coco gelada e peixe frito à beira-mar.'
      }
    ]
  }
];

export const CULINARY_TRADITIONS: CulinaryTradition[] = [
  {
    name: 'Gingado com Tapioca na Brasa',
    origin: 'Culinária praiana e ribeirinha potiguar',
    description: 'Pequenos peixes da costa (ginga) fritos inteiros e sequinhos no azeite com alho, servidos dentro de uma tapioca quentinha de goma fresca feita na brasa.',
    whereToFind: 'Barracas tradicionais da orla de Camurupim, Tabatinga e quiosques do centro histórico.',
    ingredients: ['Ginga (peixe costeiro fresco)', 'Goma de mandioca artesanal', 'Manteiga de garrafa', 'Sal marinho de Mossoró']
  },
  {
    name: 'Peixada Nisia-Florestense ao Leite de Coco com Pirão',
    origin: 'Herança indígena tupi e dos pescadores de lagoa',
    description: 'Postas nobres de robalo, cioba ou tilápia cozidas lentamente com leite de coco fresco, pimentões, cheiro-verde e azeite de dendê suave, acompanhadas por pirão escaldado com caldo fervente.',
    whereToFind: 'Restaurantes rústicos ao redor da Lagoa de Arituba, Lagoa do Bonfim e Barra de Tabatinga.',
    ingredients: ['Peixe nobre fresco', 'Leite de coco extraído na hora', 'Farinha de mandioca torrada', 'Pimentões e coentro da horta']
  },
  {
    name: 'Doce de Melado, Alfenim e Rapadura da Cana',
    origin: 'Tradição secular dos engenhos de banguê de Papary',
    description: 'Derivados puros do caldo da cana moída fresca, cozidos em tachos de cobre até atingir o ponto de puxa, gerando rapaduras com castanha e o mítico alfenim açucarado.',
    whereToFind: 'Feiras livres de Nísia Floresta, Engenho Papary e vendas coloniais da várzea.',
    ingredients: ['Caldo de cana-de-açúcar orgânica', 'Castanhas de caju locais', 'Especiarias nativas']
  },
  {
    name: 'Caranguejada do Manguezal de Guaraíras',
    origin: 'Tradição extrativista sustentável dos estuários',
    description: 'Caranguejos-uçá selecionados, cozidos em caldo aromático temperado com folhas de louro, tomate, pimenta-de-cheiro e cebola roxa, acompanhados de farofa úmida de dendê.',
    whereToFind: 'Restaurantes e quiosques na divisa marítima de Barreta e Tabatinga.',
    ingredients: ['Caranguejo-uçá vivo e limpo', 'Pimenta-de-cheiro', 'Leite de coco', 'Farofa amanteigada']
  }
];

export const ARTISAN_TRADITIONS: ArtisanTradition[] = [
  {
    craft: 'Bordado Labirinto',
    community: 'Alcaçuz, Campo de Santana e Tororó',
    history: 'Introduzido no Brasil colônia por freiras e famílias portuguesas, o labirinto foi reinventado pelas mulheres potiguares, que desenvolveram pontos exclusivos que dialogam com a flora e a fauna do litoral.',
    process: 'Exige paciência milimétrica: fios da trama do tecido de linho ou algodão são contados e cuidadosamente desfiados. Depois, com agulhas finas e linha mercerizada, novos nós e motivos geométricos são tecidos sobre a grade.',
    protection: 'Reconhecido como Patrimônio Cultural Imaterial pelo Estado do Rio Grande do Norte, em processo de certificação de Indicação Geográfica (IG).'
  },
  {
    craft: 'Renda de Bilro',
    community: 'Povoado de Barreta e Alcaçuz',
    history: 'Praticada tradicionalmente pelas esposas e filhas dos pescadores artesanais enquanto os maridos estavam no mar, unindo canções populares e o som rítmico das peças de madeira.',
    process: 'A rendeira fixa o cartão perfurado (pique) na almofada de feno e trança dezenas de pares de bilros de madeira torneada, movimentando linhas de algodão para gerar rendas abertas de bicos e entremeios.',
    protection: 'Apoiado por cooperativas de economia solidária para garantir remuneração digna e oficinas intergeracionais para jovens.'
  }
];

export const STRATEGIC_PILLARS = [
  {
    number: '01',
    title: 'Salvaguarda e Restauro do Patrimônio Material',
    description: 'Catalogação digital de todos os imóveis dos séculos XVIII e XIX, restauração prioritária da Antiga Estação Ferroviária de Papary e criação de incentivos fiscais para a manutenção dos casarios coloniais pelos proprietários locais.',
    impact: 'Proteção perene da paisagem histórica e atração de investimentos em patrimônio edificado.'
  },
  {
    number: '02',
    title: 'Valorização do Legado de Nísia Floresta e Turismo Pedagógico',
    description: 'Instituição do Programa Nacional de Visitação Literária, integrando escolas, universidades e institutos de direitos humanos ao Museu e Mausoléu. Criação de audio-guias e aplicativo de realidade aumentada nos pontos históricos.',
    impact: 'Consolidação de Nísia Floresta como a capital nacional da memória feminista e dos direitos civis.'
  },
  {
    number: '03',
    title: 'Turismo de Base Comunitária e Fortalecimento das Rendeiras',
    description: 'Criação do Centro de Referência do Labirinto em Alcaçuz, fornecendo espaços de comercialização sem intermediários abusivos, capacitação em design sustentável e certificação de origem com selo Nísia Floresta.',
    impact: 'Aumento direto da renda familiar de mais de 300 mulheres artesãs e proteção de saberes tradicionais.'
  },
  {
    number: '04',
    title: 'Ecoturismo Sustentável e Proteção dos Mananciais Lacustres',
    description: 'Ordenamento do uso das margens da Lagoa do Bonfim e Arituba, proibição de embarcações poluidoras em áreas críticas de reprodução da fauna, implantação de mirantes ecológicos e trilhas sinalizadas segundo normas da ABNT.',
    impact: 'Garantia de balneabilidade perene e conservação hídrica para as próximas gerações.'
  },
  {
    number: '05',
    title: 'Sinalização Turística Integrada e Rotas Conectadas',
    description: 'Instalação de totens bilíngues com QR codes históricos em todos os 8 atrativos âncora, rotas de cicloturismo mapeadas com pontos de hidratação e integração logística inteligente com os polos emissores (Natal e Pipa).',
    impact: 'Elevação do tempo médio de permanência do turista de 0,5 dia (mero bate-volta) para 2 a 3 dias completos.'
  }
];

export const NISIA_TIMELINE = [
  {
    year: '1810',
    event: 'Nascimento de Dionísia Gonçalves Pinto',
    detail: 'Nasce em 12 de outubro no Sítio Floresta, na então Vila Imperial de Papary (hoje Nísia Floresta), filha do português Dionísio Gonçalves Pinto e da brasileira Antônia Clara Freire.'
  },
  {
    year: '1831',
    event: 'Primeiros Artigos na Imprensa',
    detail: 'Em Olinda e Recife, publica seus primeiros textos no jornal "O Espelho das Brasileiras", defendendo com coragem a educação formal e a autonomia das mulheres.'
  },
  {
    year: '1832',
    event: 'Publicação de "Direitos das Mulheres"',
    detail: 'Lança sua obra seminal, inspirada livremente em Mary Wollstonecraft, marcando o nascimento da literatura feminista e de direitos humanos no Brasil.'
  },
  {
    year: '1838',
    event: 'Fundação do Colégio Augusto',
    detail: 'No Rio de Janeiro, funda uma escola inovadora para meninas, ensinando ciências, idiomas, filosofia e matemática — matérias então vedadas ao sexo feminino.'
  },
  {
    year: '1849',
    event: 'Partida para a Europa',
    detail: 'Embarca para o continente europeu, residindo em Paris e em cidades italianas e alemãs, onde convive com o filósofo Auguste Comte e grandes pensadores de sua era.'
  },
  {
    year: '1853',
    event: 'Publicação de "Opúsculo Humanitário"',
    detail: 'Publica um dos mais veementes ataques ao sistema educacional tradicional e à subserviência imposta às mulheres e às populações indígenas no Brasil.'
  },
  {
    year: '1885',
    event: 'Falecimento em Bonsecours (França)',
    detail: 'Falece aos 74 anos em 24 de abril de 1885, vitimada por pneumonia, sendo sepultada no cemitério de Bonsecours, na Normandia francesa.'
  },
  {
    year: '1948',
    event: 'Homenagem e Renomeação do Município',
    detail: 'A secular cidade de Papary é oficialmente rebatizada de Nísia Floresta em tributo perpétuo à sua mais ilustre filha e pensadora.'
  },
  {
    year: '1954',
    event: 'Transladação Solene dos Restos Mortais',
    detail: 'Após 69 anos na França, seus restos mortais são repatriados solenemente para o Brasil e repousam no Mausoléu em sua cidade natal.'
  }
];
