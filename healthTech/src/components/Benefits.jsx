function Benefits() {
  return (
    <section
      id="beneficios"
      className="border-t border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/40"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-50">
          Por que a HealthShift é relevante para o futuro do trabalho em saúde?
        </h2>

        <div className="grid md:grid-cols-3 gap-5 text-sm">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold mb-2">Conexões de qualidade</h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Aproxima profissionais da saúde, clínicas e hospitais com base em
              competências técnicas, soft skills e propósito.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold mb-2">Dados estruturados em JSON</h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Perfis simulados com histórico profissional, formações,
              certificações e idiomas, preparando o terreno para análises e
              recomendações.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold mb-2">Foco em bem-estar e carreira</h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Suporte à requalificação, mobilidade e equilíbrio entre vida
              pessoal e profissional, alinhado ao tema global do futuro do
              trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
