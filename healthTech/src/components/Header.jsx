import { useState } from "react";

function Header({ darkMode, toggleDarkMode }) {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nome = formData.get("nome");
    const cargo = formData.get("cargo");
    const cidade = formData.get("cidade");

    alert(
      `Perfil criado (simulação):\n\nNome: ${nome}\nCargo: ${cargo}\nCidade: ${cidade}`
    );
    setShowForm(false);
  };

  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur relative z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white font-bold">
            HS
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-50">
              HealthShift
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Rede de carreira para profissionais da saúde
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-200">
            <a href="#sobre" className="hover:text-sky-600">
              Sobre
            </a>
            <a href="#profissionais" className="hover:text-sky-600">
              Profissionais
            </a>
            <a href="#beneficios" className="hover:text-sky-600">
              Benefícios
            </a>
          </nav>

          <button
            onClick={toggleDarkMode}
            className="text-xs border border-slate-300 dark:border-slate-700 rounded-full px-3 py-1 flex items-center gap-2"
          >
            <span className="hidden sm:inline">
              {darkMode ? "Modo escuro" : "Modo claro"}
            </span>
            <span aria-hidden="true">{darkMode ? "🌙" : "☀️"}</span>
          </button>

          <button
            className="hidden sm:inline-flex text-xs sm:text-sm bg-sky-600 hover:bg-sky-700 text-white font-medium px-4 py-2 rounded-full"
            onClick={() => setShowForm(true)}
          >
            Criar perfil HealthShift
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-30 flex items-start justify-center bg-black/40 pt-24">
          <div className="w-full max-w-md mx-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 p-5 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Criar novo perfil (simulação)
              </h2>
              <button
                className="text-xs px-2 py-1 rounded-full border border-slate-300 dark:border-slate-600"
                onClick={() => setShowForm(false)}
              >
                Fechar
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div className="flex flex-col gap-1">
                <label className="text-slate-600 dark:text-slate-300">
                  Nome completo
                </label>
                <input
                  name="nome"
                  required
                  className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Ex.: Dra. Ana Silva"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-slate-600 dark:text-slate-300">
                  Cargo / área de atuação
                </label>
                <input
                  name="cargo"
                  required
                  className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Ex.: Médica Pediatra"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-slate-600 dark:text-slate-300">
                  Cidade / Estado
                </label>
                <input
                  name="cidade"
                  required
                  className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="Ex.: São Paulo/SP"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full text-xs font-medium px-3 py-2 rounded-full bg-sky-600 hover:bg-sky-700 text-white"
              >
                Criar perfil (simulado)
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
