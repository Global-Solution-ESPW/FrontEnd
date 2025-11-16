// src/components/BenefitsSection.jsx
function BenefitsSection() {
  return (
    <section
      id="beneficios"
      className="border-t border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          Por que focar no futuro do trabalho em saúde?
        </h2>

        <div className="grid md:grid-cols-3 gap-5 text-sm">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold mb-2">Conexão assertiva</h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Facilite o match entre profissionais de saúde e instituições que
              valorizam competências técnicas e soft skills.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold mb-2">Dados estruturados</h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Perfis alimentados por JSON com formações, experiências, projetos
              e certificações em saúde.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
            <h3 className="font-semibold mb-2">Foco em bem-estar</h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
              Incentive ambientes de trabalho mais humanos, inclusivos e
              sustentáveis para quem cuida de pessoas.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <p className="font-medium">Este é o ponto de entrada da sua SPA.</p>
            <p>
              A partir desta landing, você poderá evoluir para listagem
              completa, filtros, modais de perfil e ações de “Recomendar” e
              “Enviar mensagem”.
            </p>
          </div>
          <button className="text-xs sm:text-sm font-medium bg-slate-900 text-slate-50 dark:bg-slate-50 dark:text-slate-900 px-5 py-2.5 rounded-full hover:opacity-90">
            Ver roadmap da plataforma
          </button>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
