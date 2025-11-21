# 🩺 HealthShift – Rede Profissional para Carreira na Área da Saúde (Front-End + Web Dev)

**HealthShift** é uma plataforma web que simula uma rede de carreira inspirada no LinkedIn, porém exclusiva para profissionais da saúde, permitindo visualização de perfis, filtros inteligentes, modal detalhado, criação de perfis (simulação) e integração completa com uma base JSON local de 60 profissionais.

A solução foi desenvolvida para a Global Solution – Futuro do Trabalho (2º semestre/2025) nas disciplinas:

Front-End Web Development

Web Development

O foco é demonstrar como tecnologias modernas de interface, componentização e dados estruturados podem apoiar novas formas de trabalho, facilitando conexão, empregabilidade, bem-estar e evolução profissional na área da saúde.

---


# 🚀 Tecnologias Utilizadas

React + Vite

TailwindCSS (modo escuro/claro via classe dark)

JavaScript ES6+

Dados estruturados em JSON local

Componentização de interface

Hooks (useState, useEffect, useMemo)

Scroll suave para seções

Modal acessível e responsivo

Formulário de criação de perfil (simulado)

---

# 🎯 Objetivo da Solução

Profissionais da saúde enfrentam desafios de:

dificuldade de encontrar vagas alinhadas ao propósito

jornadas desgastantes

falta de rede profissional estruturada

pouca visibilidade de competências técnicas/soft skills

O HealthShift foi projetado para:

apresentar uma rede moderna de profissionais da saúde

permitir busca e conexão personalizada

exibir perfis completos, com formação, idiomas, habilidades e projetos

simular criação de perfil dentro da plataforma

oferecer uma interface inspirada no LinkedIn (clean, profissional, calming-blue)

demonstrar domínio técnico das disciplinas de Front-End

---

# ⚙️ Arquitetura da Aplicação (Front-End SPA)
        ┌───────────────────────────────────────┐
        │                React SPA              │
        │---------------------------------------│
        │  Header (CTA + tema + criar perfil)   │
        │  Hero (pitch + scroll CTA)            │
        │  Profiles (cards + filtros + modal)   │
        │  Benefits (por que HealthShift?)       │
        │  Action (próximos passos da GS)       │
        │  Footer                               │
        └───────────────────────────────────────┘
                       │
                       ▼
          ┌─────────────────────────────┐
          │   ProfileData.js (JSON)     │
          │  • 60 perfis completos      │
          │  • Foto, cargo, cidade      │
          │  • Habilidades, idiomas     │
          │  • Experiência, formação    │
          │  • Áreas de interesse       │
          └─────────────────────────────┘

---

# 📄 Estrutura de Arquivos
```
/src
 ├── components/
 │    ├── Header.jsx
 │    ├── Hero.jsx
 │    ├── Profile.jsx
 │    ├── Benefits.jsx
 │    ├── Action.jsx
 │    └── Footer.jsx
 ├── data/
 │    └── ProfileData.js   ← 60 perfis completos (JSON local)
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

# 👤 Perfis de Profissionais (JSON)

Os dados ficam em:

src/data/ProfileData.js

## 🧩 Exemplos de campos disponíveis:
{
  "id": 1,
  "nome": "Profissional Saúde 1",
  "foto": "https://images.unsplash.com/photo-15359...",
  "cargo": "Médico Clínico Geral",
  "localizacao": "São Paulo/SP",
  "area": "Hospitalar",
  "resumo": "Atuação em ...",
  "habilidadesTecnicas": ["UTI", "Emergência"],
  "softSkills": ["Comunicação", "Empatia"],
  "experiencias": [
    {
      "empresa": "Hospital Vida Plena",
      "inicio": "2021-01",
      "fim": "2024-06",
      "descricao": "Atendimento multiprofissional..."
    }
  ],
  "formacao": [
    { "curso": "Medicina", "instituicao": "USP", "ano": 2020 }
  ],
  "certificacoes": ["ACLS", "BLS"],
  "idiomas": [{ "idioma": "Inglês", "nivel": "Avançado" }],
  "areaInteresses": ["Telemedicina", "Inovação em Saúde"]
}

---

# 🔎 Funcionalidades da Plataforma
## ✔️ 1. Hero – Pitch e Call to Action

Mensagem clara sobre o HealthShift

Estética calming blue (padrão GS 2º semestre)

Botão Explorar profissionais (com scroll suave)

## ✔️ 2. Lista de Profissionais (estilo LinkedIn)

Cards com:

Foto real (Unsplash)

Nome

Cargo

Localização

Área de atuação

Resumo

Hard Skills (badges)

Botões:

Conectar

Mensagem

Ver perfil completo (modal)

## ✔️ 3. Filtros + Busca

Buscar por nome, área, cargo ou termo

Filtrar por:

Cidade

Área de atuação

Renderização em tempo real com useMemo.

## ✔️ 4. Modal de Perfil Completo

Exibe:

Habilidades técnicas

Soft skills

Experiência

Formação

Certificações

Idiomas

Áreas de interesse

Com botões de ação simulados.

## ✔️ 5. Criação de Perfil (Simulada)

Via botão no header:

Abre mini-formulário

Recebe:

nome

cargo

cidade

Exibe alert() simulando criação

## ✔️ 6. Modo Claro/Escuro

Alternância via botão

Tailwind configurado com darkMode: "class"

Afeta toda a aplicação

---

# 🖥️ Screens / Telas (Descrição)


Hero — pitch e CTA

Cards — grid estilo feed

Modal — perfil completo

Formulário — criar perfil

Filtros — topo dos cards

Dark Mode — interface full invertida

---

```
▶️ Como Executar o Projeto
1️⃣ Instalar dependências
npm install

2️⃣ Rodar servidor
npm run dev


Acessar em:

http://localhost:5173
```
---

# 🧩 Autor

Leandro Simoneli da Silva
RM 566539
Engenharia de Software — FIAP
Global Solution — 2º Semestre/2025
Front-End Web Development · Web Dev
