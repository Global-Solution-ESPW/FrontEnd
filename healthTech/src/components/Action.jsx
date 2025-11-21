function Action() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-r from-sky-50 via-slate-50 to-slate-100 dark:from-sky-900/20 dark:via-slate-900/40 dark:to-slate-900/60 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-slate-900 dark:text-slate-50">
            Próximo passo: evoluir a HealthShift para um produto real.
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 max-w-xl">
            A partir desta landing e da base JSON com 60 profissionais da saúde,
            seu grupo pode evoluir para recomendações com IA, integração com IoT
            ou dashboards analíticos em outras disciplinas da Global Solution.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium px-5 py-2.5 rounded-full">
            Ver backlog da HealthShift
          </button>
          <button className="border border-slate-300 dark:border-slate-600 text-xs sm:text-sm px-5 py-2.5 rounded-full">
            Abrir README do projeto
          </button>
        </div>
      </div>
    </section>
  );
}

export default Action;
