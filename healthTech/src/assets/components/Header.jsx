// src/components/Header.jsx
function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white font-bold">
            H
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm sm:text-base">
              HealthConnect Pro
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Futuro do trabalho em Saúde
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="#sobre" className="hover:text-emerald-500">
              Sobre
            </a>
            <a href="#profissionais" className="hover:text-emerald-500">
              Profissionais
            </a>
            <a href="#beneficios" className="hover:text-emerald-500">
              Benefícios
            </a>
          </nav>

          <button
            onClick={toggleDarkMode}
            className="text-xs border border-slate-300 dark:border-slate-700 rounded-full px-3 py-1 flex items-center gap-2"
          >
            <span className="hidden sm:inline">
              {darkMode ? "Modo Escuro" : "Modo Claro"}
            </span>
            <span aria-hidden="true">{darkMode ? "🌙" : "☀️"}</span>
          </button>

          <button className="hidden sm:inline-flex text-xs sm:text-sm bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded-full">
            Começar agora
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
