🏥 HealthShift
Rede de Carreira para Profissionais da Saúde
Global Solution — Futuro do Trabalho · 2º Semestre/2025
Front-End Web Development · Web Dev


📌 Sobre o Projeto

O HealthShift é uma aplicação front-end desenvolvida para a Global Solution do 2º semestre, nas disciplinas:

Front-End Web Development

Web Development

A proposta é simular uma rede profissional inspirada no LinkedIn, porém focada exclusivamente em profissionais da área da saúde, alinhada ao tema Futuro do Trabalho.

A aplicação consome uma base JSON local com 60 perfis de profissionais da saúde, oferecendo busca, filtros, modal de detalhes e um CTA realista para criação de perfil.

🎯 Objetivos Acadêmicos Atendidos

✔ Consumo e renderização de dados via JSON local
✔ Interface responsiva em React + Tailwind
✔ Componentização completa da SPA
✔ Cards no estilo LinkedIn
✔ Modal dinâmico de perfil
✔ Busca + filtros inteligentes (cidade, área, texto)
✔ Modo claro/escuro
✔ Mini formulário simulando criação de perfil
✔ Navegação via scroll para seções específicas

🖥️ Tecnologias Utilizadas

React (Vite)

TailwindCSS

JavaScript ES6+

JSON local

Node.js / NPM

📂 Estrutura do Projeto
/src
 ├── components/
 │    ├── Header.jsx
 │    ├── Hero.jsx
 │    ├── Profile.jsx
 │    ├── Benefits.jsx
 │    ├── Action.jsx
 │    └── Footer.jsx
 ├── data/
 │    └── ProfileData.js
 ├── App.jsx
 ├── main.jsx
 └── index.css

🧱 Principais Funcionalidades
🔹 Hero — Call to Action

Apresentação do conceito HealthShift

Botão Explorar profissionais com scroll automático

Paleta calming blue (consistente com outras entregas da GS)

🔹 Cards de Profissionais

Inspirados no LinkedIn:

foto real (Unsplash)

nome + cargo

cidade + área de atuação

resumo técnico

habilidades técnicas (badges)

botões de ação (Conectar, Mensagem, Ver Perfil Completo)

🔹 Filtros + Busca

filtro por cidade

filtro por área de atuação

busca por texto, cargo ou especialidade

Processados com useMemo() para performance ideal.

🔹 Modal de Detalhes do Profissional

Inclui:

habilidades técnicas

soft skills

experiência

formação

certificações

idiomas

áreas de interesse

Com botões funcionais via alert().

🔹 Criação de Perfil (Simulação)

No header: botão "Criar perfil HealthShift" abre um mini formulário.

🔹 Dark Mode

Totalmente funcional via Tailwind (darkMode: "class").

▶️ Como Rodar o Projeto
npm install
npm run dev


Abra em:
http://localhost:5173

📚 Base JSON (ProfileData.js)

A base contém 60 perfis diversos com:

foto

nome

cargo

área de atuação

cidade

habilidades técnicas

soft skills

certificações

idiomas

experiência

formação

projetos

áreas de interesse

Todos gerados automaticamente conforme os requisitos da GS.

🧪 Checklist antes da entrega

 Dark mode funcionando

 Scroll do CTA funcionando

 Cards renderizando todos os perfis

 Modal abrindo e fechando normalmente

 Filtros e busca operando

 Formulário de criação abrindo no header

 Responsividade em mobile e tablet

👤 Autor

Leandro Simoneli da Silva | 566539
FIAP · Engenharia de Software
Global Solution – 2º Semestre/2025
