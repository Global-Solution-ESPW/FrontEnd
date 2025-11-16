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

const habilidadesTecnicasBase = [
  "Atendimento ambulatorial",
  "Registros eletrônicos de saúde",
  "Protocolos clínicos",
  "Trabalho multiprofissional",
];

const softSkillsBase = [
  "Comunicação",
  "Empatia",
  "Trabalho em equipe",
  "Resiliência",
];

const certificacoesBase = [
  "Atualização em protocolos clínicos",
  "Curso de urgência e emergência",
];

const idiomasBase = [{ idioma: "Inglês", nivel: "Intermediário" }];

const areasInteresseBase = [
  "Segurança do paciente",
  "Tecnologia em saúde",
  "Educação continuada",
];

export const perfisSaude = Array.from({ length: 60 }, (_, index) => {
  const id = index + 1;
  const cargo = cargosSaude[index % cargosSaude.length];
  const localizacao = cidades[index % cidades.length];

  return {
    id,
    nome: `Profissional Saúde ${id}`,
    foto: `/images/saude-${String(id).padStart(2, "0")}.jpg`,
    cargo,
    resumo: `Atuação em ${cargo.toLowerCase()} com foco em cuidado centrado no paciente e melhoria contínua.`,
    localizacao,
    area: "Saúde",

    habilidadesTecnicas: [...habilidadesTecnicasBase],

    softSkills: [...softSkillsBase],

    experiencias: [
      {
        empresa: "Hospital Referência",
        cargo,
        inicio: "2021-01",
        fim: "2024-06",
        descricao:
          "Atendimento direto a pacientes, atuação em equipe multiprofissional e participação em melhorias de processos assistenciais.",
      },
    ],

    formacao: [
      {
        curso: "Graduação em área da Saúde",
        instituicao: "Universidade Reconhecida",
        ano: 2020,
      },
    ],

    projetos: [
      {
        titulo: "Projeto de melhoria em cuidado ao paciente",
        link: "https://example.com/projeto-saude",
        descricao:
          "Iniciativa voltada à padronização de fluxos e aumento da segurança do paciente.",
      },
    ],

    certificacoes: [...certificacoesBase],

    idiomas: [...idiomasBase],

    areaInteresses: [...areasInteresseBase],
  };
});
