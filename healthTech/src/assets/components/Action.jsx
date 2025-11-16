// src/components/CTASection.jsx
function Action() {
  return (
    <section
      id="profissionais"
      className="max-w-6xl mx-auto px-4 py-10 sm:py-14"
    >
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-emerald-500/10 via-emerald-600/10 to-slate-900/10 dark:from-emerald-500/20 dark:via-emerald-600/10 dark:to-slate-900/60 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Pronto para prototipar o futuro do trabalho em saúde?
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 max-w-xl">
            Cadastre perfis fictícios em um arquivo JSON, conecte-os à sua
            aplicação React e mostre como a tecnologia pode transformar a
            carreira de profissionais de saúde.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-5 py-2.5 rounded-full">
            Criar primeiro perfil
          </button>
          <button className="border border-slate-300 dark:border-slate-600 text-xs sm:text-sm px-5 py-2.5 rounded-full">
            Ler documentação (README)
          </button>
        </div>
      </div>
    </section>
  );
}

export default Action;
