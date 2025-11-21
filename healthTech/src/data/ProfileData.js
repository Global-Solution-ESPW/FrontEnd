const cargosSaude = [
  "Médico Clínico Geral",
  "Médica Pediatra",
  "Enfermeiro Coordenador",
  "Enfermeira Assistencial",
  "Fisioterapeuta Respiratório",
  "Fisioterapeuta Intensivista",
  "Nutricionista Clínica",
  "Psicóloga Hospitalar",
  "Psicóloga Organizacional",
  "Farmacêutico Hospitalar",
  "Técnico de Enfermagem",
  "Médica Ginecologista",
  "Médico Ortopedista",
  "Médica Cardiologista",
  "Médico Anestesista",
  "Médica Oncologista",
  "Fonoaudióloga",
  "Terapeuta Ocupacional",
  "Biomédico",
  "Médica Neurologista",
  "Médico Psiquiatra",
];

const cidades = [
  "São Paulo/SP",
  "Rio de Janeiro/RJ",
  "Belo Horizonte/MG",
  "Curitiba/PR",
  "Porto Alegre/RS",
  "Campinas/SP",
  "Salvador/BA",
  "Fortaleza/CE",
  "Recife/PE",
  "Brasília/DF",
];

const areasAtuacao = [
  "Hospitalar",
  "Atenção Primária",
  "Gestão em Saúde",
  "Saúde Mental",
];

// fotos de profissionais da saúde
const fotosProfissionais = [
  "https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1659353888906-adb3e0041693?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1674049406176-021807a2802e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1758691462651-611d730c5272?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1736289173074-df6009da27c9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// mini-resumos diferentes
const resumosBase = [
  "Atuação em {cargo} com foco em atendimento humanizado e protocolos baseados em evidências.",
  "Experiência em {cargo}, integração de tecnologia assistencial e trabalho em equipe multiprofissional.",
  "Profissional de {cargo} com ênfase em segurança do paciente e melhoria contínua de processos.",
  "Atuação em {cargo} com foco em educação em saúde, prevenção e acompanhamento longitudinal.",
  "Experiência em {cargo}, participação em comitês de qualidade e projetos de inovação em saúde.",
];

// hard skill
const habilidadesTecnicasSets = [
  [
    "Atendimento ambulatorial",
    "Registros eletrônicos de saúde",
    "Protocolos clínicos",
    "Trabalho multiprofissional",
  ],
  [
    "UTI",
    "Emergência",
    "Estabilização clínica",
    "Monitorização de pacientes críticos",
  ],
  ["Atenção primária", "Acolhimento", "Telemedicina", "Educação em saúde"],
  [
    "Prontuário eletrônico",
    "Gestão de leitos",
    "Indicadores assistenciais",
    "Segurança do paciente",
  ],
];

const softSkillsSets = [
  ["Comunicação", "Empatia", "Trabalho em equipe", "Resiliência"],
  ["Liderança", "Gestão de conflitos", "Organização", "Foco em resultados"],
  ["Escuta ativa", "Proatividade", "Adaptabilidade", "Colaboração"],
  ["Tomada de decisão", "Gestão de tempo", "Visão sistêmica", "Didática"],
];

const certificacoesSets = [
  ["ACLS", "BLS"],
  ["ATLS", "Emergências Clínicas"],
  ["Suporte Avançado de Vida em Pediatria", "Cuidados em UTI"],
  ["Gestão da Qualidade em Saúde", "Segurança do Paciente"],
  ["Telemedicina na Prática Clínica", "Prontuário Eletrônico na Assistência"],
  ["Atualização em Atenção Primária", "Educação em Saúde Comunitária"],
];

const idiomasSets = [
  [
    { idioma: "Inglês", nivel: "Avançado" },
    { idioma: "Espanhol", nivel: "Intermediário" },
  ],
  [{ idioma: "Inglês", nivel: "Intermediário" }],
  [
    { idioma: "Inglês", nivel: "Básico" },
    { idioma: "Francês", nivel: "Básico" },
  ],
];

const areasInteresseSets = [
  ["Segurança do paciente", "Tecnologia em saúde", "Educação continuada"],
  ["Gestão em saúde", "Liderança de equipes", "Indicadores assistenciais"],
  ["Saúde mental", "Qualidade de vida no trabalho", "Prevenção de burnout"],
  ["Inovação em saúde", "Telemedicina", "Experiência do paciente"],
];

const empresasSaude = [
  "Hospital Vida Plena",
  "Clínica Bem Cuidar",
  "Hospital São Lucas",
  "Instituto Integrar Saúde",
  "Hospital Nova Esperança",
  "Centro Médico Horizonte",
  "Hospital Regional da Serra",
  "Clínica Cuidar+",
];

const descricoesExperiencia = [
  "Responsável pelo atendimento direto a pacientes, participação em visitas multiprofissionais e construção de planos de cuidado.",
  "Atuação em rotinas assistenciais, discussão de casos complexos e suporte à implementação de protocolos institucionais.",
  "Participação em projetos de melhoria de processos, revisão de fluxos assistenciais e monitoramento de indicadores.",
  "Foco em cuidado centrado no paciente, alinhamento com equipe interdisciplinar e participação em treinamentos internos.",
];

const formacoesSaude = [
  { curso: "Medicina", instituicao: "USP" },
  { curso: "Enfermagem", instituicao: "UFBA" },
  { curso: "Fisioterapia", instituicao: "PUC Minas" },
  { curso: "Psicologia", instituicao: "UFRJ" },
  { curso: "Nutrição", instituicao: "UNIFESP" },
  { curso: "Biomedicina", instituicao: "UNESP" },
  { curso: "Farmácia", instituicao: "UFMG" },
];

export const perfilSaude = Array.from({ length: 60 }, (_, index) => {
  const id = index + 1;
  const cargo = cargosSaude[index % cargosSaude.length];
  const localizacao = cidades[index % cidades.length];
  const foto = fotosProfissionais[index % fotosProfissionais.length];
  const area = areasAtuacao[index % areasAtuacao.length];

  const resumoTemplate = resumosBase[index % resumosBase.length];
  const resumo = resumoTemplate.replace("{cargo}", cargo.toLowerCase());

  const habilidadesTecnicas =
    habilidadesTecnicasSets[index % habilidadesTecnicasSets.length];

  const softSkills = softSkillsSets[index % softSkillsSets.length];

  const certificacoes = certificacoesSets[index % certificacoesSets.length];

  const idiomas = idiomasSets[index % idiomasSets.length];

  const areaInteresses = areasInteresseSets[index % areasInteresseSets.length];

  const empresa = empresasSaude[index % empresasSaude.length];
  const descExp = descricoesExperiencia[index % descricoesExperiencia.length];

  const formacaoBase = formacoesSaude[index % formacoesSaude.length];

  return {
    id,
    nome: `Profissional Saúde ${id}`,
    foto,
    cargo,
    resumo,
    localizacao,
    area,

    habilidadesTecnicas,
    softSkills,

    experiencias: [
      {
        empresa,
        cargo,
        inicio: "2021-01",
        fim: "2024-06",
        descricao: descExp,
      },
    ],

    formacao: [
      {
        curso: formacaoBase.curso,
        instituicao: formacaoBase.instituicao,
        ano: 2020,
      },
    ],

    projetos: [
      {
        titulo: "Projeto de melhoria em cuidado ao paciente",
        link: "https://example.com/projeto-saude",
        descricao:
          "Iniciativa voltada à padronização de fluxos, revisão de processos e aumento da segurança do paciente.",
      },
    ],

    certificacoes,
    idiomas,
    areaInteresses,
  };
});
